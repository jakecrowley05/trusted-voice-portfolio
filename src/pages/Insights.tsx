import React from 'react';
import { ExternalLink } from 'lucide-react';
import CCVPage, { PageHeader } from '@/components/CCV/CCVPage';
import { insights } from '@/content/insights';
import { site } from '@/content/site';

// Insights: the articles section. The Substack embed shows the latest posts and sign-up;
// the button below opens the full archive of every article.
const Insights = () => (
  <CCVPage title="Insights" description="Writing from Crowley Capital and Managing Partner Jake Crowley on private markets, capital allocation, infrastructure, data centers, family offices and alternative assets.">
    <PageHeader heading={insights.heading} intro={insights.intro} />
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="border border-cc-hairline bg-cc-deep p-4 lg:p-8">
          <iframe
            src={`${site.social.substack}/embed`}
            width="100%"
            height="320"
            style={{ border: '1px solid #EEE', background: 'white' }}
            frameBorder="0"
            scrolling="no"
            title="Crowley Capital on Substack"
          />
        </div>
        <div className="mt-10 text-center">
          <a
            href={site.social.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cc-brass px-8 py-4 font-sans text-sm text-cc-charcoal transition-colors hover:bg-cc-brass-light"
          >
            {insights.readAllLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  </CCVPage>
);

export default Insights;
