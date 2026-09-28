import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { defaultDescription, defaultKeywords, JsonLd, organizationJsonLd, siteName, siteUrl, websiteJsonLd } from "./seo";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | AMFI Registered Mutual Fund Distributor`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  category: "finance",
  openGraph: {
    title: `${siteName} | AMFI Registered Mutual Fund Distributor`,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/figma-home/family.png",
        width: 1200,
        height: 630,
        alt: "Divyasanchay Enterprises mutual fund and wealth planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AMFI Registered Mutual Fund Distributor`,
    description: defaultDescription,
    images: ["/figma-home/family.png"],
  },
  robots: {
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}
