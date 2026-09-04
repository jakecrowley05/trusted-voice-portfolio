import React from 'react';
import { Link } from 'react-router-dom';
import { portfolio, portfolioCategories } from '@/content/portfolio';

const CCVPortfolioPreview = () => (
  <section id="portfolio" className="bg-cc-deep py-20 lg:py-28">
    <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="font-serif text-4xl font-light text-cc-bone lg:text-5xl">Selected portfolio and projects</h2>
          <p className="mt-4 max-w-xl font-sans text-base font-light text-cc-ash">{portfolio.intro}</p>
        </div>
        <Link to="/portfolio" className="font-sans text-sm font-light text-cc-brass-light hover:text-cc-brass">Learn More</Link>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-6">
        {portfolioCategories.map((c) => {
          const n = portfolio.projects.filter((p) => p.category === c).length;
          return (
            <li key={c} className="border-t border-cc-hairline py-5 pr-4">
              <Link to={`/portfolio#${c.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <p className="font-serif text-xl font-normal text-cc-bone">{c}</p>
                <p className="mt-1 font-sans text-xs font-light text-cc-ash">{n > 0 ? `${n} ${n === 1 ? 'project' : 'projects'}` : 'Active'}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default CCVPortfolioPreview;
