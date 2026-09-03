import React from 'react';
import { site } from '@/content/site';

const CCVNewsletter = () => (
  <section id="newsletter" className="border-y border-cc-hairline bg-cc-charcoal py-14">
    <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div>
        <h2 className="font-serif text-3xl font-light text-cc-bone">Notes from the desk</h2>
        <p className="mt-2 max-w-xl font-sans text-sm font-light text-cc-ash">
          Occasional writing on allocation, infrastructure and the families we work with.
        </p>
      </div>
      <a
        href={site.social.substack}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit border border-cc-hairline px-6 py-3 font-sans text-sm font-light text-cc-bone transition-colors hover:border-cc-brass hover:text-cc-brass"
      >
        Read on Substack
      </a>
    </div>
  </section>
);

export default CCVNewsletter;
