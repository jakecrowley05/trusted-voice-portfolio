
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: '01' | '02' | '03';
  padding?: 'sm' | 'md' | 'lg';
  as?: keyof JSX.IntrinsicElements;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  elevation = '01',
  padding = 'md',
  as: Component = 'div'
}) => {
  const paddingClasses = {
    sm: 'p-4', // 16px
    md: 'p-6', // 24px
    lg: 'p-8'  // 32px
  };

  return (
    <Component
      className={cn(
        'bg-white rounded',
        `cds-elevation-${elevation}`,
        paddingClasses[padding],
        className
      )}
      style={{
        backgroundColor: 'var(--c-white)',
        borderRadius: '2px'
      }}
    >
      {children}
    </Component>
  );
};
