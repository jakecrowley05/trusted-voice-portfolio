import React from 'react';
import CCVPage, { PageHeader, TagList } from '@/components/CCV/CCVPage';
import CCVContact from '@/components/CCV/CCVContact';
import { about } from '@/content/about';
import { site } from '@/content/site';

const About = () => (
  <CCVPage title="About" description="Jake Crowley is Managing Partner of Crowley Capital, a private investment platform operating across venture capital, private equity, family offices and alternative investments, based in Austin with a presence in London and Monaco.">
    <PageHeader heading={about.heading} intro={site.offices.join(', ')} />
    <section className="border-b border-cc-hairline py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl font-light text-cc-bone">{site.principal.name}</h2>
          <p className="mt-1 font-sans text-sm font-light text-cc-brass-light">{site.principal.title}</p>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-5">
            {about.bio.map((p) => <p key={p} className="max-w-2xl font-sans text-lg font-light leading-relaxed text-cc-bone/85">{p}</p>)}
          </div>
          <h3 className="mt-12 font-serif text-2xl font-normal text-cc-bone">Areas of focus</h3>
          <TagList items={about.focus} />
        </div>
      </div>
    </section>
    <section className="border-b border-cc-hairline py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <h2 className="font-serif text-3xl font-light text-cc-bone lg:col-span-4">{about.firmHeading}</h2>
        <div className="space-y-5 lg:col-span-8">
          {about.firm.map((p) => <p key={p} className="max-w-2xl font-sans text-lg font-light leading-relaxed text-cc-bone/85">{p}</p>)}
        </div>
      </div>
    </section>
    <CCVContact />
  </CCVPage>
);

export default About;
