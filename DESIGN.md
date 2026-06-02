# Design Brief

## Direction

Global Trek — Premium Himalayan trekking and pilgrimage platform delivering cinematic, editorial luxury experiences for discerning adventurers.

## Tone

Cinematic editorial luxury with magazine-quality layouts and full-bleed photography — like National Geographic meets Airbnb, refined and trust-building.

## Differentiation

Glassmorphic floating cards, parallax hero sections, and watercolor-style SVG maps create an immersive, premium feel; multi-dimension reviews (food, guide, safety, value) and transparent AMS protocols build trust instantly.

## Color Palette

| Token      | OKLCH       | Role              |
|------------|-------------|-------------------|
| background | 0.99 0 0    | Light mode base   |
| foreground | 0.15 0.01   | Dark text/dark    |
| primary    | 0.39 0.12   | Deep forest green |
| accent     | 0.65 0.25   | Gold CTA/badge    |
| muted      | 0.93 0 0    | Subtle backgrounds|
| gt-green-800 | 0.35 0.12 | Header/sidebars   |
| gt-green-500 | 0.62 0.22 | Accent highlights |

## Typography

- Display: Playfair Display — elegant serif headlines, 48–72px for hero/section titles
- Body: DM Sans — refined sans-serif, 14–18px for body copy, high readability
- Mono: Montserrat — clean badges, labels, altitude/distance callouts
- Scale: Hero 72px, H2 48px, H3 32px, Label 14px, Body 16px

## Elevation & Depth

Layered surfaces: background (white/dark), cards (elevated with 4px–24px shadows), glass (frosted-blur overlay), and floating elements (parallax on scroll). Shadows use green-tinted OKLCH for warm depth.

## Structural Zones

| Zone       | Background                  | Border                       | Notes                                 |
|------------|-----------------------------|-----------------------------|---------------------------------------|
| Header     | oklch(0.39 0.12 150)        | oklch(0.32 0.12 150)         | Sticky, mega-menu on desktop          |
| Hero       | Full-bleed photography      | —                            | Overlay glassmorphic card for CTAs    |
| Content    | oklch(0.99 0 0) alternating | oklch(0.90 0 0)              | Sections alternate white/muted-light  |
| Sidebar    | oklch(0.39 0.12 150) / card | oklch(0.32 0.12 150)         | Sticky booking widget (desktop)       |
| Footer     | oklch(0.15 0 0) or dark     | oklch(0.25 0.01 255)         | Rich links, newsletter, certifications|

## Spacing & Rhythm

Section gaps 3–4rem, card padding 1.5–2rem, micro-spacing 0.5–1rem. Content groups align to 8px baseline grid. Full-bleed hero photos create visual rhythm; alternating card backgrounds establish visual hierarchy.

## Component Patterns

- Buttons: Rounded (var(--gt-radius-md)), green primary / secondary outline, 0.3s hover lift with shadow
- Cards: Rounded (var(--gt-radius-lg)), floating on white/dark base, glassmorphic overlay optional
- Badges: Rounded (var(--gt-radius-pill)), gold accent, Montserrat 12px, uppercase
- Itinerary: Day cards with altitude/terrain icons, watercolor SVG map, parallax on scroll

## Motion

- Entrance: Fade-in-up 0.6s ease-out on scroll (Intersection Observer)
- Hover: Card lift 4px with shadow-lg 0.3s easeOut; button depth -2px
- Decorative: Floating 3s ease-in-out (hero photos), parallax-scroll on hero section, pulse-gentle on availability badges

## Constraints

- No neon or saturated gradients; all colors OKLCH-based for precise control
- Hero photography is full-bleed; all text overlays use glassmorphic cards for legibility
- Dark mode inverts lightness but preserves green hue; text contrast maintained at AA+ minimum
- Mobile: cards are full-width with bottom-nav; desktop: sticky sidebars and multi-column layout
- Animations respect prefers-reduced-motion; all critical content accessible without motion

## Signature Detail

Glassmorphic booking sidebar with real-time seat availability (color-coded badge dots) + parallax hero with floating polaroid photo gallery — combines trust-building transparency with premium visual delight.
