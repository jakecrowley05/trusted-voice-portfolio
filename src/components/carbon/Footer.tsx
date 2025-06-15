
import React from 'react';
import { Grid, Column } from './Grid';

interface FooterProps {
  brandName: string;
  description?: string;
  links?: Array<{
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks?: Array<{
    label: string;
    href: string;
    icon: React.ReactNode;
  }>;
  copyright?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName,
  description,
  links = [],
  socialLinks = [],
  copyright
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-gray-20"
      style={{ 
        backgroundColor: 'var(--c-gray-10)',
        borderTopColor: 'var(--c-gray-20)',
        paddingTop: 'var(--cds-spacing-09)' // 48px
      }}
    >
      <Grid>
        {/* Main Footer Content */}
        <Column span={12} spanMd={8} spanSm={4}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 
                className="cds-type-productive-heading-02 font-semibold mb-4"
                style={{ color: 'var(--c-gray-100)' }}
              >
                {brandName}
              </h3>
              {description && (
                <p 
                  className="cds-type-body-02 mb-6"
                  style={{ color: 'var(--c-gray-70)' }}
                >
                  {description}
                </p>
              )}
              
              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="text-gray-70 hover:text-blue-60 transition-colors"
                      style={{ color: 'var(--c-gray-70)' }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Link Sections */}
            {links.map((section, index) => (
              <div key={index}>
                <h4 
                  className="cds-type-productive-heading-01 font-semibold mb-4"
                  style={{ color: 'var(--c-gray-100)' }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="cds-type-body-02 text-gray-70 hover:text-blue-60 transition-colors"
                        style={{ color: 'var(--c-gray-70)' }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Column>

        {/* Copyright */}
        <Column span={12}>
          <div 
            className="pt-8 border-t border-gray-20 text-center"
            style={{ borderTopColor: 'var(--c-gray-20)' }}
          >
            <p 
              className="cds-type-body-01"
              style={{ color: 'var(--c-gray-60)' }}
            >
              {copyright || `© ${currentYear} ${brandName}. All rights reserved.`}
            </p>
          </div>
        </Column>
      </Grid>
    </footer>
  );
};
