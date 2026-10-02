import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../Footer";
import Header from "../Header";
import { loginHref } from "../constants";
import { breadcrumbJsonLd, createMetadata, JsonLd } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "About Divyasanchay Enterprises",
  description:
    "Learn about Divyasanchay Enterprises, an AMFI registered mutual fund distributor focused on trust, transparency, financial awareness, and long-term wealth creation.",
  path: "/about-us",
  keywords: ["about Divyasanchay", "AMFI ARN 287401", "NJ Wealth partner", "mutual fund distributor company"],
});

const featureCards = [
  {
    title: "Simple to Invest",
    body: "You can start investing in mutual funds easily whether you are a business person or housewife. You can apply directly online and start the process",
    icon: "/figma-home/doc-icon.svg",
    active: true,
  },
  {
    title: "Invest as low as you want",
    body: "You can start with just a minimum amount as mutual funds offer a minimum investment amount of Rs. 100 for lump-sum investments and Rs. 500 for Systematic Investment Plans (SIPs)",
    icon: "/figma-home/money-icon.svg",
  },
  {
    title: "Financial Freedom",
    body: "You can freely invest as much as you can and investing in Mutual Funds can help you in wealth creation and to achieve financial goals of life because of the power of compounding returns",
    icon: "/figma-home/rocket-icon.svg",
  },
];

const reasons = [
  "We have Highly Experienced Team",
  "Available for Dedicated Support",
  "Our Goal is to maximize your funds",
  "Our Vision is to make you wealthy, prosperous and financial independent",
  "We believe in long term bonding, trust and transparency with clients",
];

const mission = [
  "Create awareness among people about one of the best financial instruments i.e. MUTUAL FUNDS (regulated by SEBI) and promote the message of AMFI among public \"MUTUAL FUNDS SAHI HAI\"",
  "People to become financial educated and motivated to experience Mutual Funds as a right investment choice.",
  "Channelize personal savings into right financial instrument for creation of long term wealth and Investment income/portfolio income.",
  "To support our clients in setting of financial goals of their life and provide innovative solution by right investment choices to achieve them.",
  "Create long term bonding, trust and transparency with all our clients.",
];

const vision = [
  "Every citizen become aware and experienced about one of the best financial solution \"MUTUAL FUNDS\" (regulated by AMFI/SEBI)",
  "Every citizen become financial educated and an informed investor.",
  "People to achieve financial goals of their life and become wealthy, prosperous and financial independent.",
  "DIVYASANCHAY ENTERPRISES to become one of the most reliable and preferred name among Mutual Fund Distributors.",
  "To become one of the leading and trusted brand to offer right investment advice, financial planning and wealth creation.",
];

