
import { Bot, Zap } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light';
  showIcon?: boolean;
}

const Logo = ({ variant = 'default', showIcon = true }: LogoProps) => {
  const textColor = variant === 'default' ? 'text-gray-900' : 'text-white';
  
  return (
    <div className="flex items-center gap-2">
      {showIcon && (
        <div className="relative">
          <Bot className="h-7 w-7 text-primary" />
          <Zap className="h-3 w-3 text-yellow-400 absolute top-0 right-0" />
        </div>
      )}
      <span className={`text-xl font-bold ${textColor}`}>MarketMind AI</span>
    </div>
  );
};

export default Logo;
