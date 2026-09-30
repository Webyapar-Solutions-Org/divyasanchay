import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../Footer";
import Header from "../Header";
import { loginHref } from "../constants";
import { breadcrumbJsonLd, createMetadata, JsonLd, siteUrl } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Investment Products: Mutual Funds, PMS, Fixed Deposits and Bonds",
  description:
    "Explore Divyasanchay Enterprises investment products including mutual funds, SIPs, ELSS, PMS, company fixed deposits, tax saving bonds, NRI investments, and portfolio review.",
  path: "/our-products",
  keywords: ["mutual fund products", "ELSS tax saving mutual fund", "PMS", "company fixed deposit", "tax saving bonds", "NRI investments"],
});

const products = [
  {
    title: "Mutual Fund",
    description: ["Debt", "Equity", "ELSS (Tax Saving Mutual Fund)", "Gold Mutual Fund"],
    image: "/figma-products/mutual-fund.png",
  },
  {
    title: "PMS",
    description: ["Portfolio Management System", "(PMS)"],
    image: "/figma-products/pms.png",
  },
  {
    title: "Fixed Deposit",
    description: ["Company Fixed Deposit"],
    image: "/figma-products/fixed-deposit.png",
  },
  {
    title: "Bonds",
    description: ["Tax Saving Bonds"],
    image: "/figma-products/bonds.png",
  },
];

const services = [
  "Financial Assessment",
  "Retirement Assessment",
  "Child Future Assessment",
  "Portfolio Review",
  "NRI Investments",
];

function SectionEyebrow({ children, large = false }: { children: string; large?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={large ? "h-[30px] w-1 bg-[#ed702d]" : "h-[30px] w-0.5 bg-[#ed702d]"} />
      <p className={large ? "text-2xl font-bold uppercase text-[#ed702d]" : "text-lg font-bold uppercase text-[#ed702d]"}>
        {children}
      </p>
    </div>
  );
}

export default function OurProducts() {
  const productsJsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Products", path: "/our-products" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteUrl}/our-products#products`,
      name: "Investment products offered by Divyasanchay Enterprises",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: product.title,
          description: product.description.join(", "),
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111]">
      <JsonLd data={productsJsonLd} />
      <Header />

      <section className="relative h-[502px] overflow-hidden">
        <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill priority sizes="100vw" src="/figma-products/hero.png" />
        <div className="absolute inset-0 bg-[rgba(18,51,120,0.3)]" />
        <div className="relative mx-auto flex h-full max-w-[1260px] flex-col justify-center px-4 text-white lg:px-0">
          <h1 className="text-[50px] font-semibold leading-normal">Our Products</h1>
          <p className="mt-[60px] text-2xl font-bold uppercase">Home / Product</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-4 pb-[75px] pt-[75px] lg:px-0">
        <div className="space-y-5">
          <SectionEyebrow>Our Products</SectionEyebrow>
          <h2 className="text-4xl font-bold text-[#123378]">Smart Investment Options</h2>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.title} className="h-[376px] overflow-hidden rounded-lg border border-[#ddd] bg-white shadow-[0_4px_2.5px_rgba(0,0,0,0.25)]">
              <Image alt="" className="h-[198px] w-full object-cover" height={198} src={product.image} width={297} />
              <div className="px-4 pt-5">
                <h3 className="text-2xl font-semibold text-[#123378]">{product.title}</h3>
                <div className="mt-5 space-y-1 text-lg font-normal leading-normal text-[#4d4d4d]">
                  {product.description.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] border-t border-[#ddd] px-4 pb-[75px] pt-[75px] lg:px-0">
        <SectionEyebrow large>What We Provide</SectionEyebrow>
        <p className="mt-[30px] text-lg font-semibold text-[#123378]">
          From SIPs to long-term investment plans, we provide personalized mutual fund solutions backed by expert guidance.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service} className="flex h-[200px] flex-col justify-center gap-10 rounded-lg border border-[#ddd] bg-white p-4 shadow-[0_4px_2.5px_rgba(0,0,0,0.25)]">
              <Image alt="" height={50} src="/figma-products/check-circle.svg" width={50} />
              <h3 className="text-2xl font-semibold text-[#123378]">{service}</h3>
            </article>
          ))}
        </div>

        <a className="mt-9 flex h-[60px] w-full max-w-[340px] items-center justify-center rounded-lg bg-[#ed702d] px-4 text-2xl font-normal text-white" href={loginHref} rel="noreferrer" target="_blank">
          Start Investing
        </a>
      </section>

      <Footer />
    </main>
  );
}
