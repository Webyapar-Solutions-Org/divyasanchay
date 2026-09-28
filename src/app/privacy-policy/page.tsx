import type { Metadata } from "next";
import Footer from "../Footer";
import Header from "../Header";
import { breadcrumbJsonLd, createMetadata, JsonLd } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the Divyasanchay Enterprises privacy policy covering website data collection, cookies, embedded content, retention, visitor rights, and privacy contact details.",
  path: "/privacy-policy",
  keywords: ["Divyasanchay privacy policy", "privacy policy"],
});

const sections = [
  {
    title: "Who we are",
    content: ["This website is operated for Divyasanchay Enterprises. Our website address is https://divyasanchay.com."],
  },
  {
    title: "Comments",
    content: [
      "When visitors leave comments, we may collect the information shown in the comments form along with the visitor's IP address and browser user agent to help detect spam.",
      "An anonymized string created from an email address may be shared with the Gravatar service to check whether the visitor uses that service. After a comment is approved, the visitor's profile picture may be visible publicly in the context of that comment.",
    ],
  },
  {
    title: "Media uploads",
    content: [
      "If you upload images to the website, avoid uploading files that include embedded location information such as EXIF GPS data. Visitors may be able to download and extract location data from uploaded images.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "If you leave a comment, you may choose to save your name, email address, and website in cookies for convenience. These cookies help you avoid entering the same details again and may last for one year.",
      "If you visit a login page, a temporary cookie may be set to check whether your browser accepts cookies. This cookie does not contain personal data and is discarded when the browser is closed.",
      "When users log in, cookies may be used to save login information and screen display preferences. Login cookies are usually retained for two days, screen preference cookies may last for one year, and selecting Remember Me may keep a login active for two weeks.",
      "If an article is edited or published, an additional cookie may be saved in the browser. It contains no personal data and only indicates the article that was edited; it expires after one day.",
    ],
  },
  {
    title: "Embedded content from other websites",
    content: [
      "Pages or articles may include embedded content such as videos, images, articles, maps, or social widgets. Embedded content behaves as if the visitor has visited the third-party website directly.",
      "Those third-party websites may collect data, use cookies, embed additional tracking, and monitor interactions with their content, especially if the visitor has an account with that website and is logged in.",
    ],
  },
  {
    title: "Who we share your data with",
    content: ["If a password reset is requested, the visitor's IP address may be included in the reset email."],
  },
  {
    title: "How long we retain your data",
    content: [
      "If comments are enabled and a visitor leaves a comment, the comment and its metadata may be retained indefinitely so follow-up comments can be recognized and approved more efficiently.",
      "For registered users, if any, personal information provided in user profiles may be stored. Users can view, edit, or delete their personal information at any time, except for usernames. Website administrators may also view and edit that information.",
    ],
  },
  {
    title: "Your rights over your data",
    content: [
      "If you have an account on this website or have left comments, you may request an exported file of the personal data held about you, including data you have provided.",
      "You may also request deletion of personal data held about you. This does not include data that must be retained for administrative, legal, or security purposes.",
    ],
  },
  {
    title: "Where your data is sent",
    content: ["Visitor comments may be checked through an automated spam detection service."],
  },
  {
    title: "Contact",
    content: [
      "For privacy-related requests, contact Divyasanchay Enterprises at info@divyasanchay.com or divyasanchay@gmail.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <Header />

      <section className="bg-[rgba(18,51,120,0.12)]">
        <div className="mx-auto max-w-[1260px] px-4 py-20 lg:px-0">
          <p className="text-lg font-bold uppercase text-[#ed702d]">Legal</p>
          <h1 className="mt-4 text-[50px] font-semibold leading-normal text-[#123378]">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-normal text-[#4d4d4d]">
            This policy explains how information may be collected, used, retained, and managed when visitors interact with Divyasanchay Enterprises online.
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
