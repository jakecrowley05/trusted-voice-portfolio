
import { Circle } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light';
  showIcon?: boolean;
}

const Logo = ({ variant = 'default', showIcon = true }: LogoProps) => {
  const textColor = variant === 'default' ? 'text-gray-900' : 'text-white';
  
  return (
    <div className="flex items-center gap-2">
      {showIcon && (
        <div className="relative overflow-hidden">
          <Circle className="h-5 w-5 text-primary" fill="currentColor" fillOpacity={0.2} />
        </div>
      )}
      <span className={`text-lg font-medium tracking-tight ${textColor}`}>Nobleloop</span>
    </div>
  );
};

export default Logo;
