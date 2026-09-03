import React from 'react';
import CCVSection from './CCVSection';
import { firm } from '@/content/firm';
import { site } from '@/content/site';

const CCVFirm = () => (
  <CCVSection id="firm" heading={firm.heading} intro={site.offices.join(', ')}>
    <div className="space-y-6">
      {firm.paragraphs.map((p) => (
        <p key={p} className="max-w-2xl font-sans text-lg font-light leading-relaxed text-cc-bone/85">
          {p}
        </p>
      ))}
    </div>
    <div className="mt-12 grid grid-cols-1 gap-8 border-t border-cc-hairline pt-8 sm:grid-cols-3">
      {firm.principles.map((pr) => (
        <div key={pr.name}>
          <h3 className="font-serif text-xl font-normal text-cc-bone">{pr.name}</h3>
          <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cc-ash">{pr.description}</p>
        </div>
      ))}
    </div>
    <p className="mt-12 font-sans text-sm font-light text-cc-ash">
      <span className="text-cc-bone">{site.principal.name}</span>, {site.principal.title}
    </p>
  </CCVSection>
);

export default CCVFirm;
