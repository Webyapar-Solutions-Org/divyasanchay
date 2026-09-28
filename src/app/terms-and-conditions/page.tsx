import type { Metadata } from "next";
import Footer from "../Footer";
import Header from "../Header";
import { breadcrumbJsonLd, createMetadata, JsonLd } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Read the Divyasanchay Enterprises terms and conditions for website access, investment information, mutual fund risk disclosures, third-party links, and user responsibilities.",
  path: "/terms-and-conditions",
  keywords: ["Divyasanchay terms and conditions", "mutual fund risk disclosure", "website terms"],
});

const sections = [
  {
    title: "Acceptance of terms",
    content: [
      "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with these terms, please do not use the website.",
      "Divyasanchay Enterprises may update these terms from time to time. Continued use of the website after updates means you accept the revised terms.",
    ],
  },
  {
    title: "Nature of services",
    content: [
      "Divyasanchay Enterprises is an AMFI registered mutual fund distributor. Information on this website is provided to create awareness and help users understand available financial products and related services.",
      "The website content is for general informational purposes only. It should not be treated as a guarantee of returns, personalized investment advice, tax advice, legal advice, or a promise that any investment will meet a specific objective.",
    ],
  },
  {
    title: "Mutual fund risk disclosure",
    content: [
      "Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.",
      "Past performance is not an indicator of future returns. Returns may vary depending on market conditions, scheme performance, investment duration, costs, and other factors.",
      "Divyasanchay Enterprises does not offer assured, guaranteed, fixed-return, or similar prohibited schemes.",
    ],
  },
  {
    title: "User responsibility",
    content: [
      "You are responsible for evaluating whether any product, plan, or service is suitable for your financial situation, risk appetite, time horizon, and goals.",
      "Before making an investment decision, you should review official scheme documents and consult a qualified financial, tax, or legal professional where appropriate.",
      "You agree to provide accurate information when contacting us or requesting services through the website.",
    ],
  },
  {
    title: "Website content",
    content: [
      "We try to keep the website information accurate and current, but we do not warrant that all content is complete, error-free, uninterrupted, or suitable for every user.",
      "Calculators, examples, projections, and illustrations on the website are indicative only and may be based on assumptions. Actual results may differ.",
    ],
  },
  {
    title: "Third-party links and services",
    content: [
      "This website may include links, maps, embedded content, or references to third-party websites and services. These are provided for convenience.",
      "Divyasanchay Enterprises is not responsible for the content, privacy practices, availability, accuracy, or actions of third-party websites.",
    ],
  },
  {
    title: "Intellectual property",
    content: [
      "The website design, text, graphics, logos, images, and other content are owned by or licensed to Divyasanchay Enterprises unless otherwise stated.",
      "You may not copy, reproduce, modify, distribute, or commercially use website content without prior written permission, except where permitted by law.",
    ],
  },
  {
    title: "Limitation of liability",
    content: [
      "To the fullest extent permitted by applicable law, Divyasanchay Enterprises will not be liable for losses arising from use of the website, reliance on website content, technical interruptions, third-party links, or investment decisions made by users.",
      "Nothing in these terms limits liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Privacy",
    content: [
      "Use of this website is also governed by our Privacy Policy, which explains how information may be collected, used, retained, and managed.",
    ],
  },
  {
    title: "Contact",
    content: [
      "For questions about these Terms & Conditions, contact Divyasanchay Enterprises at info@divyasanchay.com or divyasanchay@gmail.com.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-and-conditions" },
        ])}
      />
      <Header />

      <section className="bg-[rgba(18,51,120,0.12)]">
        <div className="mx-auto max-w-[1260px] px-4 py-20 lg:px-0">
          <p className="text-lg font-bold uppercase text-[#ed702d]">Legal</p>
          <h1 className="mt-4 text-[50px] font-semibold leading-normal text-[#123378]">Terms & Conditions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-normal text-[#4d4d4d]">
            These terms govern access to and use of the Divyasanchay Enterprises website, content, calculators, contact forms, and related online information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-4 py-[75px] lg:px-0">
        <div className="grid gap-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-[#ddd] bg-white p-6 shadow-[0_4px_2.5px_rgba(0,0,0,0.12)]">
              <h2 className="text-2xl font-semibold text-[#123378]">{section.title}</h2>
              <div className="mt-4 space-y-3 text-lg font-normal leading-normal text-[#4d4d4d]">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
