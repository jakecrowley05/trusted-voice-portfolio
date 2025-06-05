
import React from 'react';
import CCVLogo from './CCVLogo';

const CCVFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <CCVLogo size="sm" variant="light" />
            <span className="text-lg font-semibold">Crowley Capital Ventures</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-stone-400">
              Crafted by Crowley Capital Ventures. Based in Austin.
            </p>
            <p className="text-stone-500 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CCVFooter;
