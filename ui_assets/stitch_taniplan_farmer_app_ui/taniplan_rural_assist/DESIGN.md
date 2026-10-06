---
name: TaniPlan Rural Assist
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3f493f'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#2e6a41'
  on-secondary: '#ffffff'
  secondary-container: '#b1f2be'
  on-secondary-container: '#347047'
  tertiary: '#b20010'
  on-tertiary: '#ffffff'
  tertiary-container: '#d82324'
  on-tertiary-container: '#fff1ef'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#b1f2be'
  secondary-fixed-dim: '#96d5a3'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#12512c'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 19px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 26px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '800'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a tactile, high-legibility interface built specifically for elderly smallholder farmers in rural Indonesia. Operating conditions are demanding: users interact with low-to-mid-range smartphones outdoors under intense, direct equatorial sunlight, often with weathered fingers, presbyopia, and varying levels of digital literacy. 

The aesthetic is functional, grounded, and physical—blending **High-Contrast Pragmatism** with **Tactile Clarity**. Visual elements resemble physical agricultural tools and clear village signboards rather than abstract software layers. Every critical control provides instant physical reassurance through defined boundaries, high color separation, and explicit iconography paired with plain-language labels in Bahasa Indonesia. The experience avoids ambient fades, thin strokes, and subtle micro-interactions in favor of decisive, unambiguous visual states that build trust and eliminate hesitation in the field.

## Colors

The palette is anchored in outdoor legibility, meeting and exceeding WCAG AAA contrast ratios (minimum 7:1 for normal text and key graphical boundaries) under harsh glare.

- **Primary (`#15803D`)**: Fresh agricultural leaf green. Used for key interactive highlights, primary actions, and confirmed successful crop statuses. Contrast-matched against pure white.
- **Secondary / Deep Structural (`#14532D`)**: Dense forest green. Serves as the high-contrast structural anchor for critical headers, active tab icons, card borders, and primary button backgrounds where maximum sunlight luminance is required.
- **Tertiary / Danger (`#DC2626`)**: Vivid warning red. Dedicated to pest alerts, severe weather warnings, crop disease diagnoses, and financial loss metrics. Never used decoratively.
- **Neutral Surface & Background (`#FFFFFF`, `#F8FAF5`, `#F0FDF4`)**: Pure crisp white `#FFFFFF` forms the primary canvas for maximum outdoor luminance reflection. Secondary card surfaces utilize `#F8FAF5` (warm pale rice-paper tint) and `#F0FDF4` (subtle sunlit mint tint) to group information without dropping contrast.
- **Text & Stroke Elements (`#111827`, `#374151`)**: `#111827` (almost pure carbon black) provides AAA-grade contrast against all canvas tones for primary instructions and data values. `#374151` is the strict floor for secondary captions and measurement units; lighter greys are strictly prohibited.

## Typography

Typography prioritizes extreme readability for presbyopic vision. **Plus Jakarta Sans** is configured with wide apertures, open counterforms, and generous vertical proportions that remain crisp even on scratched, low-resolution phone screens.

- **Scale Floor**: The absolute minimum body size allowed across the product is 16px (`body-md`), with 18px (`body-lg`) preferred for operational instructions.
- **Generous Leading**: Line heights are spaced at 1.45x to 1.6x of the font size to prevent overlapping or misreading when farmers track text lines while standing outdoors.
- **Weight Distribution**: Primary headers leverage Extra Bold (`800`) weights to produce strong typographic stamps that orient the user instantly. Interactive text, labels, and buttons mandate minimum Bold (`700`) weights to ensure legibility when overlaid on solid colors.

## Layout & Spacing

The layout is built on a high-density, single-column or dual-card vertical stream that accommodates large touch targets without horizontal clutter.

- **Outer Margins & Gutters**: Mobile displays enforce an edge margin of `1.25rem` (20px) to prevent finger-edge palm touches on budget devices with thick bezels. Gutters between grid modules sit at `1rem` (16px).
- **Physical Padding**: Component interiors use `space-md` (20px) and `space-lg` (28px) to establish deep safe-zones around interactive controls, preventing accidental multi-taps.
- **Vertical Hierarchy**: Spacing between unrelated functional modules uses `space-xl` (40px) to create clear, unhurried visual pauses that reduce cognitive strain.

