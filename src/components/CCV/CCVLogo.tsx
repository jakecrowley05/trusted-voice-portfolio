
import React from 'react';

interface CCVLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

const CCVLogo = ({ size = 'md', variant = 'dark' }: CCVLogoProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base'
  };

  return (
    <div className={`${sizeClasses[size]} bg-black rounded-full flex items-center justify-center font-bold tracking-tight`}>
      <span className="text-[#D4AF37]">CCV</span>
    </div>
  );
};

export default CCVLogo;
