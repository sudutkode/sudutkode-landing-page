/**
 * SEO Helper Utility
 * Provides functions to generate meta tags, structured data, and SEO-related content
 * Used for dynamic meta tag generation and SEO optimization
 */

export const SITE_CONFIG = {
  name: "SudutKode",
  url: "https://sudutkode.web.app",
  email: "sudutkode@gmail.com",
  logo: "https://sudutkode.web.app/sudut-kode-logo.png",
  location: "Jakarta, Indonesia",
  description:
    "SudutKode adalah software house terpercaya di Indonesia yang menyediakan jasa pembuatan aplikasi Android, website, UI/UX design, dan konsultasi teknologi.",
  keywords: [
    "software house",
    "software house indonesia",
    "jasa pembuatan aplikasi",
    "jasa pembuatan website",
    "konsultan teknologi",
    "aplikasi android",
    "software house Jakarta",
    "software house terpercaya",
  ],
  socialMedia: {
    github: "https://github.com/sudutkode",
    linkedin: "https://linkedin.com/company/sudutkode",
  },
};

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  url?: string;
}

/**
 * Generate structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location,
      addressCountry: "ID",
    },
    areaServed: [
      {"@type": "City", name: "Jakarta"},
      {"@type": "Country", name: "Indonesia"},
    ],
    serviceType: [
      "Web Development Services",
      "Mobile Application Development",
      "Application Design",
      "Technology Consulting",
    ],
  };
}

/**
 * Generate structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    sameAs: [SITE_CONFIG.socialMedia.github, SITE_CONFIG.socialMedia.linkedin],
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Jakarta",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: SITE_CONFIG.email,
    },
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{name: string; url: string}>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage schema (useful for FAQ sections)
 */
export function generateFAQSchema(
  items: Array<{question: string; answer: string}>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate meta tags object for Page metadata updates
 */
export function generateMetaTags(config: SEOMetaTags) {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(", ") || SITE_CONFIG.keywords.join(", "),
    ogTitle: config.title,
    ogDescription: config.description,
    ogImage: config.ogImage || SITE_CONFIG.logo,
    ogType: config.ogType || "website",
    ogUrl: config.url || SITE_CONFIG.url,
  };
}

/**
 * Get primary keywords for current page
 */
export function getPrimaryKeywords(): string[] {
  return [
    "software house",
    "software house indonesia",
    "jasa pembuatan aplikasi",
    "jasa pembuatan website",
    "software house Jakarta",
  ];
}

/**
 * Get secondary keywords for current page
 */
export function getSecondaryKeywords(): string[] {
  return [
    "jasa aplikasi android indonesia",
    "jasa aplikasi mobile indonesia",
    "konsultan teknologi indonesia",
    "software house terpercaya",
  ];
}

export default {
  SITE_CONFIG,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateMetaTags,
  getPrimaryKeywords,
  getSecondaryKeywords,
};
