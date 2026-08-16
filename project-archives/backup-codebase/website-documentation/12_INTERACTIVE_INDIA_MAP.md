Document: Interactive India Map Specification
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Interactive India Map Specification

This document details the exact technical implementation, SVG boundary data, state mapping dictionaries, zoom viewBox coordinates, event listeners, hover tooltips, and geographic accuracy requirements for the interactive map component in [`src/components/projects/IndiaSvgMap.tsx`](file:///c:/Website/GoWindSun-Website/src/components/projects/IndiaSvgMap.tsx).

---

## 1. Technical Foundation & Geographic Accuracy

* **Library Source:** `@svg-maps/india` (`v2.0.0`).
* **Geographic Accuracy Mandate:** The map strictly reflects official geographic boundaries of India across all 28 states and Union Territories. Approximate, stylized, or random geographic artwork is strictly prohibited.
* **Canvas Dimensions:** Full responsive SVG canvas rendered inside a `612px x 696px` viewBox container (`targetViewBox = "0 0 612 696"`).

---

## 2. State ID Mapping Dictionary

The internal SVG location IDs from `@svg-maps/india` map to standard ISO `IN-XX` state codes via `SVG_ID_TO_STATE_CODE`:

```typescript
const SVG_ID_TO_STATE_CODE: Record<string, string> = {
  ap: "IN-AP", // Andhra Pradesh
  ar: "IN-AR", // Arunachal Pradesh
  as: "IN-AS", // Assam
  br: "IN-BR", // Bihar
  ct: "IN-CT", // Chhattisgarh
  ga: "IN-GA", // Goa
  gj: "IN-GJ", // Gujarat
  hr: "IN-HR", // Haryana
  hp: "IN-HP", // Himachal Pradesh
  jh: "IN-JH", // Jharkhand
  ka: "IN-KA", // Karnataka
  kl: "IN-KL", // Kerala
  mp: "IN-MP", // Madhya Pradesh
  mh: "IN-MH", // Maharashtra
  mn: "IN-MN", // Manipur
  ml: "IN-ML", // Meghalaya
  mz: "IN-MZ", // Mizoram
  nl: "IN-NL", // Nagaland
  or: "IN-OD", // Odisha
  pb: "IN-PB", // Punjab
  rj: "IN-RJ", // Rajasthan
  sk: "IN-SK", // Sikkim
  tn: "IN-TN", // Tamil Nadu
  ts: "IN-TS", // Telangana
  tr: "IN-TR", // Tripura
  up: "IN-UP", // Uttar Pradesh
  ut: "IN-UT", // Uttarakhand
  wb: "IN-WB", // West Bengal
  dl: "IN-DL", // Delhi
  jk: "IN-JK", // Jammu & Kashmir
  la: "IN-LA", // Ladakh
};
```

---

## 3. Centered & Scaled Zoom ViewBoxes

When a user selects a state, the SVG viewBox dynamically transitions to center and zoom into that exact state boundary:

```typescript
const STATE_ZOOM_VIEWBOXES: Record<string, string> = {
  "IN-MH": "67.6 342.8 224.3 185.0",  // Maharashtra
  "IN-RJ": "0.0 147.9 238.9 217.8",   // Rajasthan
  "IN-KA": "109.6 421.6 122.0 194.2", // Karnataka
  "IN-TN": "155.4 533.7 112.1 151.5", // Tamil Nadu
  "IN-GJ": "0.0 287.3 171.2 135.2",   // Gujarat
  "IN-MP": "94.9 232.4 238.7 173.1",  // Madhya Pradesh (100% Exact Bounding Center)
  "IN-AP": "218.9 469.4 89.2 103.3",  // Andhra Pradesh
  "IN-UP": "162.6 144.7 205.3 200.4", // Uttar Pradesh
  "IN-TG": "175.1 398.0 124.0 117.1", // Telangana
  "IN-OD": "257.2 336.0 165.9 138.3", // Odisha
  "IN-WB": "356.5 224.7 110.2 170.0", // West Bengal
  "IN-KL": "127.9 552.9 76.9 124.5",  // Kerala
  "IN-PB": "107.0 102.5 88.0 98.2",   // Punjab
  "IN-HR": "119.4 143.2 89.5 102.8",  // Haryana
  "IN-BR": "301.1 225.2 135.4 99.3",  // Bihar
  "IN-JH": "302.3 276.0 126.5 101.4", // Jharkhand
  "IN-CT": "239.3 295.6 112.9 184.4", // Chhattisgarh
  "IN-HP": "142.7 85.5 95.5 94.9",   // Himachal Pradesh
  "IN-UT": "184.3 129.9 96.4 90.8",   // Uttarakhand
  "IN-JK": "68.8 0.0 207.7 158.6",    // Jammu & Kashmir
};
```

---

## 4. Reset Interaction Rules (ESC Key & Click-Outside)

To ensure intuitive map navigation, the component registers global event listeners whenever a state is selected:

1. **ESC Key Press:** Pressing the `Escape` key immediately resets map zoom back to the full India view (`onSelectState("")`).
2. **Click Anywhere Outside:** Clicking anywhere on the screen outside the active state path resets map zoom back to full India view.
3. **Re-clicking Selected State:** Clicking the already selected state path toggles selection off.
