import React from 'react';
import { site } from '@/content/site';

const CCVLogo = () => (
  <a href="/" className="inline-flex items-baseline gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-cc-brass" aria-label={`${site.name} home`}>
    <span className="font-serif text-2xl font-normal text-cc-bone tracking-tight">Crowley</span>
    <span className="font-sans text-xs font-light text-cc-brass-light tracking-[0.18em] uppercase">Capital</span>
  </a>
);

export default CCVLogo;