const values = [
  { label: "Trust", icon: "/figma-about/agreement.svg" },
  { label: "Transparency", icon: "/figma-about/shield.svg" },
  { label: "Relationship", icon: "/figma-about/user-group.svg" },
  { label: "Responsiveness", icon: "/figma-about/headphones.svg" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[30px] w-1 bg-[#ed702d]" />
      <p className="text-lg font-bold uppercase text-[#ed702d]">{children}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-5 pl-[27px] text-lg font-normal leading-normal text-[#111]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <Header />

      <section className="relative h-[502px] overflow-hidden">
        <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill priority sizes="100vw" src="/figma-about/hero.png" />
        <div className="absolute inset-0 bg-[rgba(18,51,120,0.3)]" />
        <div className="relative mx-auto flex h-full max-w-[1260px] flex-col justify-center px-4 text-white lg:px-0">
          <h1 className="w-[326px] text-[50px] font-semibold leading-normal">Our Company</h1>
          <p className="mt-[60px] text-2xl font-bold uppercase">Home / About Us</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-4 py-[75px] lg:px-0">
        <div className="grid items-center gap-9 lg:grid-cols-[796px_428px]">
          <div>
            <div className="space-y-[30px]">
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="text-4xl font-bold leading-normal">
                What is <span className="text-[#ed702d]">DIVYASANCHAY?</span>
              </h2>
            </div>
            <div className="mt-5 max-w-[771px] space-y-4 text-lg font-normal leading-normal text-[#111]">
              <p>
                Divyasanchay Enterprises is an organization incorporated on 01 June 2023 with an objective of creating awareness among people about MUTUAL FUNDS which is one of the best financial instruments and motivate citizen to experience Mutual Funds as a right investment choice.
                <br />
                &quot;MUTUAL FUNDS SAHI HAI&quot;
              </p>
              <p>Divyasanchay Enterprises has been registered with AMFI (Association of Mutual Funds in India) vide registration no.ARN-287401 and engaged in promotion, distribution, selling and marketing of Mutual Fund products.</p>
              <p>We assist you in setting of financial goals of your life and provide innovative solution by right investment choices to achieve them.</p>
              <p>We joined hands with NJ India Invest Private Limited, as NJ Wealth Partner (35989) for the distribution of financial products and related services offered by its division &quot;N J Wealth - Financial Products Distributors Network.&quot;</p>
              <p>We adhere to strict compliance with AMFI Code of conduct and SEBI regulatory guidelines.</p>
            </div>
          </div>
          <Image alt="" className="h-[269px] w-full object-cover" height={269} src="/figma-about/intro.png" width={428} />
        </div>

        <div className="mt-[50px] grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className={
                card.active
                  ? "flex h-[300px] flex-col justify-center gap-5 rounded-lg bg-gradient-to-br from-[rgba(237,112,45,0.8)] to-[rgba(18,51,120,0.8)] p-4 text-white"
                  : "flex h-[300px] flex-col justify-center gap-5 rounded-lg border border-[#ddd] bg-white p-4 text-[#4d4d4d] shadow-[0_4px_2.5px_rgba(0,0,0,0.25)]"
              }
            >
              <Image alt="" height={75} src={card.icon} width={75} />
              <h3 className={card.active ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#123378]"}>{card.title}</h3>
              <p className="text-lg font-normal leading-normal">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative h-[500px] overflow-hidden">
        <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill sizes="100vw" src="/figma-about/office-banner.png" />
        <div className="absolute inset-0 bg-[rgba(18,51,120,0.5)]" />
      </section>

      <section className="mx-auto max-w-[1260px] px-4 py-[75px] lg:px-0">
        <div className="grid items-center gap-[70px] lg:grid-cols-[469px_1fr]">
          <div className="relative h-[452px] overflow-hidden rounded-lg border border-[#ddd]">
            <Image alt="" className="h-full w-full object-cover" height={452} src="/figma-about/advisor.png" width={469} />
            <div className="absolute inset-0 bg-[rgba(18,51,120,0.2)]" />
          </div>
          <div>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="mt-[30px] text-4xl font-bold leading-normal">An investment that takes you to great heights</h2>
            <ul className="mt-[50px] space-y-5 text-lg font-normal text-[#123378]">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-5">
                  <Image alt="" height={24} src="/figma-home/check-icon.svg" width={24} />
                  {reason}
                </li>
              ))}
            </ul>
            <a className="mt-[50px] flex h-[50px] w-[220px] items-center justify-center rounded-lg bg-[#ed702d] px-4 text-2xl font-normal text-white" href={loginHref} rel="noreferrer" target="_blank">
              Start Investing
            </a>
          </div>
        </div>

        <div className="my-[75px] border-t border-[#ddd]" />

        <div className="grid items-center gap-[60px] lg:grid-cols-[832px_357px]">
          <div>
            <h2 className="text-4xl font-bold leading-normal">Our Mission</h2>
            <div className="mt-[50px]">
              <BulletList items={mission} />
            </div>
          </div>
          <div className="relative size-[357px] overflow-hidden rounded-lg">
            <Image alt="" className="h-full w-full object-contain" height={357} src="/figma-about/mission-rocket.png" width={357} />
            <div className="absolute inset-0 bg-[rgba(18,51,120,0.2)]" />
          </div>
        </div>

        <div className="mt-[75px] grid items-center gap-[35px] lg:grid-cols-[374px_1fr]">
          <div className="relative size-[374px] overflow-hidden rounded-lg">
            <Image alt="" className="h-full w-full object-contain" height={374} src="/figma-about/vision-search.png" width={374} />
            <div className="absolute inset-0 bg-[rgba(18,51,120,0.2)]" />
          </div>
          <div>
            <h2 className="text-4xl font-bold leading-normal">Our Vision</h2>
            <div className="mt-[50px]">
              <BulletList items={vision} />
            </div>
          </div>
        </div>

        <div className="my-[75px] border-t border-[#ddd]" />

        <section className="text-center">
          <h2 className="text-4xl font-bold leading-normal">Our Values</h2>
          <div className="mx-auto mt-[50px] flex max-w-[832px] flex-wrap justify-center gap-6">
            {values.map((value) => (
              <div key={value.label} className="flex h-[135px] w-[190px] flex-col items-center justify-center gap-4 rounded bg-[rgba(18,51,120,0.2)] p-4">
                <Image alt="" height={50} src={value.icon} width={50} />
                <p className="text-lg font-normal text-[#123378]">{value.label}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
