
import React from 'react';

interface CCVLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

const CCVLogo = ({ size = 'md', variant = 'dark' }: CCVLogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl'
  };
  
  const colorClasses = variant === 'dark' 
    ? 'border-[#D4AF37] text-[#D4AF37]' 
    : 'border-[#D4AF37] text-[#D4AF37]';

  return (
    <div className={`${sizeClasses[size]} ${colorClasses} border-2 rounded-full flex items-center justify-center font-bold tracking-tight`}>
      CCV
    </div>
  );
};

export default CCVLogo;
