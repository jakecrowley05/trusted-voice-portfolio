import React from 'react';
import { Link } from 'react-router-dom';
import CCVPage, { PageHeader, TagList } from '@/components/CCV/CCVPage';
import { strategies } from '@/content/strategies';

const Block = ({ id, heading, paragraphs, sectors, children }: { id: string; heading: string; paragraphs: string[]; sectors: readonly string[]; children?: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 border-b border-cc-hairline py-16 lg:py-24">
    <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-4xl font-light leading-tight text-cc-bone">{heading}</h2>
      </div>
      <div className="lg:col-span-8">
        <div className="space-y-5">
          {paragraphs.map((p) => <p key={p} className="max-w-2xl font-sans text-lg font-light leading-relaxed text-cc-bone/85">{p}</p>)}
        </div>
        <TagList items={sectors} />
        {children}
      </div>
    </div>
  </section>
);

const Strategies = () => (
  <CCVPage title="Investment Strategies" description="Crowley Capital invests across venture capital, private equity and strategic investments, and family office capital, with depth in infrastructure, data centers, dual-use technology, defense, space, sports and alternative assets.">
    <PageHeader heading={strategies.heading} intro={strategies.intro} />
    <Block id="venture-capital" heading={strategies.venture.heading} paragraphs={strategies.venture.paragraphs} sectors={strategies.venture.sectors} />
    <Block id="private-equity" heading={strategies.privateEquity.heading} paragraphs={strategies.privateEquity.paragraphs} sectors={strategies.privateEquity.sectors}>
      <div className="mt-12 border-l-2 border-cc-brass pl-6">
        <h3 className="font-serif text-2xl font-normal text-cc-bone">{strategies.privateEquity.dualUse.heading}</h3>
        <p className="mt-3 max-w-2xl font-sans text-base font-light leading-relaxed text-cc-ash">{strategies.privateEquity.dualUse.text}</p>
      </div>
    </Block>
    <Block id="family-offices" heading={strategies.familyOffices.heading} paragraphs={strategies.familyOffices.paragraphs} sectors={[]}>
      <Link to={strategies.familyOffices.link} className="mt-8 inline-block font-sans text-sm font-light text-cc-brass-light hover:text-cc-brass">Explore Partnership Opportunities</Link>
    </Block>
  </CCVPage>
);

export default Strategies;
