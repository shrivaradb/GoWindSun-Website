/**
 * GoWindSun Dynamic FX & INR Currency Conversion Engine
 * Fetches latest exchange rates from public central bank / FX reference APIs (Frankfurter / Open ER-API),
 * caches rates in memory/localStorage, and dynamically calculates mathematically accurate INR equivalents
 * using Indian numbering conventions (Crore, Lakh, Thousand) without distorting original source currencies.
 */

export interface FXRateData {
  base: string; // e.g. "USD" or "INR"
  rates: Record<string, number>; // Rate relative to base currency
  lastUpdated: string; // ISO date string or formatted date
  isLive: boolean; // True if fetched live from API
  provider: string; // Name of FX provider (e.g. "Frankfurter / ECB")
}

// Fallback rates (European Central Bank / RBI reference rates) used if offline/error
const FALLBACK_FX_RATES: Record<string, number> = {
  INR: 1,
  USD: 83.95,   // 1 USD = 83.95 INR
  CNY: 11.95,   // 1 CNY/RMB = 11.95 INR
  RMB: 11.95,   // Alias
  EUR: 92.10,   // 1 EUR = 92.10 INR
  AED: 22.85,   // 1 AED = 22.85 INR
  GBP: 107.50,  // 1 GBP = 107.50 INR
  AUD: 55.40,   // 1 AUD = 55.40 INR
  DKK: 12.35,   // 1 DKK = 12.35 INR
  SEK: 8.05,    // 1 SEK = 8.05 INR
  TRY: 2.45,    // 1 TRY = 2.45 INR
  SAR: 22.38,   // 1 SAR = 22.38 INR
  OMR: 218.00,  // 1 OMR = 218.00 INR
};

let cachedRates: Record<string, number> = { ...FALLBACK_FX_RATES };
let lastFetchTime: string = new Date().toISOString();
let isLiveFetched: boolean = false;
let fxProviderName: string = "Latest Bank Reference Rate";

/**
 * Fetches latest FX rates from Frankfurter / Open ER-API asynchronously
 */
