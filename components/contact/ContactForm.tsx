"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
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

    // Simulate network submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Commission Inquiry",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="bg-white border border-zinc-200/80 p-6 sm:p-8 space-y-6 shadow-2xs">
      <div className="space-y-1">
        <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-normal">
          Send an Enquiry
        </h3>
        <p className="text-xs text-zinc-500 font-sans">
          For public art commissions, gallery acquisitions, or exhibition inquiries.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2 rounded-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Enquiry Received</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed font-sans">
            Thank you for reaching out. Your inquiry has been sent directly to Amritha Jalaja Devi's studio team. We will respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="pt-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 underline underline-offset-4 cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
          {status === "error" && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2 text-xs">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name & Email Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block uppercase tracking-wider font-semibold text-zinc-700">
                Your Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className="w-full p-3 bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block uppercase tracking-wider font-semibold text-zinc-700">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. eleanor@gallery.org"
                className="w-full p-3 bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                required
              />
            </div>
          </div>

          {/* Inquiry Subject Dropdown */}
          <div className="space-y-1.5">
            <label htmlFor="subject" className="block uppercase tracking-wider font-semibold text-zinc-700">
              Inquiry Type / Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="Commission Inquiry">Public or Private Art Commission</option>
              <option value="Gallery Exhibition">Museum or Gallery Exhibition Feature</option>
              <option value="Press & Media">Press, Interview & Media Request</option>
              <option value="Art Workshops">Art Classes & Studio Masterclass</option>
              <option value="General Inquiry">General Correspondence</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block uppercase tracking-wider font-semibold text-zinc-700">
              Message / Project Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about the project timeline, location, budget scope, or exhibition parameters..."
              className="w-full p-3 bg-zinc-50 border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors resize-y"
              required
            />
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
          >
            {status === "submitting" ? (
              <span>Submitting Inquiry...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
