import React from "react";
import { Mail, MapPin, Building2 } from "lucide-react";
import { ContactInfoData } from "@/types";

interface ContactInfoProps {
  info: ContactInfoData;
}

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

export function ContactInfo({ info }: ContactInfoProps) {
  const socialList = [
    { name: "Instagram", href: info.instagram, icon: InstagramIcon },
    { name: "LinkedIn", href: info.linkedin, icon: LinkedInIcon },
    { name: "Twitter / X", href: info.twitter, icon: TwitterIcon },
    { name: "Email", href: `mailto:${info.email}`, icon: Mail },
  ];

  return (
    <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 space-y-6 shadow-2xs">
      <div className="space-y-2 border-b border-zinc-100 pb-5">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold font-sans">
          Direct Studio Correspondence
        </span>

        {/* Clickable Mailto Professional Email */}
        <a
          href={`mailto:${info.email}`}
          className="block font-serif text-xl sm:text-2xl text-zinc-950 font-normal hover:text-zinc-600 transition-colors flex items-center gap-2"
        >
          <Mail className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <span>{info.email}</span>
        </a>
      </div>

      <div className="space-y-4 text-xs text-zinc-700 font-sans">
        {/* Studio Location */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
              London Studio Location
            </span>
            <span className="font-medium text-zinc-900 leading-relaxed block pt-0.5">
              {info.studioLocation}
            </span>
          </div>
        </div>

        {/* Gallery Representation */}
        {info.galleryRepresentation && (
          <div className="flex items-start gap-3 pt-2 border-t border-zinc-100">
            <Building2 className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
                Representation & Management
              </span>
              <span className="font-medium text-zinc-900 leading-relaxed block pt-0.5">
                {info.galleryRepresentation}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Social Media Icon Links */}
      <div className="pt-4 border-t border-zinc-100 space-y-3">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold font-sans block">
          Connect & Follow
        </span>

        <div className="flex flex-wrap items-center gap-2.5">
          {socialList.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center gap-2 px-3.5 py-2 bg-zinc-100 hover:bg-zinc-950 hover:text-white text-zinc-800 text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border border-zinc-200"
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
