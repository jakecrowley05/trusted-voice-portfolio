import React from 'react';
import { outlook } from '@/content/outlook';

const CCVOutlook = () => (
  <section id="outlook" className="bg-cc-deep py-20 lg:py-28">
    <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
      <h2 className="font-serif text-4xl font-light leading-tight text-cc-bone lg:text-5xl">{outlook.heading}</h2>
      <p className="mt-8 max-w-3xl font-serif text-2xl font-light italic leading-snug text-cc-bone/90 lg:text-3xl">
        {outlook.statement}
      </p>
      <div className="mt-14 grid grid-cols-1 gap-px bg-cc-hairline sm:grid-cols-2 lg:grid-cols-4">
        {outlook.flywheels.map((f) => (
          <div key={f.name} className="bg-cc-deep py-8 sm:pr-8">
            <h3 className="font-serif text-2xl font-normal text-cc-bone">{f.name}</h3>
            <p className="mt-3 font-sans text-sm font-light leading-relaxed text-cc-ash">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CCVOutlook;
