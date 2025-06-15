
import React from 'react';
import { cn } from '@/lib/utils';

export interface CarbonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
  isFullWidth?: boolean;
}

const CarbonButton = React.forwardRef<HTMLButtonElement, CarbonButtonProps>(
  ({ className, variant = 'primary', size = 'md', isFullWidth = false, children, ...props }, ref) => {
    const baseClasses = [
      'inline-flex',
      'items-center',
      'justify-center',
      'border',
      'border-transparent',
      'font-medium',
      'transition-all',
      'duration-150',
      'ease-in-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-blue-60',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'font-["IBM_Plex_Sans"]'
    ];

    const sizeClasses = {
      sm: ['h-8', 'px-3', 'text-sm', 'min-w-16'],
      md: ['h-12', 'px-4', 'text-sm', 'min-w-24'],
      lg: ['h-12', 'px-6', 'text-base', 'min-w-32'],
      xl: ['h-16', 'px-6', 'text-base', 'min-w-32'],
      '2xl': ['h-20', 'px-8', 'text-lg', 'min-w-40']
    };

    const variantClasses = {
      primary: [
        'bg-blue-60',
        'text-white',
        'border-blue-60',
        'hover:bg-blue-70',
        'hover:border-blue-70',
        'active:bg-blue-80'
      ],
      secondary: [
        'bg-transparent',
        'text-blue-60',
        'border-blue-60',
        'hover:bg-blue-60',
        'hover:text-white',
        'active:bg-blue-70'
      ],
      tertiary: [
        'bg-transparent',
        'text-blue-60',
        'border-transparent',
        'hover:bg-blue-10',
        'active:bg-blue-20'
      ],
      ghost: [
        'bg-transparent',
        'text-gray-100',
        'border-transparent',
        'hover:bg-gray-20',
        'active:bg-gray-30'
      ],
      danger: [
        'bg-red-60',
        'text-white',
        'border-red-60',
        'hover:bg-red-70',
        'hover:border-red-70',
        'active:bg-red-80'
      ]
    };

    const classes = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      isFullWidth && 'w-full',
      className
    );

    return (
      <button
        className={classes}
        ref={ref}
        style={{
          borderRadius: '2px',
          backgroundColor: variant === 'primary' ? 'var(--c-blue-60)' : 
                          variant === 'secondary' ? 'transparent' : undefined,
          borderColor: variant === 'primary' || variant === 'secondary' ? 'var(--c-blue-60)' : undefined,
          color: variant === 'primary' ? 'var(--c-white)' : 
                 variant === 'secondary' ? 'var(--c-blue-60)' : 
                 'var(--c-gray-100)'
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CarbonButton.displayName = 'CarbonButton';

export { CarbonButton };
