# Website Quick Start Guide

## 🚀 Quick Start

### Development
```bash
cd apps/website
npm run dev
# Server runs on http://localhost:5174
```

### Production Build
```bash
cd apps/website
npm run build
npm run preview
```

## 📚 Key Files

### Theme & Styling
- `src/styles/theme.js` - Design tokens (colors, fonts, spacing)
- `src/styles/global.css` - Global styles and animations
- `src/components/StyledComponents.jsx` - Reusable components

### Navigation
- `src/components/PremiumNavbar.jsx` - Main navbar with all routes

### Pages
- `src/pages/Home.jsx` - Homepage
- `src/pages/About.jsx` - About page
- [Other pages ready for updates]

## 🎨 Using the Theme

### Import Theme
```javascript
import theme from '../styles/theme';
```

### Access Values
```javascript
// Colors
theme.colors.primary        // #003BFF
theme.colors.bg.light      // #F5F7FF
theme.colors.text.primary  // #0D0D0D

// Typography
theme.typography.fontSizes.lg   // 1.5rem
theme.typography.fontWeights.bold  // 700

// Spacing
theme.spacing.lg   // 24px
theme.spacing.xl   // 32px

// Shadows
theme.shadows.lg   // For cards
theme.shadows.hover // For hover effects

// Animations
theme.transitions.base // 250ms
```

## 🧩 Using Styled Components

### Import Components
```javascript
import {
  Card,
  Grid,
  Button,
  SectionContainer,
  SectionTitle,
  HeroSection
} from '../components/StyledComponents';
```

### Example Usage
```javascript
<SectionContainer bgLight>
  <SectionTitle>Our Services</SectionTitle>
  
  <Grid>
    <Card>
      <h3>Service 1</h3>
      <p>Description</p>
    </Card>
    <Card>
      <h3>Service 2</h3>
      <p>Description</p>
    </Card>
  </Grid>
</SectionContainer>
```

## 🎬 Adding Animations

### Framer Motion Animations
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}        // Start state
  animate={{ opacity: 1, y: 0 }}         // End state (on mount)
  whileInView={{ opacity: 1, y: 0 }}     // On scroll into view
  viewport={{ once: true }}              // Only animate once
  transition={{ delay: 0.1 }}            // Delay before animation
>
  Content
</motion.div>
```

### CSS Animations
```css
/* Use from global.css */
.animate-fadeIn      /* Fade in */
.animate-slideInUp   /* Slide from bottom */
.animate-slideInLeft /* Slide from left */
.animate-pulse       /* Pulsing effect */
.animate-float       /* Floating effect */
```

## 🔧 Common Customizations

### Change Primary Color
**File**: `src/styles/theme.js`
```javascript
primary: '#003BFF',      // Change this
primaryDark: '#0025B3',  // And this
primaryLight: '#4D6FFF', // And this
```

### Change Font Size
**File**: `src/styles/theme.js`
```javascript
fontSizes: {
  lg: '1.5rem',  // Change any size here
  xl: '1.875rem',
}
```

### Add Spacing
**File**: `src/styles/theme.js`
```javascript
spacing: {
  custom: '20px',  // Add custom spacing
}
```

## 📱 Responsive Design

### Grid Auto-responds to Screen Size
```javascript
<Grid gap={theme.spacing.lg}>
  {/* Automatically adjusts columns based on screen width */}
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

### Mobile-First Approach
- Mobile by default (full width)
- Tablet: 2 columns when space available
- Desktop: 3+ columns for larger screens

## 🎯 Page Template

Use this template for new/updated pages:

```javascript
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import {
  Card,
  Grid,
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
} from '../components/StyledComponents';

export default function NewPage() {
  return (
    <PageLayout
      showHero
      title="Page Title"
      subtitle="Optional subtitle"
      bgLight={true}
    >
      <SectionContainer>
        <SectionTitle>Section Title</SectionTitle>
        <SectionSubtitle>Description</SectionSubtitle>

        <Grid>
          {/* Add cards here */}
          <Card>
            <h3>Card Title</h3>
            <p>Card content</p>
          </Card>
        </Grid>
      </SectionContainer>

      {/* Add more sections as needed */}
    </PageLayout>
  );
}
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Dev server will automatically try next port
npm run dev  # Tries 5173, then 5174, etc.
```

### Styling Not Applied
1. Check imports are correct
2. Verify theme.js file exists
3. Check CSS specificity
4. Clear browser cache

## 📖 Documentation

- `DESIGN_SYSTEM.md` - Complete design system documentation
- `WEBSITE_REDESIGN_COMPLETE.md` - Full implementation summary
- `theme.js` - All design tokens with comments
- `global.css` - CSS variables and utility classes

## 💡 Tips

1. **Always use theme values** instead of hard-coded colors/sizes
2. **Use Grid component** for responsive layouts
3. **Use Card component** for content sections
4. **Add animations** with Framer Motion for engagement
5. **Test on mobile** before pushing to production

## 🎨 Color Quick Reference

```javascript
Primary Blue:    theme.colors.primary     // #003BFF
Dark Blue:       theme.colors.primaryDark // #0025B3
Light Gray:      theme.colors.bg.light    // #F5F7FF
White:           theme.colors.bg.white    // #FFFFFF
Text Primary:    theme.colors.text.primary    // #0D0D0D
Text Secondary:  theme.colors.text.secondary // #333333
Success:         theme.colors.success     // #00B74A
Error:           theme.colors.error       // #FF3B3B
```

## 🔗 Useful Npm Commands

```bash
# Development
npm run dev        # Start dev server

# Production
npm run build      # Build for production
npm run preview    # Preview production build

# Formatting
npm run format     # Format code with Prettier
```

## 📞 Support

For questions:
1. Check `DESIGN_SYSTEM.md` for comprehensive documentation
2. Review `theme.js` for available design tokens
3. Check `StyledComponents.jsx` for component examples
4. Look at `Home.jsx` or `About.jsx` for implementation examples

---

**Last Updated**: December 5, 2025
**Version**: 1.0.0
