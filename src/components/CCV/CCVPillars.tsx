import React from 'react';
import CCVSection from './CCVSection';
import { pillars } from '@/content/hero';

const detail: Record<string, string[]> = {
  'Venture capital': [
    'Series A and later, through the innovation arm.',
    'Deep tech, fintech, health tech and prop tech.',
    'Lead, co-lead and follow-on positions alongside aligned partners.',
  ],
  'Private equity': [
    'Infrastructure, data centers and sports franchises.',
    'Secondaries in quality funds and direct positions.',
    'Control and significant minority structures with long hold periods.',
  ],
  'Hedge funds': [
    'Commodities through a dedicated trade desk.',
    'Specialist managers with disciplined risk frameworks.',
    'Liquidity and diversification alongside the private book.',
  ],
};

const CCVPillars = () => (
  <CCVSection
    id="allocation"
    heading="How we allocate"
    intro="Three lanes, one book. Each allocation is sized for the family's horizon, not a fund's."
  >
    <div className="divide-y divide-cc-hairline border-t border-cc-hairline">
      {pillars.map((p) => (
        <div key={p.name} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-12">
          <h3 className="font-serif text-3xl font-normal text-cc-bone sm:col-span-4">{p.name}</h3>
          <div className="sm:col-span-8">
            <p className="font-sans text-base font-light leading-relaxed text-cc-bone/85">{p.summary}</p>
            <ul className="mt-4 space-y-2">
              {(detail[p.name] ?? []).map((line) => (
                <li key={line} className="flex gap-3 font-sans text-sm font-light text-cc-ash">
                  <span className="mt-[0.6em] h-px w-4 flex-shrink-0 bg-cc-brass" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </CCVSection>
);

export default CCVPillars;
