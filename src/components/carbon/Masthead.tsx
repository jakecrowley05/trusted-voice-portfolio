
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CarbonButton } from './Button';
import { Grid, Column } from './Grid';

interface MastheadProps {
  brandName: string;
  navigationItems?: Array<{
    label: string;
    href: string;
    isActive?: boolean;
  }>;
  onMenuClick?: () => void;
  children?: React.ReactNode;
}

export const Masthead: React.FC<MastheadProps> = ({
  brandName,
  navigationItems = [],
  onMenuClick,
  children
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuClick?.();
  };

  return (
    <header 
      className="sticky top-0 z-50 border-b border-gray-20"
      style={{
        height: '64px',
        backgroundColor: 'var(--c-gray-10)',
        borderBottomColor: 'var(--c-gray-20)'
      }}
    >
      <Grid className="h-full">
        <Column span={12} className="flex items-center justify-between h-full">
          {/* Brand */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="cds-type-productive-heading-03 font-semibold text-gray-100 hover:text-blue-60 transition-colors"
              style={{ color: 'var(--c-gray-100)' }}
            >
              {brandName}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`cds-type-body-02 transition-colors hover:text-blue-60 ${
                  item.isActive ? 'text-blue-60 font-medium' : 'text-gray-70'
                }`}
                style={{
                  color: item.isActive ? 'var(--c-blue-60)' : 'var(--c-gray-70)'
                }}
              >
                {item.label}
              </a>
            ))}
            {children}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-20 transition-colors"
            onClick={toggleMobileMenu}
            style={{ color: 'var(--c-gray-100)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Column>
      </Grid>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden border-t border-gray-20"
          style={{ 
            backgroundColor: 'var(--c-gray-10)',
            borderTopColor: 'var(--c-gray-20)'
          }}
        >
          <Grid>
            <Column span={12}>
              <nav className="py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`block py-2 px-4 cds-type-body-02 rounded transition-colors hover:bg-gray-20 ${
                      item.isActive ? 'text-blue-60 font-medium bg-blue-10' : 'text-gray-70'
                    }`}
                    style={{
                      color: item.isActive ? 'var(--c-blue-60)' : 'var(--c-gray-70)',
                      backgroundColor: item.isActive ? 'var(--c-blue-10)' : undefined
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  {children}
                </div>
              </nav>
            </Column>
          </Grid>
        </div>
      )}
    </header>
  );
};
