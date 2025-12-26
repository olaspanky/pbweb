"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Email, Facebook, Instagram, Linkedin, Twitter } from "./icons/Socials";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

export default function Navigation({ className }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { href: "/solutions", label: "Solutions" },

    {
      href: "#",
      label: "Product",
      sublinks: [
        { href: "/versus", label: "Versus" },
        { href: "/invisio", label: "Invisio" },
        { href: "/sonus", label: "Sonus" },
      ],
    },
    { href: "/insights", label: "Insights" },
    {
      href: "/about",
      label: "About",
    },
    { href: "/partner", label: "Partnerships" },
    { href: "/career", label: "Careers" },

    ,
  ];

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div>
      {/* Top Strip */}
      <nav className={`${className} py-2 border-b border-grey-100/40`}>
        <div className="max-w-[1440px] px-4 lg:px-18 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Email />
            <p className="text-grey-0 text-xs">
              <strong>Email us at: </strong>
              marketanalytics@pbrinsight.com
            </p>
          </Link>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/PBR-Life-Sciences-61554007611436">
              <Facebook />
            </a>
            <a href="https://ng.linkedin.com/company/pbr-life-sciences">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/pbrlifesciences/?hl=en">
              <Instagram />
            </a>
            <a href="https://x.com/pbrlifesciences">
              <Twitter />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Nav */}
      <nav className="text-grey-0 max-w-[1440px] px-4 lg:px-18 py-4 mx-auto flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/pbr-logo.png"
            width={200}
            height={50}
            alt="PBR Life Sciences Logo"
            className="w-32"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 uppercase font-semibold text-xs">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.sublinks && setAboutOpen(true)}
              onMouseLeave={() => link.sublinks && setAboutOpen(false)}
            >
              <Link
                href={link.href}
                className={`transition-colors hover:text-blue-600 ${
                  isActive(link.href)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-grey-0"
                }`}
              >
                {link.label}
              </Link>

              {/* Dropdown for sublinks */}
              {link.sublinks && aboutOpen && (
                <ul className="absolute top-full  left-0 pt-2 bg-white shadow-lg rounded-md py-2 min-w-[160px]">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        href={sublink.href}
                        className={`block px-4 py-2 text-xs font-semibold transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                          isActive(sublink.href)
                            ? "text-blue-600"
                            : "text-grey-900"
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button content={{ label: "Contact us", to: "/contact" }} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-grey-0"></span>
          <span className="w-6 h-[2px] bg-grey-0"></span>
          <span className="w-6 h-[2px] bg-grey-0"></span>
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-grey-900 flex flex-col items-center justify-center gap-8 z-40 p-6">
          <ul className="flex flex-col gap-6 uppercase font-semibold text-lg text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-1 ${
                    isActive(link.href) ? "text-blue-400" : "text-grey-0"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>

                {/* Mobile sublinks */}
                {link.sublinks && (
                  <ul className="mt-2 flex flex-col gap-2">
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          href={sublink.href}
                          className={`block py-1 text-sm ${
                            isActive(sublink.href)
                              ? "text-blue-400"
                              : "text-grey-300"
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Button
            content={{ label: "Contact us", to: "/contact" }}
            className="w-full max-w-xs"
          />
        </div>
      )}
    </div>
  );
}
