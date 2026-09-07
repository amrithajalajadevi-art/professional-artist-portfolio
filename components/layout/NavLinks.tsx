"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string; category?: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Work",
    href: "/work",
    subItems: [
      { label: "Figurative Paintings", href: "/work?category=series", category: "series" },
      { label: "UK Commissions", href: "/work?category=commissions", category: "commissions" },
      { label: "Public Murals", href: "/public-art", category: "public-art" },
      { label: "Studio Practice & Drawings", href: "/work?category=studio", category: "studio" },
      { label: "Printmaking", href: "/printmaking", category: "printmaking" },
    ],
  },
  { label: "Exhibitions & Projects", href: "/exhibitions" },
  { label: "Public Art", href: "/public-art" },
  { label: "Press", href: "/press" },
  { label: "Recognition", href: "/recognition" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export interface ContactSocialData {
  email?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

interface NavLinksProps {
  onItemClick?: () => void;
  contactData?: ContactSocialData;
}

function NavLinksContent({ onItemClick, contactData }: NavLinksProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [workOpen, setWorkOpen] = useState(false);

  // Strictly build social links from actual Sanity contact data (no fake fallbacks)
  const dynamicSocialLinks: { name: string; href: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [];

  if (contactData?.instagram) {
    dynamicSocialLinks.push({
      name: "Instagram",
      href: contactData.instagram,
      icon: InstagramIcon,
    });
  }

  if (contactData?.linkedin) {
    dynamicSocialLinks.push({
      name: "LinkedIn",
      href: contactData.linkedin,
      icon: LinkedInIcon,
    });
  }

  if (contactData?.twitter) {
    dynamicSocialLinks.push({
      name: "Twitter / X",
      href: contactData.twitter,
      icon: TwitterIcon,
    });
  }

  const emailAddress = contactData?.email;

  if (emailAddress) {
    dynamicSocialLinks.push({
      name: "Email",
      href: `mailto:${emailAddress}`,
      icon: MailIcon,
    });
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const currentCategory = searchParams ? searchParams.get("category") : null;

  return (
    <div className="flex flex-col h-full justify-between space-y-8 font-sans">
      {/* Primary Navigation Links */}
      <nav aria-label="Main Navigation" className="space-y-1.5">
        {mainNavItems.map((item) => {
          const active = isActive(item.href);
          const hasSubItems = item.subItems && item.subItems.length > 0;

          if (hasSubItems) {
            return (
              <div key={item.label} className="py-0.5">
                <div className="flex items-center justify-between group py-1">
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={`text-[13px] tracking-wide transition-colors ${
                      active
                        ? "text-[#4A2E35] font-semibold"
                        : "text-[#5C4B48] hover:text-[#4A2E35]"
                    }`}
                  >
                    {item.label}
                  </Link>

                  <button
                    type="button"
                    onClick={() => setWorkOpen((prev) => !prev)}
                    className="p-1 text-[#8A7976] hover:text-[#4A2E35] transition-colors focus:outline-none cursor-pointer"
                    aria-label={`Toggle ${item.label} sub-items`}
                    aria-expanded={workOpen}
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${
                        workOpen ? "rotate-180 text-[#4A2E35]" : "rotate-0 text-[#8A7976]"
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {workOpen && item.subItems && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="pl-3.5 space-y-1 overflow-hidden"
                    >
                      {item.subItems.map((sub) => {
                        const isSubActive =
                          active &&
                          (currentCategory === sub.category ||
                            (!currentCategory && sub.category === "series"));

                        return (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={onItemClick}
                              className={`text-[12px] font-normal transition-colors block py-0.5 tracking-wide ${
                                isSubActive
                                  ? "text-[#4A2E35] font-medium"
                                  : "text-[#5C4B48] hover:text-[#4A2E35]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <div key={item.label} className="py-0.5">
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`text-[13px] tracking-wide transition-colors block py-1 ${
                  active
                    ? "text-[#4A2E35] font-semibold"
                    : "text-[#5C4B48] hover:text-[#4A2E35]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Secondary Links & Footer Links */}
      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <Link
            href="/commissions"
            onClick={onItemClick}
            className={`block text-[12px] tracking-wide transition-colors ${
              isActive("/commissions")
                ? "text-[#4A2E35] font-semibold"
                : "text-[#5C4B48] hover:text-[#4A2E35]"
            }`}
          >
            Commissions
          </Link>

          <Link
            href="/workshops"
            onClick={onItemClick}
            className={`block text-[12px] tracking-wide transition-colors ${
              isActive("/workshops")
                ? "text-[#4A2E35] font-semibold"
                : "text-[#5C4B48] hover:text-[#4A2E35]"
            }`}
          >
            Art Classes & Workshops
          </Link>
        </div>

        {/* Social Icons & Copyright */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-[#5C4B48]">
            {dynamicSocialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-[#4A2E35] transition-colors duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <p className="text-[10px] text-[#5C4B48] tracking-wider leading-relaxed">
            © {new Date().getFullYear()} Amritha Jalaja Devi
          </p>
        </div>
      </div>
    </div>
  );
}

export function NavLinks(props: NavLinksProps) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col h-full justify-between space-y-6 font-sans">
          <nav aria-label="Main Navigation" className="space-y-1">
            {mainNavItems.map((item) => (
              <div key={item.label} className="py-0.5">
                <Link
                  href={item.href}
                  className="text-[13px] font-normal tracking-wide text-[#8A7976]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      }
    >
      <NavLinksContent {...props} />
    </Suspense>
  );
}