## Elevation & Depth

This design system avoids soft, low-contrast blur elevations that wash out under daylight. Depth is instead rendered through **Tactile Contrast Relief**: structural dark borders combined with directional, hard-offset drop shadows.

- **Base Elevation (Resting Cards)**: Surfaces use a crisp `2px` solid border in `#14532D` or `#E2E8F0` layered with a directional solid shadow: `0px 3px 0px 0px rgba(20, 83, 45, 0.25)`.
- **Interactive Elevation (Raised Buttons & Action Plates)**: Elements sit on a `2px` border with an accentuated tactile drop: `0px 4px 0px 0px #0F3E21`. When pressed, the element translates down `2px` and reduces its shadow to `0px 2px 0px 0px`, delivering an intuitive, mechanical feel.
- **Modals & Overlays**: Modals feature an opaque white `#FFFFFF` surface enclosed in a prominent `3px` solid border (`#14532D`), positioned above an 80% opacity dark overlay (`rgba(17, 24, 39, 0.8)`) to forcefully block background distractions.

## Shapes

Corner radii use balanced `Rounded` (Level 2) geometry. Containers and interactive blocks have an outer boundary radius of `0.75rem` (12px) to `1rem` (16px), retaining structural discipline while remaining inviting and soft to touch. 

Small tags and action badges utilize `rounded-lg` (16px), while full pill shapes are avoided for primary controls to retain the recognizable form factor of physical stamped stamps and tactile pushbuttons.

## Components

### Buttons
- **Touch Bounds**: Minimum height of 56px across all mobile screens.
- **Primary Action**: Solid `#14532D` background, `#FFFFFF` text (`label-lg`), `2px` solid stroke in `#0F3E21`, paired with a solid mechanical shadow. Includes a prominent solid 24px icon preceding the text label.
- **Secondary Action**: `#FFFFFF` background, `#14532D` text (`label-lg`), `2px` solid `#14532D` border, with `0px 3px 0px 0px rgba(20, 83, 45, 0.15)` offset shadow.
- **Destructive Action**: Solid `#DC2626` background, `#FFFFFF` text, `2px` solid `#991B1B` border.

### Chips & Filter Pills
- Minimum height of 48px to allow easy selection by rough or wet fingers.
- **Unselected**: Crisp white background, `2px` solid `#D1D5DB` border, `#111827` label text.
- **Selected**: `#F0FDF4` background, `2px` solid `#15803D` border, `#14532D` bold text, accompanied by a bold checkmark icon (`✓`).

### Cards & Module Containers
- Constructed on pure white (`#FFFFFF`) or tinted ivory (`#F8FAF5`).
- Bound by a distinct `2px` border (`#E5E7EB` minimum; `#14532D` for emphasized/active crop cycles).
- Internal content is partitioned using horizontal divider rules with minimum `1.5px` thickness in `#E5E7EB` to segment dates, inputs, and outputs.

### Selection Controls (Checkboxes & Radios)
- **Scale**: Minimum touch target of 48px with a visible glyph size of 28px × 28px.
- **Border**: `2.5px` solid `#14532D`.
- **Selected State**: High-visibility fill (`#15803D`) featuring an extra-thick pure white checkmark or center pip (`3px` line weight).

### Text Inputs & Quantity Selectors
- Minimum container height of 58px with a `2px` border in `#374151`. Focused state switches to a `3px` solid `#15803D` border with high-contrast glow ring.
- Labels are persistently fixed above the field in `label-md` (`#111827`); floating animated placeholders that disappear during entry are strictly avoided.
- Numerical inputs for fertilizer or seed weights include attached oversized stepper increment/decrement buttons (`+` / `–`) with minimum dimensions of 54px × 54px.

### Iconography & Badges
- Drawn with a minimum 2.5px stroke weight or heavy solid geometry at 28px minimum scale.
- Every icon must be accompanied by an explicit text descriptor underneath or to its right; standalone icon buttons are prohibited to prevent misinterpretation.