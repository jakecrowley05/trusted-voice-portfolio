
# Crowley Capital - IBM Carbon Design System Implementation

This project has been refactored to align 1-for-1 with IBM Design Language and Carbon Design System specifications.

## 🎨 Design System Implementation

### Typography
- **Primary Font**: IBM Plex Sans for all UI text
- **Heading Font**: IBM Plex Sans Bold for headings
- **Type Tokens**: Carbon's productive set (base 14px) for app-like pages; expressive set (base 16px) for marketing/hero areas

### Grid & Spacing
- **8-pixel grid system**: All spacing snaps to 8px increments
- **12-column responsive grid**: 16px gutters, follows Carbon specifications
- **IBM 2× grid**: Used for logo spacing

### Color System
- **Primary Palette**: Carbon Gray 10 background with Gray 100 text
- **Brand Colors**: IBM Blue 60 (#0F62FE) for primary actions
- **Contrast**: All text meets ≥4.5:1 WCAG contrast requirements

### Components
- **Buttons**: 48px height, 2px radius, Carbon-compliant styling
- **Cards**: Carbon Tile pattern with 1dp elevation
- **Navigation**: 64px Carbon Masthead pattern
- **Forms**: Carbon TextInput/TextArea components

## 🚀 Getting Started

### Prerequisites
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── styles/
│   ├── carbon-tokens.css     # IBM Carbon design tokens
│   └── carbon-base.css       # Base typography and grid
├── components/
│   └── carbon/
│       ├── Button.tsx        # Carbon-compliant button component
│       ├── Grid.tsx          # 12-column responsive grid
│       ├── Masthead.tsx      # Carbon navigation header
│       ├── Footer.tsx        # Carbon footer pattern
│       └── Card.tsx          # Carbon tile component
└── pages/
    └── [refactored pages]    # All pages updated to Carbon specs
```

## 🛠 Customizing Carbon Tokens

### Color Tokens
Update CSS variables in `src/styles/carbon-tokens.css`:
```css
:root {
  --c-gray-10: #f4f4f4;
  --c-blue-60: #0f62fe;
  /* Add your custom colors */
}
```

### Typography Tokens
Modify type scales in `src/styles/carbon-tokens.css`:
```css
:root {
  --cds-type-body-02: 400 1rem/1.375rem 'IBM Plex Sans', sans-serif;
  /* Customize as needed */
}
```

### Spacing Scale
All spacing uses 8px increments defined in Tailwind config:
```typescript
spacing: {
  '3': '0.5rem',    // 8px
  '5': '1rem',      // 16px
  '6': '1.5rem',    // 24px
  // etc.
}
```

## 🎯 Adding New Components

### Creating Carbon-Compliant Components
1. Use IBM Plex Sans typography
2. Follow 8px spacing grid
3. Use Carbon color tokens
4. Implement proper focus states
5. Include motion with reduced-motion support

Example:
```tsx
import { CarbonButton } from '@/components/carbon/Button';
import { Grid, Column } from '@/components/carbon/Grid';

const MyComponent = () => (
  <Grid>
    <Column span={6}>
      <h2 className="cds-type-productive-heading-03">Heading</h2>
      <p className="cds-type-body-02">Body text</p>
      <CarbonButton variant="primary">Primary Action</CarbonButton>
    </Column>
  </Grid>
);
```

## ♿ Accessibility Testing

### Focus Management
- All interactive elements are keyboard accessible
- Focus rings use 2px IBM Blue 60 outline
- Proper tab order maintained

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Use Carbon color tokens to ensure compliance

### Motion
- Respects `prefers-reduced-motion` media query
- Subtle 150ms transitions with Carbon easing

### Testing Tools
```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react
npm install --save-dev @testing-library/jest-dom
```

## 📐 Design Specifications

### Button Specifications
- **Primary**: 48px height, #0F62FE background, 2px radius
- **Secondary**: Outline #0F62FE, transparent background
- **Touch Targets**: 24px minimum on all sides

### Icon Specifications
- **Sizes**: 16px, 20px, 24px, 32px (Carbon standard)
- **Stroke Width**: Scales with icon size
- **Color**: Follows Carbon color tokens

### Layout Specifications
- **Masthead**: 64px height, sticky positioning
- **Hero**: 96px top/bottom padding, expressive heading-05
- **Sections**: 24px margin-bottom for headings
- **Cards**: 1dp shadow (rgba(0,0,0,0.07))

## 🔧 ESLint Rules

Custom rules prevent non-Carbon patterns:
```javascript
// .eslintrc.js additions
rules: {
  'no-hardcoded-spacing': 'error',  // Prevents non-8px spacing
  'ibm-plex-only': 'error',         // Enforces IBM Plex Sans usage
  'carbon-colors-only': 'error',    // Requires Carbon color tokens
}
```

## 📱 Responsive Breakpoints

Following Carbon's responsive system:
- **Small**: < 672px (4 columns)
- **Medium**: 672px - 1055px (8 columns)  
- **Large**: > 1056px (12 columns)

## 🎨 Design Assets

### Screenshots Required for PRs
- Desktop: 1280px viewport
- Mobile: 375px viewport
- Focus states demonstration
- Dark mode (if applicable)

### Brand Guidelines
- IBM Plex Sans font loading
- Proper Carbon color usage
- 8px grid alignment
- Accessibility compliance

---

For questions about Carbon Design System implementation, refer to the [official Carbon documentation](https://carbondesignsystem.com/) or open an issue in this repository.
