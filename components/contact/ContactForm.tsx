"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
      {isSuccess && (
        <div className="p-3 bg-[#EFEAE4] border border-[#4A2E35]/30 text-[#4A2E35] text-xs font-sans">
          Thank you for your message. Studio management will respond shortly.
        </div>
      )}

      {/* Single Outer Bordered Box */}
      <div className="border border-[#4A2E35]/30 bg-transparent rounded-none overflow-hidden">
        {/* Name Input */}
        <div className="border-b border-[#4A2E35]/30">
          <input
            type="text"
            required
            aria-label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#8A7976]"
            placeholder="Name *"
          />
        </div>

        {/* Email Input */}
        <div className="border-b border-[#4A2E35]/30">
          <input
            type="email"
            required
            aria-label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#8A7976]"
            placeholder="Email *"
          />
        </div>

        {/* Message Input */}
        <div>
          <textarea
            rows={6}
            required
            aria-label="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#8A7976] resize-none"
            placeholder="Message *"
          />
        </div>
      </div>

      {/* Minimal Submit Button aligned right outside form box */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-xs uppercase tracking-[0.15em] text-[#4A2E35] font-semibold hover:underline cursor-pointer transition-colors bg-transparent border-none p-0"
        >
          {isSubmitting ? "Sending..." : "Submit →"}
        </button>
      </div>
    </form>
  );
}
