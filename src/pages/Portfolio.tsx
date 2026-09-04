import React from 'react';
import CCVPage, { PageHeader } from '@/components/CCV/CCVPage';
import { portfolio, portfolioCategories } from '@/content/portfolio';

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

const Portfolio = () => (
  <CCVPage title="Portfolio and Projects" description="Selected Crowley Capital investments and strategic projects across venture, private equity, infrastructure, data centers, dual-use, space, defense, sports, real assets, secondaries and alternative assets.">
    <PageHeader heading={portfolio.heading} intro={portfolio.intro} />
    <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
      {portfolioCategories.map((c) => {
        const items = portfolio.projects.filter((p) => p.category === c);
        return (
          <section key={c} id={slug(c)} className="scroll-mt-24 grid grid-cols-1 gap-6 border-b border-cc-hairline py-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-serif text-3xl font-light text-cc-bone lg:col-span-4">{c}</h2>
            <div className="lg:col-span-8">
              {items.length === 0 ? (
                <p className="font-sans text-sm font-light text-cc-ash">Active. Transactions in this category are not disclosed.</p>
              ) : (
                <ul className="divide-y divide-cc-hairline">
                  {items.map((p) => (
                    <li key={p.name} className="py-5 first:pt-0">
                      <h3 className="font-serif text-xl font-normal text-cc-bone">{p.name}</h3>
                      <p className="mt-1 font-sans text-sm font-light leading-relaxed text-cc-ash">{p.summary}</p>
                      <p className="mt-2 font-sans text-xs font-light text-cc-ash">
                        {[p.location, p.year, p.confidential ? 'Details confidential' : null].filter(Boolean).join(' · ')}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}
    </div>
  </CCVPage>
);

export default Portfolio;
