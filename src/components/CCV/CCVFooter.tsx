import React from 'react';
import CCVLogo from './CCVLogo';
import { site } from '@/content/site';
import { footer } from '@/content/footer';

const CCVFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cc-hairline bg-cc-charcoal py-14">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <CCVLogo />
            <p className="mt-4 max-w-sm font-sans text-sm font-light leading-relaxed text-cc-ash">{footer.blurb}</p>
            <p className="mt-4 font-sans text-sm font-light text-cc-ash">{site.offices.join(', ')}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="font-sans text-xs font-light text-cc-ash">Follow</p>
            <ul className="mt-3 space-y-2">
              <li><a className="font-sans text-sm font-light text-cc-bone/80 hover:text-cc-brass" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="font-sans text-sm font-light text-cc-bone/80 hover:text-cc-brass" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="font-sans text-sm font-light text-cc-bone/80 hover:text-cc-brass" href={site.social.substack} target="_blank" rel="noopener noreferrer">Substack</a></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="font-sans text-xs font-light text-cc-ash">Contact</p>
            <a className="mt-3 block font-sans text-sm font-light text-cc-bone/80 hover:text-cc-brass" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <ul className="mt-6 flex gap-6">
              {footer.legal.map((l) => (
                <li key={l.href}><a className="font-sans text-sm font-light text-cc-ash hover:text-cc-bone" href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-cc-hairline pt-6">
          <p className="max-w-3xl font-sans text-xs font-light leading-relaxed text-cc-ash">{footer.disclaimer}</p>
          <p className="mt-3 font-sans text-xs font-light text-cc-ash">© {year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CCVFooter;
