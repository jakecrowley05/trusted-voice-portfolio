import React from 'react';
import CCVSection from './CCVSection';
import { emphasis } from '@/content/emphasis';

const CCVEmphasis = () => (
  <CCVSection id="emphasis" heading={emphasis.heading} intro={emphasis.intro} tone="deep">
    <div className="grid grid-cols-1 border-t border-cc-hairline sm:grid-cols-2">
      {emphasis.fields.map((f, i) => (
        <div
          key={f.name}
          className={`border-b border-cc-hairline py-7 sm:pr-10 ${i % 2 === 1 ? 'sm:border-l sm:pl-10' : ''}`}
        >
          <h3 className="font-serif text-2xl font-normal text-cc-bone">{f.name}</h3>
          <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cc-ash">{f.description}</p>
        </div>
      ))}
    </div>
  </CCVSection>
);

export default CCVEmphasis;
