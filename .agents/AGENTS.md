# Project Rules — GoWindSun India Private Limited

## 1. Global Counting Animation System
- **Standalone Metric Component**: Import and use `<CountUp />` from `@/components/ui/CountUp` for standalone quantitative stat cards, hero metric counters, and dedicated numerical blocks (`500 GW`, `220+ GW`, etc.).
- **Prose Exemption**: Do NOT use `<CountUp />` inside inline narrative paragraphs or list bullets (e.g. render `~3,000 MW` statically within text).
- **Viewport Trigger**: Metric card animations must trigger once when entering the viewport using smooth easing over 1.5s–2.5s.
- **Strict Data Integrity**: ONLY animate legitimate numerical figures sourced directly from `Website.docx`. NEVER invent fictitious statistics.
- **Accessibility**: Respect `prefers-reduced-motion` settings.

## 2. Layout & Visual Composition Variety
- Enforce strict composition diversity between consecutive sections (e.g. Editorial Magazine Two-Column, Vertical Divider Rule Columns, Linear Data Strips, Asymmetric Bento Grid).
- Avoid repeating generic card grids or floating background blobs across sections.
