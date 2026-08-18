"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "Commission Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your inquiry message.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Commission Inquiry",
        message: "",
      });
    }, 600);
  };

  return (
    <div className="bg-white space-y-4">
      {status === "success" ? (
        <div className="p-6 border border-[#6A0F36] text-zinc-900 space-y-2 text-xs font-sans">
          <p className="font-semibold text-[#6A0F36]">Thank you for your inquiry.</p>
          <p>Your message has been sent directly to the studio. We will get back to you shortly.</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="pt-2 text-xs font-medium text-[#6A0F36] underline underline-offset-4 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-0 border border-zinc-200 font-sans text-xs">
          {status === "error" && (
            <div className="p-3 bg-rose-50 text-rose-800 text-xs border-b border-zinc-200">
              {errorMessage}
            </div>
          )}

          {/* Name Input */}
          <div className="border-b border-zinc-200">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-4 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white rounded-none"
              required
            />
          </div>

          {/* Email Input */}
          <div className="border-b border-zinc-200">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white rounded-none"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-4 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white resize-y rounded-none"
              required
            />
          </div>

          {/* Submit Action Button */}
          <div className="p-3 bg-white text-right border-t border-zinc-200">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-2.5 bg-[#6A0F36] hover:bg-[#4A0B26] text-white font-medium uppercase tracking-widest text-xs transition-colors rounded-none cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
