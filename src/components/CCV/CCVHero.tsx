import React from 'react';
import { hero, pillars } from '@/content/hero';
import { site } from '@/content/site';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const CCVHero = () => (
  <section id="hero" className="relative flex min-h-screen flex-col justify-end bg-cc-charcoal pt-32 pb-16 lg:pb-20">
    <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
      <div className="cc-reveal max-w-4xl">
        <h1 className="font-serif text-[2.9rem] font-light leading-[1.02] tracking-[-0.01em] text-cc-bone sm:text-6xl lg:text-[5.4rem]">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-2xl font-sans text-lg font-light leading-relaxed text-cc-bone/80 lg:text-xl">
          {hero.lead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => scrollTo('contact')}
            className="bg-cc-brass px-7 py-3.5 font-sans text-sm font-normal text-cc-charcoal transition-colors hover:bg-cc-brass-light focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-bone"
          >
            {hero.primaryCta}
          </button>
          <button
            onClick={() => scrollTo('allocation')}
            className="border border-cc-hairline px-7 py-3.5 font-sans text-sm font-light text-cc-bone transition-colors hover:border-cc-brass hover:text-cc-brass focus:outline-none focus-visible:border-cc-brass"
          >
            {hero.secondaryCta}
          </button>
        </div>
      </div>

      {/* Allocation ledger */}
      <div className="cc-reveal cc-reveal-delay mt-20 border-t border-cc-brass lg:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-cc-hairline py-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:pr-10">
            <p className="font-sans text-xs font-light text-cc-ash">{site.deployments.label}</p>
            <p className="mt-2 font-serif text-3xl font-light leading-tight text-cc-bone lg:text-4xl">
              {site.deployments.lanes.map((lane, i) => (
                <span key={lane} className="block">
                  {lane}
                  {i < site.deployments.lanes.length - 1 ? ' and' : ''}
                </span>
              ))}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-light text-cc-brass-light">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cc-brass" aria-hidden="true" />
              {site.deployments.status}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-8 lg:pl-10">
            {pillars.map((p, i) => (
              <div
                key={p.name}
                className={`py-6 sm:pr-8 ${i > 0 ? 'border-t border-cc-hairline sm:border-t-0 sm:border-l sm:pl-8' : ''}`}
              >
                <p className="font-serif text-2xl font-normal text-cc-bone">{p.name}</p>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cc-ash">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CCVHero;
