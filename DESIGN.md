---
name: Precision Capital
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  data-tabular:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 12px
  table-cell-padding: 8px 12px
---

## Brand & Style
The design system is engineered for high-stakes decision-making environments where clarity and data density are paramount. The brand personality is professional, systematic, and ultra-reliable, targeting institutional traders and sophisticated individual investors who require immediate access to complex market movements.

The visual style follows a **Modern Corporate** aesthetic with a lean toward **Minimalism**. It prioritizes information hierarchy through crisp layout structures and a restrained use of color. The interface evokes a sense of calm under pressure, utilizing ample whitespace in non-critical areas while maintaining extreme density within data grids. Every element is designed to minimize cognitive load, ensuring that critical financial indicators are the most prominent features of the UI.

## Colors
This design system utilizes a sophisticated palette grounded in deep slate tones to provide a stable foundation for high-frequency data. 

- **Foundation:** The primary color is a deep navy (#0F172A), used for navigation and high-level headers to provide grounding. The background is a crisp, off-white (#F8FAFC) to reduce eye strain during long trading sessions.
- **Indicators:** Actionable data uses high-contrast functional colors. "Success Green" (#10B981) and "Alert Red" (#EF4444) are reserved strictly for Profit/Loss indicators and status changes.
- **Typography & UI:** Neutral grays are used for secondary text and structural elements like borders and dividers to maintain a quiet interface.

## Typography
The typography system is built around **Inter**, chosen for its exceptional legibility at small sizes and its robust support for OpenType features essential for financial data. 

**Tabular Figures:** All price data, balances, and numerical values must use `font-variant-numeric: tabular-nums`. This ensures that numbers align vertically in tables, allowing traders to scan and compare values instantly.

**Hierarchy:**
- **Headlines:** Bold and tight for clear section titling.
- **Body:** Sized slightly smaller (14px) than standard web defaults to accommodate higher data density.
- **Labels:** Use uppercase with slight tracking for table headers to differentiate them clearly from the data they describe.
- **Technical Mono:** **JetBrains Mono** is used sparingly for transaction hashes or technical metadata to provide a distinct visual "coding" texture.

## Layout & Spacing
The layout uses a **Fluid Grid** model with strict 4px increments. For the main dashboard, a 12-column system is used with narrow 12px gutters to maximize the horizontal space available for multi-column data views.

**Density Toggles:**
The design system supports two density modes:
1.  **Standard:** Used for settings, profiles, and marketing-heavy pages.
2.  **Compact:** The default for trading terminals and order books, reducing vertical padding to 4px or 8px to ensure maximum information "above the fold."

**Mobile Adaption:** On mobile devices, sidebars collapse into a bottom navigation bar, and complex tables reflow into "Card-Lists" where each row becomes a summary card.

## Elevation & Depth
Depth is created primarily through **Low-Contrast Outlines** and subtle tonal layering rather than aggressive shadows. This prevents the UI from feeling "heavy" when many windows or cards are open.

- **Surfaces:** Main content sits on a "Surface-0" (Background). Interactive cards sit on "Surface-1" (White) with a 1px border (#E2E8F0).
- **Shadows:** Only used on floating elements like dropdown menus or modals. Use a soft, multi-layered shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **Interaction:** Hover states on table rows use a subtle background tint (#F1F5F9) rather than an elevation change to maintain the grid's structural integrity.

## Shapes
The shape language is **Soft** and disciplined. A 4px (0.25rem) radius is the standard for most components, including buttons, input fields, and cards. This slight rounding takes the "edge" off the professional aesthetic without making the platform feel consumer-grade or playful. 

Buttons use a slightly higher radius (6px) to make them more distinct as interactive targets, while status chips for "Buy" and "Sell" use a full pill shape for instant shape recognition.

## Components
**Data Tables:** The core of the system. Rows must have a fixed height in "Compact" mode. Columns containing numbers are always right-aligned. Negative numbers must be prefixed with a minus sign and colored in "Alert Red."

**Metric Cards:** Used for top-level portfolio stats. They include a `headline-sm` title, a `display-lg` value, and a small area for a 2px stroke-width sparkline showing a 24-hour trend.

**Buttons:** 
- **Primary:** Navy background, white text.
- **Success/Alert:** Solid #10B981 or #EF4444 for "Buy" and "Sell" actions.
- **Ghost:** No background, 1px border, used for secondary window controls.

**Input Fields:** Minimalist design with a 1px border. Focus states use a 2px navy ring. Labels are always persistent (never disappearing placeholders) to ensure clarity during data entry.

**Chips:** Used for "Asset Tags" (e.g., BTC, USD). These use a light gray background with `mono-label` typography for a technical feel.