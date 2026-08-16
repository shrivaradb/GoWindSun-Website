Document: Currency and FX Engine
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Currency & Dynamic FX Engine Specification

This document details the dynamic foreign exchange (FX) retrieval pipelines, supported international currencies, Indian numbering conventions (Crore, Lakh, Thousand), fallback reference rates, and regex price parsing logic implemented in [`src/services/currencyService.ts`](file:///c:/Website/GoWindSun-Website/src/services/currencyService.ts).

---

## 1. Core Rule — Preservation of Original Reported Currency

> **CRITICAL RULE: NEVER REMOVE THE ORIGINAL CURRENCY.**

If a market intelligence benchmark or OEM tender quote reports:
```text
RMB 6.44 Million
```
the platform MUST display:
```text
RMB 6.44 Million (~₹7.70 Crore)
```
* **Rationale:** Preserves historical financial accuracy while providing immediate commercial clarity to Indian developers and investors.

---

## 2. Supported Currencies & FX API Providers

### 2.1 API Endpoint Hierarchy
1. **Primary Live Provider:** Frankfurter API (European Central Bank Reference Rates):
   `https://api.frankfurter.dev/v1/latest?base=USD`
2. **Secondary Fallback Provider:** Open ER-API:
   `https://open.er-api.com/v6/latest/USD`
3. **Offline Reference Rate Fallback:** Central Bank / RBI reference rates stored in `FALLBACK_FX_RATES`.

### 2.2 Supported Currencies Table

| Currency Code | Currency Name | Reference Rate to INR | Pegged / Calculated Formula |
| :--- | :--- | :--- | :--- |
| **INR** / `₹` | Indian Rupee | `1.00` | Base Currency |
| **USD** / `$` | US Dollar | `83.95` | Direct ECB Reference Rate |
| **CNY** / **RMB** | Chinese Yuan | `11.95` | Derived via `usdInINR / rates.CNY` |
| **EUR** / `€` | Euro | `92.10` | Derived via `usdInINR / rates.EUR` |
| **GBP** / `£` | British Pound | `107.50` | Derived via `usdInINR / rates.GBP` |
| **AED** | UAE Dirham | `22.85` | Pegged at `usdInINR / 3.6725` |
| **SAR** | Saudi Riyal | `22.38` | Pegged at `usdInINR / 3.75` |
| **OMR** | Omani Rial | `218.00` | Pegged at `usdInINR / 0.385` |
| **AUD** | Australian Dollar | `55.40` | Derived via `usdInINR / rates.AUD` |
| **DKK** | Danish Krone | `12.35` | Derived via `usdInINR / rates.DKK` |
| **SEK** | Swedish Krona | `8.05` | Derived via `usdInINR / rates.SEK` |
| **TRY** / `₺` | Turkish Lira | `2.45` | Derived via `usdInINR / rates.TRY` |

---

## 3. Indian Numbering Formatter (`formatINRAmount`)

Converts raw INR values into standard Indian numbering units:

```typescript
export function formatINRAmount(inrValue: number): string {
  const absVal = Math.abs(inrValue);

  if (absVal >= 10000000) {
    // 1 Crore = 10,000,000 INR
    const cr = inrValue / 10000000;
    return `₹${cr >= 100 ? cr.toFixed(0) : cr.toFixed(2)} Crore`;
  } else if (absVal >= 100000) {
    // 1 Lakh = 100,000 INR
    const lakh = inrValue / 100000;
    return `₹${lakh.toFixed(2)} Lakh`;
  } else if (absVal >= 1000) {
    // Thousands (e.g. ₹19,300/kW)
    return `₹${Math.round(inrValue).toLocaleString("en-IN")}`;
  } else {
    // Decimal unit rates (e.g. ₹8.40/W or ₹3.24/kWh)
    return `₹${inrValue.toFixed(2)}`;
  }
}
```

---

## 4. Price Parser Regex (`enhancePriceWithLiveINR`)

Parses raw price strings and appends calculated INR values:

1. **Millions/Billions Pattern:** Matches `RMB 6.44 Million` or `$1.2 Billion` -> calculates total INR and appends `(~₹7.70 Crore)`.
2. **Per-Unit Pattern:** Matches `RMB 1,609 / kW` or `US$ 0.10 / W` -> calculates per-unit INR and appends `(~₹19,228/kW)` or `(~₹8.40/W)`.
3. **Special UAE Fils Pattern:** Matches `AED 4.97 fils / kWh` -> converts 100 fils to 1 AED, calculates INR, and appends `(~₹1.14/kWh)`.
