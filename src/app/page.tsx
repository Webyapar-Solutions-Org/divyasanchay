import Image from "next/image";
import type { Metadata } from "next";
import Footer from "./Footer";
import Header from "./Header";
import SipCalculator from "./SipCalculator";
import { breadcrumbJsonLd, createMetadata, JsonLd, siteUrl } from "./seo";

export const metadata: Metadata = createMetadata({
  title: "Mutual Fund Distributor for SIPs, Wealth Planning and Investments",
  description:
    "Start SIPs and plan long-term wealth with Divyasanchay Enterprises, an AMFI registered mutual fund distributor and NJ Wealth partner serving investors across India.",
  path: "/",
  keywords: ["SIP calculator", "NJ Wealth partner", "ARN 287401", "mutual fund SIP planning"],
});

const benefits = [
  {
    title: "Simple to Invest",
    body: "You can start investing in mutual funds easily whether you are a business person or housewife. Apply directly online and start the process.",
    icon: "/figma-home/doc-icon.svg",
    active: true,
  },
  {
    title: "Invest as low as you want",
    body: "You can start with just a minimum amount and Rs. 100 for lump-sum investments and Rs. 500 for Systematic Investment Plans (SIPs).",
    icon: "/figma-home/money-icon.svg",
  },
  {
    title: "Financial Freedom",
    body: "You can freely invest as much as you can and investing in Mutual Funds can help you in wealth creation and to achieve financial goals.",
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

const testimonials = [
  "Divyasanchay helps to start my financial planning with easy seamless process, I recommend to contact them for all your financial goals.",
  "Divyasanchay helps to start my financial planning with easy seamless process, I recommend to contact them for all your financial goals.",
  "Divyasanchay helps to start my financial planning with easy seamless process, I recommend to contact them for all your financial goals.",
];

function BenefitIcon({ src, active = false }: { src: string; active?: boolean }) {
  return (
    <span className={active ? "flex size-[55px] items-center justify-center rounded bg-[#f4f8ff]/10" : "flex size-[55px] items-center justify-center"}>
      <Image alt="" height={48} src={src} width={48} />
    </span>
  );
}

export default function Home() {
  const homeJsonLd = [
    breadcrumbJsonLd([{ name: "Home", path: "/" }]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/#mutual-fund-distribution`,
      name: "Mutual fund distribution and investment planning",
      serviceType: "Mutual fund distribution",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      description:
        "AMFI registered mutual fund distribution, SIP planning, financial goal planning, portfolio review, fixed deposits, bonds, and PMS assistance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1c2430]">
      <JsonLd data={homeJsonLd} />
      <Header />

      <section className="bg-[rgba(18,51,120,0.15)]">
        <div className="mx-auto grid max-w-[1260px] items-center gap-8 px-4 py-10 lg:min-h-[772px] lg:grid-cols-[595px_378px] lg:gap-[207px] lg:px-0 lg:py-[50px]">
          <div>
            <p className="mb-6 text-sm font-normal uppercase text-[#123378] lg:mb-[45px] lg:text-2xl">Invest.Grow.Build</p>
            <h1 className="max-w-[595px] text-3xl font-semibold leading-normal text-[#123378] lg:text-[40px]">
              Secure Your Future with <span className="text-[#f3702b]">DIVYASANCHAY</span>
            </h1>
            <p className="mt-5 max-w-[554px] text-base font-normal leading-normal text-[#4d4d4d] lg:text-lg">
              Build long-term wealth with expert guidance, personalized investment plans, and trusted mutual fund solutions designed for every stage of life.
            </p>
            <div className="mt-8 space-y-5 text-base font-normal text-[#111] lg:mt-[50px] lg:text-lg">
              <div className="flex items-center gap-4">
                <Image alt="AMFI" className="size-[45px] object-cover" height={45} src="/figma-home/amfi.png" width={45} />
                <p>AMFI Registered Mutual Fund Distributor<br />ARN: 287401</p>
              </div>
              <div className="flex items-center gap-4">
                <Image alt="NJ Wealth" className="h-[43px] w-[106px] object-cover object-left" height={43} src="/figma-home/nj-wealth.png" width={106} />
                <p>NJ Wealth Partner<br />Partner Code: 35989</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex h-[420px] w-full max-w-[378px] items-center justify-center rounded-[10px] border border-[#111] bg-white lg:h-[672px]">
            <Image alt="" height={30} src="/figma-home/hero-play.svg" width={30} />
          </div>
        </div>
      </section>

      <SipCalculator />

      <section className="mx-auto max-w-[1260px] border-t border-[#d8d8d8] px-4 py-16 lg:px-0">
        <h2 className="text-3xl font-bold text-[#123378] lg:text-4xl">Start to invest through best mutual fund schemes</h2>
        <div className="mt-[50px] grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className={
                benefit.active
                  ? "h-[285px] rounded bg-gradient-to-br from-[#df815b] to-[#123378] p-8 text-white shadow-md"
                  : "h-[285px] rounded border border-[#ddd] bg-white p-8 shadow-md"
              }
            >
              <BenefitIcon active={benefit.active} src={benefit.icon} />
              <h3 className={benefit.active ? "mt-8 text-xl font-bold text-white" : "mt-8 text-xl font-bold text-[#123378]"}>
                {benefit.title}
              </h3>
              <p className="mt-5 text-sm font-normal leading-normal">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#7089b6] text-white">
        <div className="mx-auto grid max-w-[1260px] items-center gap-8 px-4 py-10 lg:grid-cols-[595px_1fr] lg:px-0 lg:py-0">
          <div>
            <h2 className="max-w-[595px] text-3xl font-bold leading-normal lg:text-4xl">Invest Smartly and makes your family secure and happy</h2>
            <p className="mt-8 max-w-[554px] text-lg font-normal leading-normal">
              Mutual Funds are well suited for creating wealth at every stage of life. Just starting early and investing regularly can help secure your family&apos;s future and Divyasanchay can guide and help to choose best plans according to your needs.
            </p>
          </div>
          <div className="relative h-[330px] overflow-hidden">
            <div className="absolute bottom-[-28px] left-0 size-[230px] rounded-full border-[28px] border-[#5d78a8]" />
            <Image alt="" className="absolute bottom-0 right-0 h-[330px] w-[560px] object-contain object-right-bottom" height={195} src="/figma-home/family.png" width={560} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1260px] gap-16 border-b border-[#ddd] px-4 py-20 lg:grid-cols-[460px_1fr] lg:px-0">
        <div className="relative h-[450px] overflow-hidden rounded bg-[#d9e0eb]">
          <Image alt="" className="h-full w-full object-cover object-top" height={450} src="/figma-home/advisor.png" width={460} />
        </div>
        <div className="self-center">
          <p className="border-l-4 border-[#ed702d] pl-4 text-sm font-bold uppercase text-[#ed702d]">Why Choose Us</p>
          <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-normal text-[#111]">An investment that takes you to great hights</h2>
          <ul className="mt-12 space-y-6 text-sm font-normal text-[#123378]">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-5">
                <Image alt="" height={16} src="/figma-home/check-icon.svg" width={16} />
                {reason}
              </li>
            ))}
          </ul>
          <button className="mt-12 h-[60px] rounded-[10px] bg-[#ed702d] px-9 text-2xl font-normal text-white">
            Start Investing
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-20 text-center lg:px-0">
        <div className="flex justify-center gap-3">
          <span className="h-[30px] w-1 bg-[#ed702d]" />
          <p className="text-lg font-bold uppercase text-[#ed702d]">Testimonials</p>
        </div>
        <h2 className="mt-4 text-4xl font-bold text-[#111]">Our Client Reviews</h2>
        <p className="mt-4 text-base font-normal text-[#4d4d4d]">
          Hear what our valued clients have to say about their investment journey and experience with Divyasanchay.
        </p>
        <div className="relative mt-5">
          <button aria-label="Previous testimonial" className="absolute left-0 top-[120px] hidden size-[42px] items-center justify-center rounded-full border border-[#123378] bg-white shadow md:flex">
            <Image alt="" height={20} src="/figma-home/prev.svg" width={20} />
          </button>
          <div className="mx-auto grid max-w-[1260px] gap-6 text-left md:grid-cols-3">
            {testimonials.map((quote, index) => (
              <article key={index} className={index > 0 ? "hidden md:block" : ""}>
                <div className="flex h-[240px] items-center justify-center rounded bg-[#f9f8f6] p-4">
                  <p className="text-2xl font-normal italic leading-normal text-[#111]">&quot;{quote}&quot;</p>
                </div>
                <div className="mt-[23px] flex items-center gap-4 px-4">
                  <Image alt="" className="size-[50px] rounded-full" height={50} src="/figma-home/avatar.png" width={50} />
                  <strong className="text-lg font-bold text-[#111]">Kinnar Shah</strong>
                </div>
              </article>
            ))}
          </div>
          <button aria-label="Next testimonial" className="absolute right-0 top-[120px] hidden size-[42px] items-center justify-center rounded-full border border-[#123378] bg-white shadow md:flex">
            <Image alt="" height={20} src="/figma-home/next.svg" width={20} />
          </button>
        </div>
        <div className="mt-16 flex justify-center gap-2">
          <span className="h-[10px] w-6 rounded-full bg-[#f3702b]" />
          <span className="size-[10px] rounded-full bg-[#d9d9d9]" />
          <span className="size-[10px] rounded-full bg-[#d9d9d9]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
