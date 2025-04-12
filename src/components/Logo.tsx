
import { Square } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light';
  showIcon?: boolean;
}

const Logo = ({ variant = 'default', showIcon = true }: LogoProps) => {
  const textColor = variant === 'default' ? 'text-ibm-black' : 'text-white';
  
  return (
    <div className="flex items-center gap-1">
      {showIcon && (
        <div className="relative">
          <Square className="h-5 w-5 text-primary" fill="currentColor" />
        </div>
      )}
      <span className={`text-lg font-semibold tracking-tight uppercase ${textColor}`}>Nobleloop</span>
    </div>
  );
};

export default Logo;
