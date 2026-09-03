import React from 'react';
import CCVSection from './CCVSection';
import { innovation } from '@/content/innovation';

const CCVInnovation = () => (
  <CCVSection id="innovation" heading={innovation.heading} intro={innovation.intro}>
    <div className="border-t border-cc-brass pt-8">
      <p className="font-serif text-3xl font-light text-cc-bone lg:text-4xl">{innovation.stage}</p>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {innovation.sectors.map((s) => (
          <div key={s.name}>
            <h3 className="font-serif text-2xl font-normal text-cc-bone">{s.name}</h3>
            <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cc-ash">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </CCVSection>
);

export default CCVInnovation;
