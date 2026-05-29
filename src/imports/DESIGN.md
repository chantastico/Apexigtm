---
name: Horizon Premium
colors:
  surface: '#f7f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3f9'
  surface-container: '#eceef4'
  surface-container-high: '#e6e8ee'
  surface-container-highest: '#e0e2e8'
  on-surface: '#181c20'
  on-surface-variant: '#424654'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eff1f7'
  outline: '#737785'
  outline-variant: '#c3c6d6'
  surface-tint: '#0956ce'
  primary: '#0042a5'
  on-primary: '#ffffff'
  primary-container: '#1159d1'
  on-primary-container: '#d1dbff'
  inverse-primary: '#b2c5ff'
  secondary: '#2759be'
  on-secondary: '#ffffff'
  secondary-container: '#6a95fd'
  on-secondary-container: '#002c73'
  tertiary: '#2d477e'
  on-tertiary: '#ffffff'
  tertiary-container: '#465f98'
  on-tertiary-container: '#d0dbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001847'
  on-secondary-fixed-variant: '#0040a0'
  tertiary-fixed: '#d9e2ff'
  tertiary-fixed-dim: '#b0c6ff'
  on-tertiary-fixed: '#001945'
  on-tertiary-fixed-variant: '#2b457c'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e2e8'
  trust-blue: '#0C2B61'
  interactive-blue: '#1159D1'
  surface-mist: '#F2F4FA'
  success-green: '#12B76A'
  warning-amber: '#F79009'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Bebas Neue
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap-lg: 120px
  section-gap-md: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system embodies a **Corporate Modern** aesthetic infused with **Warm Minimalism**. It is specifically tailored for the Quebec market, prioritizing reliability, family-centric values, and a premium digital experience. The interface should feel more like a concierge service than a generic lead-generation tool.

The visual narrative focuses on "Continuity of Trust," bridging the gap between high-tech efficiency and human-first brokerage. We achieve this through:
- **Generous Whitespace:** Promoting a sense of calm and clarity during the insurance decision process.
- **Quebec-Centric Visuals:** Utilizing lifestyle photography with warm lighting and local architectural cues.
- **Modern Polish:** Using sophisticated typography and a "rich depth" color palette to move away from the "generic startup" look.

## Colors

This palette moves away from "startup neon" into a professional, multi-tonal blue spectrum that evokes the Autorité des marchés financiers (AMF) sense of stability.

- **Primary Blue (#1159D1):** Reserved for primary actions, CTAs, and active navigation states.
- **Deep Blue (#0C2B61):** Used for high-contrast typography, hero backgrounds, and footer surfaces to provide "gravitas."
- **Mist (#F2F4FA):** The primary background color for section alternating and card surfaces, creating a soft, non-clinical environment.
- **Royal Blue (#0647AC):** Used for iconography, secondary branding elements, and decorative accents.

## Typography

The typography strategy balances technical precision with approachability. 

- **Sora (Headlines):** Chosen for its geometric clarity and modern "tech-humanist" feel. It should be typeset with slightly tighter letter-spacing in display roles to maintain a premium, custom look.
- **DM Sans (Body):** Selected for its exceptional readability at small sizes, crucial for policy details and insurance forms.
- **Bebas Neue (Accents):** Restricted strictly to short, all-caps campaign labels or metadata tags (e.g., "NOUVEAU" or "CONSEIL"). It must never be used for sentence-length text.

Ensure French accents (é, à, ç) are handled with proper kerning, as the product is French-first.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-impact "Trust Zones."

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Use generous vertical padding (120px) between major homepage sections to reinforce the premium positioning.
- **Mobile (<768px):** A 4-column grid with 16px side margins. Content should stack vertically, prioritizing the "Start Quote" CTA in a sticky bottom bar or at the top of the scroll.
- **The Quoting Shell:** The third-party iframe must be wrapped in a dedicated Apexi container with a minimum height of 600px, surrounded by brand-safe margins and trust-building micro-copy.

## Elevation & Depth

To maintain a "Premium and Intentional" feel, we avoid heavy, dark shadows in favor of **Tonal Layering** and **Ambient Depth**.

- **Surface Tiers:** Use the `Mist` color (#F2F4FA) to define secondary content areas against a pure white background.
- **Ambient Shadows:** For interactive cards and modals, use very soft, high-diffusion shadows (Blur: 30px, Opacity: 4-6%) tinted with the `Deep Blue` hue to keep the shadows "cool" rather than "dirty gray."
- **Glassmorphism:** Use subtle backdrop blurs (10px - 15px) on sticky navigation headers to maintain a sense of space while scrolling through long policy or educational content.

## Shapes

The shape language is defined by **Pill-shaped (3)** geometry to evoke a sense of friendliness and modern safety.

- **Buttons:** All primary and secondary CTAs must be fully rounded (pill-shaped) to distinguish them from standard enterprise software.
- **Cards:** Product and vehicle comparison cards should use a `rounded-lg` (2rem) corner radius to feel soft and approachable.
- **Iconography:** Use monoline, rounded-end icons. Avoid sharp or jagged geometric shapes. Emojis are prohibited in core quoting interfaces; use brand-compliant SVGs instead.

## Components

- **Primary Buttons:** Pill-shaped, Primary Blue background, white Sora SemiBold text. Use a subtle scale-down effect (98%) on press.
- **Input Fields:** Large touch targets (min-height 56px) with 1rem rounded corners. Use a 2px Deep Blue border for focus states to ensure accessibility.
- **The "Trust Strip":** A static, high-contrast horizontal band (Deep Blue background) featuring partner logos in monochrome white and the AMF certification mark.
- **Comparison Cards:** A three-column vertical layout for the vehicle tool. Each card should feature a large image of the vehicle, a pill-shaped tag for "Insurance Impact," and a clear "Select" action.
- **The Iframe Shell:** A branded wrapper that includes a progress indicator at the top, a "Need Help?" floating button, and a persistent footer with privacy assurances.
- **Chips/Tabs:** Pill-shaped with Mist backgrounds for inactive states and Primary Blue for active states.