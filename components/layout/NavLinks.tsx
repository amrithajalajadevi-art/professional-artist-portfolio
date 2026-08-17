"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Download } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Artist Profile", href: "/about" },
  {
    label: "Gallery",
    href: "/portfolio",
    subItems: [
      { label: "Paintings (2024–2026)", href: "/portfolio?category=paintings" },
      { label: "UK Commissions", href: "/portfolio?category=commissions" },
      { label: "Biennale Series", href: "/portfolio?category=biennale" },
    ],
  },
  { label: "Exhibitions & Collaborations", href: "/exhibitions" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { name: "Twitter / X", href: "https://x.com", icon: TwitterIcon },
  { name: "Email", href: "mailto:contact@amrithajalajadevi.art", icon: MailIcon },
];

interface NavLinksProps {
  onItemClick?: () => void;
}

export function NavLinks({ onItemClick }: NavLinksProps) {
  const pathname = usePathname();
  const [galleryOpen, setGalleryOpen] = useState(true);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col h-full justify-between space-y-8">
      {/* Primary Navigation Links */}
      <nav aria-label="Main Navigation" className="space-y-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const hasSubItems = item.subItems && item.subItems.length > 0;

          if (hasSubItems) {
            return (
              <div key={item.label} className="py-1">
                <div className="flex items-center justify-between group">
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 py-1.5 ${
                      active ? "text-zinc-950 font-semibold" : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setGalleryOpen(!galleryOpen)}
                    className="p-1 text-zinc-500 hover:text-zinc-950 transition-colors focus:outline-none"
                    aria-label={`Toggle ${item.label} sub-items`}
                  >
                    {galleryOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Submenu Accordion */}
                {galleryOpen && item.subItems && (
                  <ul className="pl-3 mt-1 space-y-1.5 border-l border-zinc-200 ml-1">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          onClick={onItemClick}
                          className="text-xs font-normal text-zinc-600 hover:text-zinc-950 transition-colors block py-1 tracking-wider"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          return (
            <div key={item.label} className="py-1">
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 block py-1.5 ${
                  active ? "text-zinc-950 font-semibold" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Download CV Action & Social Links */}
      <div className="space-y-6 pt-6 border-t border-zinc-200/70">
        {/* Download CV Button */}
        <a
          href="/cv-dummy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onItemClick}
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-zinc-900 border border-zinc-300 rounded-none hover:bg-zinc-900 hover:text-white transition-all duration-300 group"
        >
          <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span>Download CV</span>
        </a>

        {/* Social Links */}
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
            Connect
          </p>
          <div className="flex items-center gap-4 text-zinc-600">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-1.5 hover:text-zinc-950 transition-colors duration-200 rounded-sm hover:bg-zinc-100"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright Footer */}
        <p className="text-[11px] text-zinc-400 tracking-wider">
          © {new Date().getFullYear()} Amritha Jalaja Devi.<br />All rights reserved.
        </p>
      </div>
    </div>
  );
}
