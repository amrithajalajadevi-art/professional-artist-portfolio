import React from "react";
import { ContactInfoData } from "@/types";

interface ContactInfoProps {
  info: ContactInfoData;
}

export function ContactInfo({ info }: ContactInfoProps) {
  return (
    <div className="space-y-4 text-center max-w-2xl mx-auto font-sans text-sm text-zinc-600 leading-relaxed">
      <p>
        For inquiries, commissions, or to request for a catalogue of available works, kindly get in touch at{" "}
        <a
          href={`mailto:${info.email}`}
          className="font-semibold text-[#6A0F36] hover:underline underline-offset-4"
        >
          {info.email}
        </a>.
      </p>
      <p className="text-xs text-zinc-500">
        You may also drop me a message using the form below. I shall get back to you as soon as I can using the above said email address.
      </p>
    </div>
  );
}
