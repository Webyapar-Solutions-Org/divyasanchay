import type { Metadata } from "next";

export const siteUrl = "https://divyasanchay.com";
export const siteName = "Divyasanchay Enterprises";
export const defaultDescription =
  "Divyasanchay Enterprises is an AMFI registered mutual fund distributor helping investors plan SIPs, mutual funds, fixed deposits, bonds, PMS, and long-term wealth goals.";

export const contact = {
  phoneDisplay: "+91 79805 36257",
  phone: "+917980536257",
  email: "info@divyasanchay.com",
  secondaryEmail: "divyasanchay@gmail.com",
  headOffice:
    "Sapnil Residency, Flat no. F2, 2nd Floor, S. P. Mukherjee Road, Murgasol, Asansol, West Bengal, PIN-713303",
  otherOffice:
    "Cabin No.4, FF/A/5, BARCELONA MULTIPLE BUSINESS COMPLEX, near Sardar Patel Ring Road, Odhav, Ahmedabad, Gujarat 382415",
};

export const defaultKeywords = [
  "Divyasanchay Enterprises",
  "AMFI registered mutual fund distributor",
  "mutual fund distributor Asansol",
  "mutual fund distributor Ahmedabad",
  "SIP investment",
  "mutual funds",
  "fixed deposit",
  "bonds",
  "PMS",
  "financial planning",
  "wealth creation",
];

const defaultOgImage = {
  url: "/figma-home/family.png",
  width: 1200,
  height: 630,
  alt: "Divyasanchay Enterprises investment planning for families",
};

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: NonNullable<Metadata["openGraph"]>["images"];
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = [defaultOgImage],
  noIndex = false,
}: SeoConfig): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "en_IN",
      type: "website",
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["FinancialService", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/figma-home/logo-mark.png"),
  image: absoluteUrl("/figma-home/family.png"),
  description: defaultDescription,
  telephone: contact.phone,
  email: contact.email,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Sapnil Residency, Flat no. F2, 2nd Floor, S. P. Mukherjee Road, Murgasol",
      addressLocality: "Asansol",
      addressRegion: "West Bengal",
      postalCode: "713303",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Cabin No.4, FF/A/5, BARCELONA MULTIPLE BUSINESS COMPLEX, near Sardar Patel Ring Road, Odhav",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382415",
      addressCountry: "IN",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: ["Mutual Funds", "SIP", "Fixed Deposits", "Bonds", "Portfolio Management Services", "Financial Planning"],
  identifier: [
    {
      "@type": "PropertyValue",
      name: "AMFI ARN",
      value: "ARN-287401",
    },
    {
      "@type": "PropertyValue",
      name: "NJ Wealth Partner Code",
      value: "35989",
    },
  ],
  sameAs: [siteUrl],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-IN",
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
