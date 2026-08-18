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
        <div className="p-3 bg-[#EFEAE4] border border-[#E8E2DA] text-[#4A2E35] text-xs">
          Thank you for your message. Studio management will respond shortly.
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#4A2E35] font-semibold">
          Name *
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 bg-[#F7F4F0] border border-[#E8E2DA] focus:border-[#4A2E35] focus:outline-none rounded-none text-[#4A2E35] text-xs font-sans"
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#4A2E35] font-semibold">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 bg-[#F7F4F0] border border-[#E8E2DA] focus:border-[#4A2E35] focus:outline-none rounded-none text-[#4A2E35] text-xs font-sans"
          placeholder="your.email@domain.com"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#4A2E35] font-semibold">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-3 py-2 bg-[#F7F4F0] border border-[#E8E2DA] focus:border-[#4A2E35] focus:outline-none rounded-none text-[#4A2E35] text-xs font-sans"
          placeholder="Commissions, Gallery Acquisition, Press, etc."
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#4A2E35] font-semibold">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 bg-[#F7F4F0] border border-[#E8E2DA] focus:border-[#4A2E35] focus:outline-none rounded-none text-[#4A2E35] text-xs font-sans"
          placeholder="Detail your inquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-[#4A2E35] text-white text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#352025] transition-colors rounded-none cursor-pointer"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
