import React, { useState } from 'react';
import CCVSection from './CCVSection';
import { events } from '@/content/events';
import { site } from '@/content/site';

// Where invitation requests go.
// If VITE_EVENTS_WEBHOOK_URL is set in Render's environment, the form posts JSON there.
// Otherwise it opens a pre-filled email to site.contact.email, so nothing is ever lost.
const webhook = import.meta.env.VITE_EVENTS_WEBHOOK_URL as string | undefined;

const CCVEvents = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', firm: '', note: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    const payload = { ...form, event: selected, submittedAt: new Date().toISOString() };
    try {
      if (webhook) {
        await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      } else {
        const subject = encodeURIComponent(`${site.contact.inviteSubject}: ${selected}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nFirm: ${form.firm}\n\n${form.note}`
        );
        window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      }
      setState('sent');
    } catch {
      setState('error');
    }
  };

  return (
    <CCVSection id="gatherings" heading={events.heading} intro={events.intro} tone="deep">
      <div className="divide-y divide-cc-hairline border-t border-cc-hairline">
        {events.list.map((ev) => (
          <div key={ev.title} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-3">
              <p className="font-sans text-sm font-light text-cc-brass-light">{ev.date}</p>
              <p className="font-sans text-sm font-light text-cc-ash">{ev.location}</p>
            </div>
            <div className="sm:col-span-6">
              <h3 className="font-serif text-2xl font-normal text-cc-bone">{ev.title}</h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cc-ash">{ev.description}</p>
            </div>
            <div className="sm:col-span-3 sm:text-right">
              <button
                onClick={() => {
                  setSelected(ev.title);
                  setState('idle');
                }}
                className="border border-cc-brass px-4 py-2 font-sans text-sm text-cc-brass transition-colors hover:bg-cc-brass hover:text-cc-charcoal focus:outline-none focus-visible:bg-cc-brass focus-visible:text-cc-charcoal"
              >
                {events.requestLabel}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-10 border border-cc-hairline bg-cc-charcoal p-6 lg:p-8">
          {state === 'sent' ? (
            <p className="font-sans text-base font-light text-cc-bone">
              Request received for {selected}. We reply personally to every request.
            </p>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <p className="font-serif text-xl font-normal text-cc-bone">{selected}</p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              </div>
              <Field label="Firm or family" value={form.firm} onChange={(v) => setForm({ ...form, firm: v })} />
              <label className="block">
                <span className="font-sans text-xs font-light text-cc-ash">A line about you</span>
                <textarea
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={3}
                  className="mt-1 w-full border-b border-cc-hairline bg-transparent py-2 font-sans text-base font-light text-cc-bone focus:border-cc-brass focus:outline-none"
                />
              </label>
              {state === 'error' && (
                <p className="font-sans text-sm text-cc-brass-light">The request did not send. Email {site.contact.email} directly.</p>
              )}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="bg-cc-brass px-6 py-3 font-sans text-sm text-cc-charcoal transition-colors hover:bg-cc-brass-light disabled:opacity-60"
                >
                  {state === 'sending' ? 'Sending' : 'Send request'}
                </button>
                <button type="button" onClick={() => setSelected(null)} className="px-4 py-3 font-sans text-sm font-light text-cc-ash hover:text-cc-bone">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </CCVSection>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) => (
  <label className="block">
    <span className="font-sans text-xs font-light text-cc-ash">{label}</span>
    <input
      type={type}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full border-b border-cc-hairline bg-transparent py-2 font-sans text-base font-light text-cc-bone focus:border-cc-brass focus:outline-none"
    />
  </label>
);

export default CCVEvents;
