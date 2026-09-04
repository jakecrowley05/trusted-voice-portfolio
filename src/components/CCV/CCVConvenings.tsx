import React, { useState } from 'react';
import { convenings } from '@/content/convenings';
import { site } from '@/content/site';
import roundtable from '@/assets/osa-roundtable.jpg';
import happyHour from '@/assets/osa-happy-hour.jpg';
import demoNight from '@/assets/osa-demo-night.jpg';

// Invitation requests post to VITE_EVENTS_WEBHOOK_URL when set in Render's environment,
// otherwise they open a pre-filled email to site.contact.email.
const webhook = import.meta.env.VITE_EVENTS_WEBHOOK_URL as string | undefined;

const photos = [
  { src: roundtable, alt: 'Crowley Capital private capital convening, roundtable discussion in Austin' },
  { src: happyHour, alt: 'Crowley Capital private capital convening, evening reception in Austin' },
  { src: demoNight, alt: 'Crowley Capital private capital convening, operators presenting to investors in Austin' },
];

const CCVConvenings = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', firm: '', note: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      if (webhook) {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        });
      } else {
        const subject = encodeURIComponent(site.contact.inviteSubject);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nFirm: ${form.firm}\n\n${form.note}`);
        window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      }
      setState('sent');
    } catch {
      setState('error');
    }
  };

  const input = 'mt-1 w-full border-b border-cc-hairline bg-transparent py-2 font-sans text-base font-light text-cc-bone focus:border-cc-brass focus:outline-none';

  return (
    <section id="convenings" className="bg-cc-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl font-light leading-tight text-cc-bone lg:text-5xl">{convenings.heading}</h2>
            <div className="mt-6 space-y-4">
              {convenings.paragraphs.map((p) => (
                <p key={p} className="font-sans text-base font-light leading-relaxed text-cc-ash">{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2">
              {convenings.participants.map((p) => (
                <li key={p} className="font-sans text-sm font-light text-cc-bone/75">{p}</li>
              ))}
            </ul>
            <button
              onClick={() => { setOpen((v) => !v); setState('idle'); }}
              className="mt-10 border border-cc-brass px-6 py-3 font-sans text-sm text-cc-brass transition-colors hover:bg-cc-brass hover:text-cc-charcoal"
            >
              {convenings.requestLabel}
            </button>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <img src={photos[0].src} alt={photos[0].alt} className="h-64 w-full object-cover sm:col-span-2 sm:h-80" loading="lazy" />
              <img src={photos[1].src} alt={photos[1].alt} className="h-48 w-full object-cover" loading="lazy" />
              <img src={photos[2].src} alt={photos[2].alt} className="h-48 w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {open && (
          <div className="mt-12 max-w-2xl border border-cc-hairline bg-cc-deep p-6 lg:p-8">
            {state === 'sent' ? (
              <p className="font-sans text-base font-light text-cc-bone">Request received. We reply personally to every request.</p>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className="block"><span className="font-sans text-xs font-light text-cc-ash">Name</span>
                    <input required className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
                  <label className="block"><span className="font-sans text-xs font-light text-cc-ash">Email</span>
                    <input required type="email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
                </div>
                <label className="block"><span className="font-sans text-xs font-light text-cc-ash">Firm or family</span>
                  <input className={input} value={form.firm} onChange={(e) => setForm({ ...form, firm: e.target.value })} /></label>
                <label className="block"><span className="font-sans text-xs font-light text-cc-ash">A line about you</span>
                  <textarea rows={3} className={input} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} /></label>
                {state === 'error' && <p className="font-sans text-sm text-cc-brass-light">The request did not send. Email {site.contact.email} directly.</p>}
                <div className="flex gap-3">
                  <button type="submit" disabled={state === 'sending'} className="bg-cc-brass px-6 py-3 font-sans text-sm text-cc-charcoal hover:bg-cc-brass-light disabled:opacity-60">
                    {state === 'sending' ? 'Sending' : 'Send request'}
                  </button>
                  <button type="button" onClick={() => setOpen(false)} className="px-4 py-3 font-sans text-sm font-light text-cc-ash hover:text-cc-bone">Cancel</button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CCVConvenings;