export async function initializeFXRates(): Promise<void> {
  try {
    // Attempt 1: Fetch from Frankfurter API (ECB Reference Data)
    const res = await fetch("https://api.frankfurter.dev/v1/latest?base=USD", {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.rates) {
        const usdInINR = data.rates.INR || 83.95;
        cachedRates["USD"] = usdInINR;
        cachedRates["INR"] = 1;

        // Calculate INR rates for all supported currencies:
        // rateInINR = (usdInINR / usdRateForCurrency)
        Object.keys(data.rates).forEach((curr) => {
          const rateToUsd = data.rates[curr];
          if (rateToUsd && rateToUsd > 0) {
            cachedRates[curr] = usdInINR / rateToUsd;
          }
        });

        // Chinese Yuan (CNY) alias RMB
        if (data.rates.CNY) {
          const cnyInINR = usdInINR / data.rates.CNY;
          cachedRates["CNY"] = cnyInINR;
          cachedRates["RMB"] = cnyInINR;
        }

        // UAE Dirham (AED) pegged ~3.6725 per USD
        cachedRates["AED"] = usdInINR / 3.6725;
        cachedRates["SAR"] = usdInINR / 3.75;
        cachedRates["OMR"] = usdInINR / 0.385;

        isLiveFetched = true;
        fxProviderName = "Frankfurter / ECB Live";
        lastFetchTime = new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        return;
      }
    }
  } catch {
    // Fallback gracefully to secondary API
    try {
      const res2 = await fetch("https://open.er-api.com/v6/latest/USD");
      if (res2.ok) {
        const data2 = await res2.json();
        if (data2 && data2.rates && data2.rates.INR) {
          const usdInINR = data2.rates.INR;
          cachedRates["USD"] = usdInINR;
          cachedRates["INR"] = 1;

          Object.keys(data2.rates).forEach((curr) => {
            const r = data2.rates[curr];
            if (r && r > 0) {
              cachedRates[curr] = usdInINR / r;
            }
          });
          cachedRates["RMB"] = cachedRates["CNY"] || usdInINR / 7.15;
          isLiveFetched = true;
          fxProviderName = "Open ER-API Live";
          lastFetchTime = new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          return;
        }
      }
    } catch {
      // Use fallback reference rates if offline
    }
  }

  isLiveFetched = false;
  fxProviderName = "Bank Reference Rate";
  lastFetchTime = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Trigger initial fetch asynchronously
if (typeof window !== "undefined") {
  initializeFXRates().catch(() => {});
}

/**
 * Gets current rate for a currency code against INR
 */
export function getRateToINR(currencyCode: string): number {
  const code = currencyCode.toUpperCase().trim();
  if (code === "INR" || code === "₹") return 1;
  return cachedRates[code] || FALLBACK_FX_RATES[code] || 83.95;
}

/**
 * Metadata info string explaining FX rate used
 */
export function getFXMetaDataInfo(currencyCode: string): string {
  const code = currencyCode.toUpperCase().trim();
  if (code === "INR" || code === "₹") return "Reported in INR";

  const rate = getRateToINR(code);
  const formattedRate = rate.toFixed(2);
  const statusLabel = isLiveFetched ? "FX updated" : "Reference FX rate";
  return `1 ${code} = ₹${formattedRate} · ${statusLabel}: ${lastFetchTime}`;
}

/**
 * Formats a raw INR number into Indian numbering conventions (Crore, Lakh, Thousand)
 */
export function formatINRAmount(inrValue: number): string {
  if (isNaN(inrValue) || inrValue === 0) return "₹0";

  const absVal = Math.abs(inrValue);

  if (absVal >= 10000000) {
    // 1 Crore = 10,000,000
    const cr = inrValue / 10000000;
    return `₹${cr >= 100 ? cr.toFixed(0) : cr.toFixed(2)} Crore`;
  } else if (absVal >= 100000) {
    // 1 Lakh = 100,000
    const lakh = inrValue / 100000;
    return `₹${lakh.toFixed(2)} Lakh`;
  } else if (absVal >= 1000) {
    // Thousands or unit prices (e.g. ₹19,300/kW)
    return `₹${Math.round(inrValue).toLocaleString("en-IN")}`;
  } else {
    // Small decimal rates (e.g. ₹8.40/W or ₹1.14/kWh)
    return `₹${inrValue.toFixed(2)}`;
  }
}

/**
 * Injects mathematically precise INR equivalent into original price string
 * without altering original reported currency.
 *
 * Example input: "RMB 1,609 / kW", currency: "CNY"
 * Output: "RMB 1,609 / kW (~₹19,228/kW)"
 *
 * Example input: "US$ 0.10 / W", currency: "USD"
 * Output: "US$ 0.10 / W (~₹8.40/W)"
 *
 * Example input: "4 MW Turbine: ~RMB 6.44 Million", currency: "RMB"
 * Output: "4 MW Turbine: ~RMB 6.44 Million (~₹7.70 Crore)"
 */
export function enhancePriceWithLiveINR(
  originalDisplay: string,
  currencyCode: string
): { enhancedText: string; fxInfo: string } {
  if (!originalDisplay || currencyCode.toUpperCase() === "INR") {
    return {
      enhancedText: originalDisplay,
      fxInfo: "Reported in INR",
    };
  }

  const rate = getRateToINR(currencyCode);
  const fxInfo = getFXMetaDataInfo(currencyCode);

  // If already contains an (~₹... conversion, return cleanly
  if (originalDisplay.includes("(~₹")) {
    return { enhancedText: originalDisplay, fxInfo };
  }

  // Parse numerical value & multiplier from string
  const text = originalDisplay.trim();

  // Pattern 1: RMB 6.44 Million or $1.2 Billion
  const millionMatch = text.match(/(RMB|CNY|USD|\$|EUR|€|AED|GBP|£)\s*([\d,.]+)\s*(Million|M|Billion|B)/i);
  if (millionMatch) {
    const rawNum = parseFloat(millionMatch[2].replace(/,/g, ""));
    const unitScale = millionMatch[3].toLowerCase().startsWith("b") ? 1000000000 : 1000000;
    if (!isNaN(rawNum)) {
      const inrTotal = rawNum * unitScale * rate;
      const inrFormatted = formatINRAmount(inrTotal);
      return {
        enhancedText: `${text} (~${inrFormatted})`,
        fxInfo,
      };
    }
  }

  // Pattern 2: RMB 1,609 / kW or US$ 0.10 / W or €0.0534 / kWh
  const unitMatch = text.match(/([\d,.]+)\s*\/\s*(kW|MW|Wp|W|kWh)/i);
  if (unitMatch) {
    const rawNum = parseFloat(unitMatch[1].replace(/,/g, ""));
    const unit = unitMatch[2];
    if (!isNaN(rawNum)) {
      const inrVal = rawNum * rate;
      const inrFormatted = formatINRAmount(inrVal);
      return {
        enhancedText: `${text} (~${inrFormatted}/${unit})`,
        fxInfo,
      };
    }
  }

  // Pattern 3: AED 4.97 fils / kWh (special UAE fils unit: 100 fils = 1 AED)
  const filsMatch = text.match(/([\d,.]+)\s*fils\s*\/\s*kWh/i);
  if (filsMatch) {
    const filsNum = parseFloat(filsMatch[1].replace(/,/g, ""));
    if (!isNaN(filsNum)) {
      const aedVal = filsNum / 100; // convert fils to AED
      const inrVal = aedVal * rate;
      return {
        enhancedText: `${text} (~₹${inrVal.toFixed(2)}/kWh)`,
        fxInfo,
      };
    }
  }

  // Generic fallback if numbers are present
  const genericMatch = text.match(/([\d,.]+)/);
  if (genericMatch) {
    const rawNum = parseFloat(genericMatch[1].replace(/,/g, ""));
    if (!isNaN(rawNum) && rawNum > 0) {
      const inrVal = rawNum * rate;
      const inrFormatted = formatINRAmount(inrVal);
      return {
        enhancedText: `${text} (~${inrFormatted})`,
        fxInfo,
      };
    }
  }

  return { enhancedText: originalDisplay, fxInfo };
}
