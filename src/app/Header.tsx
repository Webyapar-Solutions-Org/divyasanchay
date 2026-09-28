"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/our-products" },
  { label: "Contact", href: "/contact" },
];

const loginHref = "https://login.divyasanchay.com/client-login";

export function Logo() {
  return (
    <div className="relative size-11 shrink-0 lg:size-[110px]">
      <Image alt="" className="object-contain" fill sizes="110px" src="/figma-home/logo-circle.svg" />
      <Image
        alt="Divyasanchay Enterprises"
        className="absolute left-1/2 top-1/2 size-[40px] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover lg:size-[100px]"
        height={100}
        src="/figma-home/logo-mark.png"
        width={100}
      />
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[#d7dce7] bg-white">
        <div className="mx-auto flex h-16 max-w-[1370px] items-center justify-between px-4 lg:h-[115px] lg:px-[35px]">
          <div className="flex items-center gap-5 lg:gap-[35px]">
            <Logo />
            <div className="hidden h-[110px] w-px bg-[#d9d9d9] lg:block" />
            <nav className="hidden items-center gap-0 text-[20px] text-[#123378] md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className={`px-[10px] py-[10px] ${item.href === pathname ? "font-bold text-[#ed702d]" : "font-normal"}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              {/* <a className="px-[10px] py-[10px]" href="#">Login</a> */}
            </nav>
          </div>
          <button
            aria-expanded={isMenuOpen}
            aria-label="Open menu"
            className="text-base font-black text-[#8b8f98] md:hidden"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            =
          </button>
          <div className="hidden items-center gap-5 md:flex">
            <a className="flex h-[50px] items-center gap-[10px] rounded border border-[#123378] bg-[#eaf4fc] px-[10px] text-[20px] font-normal text-[#123378]" href="tel:+917980536257">
              <Image alt="" height={24} src="/figma-home/phone.svg" width={24} />
              (+91) 79805-36257
            </a>
            <a className="flex h-[50px] w-[90px] items-center justify-center rounded border border-white bg-[#123378] text-[20px] font-normal text-white" href={loginHref} rel="noreferrer" target="_blank">
              Login
            </a>
          </div>
        </div>
      </header>

      <div className={isMenuOpen ? "fixed inset-0 z-50 bg-white md:hidden" : "hidden"} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="flex h-[76px] items-center justify-between border-b border-[#d8d8d8] px-5 shadow-[0_4px_6px_rgba(0,0,0,0.22)]">
          <h2 className="text-[32px] font-black leading-none text-[#163f86]">MENU</h2>
          <button
            aria-label="Close menu"
            className="text-[42px] font-light leading-none text-black"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            x
          </button>
        </div>

        <nav className="px-5 pt-12">
          <div className="space-y-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                className={`block border-b border-[#e2e2e2] px-6 py-9 text-[28px] font-medium leading-none ${
                  item.href === pathname ? "font-black text-[#f3702b]" : "text-[#173f88]"
                }`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="mt-7 flex h-[58px] w-full items-center justify-center gap-4 rounded border-2 border-[#173f88] bg-[#eaf5ff] text-[26px] font-medium text-[#173f88]"
            href="tel:+917980536257"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg aria-hidden="true" className="size-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
            </svg>
            (+91) 79805-36257
          </a>
          <a
            className="mt-6 flex h-[60px] w-full items-center justify-center rounded bg-[#173f88] text-[28px] font-medium text-white"
            href={loginHref}
            onClick={() => setIsMenuOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            Login
          </a>
        </nav>
      </div>
    </>
  );
}
