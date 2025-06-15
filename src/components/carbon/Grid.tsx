
import React from 'react';
import { cn } from '@/lib/utils';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

interface ColumnProps {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanSm?: 1 | 2 | 3 | 4;
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Grid: React.FC<GridProps> = ({ 
  children, 
  className, 
  as: Component = 'div' 
}) => {
  return (
    <Component className={cn('cds-grid', className)}>
      {children}
    </Component>
  );
};

export const Column: React.FC<ColumnProps> = ({ 
  children, 
  span = 12, 
  spanSm, 
  spanMd, 
  spanLg, 
  offset,
  className,
  as: Component = 'div'
}) => {
  const classes = cn(
    `cds-col-span-${span}`,
    spanSm && `cds-col-span-sm-${spanSm}`,
    spanMd && `cds-col-span-md-${spanMd}`,
    spanLg && `cds-col-span-lg-${spanLg}`,
    offset && `cds-col-offset-${offset}`,
    className
  );

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};
