import React from "react";
import { ContactInfoData } from "@/types";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/layout/NavLinks";

interface ContactInfoProps {
  contactInfo: ContactInfoData;
}

export function ContactInfo({ contactInfo }: ContactInfoProps) {
  return (
    <div className="space-y-6 font-sans text-xs sm:text-sm">
      <div className="space-y-2">
        <h3 className="font-serif text-lg text-[#4A2E35] font-normal uppercase tracking-wide">
          Direct Studio Correspondence
        </h3>
        <p className="text-[#8A7976] font-light leading-relaxed">
          For gallery acquisition inquiries, exhibition requests, and press interviews, please write to us directly:
        </p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-[#4A2E35] font-semibold hover:underline block pt-1"
        >
          {contactInfo.email}
        </a>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#E8E2DA]">
        <h4 className="text-xs font-semibold text-[#4A2E35] uppercase tracking-wider">
          Studio Location
        </h4>
        <p className="text-[#8A7976] font-light">
          {contactInfo.studioLocation}
        </p>
        {contactInfo.galleryRepresentation && (
          <p className="text-[#8A7976] font-light text-xs pt-1">
            Representation: <span className="text-[#4A2E35] font-medium">{contactInfo.galleryRepresentation}</span>
          </p>
        )}
      </div>

      {/* Social Network Links */}
      <div className="space-y-2 pt-2 border-t border-[#E8E2DA]">
        <h4 className="text-xs font-semibold text-[#4A2E35] uppercase tracking-wider">
          Follow & Connect
        </h4>
        <div className="flex items-center gap-4 text-[#8A7976]">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8A7976] hover:text-[#4A2E35] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8A7976] hover:text-[#4A2E35] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={contactInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8A7976] hover:text-[#4A2E35] transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
