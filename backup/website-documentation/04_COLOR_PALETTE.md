Document: Color Palette
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Master Color Palette Specification

This document details all exact HEX, RGB, and Tailwind CSS color tokens used across the **GoWindSun India Private Limited** web platform, including background surfaces, text, primary brand accents, dark theme tones, gradients, and national identity colors.

---

## 1. Primary Corporate Navy & Dark Surfaces

| Color Name | HEX Code | RGB Code | Primary Usage Locations |
| :--- | :--- | :--- | :--- |
| **Deep Dark Navy** | `#06111F` | `rgb(6, 17, 31)` | Standard Global Dark Hero background (`StandardHero.tsx`), Footer background (`Footer.tsx`), Tenders & Careers page base |
| **Dark Card Surface** | `#0B1E36` | `rgb(11, 30, 54)` | Card container background on dark pages (Tenders notices, Careers boxes) |
| **Dark Elevated Active** | `#0E2442` | `rgb(14, 36, 66)` | Selected filter card background in Tenders portal |
| **Dark Search Container** | `#0A1728` | `rgb(10, 23, 40)` | Filter & Search bar background container |
| **Primary Text Slate** | `#0F172A` | `rgb(15, 23, 42)` | Default body text color on light surfaces |
| **Slate 800** | `#1E293B` | `rgb(30, 41, 59)` | Dark theme borders, footer divider lines |
| **Slate 700** | `#334155` | `rgb(51, 65, 85)` | Secondary body text on light backgrounds |
| **Muted Slate** | `#64748B` | `rgb(100, 116, 139)` | Subtitles, captions, disabled states |
| **Slate 300** | `#CBD5E1` | `rgb(203, 213, 225)` | Light theme bright borders, dark theme body text |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Main body background, light card surfaces |

---

## 2. Brand Accent Colors

### 2.1 Emerald Clean Energy Green (`#059669`)
* **Primary Emerald:** `#059669` (`rgb(5, 150, 105)`) — Primary green CTA buttons, Hybrid project badges, success states.
* **Hover Emerald:** `#047857` (`rgb(4, 120, 87)`) — Button hover state.
* **Bright Emerald:** `#10B981` (`rgb(16, 185, 129)`) — Text highlights, stat counters.
* **India Flag Green:** `#138808` (`rgb(19, 136, 8)`) — Bottom stripe of India flag and top navbar accent line.

### 2.2 Electric Sky Blue & Cyan (`#0186D5`)
* **Electric Sky Blue:** `#0186D5` (`rgb(1, 134, 213)`) — Primary wind energy color, map strokes, primary blue buttons.
* **Cyan Accent:** `#0284C7` (`rgb(2, 132, 199)`) — Gradient mid-tones, secondary blue accents.
* **Sky Blue Highlight:** `#38BDF8` (`rgb(56, 189, 248)`) — Selected state strokes in map, glowing borders.
* **Deep Wind Selected:** `#0A4EA2` (`rgb(10, 78, 162)`) — Selected state fill color on India Wind Map.
* **Ashoka Chakra Navy:** `#000080` (`rgb(0, 0, 128)`) — 24-spoke Ashoka Chakra wheel in SVG India flag.

### 2.3 Solar Orange & Gold (`#F97316` / `#EA580C`)
* **Primary Contact CTA Orange:** `#EA580C` (`rgb(234, 88, 12)`) — "Contact Us" high-priority navbar button.
* **Deep Orange Hover:** `#C2410C` (`rgb(194, 65, 12)`) — Contact button hover state & selected solar map fill.
* **Solar PV Orange:** `#F97316` (`rgb(249, 115, 22)`) — Solar project badges & solar map accents.
* **Solar Gold:** `#F99D1C` (`rgb(249, 157, 28)`) — Gold category labels in Tenders & Footer.
* **India Flag Saffron:** `#FF9933` (`rgb(255, 153, 51)`) — Top stripe of India flag and navbar top accent line.
* **Under Dev Amber:** `#D97706` (`rgb(217, 119, 6)`) — "Under Dev" status badge text.

---

## 3. Gradients & Surface Treatments

* **Indian Tricolor Top Accent Stripe:**
  ```css
  background: linear-gradient(to right, #FF9933 0%, #F8FAFC 50%, #138808 100%);
  ```
* **Hero Text Accent Gradient:**
  ```css
  background: linear-gradient(to right, #10B981 0%, #38BDF8 50%, #FBBF24 100%);
  ```
* **Text Gradient (Dark Theme):**
  ```css
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #334155 100%);
  ```
* **Dark Hero Background Radial Glow:**
  ```css
  background: radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.18) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%);
  ```
