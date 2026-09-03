import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import CCVLogo from './CCVLogo';
import { hero } from '@/content/hero';

const links = [
  { label: 'Allocation', id: 'allocation' },
  { label: 'Emphasis', id: 'emphasis' },
  { label: 'Innovation', id: 'innovation' },
  { label: 'Outlook', id: 'outlook' },
  { label: 'Firm', id: 'firm' },
  { label: 'Gatherings', id: 'gatherings' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const CCVNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-cc-charcoal border-b border-cc-hairline' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <CCVLogo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="font-sans text-sm font-light text-cc-bone/80 transition-colors hover:text-cc-bone focus:outline-none focus-visible:text-cc-brass"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="border border-cc-brass px-5 py-2 font-sans text-sm font-normal text-cc-brass transition-colors hover:bg-cc-brass hover:text-cc-charcoal focus:outline-none focus-visible:bg-cc-brass focus-visible:text-cc-charcoal"
          >
            {hero.primaryCta}
          </button>
        </nav>

        <button
          className="text-cc-bone lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-cc-hairline bg-cc-charcoal px-6 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full border-b border-cc-hairline py-4 text-left font-serif text-2xl font-light text-cc-bone"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => go('contact')}
                className="mt-6 w-full border border-cc-brass py-3 font-sans text-sm text-cc-brass"
              >
                {hero.primaryCta}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default CCVNavbar;
