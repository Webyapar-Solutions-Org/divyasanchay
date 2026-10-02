import Image from "next/image";
import type { Metadata } from "next";
import Footer from "../Footer";
import Header from "../Header";
import { breadcrumbJsonLd, contact, createMetadata, JsonLd, siteUrl } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Divyasanchay Enterprises",
  description:
    "Contact Divyasanchay Enterprises for mutual fund, SIP, portfolio review, fixed deposit, bond, PMS, and financial planning assistance in Asansol, Ahmedabad, and across India.",
  path: "/contact",
  keywords: ["contact Divyasanchay", "mutual fund distributor contact", "Asansol office", "Ahmedabad office", "financial planning contact"],
});

const contactItems = [
  {
    title: "Registered Office",
    body: "Sapnil Residency,Flat no. F2, 2nd Floor, S. P. Mukherjee Road, Murgasol, Asansol, West Bengal, PIN-713303",
    icon: "/figma-contact/location.svg",
  },
  {
    title: "Other Office",
    body: "Cabin No.4, FF/A/5, BARCELONA MULTIPLE BUSINESS COMPLEX, near Sardar Patel Ring Road, Odhav, Ahmedabad, Gujarat 382415",
    icon: "/figma-contact/location.svg",
  },
  {
    title: "Email",
    body: ["info@divyasanchay.com", "divyasanchay@gmail.com"],
    icon: "/figma-contact/mail.svg",
  },
  {
    title: "Phone",
    body: "+91 79805 36257",
    icon: "/figma-contact/calling.svg",
  },
];

function MapPanel() {
  return (
    <div className="relative h-[496px] overflow-hidden rounded-lg border border-[#ddd] bg-[#eaf4fc]">
      <iframe
        allowFullScreen
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.90870028139!2d86.98618017484361!3d23.679222791506096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f719126658e743%3A0x4ac6c1357776547b!2sSAPNIL%20RESIDENCY!5e0!3m2!1sen!2sin!4v1790621383034!5m2!1sen!2sin"
        title="SAPNIL RESIDENCY on Google Maps"
      />
    </div>
  );
}

export default function Contact() {
  const contactJsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact#contact-page`,
      name: "Contact Divyasanchay Enterprises",
      url: `${siteUrl}/contact`,
      mainEntity: {
        "@id": `${siteUrl}/#organization`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: contact.phone,
        email: contact.email,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111]">
      <JsonLd data={contactJsonLd} />
      <Header />

      <section className="relative h-[502px] overflow-hidden">
        <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill priority sizes="100vw" src="/figma-contact/hero.png" />
        <div className="absolute inset-0 bg-[rgba(18,51,120,0.3)]" />
        <div className="relative mx-auto flex h-full max-w-[1260px] flex-col justify-center px-4 text-white lg:px-0">
          <h1 className="w-[326px] text-[50px] font-semibold leading-normal">Get In Touch</h1>
          <p className="mt-[60px] text-2xl font-bold uppercase">Home / Contact</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1260px] items-center gap-[38px] px-4 py-[75px] lg:grid-cols-[560px_662px] lg:px-0">
        <div>
          <h2 className="w-full max-w-[560px] text-4xl font-bold leading-normal">Feel free to keep in touch with us</h2>
          <p className="mt-[30px] w-full max-w-[445px] text-lg font-normal leading-normal">
            We&apos;re here to answer your questions and help you make informed financial decisions.
          </p>

          <div className="mt-5 space-y-5">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <Image alt="" height={55} src={item.icon} width={55} />
                <div className="max-w-[317px]">
                  <h3 className="text-lg font-semibold text-[#111]">{item.title}</h3>
                  {Array.isArray(item.body) ? (
                    <div className="mt-2 space-y-1 text-base font-normal leading-normal">
                      {item.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-base font-normal leading-normal">{item.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <MapPanel />
      </section>

      <Footer />
    </main>
  );
}
