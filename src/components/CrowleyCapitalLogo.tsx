import React from 'react';

interface CrowleyCapitalLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

const CrowleyCapitalLogo: React.FC<CrowleyCapitalLogoProps> = ({ 
  variant = 'dark', 
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`flex items-center space-x-3 ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Placeholder logo - will be replaced with actual logo */}
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold/80 flex items-center justify-center">
        <span className={`text-lg font-bold ${variant === 'light' ? 'text-midnight' : 'text-midnight'}`}>
          CC
        </span>
      </div>
      <span 
        className={`font-playfair font-semibold text-xl tracking-tight ${
          variant === 'light' ? 'text-white' : 'text-midnight'
        }`}
      >
        Crowley Capital
      </span>
    </div>
  );
};

export default CrowleyCapitalLogo;