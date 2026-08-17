import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, any>;
}

const DEFAULT_TITLE = "GoWindSun India Private Limited";
const DEFAULT_DESCRIPTION =
  "GoWindSun India Private Limited delivers integrated renewable energy solutions across solar, wind, and battery storage to accelerate the clean energy transition.";
const DEFAULT_KEYWORDS =
  "Renewable Energy India, Utility Scale Solar, Wind Energy Developer, Solar Wind Hybrid, BESS Battery Storage, Open Access Solar, Group Captive PPA, GoWindSun India";
const SITE_URL = "https://gowindsun.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
}: SEOProps) {
  const location = useLocation();
  const rawPath = canonical || location.pathname;
  const cleanPath = rawPath === "/" ? "" : rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const currentUrl = `${SITE_URL}${cleanPath}`;

  // Strict SEO Title Mapping — Accepts Exact Title Provided or Defaults to Home Title
  const pageTitle = title || DEFAULT_TITLE;

  useEffect(() => {
    // 1. Update Document Title
    document.title = pageTitle;

    // Helper to set or update meta tag
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const attrName = selector.includes("property=") ? "property" : "name";
        const attrVal = selector.split("=")[1].replace(/["'\]]/g, "");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to set or update link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', "content", description);
    setMetaTag('meta[name="keywords"]', "content", keywords);

    // 3. OpenGraph Meta Tags
    setMetaTag('meta[property="og:title"]', "content", pageTitle);
    setMetaTag('meta[property="og:description"]', "content", description);
    setMetaTag('meta[property="og:type"]', "content", ogType);
    setMetaTag('meta[property="og:url"]', "content", currentUrl);
    setMetaTag('meta[property="og:image"]', "content", ogImage);

    // 4. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "content", pageTitle);
    setMetaTag('meta[name="twitter:description"]', "content", description);
    setMetaTag('meta[name="twitter:image"]', "content", ogImage);

    // 5. Canonical Link (Non-WWW HTTPS Source of Truth)
    setLinkTag("canonical", currentUrl);

    // 6. JSON-LD Structured Data
    let scriptElement = document.querySelector("#json-ld-schema") as HTMLScriptElement;
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "json-ld-schema";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "GoWindSun India Private Limited",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: DEFAULT_DESCRIPTION,
        address: {
          "@type": "PostalAddress",
          addressCountry: "India",
        },
      });
    }
  }, [pageTitle, description, keywords, currentUrl, ogImage, ogType, jsonLd]);

  return null;
}

export default SEO;
