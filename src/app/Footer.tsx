"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Header";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/our-products" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const headOfficeAddress = "Sapnil Residency,Flat no. F2, 2nd Floor, S. P. Mukherjee Road, Murgasol, Asansol, West Bengal, PIN-713303";
const otherOfficeAddress = "Cabin No.4, FF/A/5, BARCELONA MULTIPLE BUSINESS COMPLEX, near Sardar Patel Ring Road, Odhav, Ahmedabad, Gujarat 382415";

function mapHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden text-white">
      <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill sizes="100vw" src="/figma-products/footer-bg.png" />
      <div className="absolute inset-0 bg-[rgba(18,51,120,0.2)]" />

      <div className="relative mx-auto grid max-w-[1260px] gap-10 px-4 pb-[50px] pt-[85px] lg:grid-cols-[287px_143px_269px_327px] lg:gap-[82px] lg:px-0">
        <div>
          <Link aria-label="Divyasanchay home" href="/">
            <Logo />
          </Link>
          <h3 className="mt-5 text-2xl font-bold">Divyasanchay Enterprises</h3>
          <p className="mt-[11px] text-lg font-normal">Wealth creation ki Anokhi shuruvaat</p>
          <p className="mt-[25px] text-lg font-semibold">Find Us</p>
          <div className="mt-4 flex gap-5">
            <a aria-label="Facebook" href="#" className="block size-10">
              <Image alt="" className="size-10" height={40} src="/figma-home/facebook.png" width={40} />
            </a>
            <a aria-label="Instagram" href="#" className="block size-10">
              <Image alt="" className="size-10" height={40} src="/figma-home/instagram.png" width={40} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase">Menu</h4>
          <ul className="mt-5 space-y-4 text-base font-normal">
            {footerLinks.map((item) => {
              const isActive = item.href !== "#" && item.href === pathname;

              return (
                <li key={item.label}>
                  <Link className={isActive ? "font-semibold text-[#ed702d]" : "transition-colors hover:text-[#ed702d]"} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase">Contact Us</h4>
          <div className="mt-5 space-y-3 text-base font-normal">
            <p className="flex items-center gap-1">
              Mobile:
              <a className="rounded border border-white px-[10px] py-2 text-xl font-bold transition-colors hover:bg-white hover:text-[#123378]" href="tel:+917980536257">
                (+91) 79805-36257
              </a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a className="transition-colors hover:text-[#ed702d]" href="mailto:info@divyasanchay.com">info@divyasanchay.com</a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a className="transition-colors hover:text-[#ed702d]" href="mailto:divyasanchay@gmail.com">divyasanchay@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase">Company Address:</h4>
          <p className="mt-5 text-base font-normal leading-normal">
            <span className="font-semibold">Head Office:</span>{" "}
            <a className="transition-colors hover:text-[#ed702d]" href={mapHref(headOfficeAddress)} rel="noreferrer" target="_blank">
              {headOfficeAddress}
            </a>
          </p>
          <p className="mt-5 text-base font-normal leading-normal">
            <a className="transition-colors hover:text-[#ed702d]" href={mapHref(otherOfficeAddress)} rel="noreferrer" target="_blank">
              {otherOfficeAddress}
            </a>
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1260px] px-4 pb-[84px] lg:px-0">
        <div className="rounded-lg bg-[#eaf4fc] px-[10px] py-5 text-lg font-normal leading-normal text-[#123378]">
          Mutual Fund is subject to market risks, read all scheme related documents carefully. Neither Divyasanchay Enterprises offer any assured/ guaranteed/ fixed returns schemes NOR any other schemes of similar nature as it is prohibited by Regulators.
        </div>
        <div className="mt-[50px] flex flex-col justify-between gap-3 text-lg font-normal md:flex-row">
          <p>(c) 2026 Divyasanchay Enterprises, All Rights Reserved</p>
          <p>
            Developed by:{" "}
            <a className="font-semibold text-[#ea3041] transition-colors hover:text-white" href="https://www.webyaparsolutions.com/" rel="noreferrer" target="_blank">
              Webyapar Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
