"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Download, Sparkles, BookOpen } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Work",
    href: "/work",
    subItems: [
      { label: "Paintings & Sculptures", href: "/work?category=paintings" },
      { label: "UK Commissions", href: "/work?category=commissions" },
      { label: "Biennale Series", href: "/work?category=biennale" },
    ],
  },
  { label: "Exhibitions & Projects", href: "/exhibitions" },
  { label: "Public Art", href: "/public-art" },
  { label: "Press", href: "/press" },
  { label: "Recognition", href: "/recognition" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const secondaryActions = [
  { 
    label: "Commissions", 
    href: "/commissions",
    icon: Sparkles,
    variant: "primary" as const
  },
  { 
    label: "Art Classes & Workshops", 
    href: "/workshops",
    icon: BookOpen,
    variant: "secondary" as const
  },
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
  const [workOpen, setWorkOpen] = useState(true);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex flex-col h-full justify-between space-y-6">
      {/* Primary Navigation Links */}
      <nav aria-label="Main Navigation" className="space-y-0.5">
        {mainNavItems.map((item) => {
          const active = isActive(item.href);
          const hasSubItems = item.subItems && item.subItems.length > 0;

          if (hasSubItems) {
            return (
              <div key={item.label} className="py-0.5">
                <div className="flex items-center justify-between group">
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={`text-[13px] font-medium tracking-wider uppercase transition-all duration-200 py-1 flex items-center gap-2 ${
                      active
                        ? "text-zinc-950 font-bold translate-x-1"
                        : "text-zinc-600 hover:text-zinc-950 hover:translate-x-0.5"
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />}
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setWorkOpen(!workOpen)}
                    className="p-1 text-zinc-400 hover:text-zinc-950 transition-colors focus:outline-none"
                    aria-label={`Toggle ${item.label} sub-items`}
                  >
                    {workOpen ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Submenu Accordion */}
                {workOpen && item.subItems && (
                  <ul className="pl-3.5 mt-1 space-y-1 border-l border-zinc-200/80 ml-1">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          onClick={onItemClick}
                          className="text-[11px] font-normal text-zinc-500 hover:text-zinc-950 transition-colors block py-0.5 tracking-wide"
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
            <div key={item.label} className="py-0.5">
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`text-[13px] font-medium tracking-wider uppercase transition-all duration-200 flex items-center gap-2 py-1 ${
                  active
                    ? "text-zinc-950 font-bold translate-x-1"
                    : "text-zinc-600 hover:text-zinc-950 hover:translate-x-0.5"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />}
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Secondary Links/Buttons & Footer Actions */}
      <div className="space-y-5 pt-4 border-t border-zinc-200/80">
        {/* Styled Secondary Buttons (Commissions & Art Classes) */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold px-0.5">
            Engage & Services
          </p>

          <Link
            href="/commissions"
            onClick={onItemClick}
            className="flex items-center justify-between w-full px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-900 bg-zinc-900/5 hover:bg-zinc-900 hover:text-white border border-zinc-900/20 rounded-sm transition-all duration-300 group shadow-2xs"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 group-hover:text-amber-300 transition-colors" />
              Commissions
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/workshops"
            onClick={onItemClick}
            className="flex items-center justify-between w-full px-3.5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-800 bg-white hover:bg-zinc-900 hover:text-white border border-zinc-300 rounded-sm transition-all duration-300 group shadow-2xs"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              Art Classes & Workshops
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Social Icons & Copyright */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center gap-3.5 text-zinc-500">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-1.5 hover:text-zinc-950 transition-colors duration-200 rounded-sm hover:bg-zinc-200/60"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <p className="text-[10px] text-zinc-400 tracking-wider leading-relaxed">
            © {new Date().getFullYear()} Amritha Jalaja Devi.<br />All rights reserved. UK Global Talent Visa Portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
