"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { sendEmail, FormState } from "@/actions/sendEmail";

const initialState: FormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 font-sans text-xs sm:text-sm">
      {state.message && (
        <div
          className={`p-3 text-xs font-sans border ${
            state.success
              ? "bg-[#EFEAE4] border-[#4A2E35]/30 text-[#4A2E35]"
              : "bg-red-50 border-red-300 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      {/* Visually hidden Honeypot field to trap automated spam bots */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website_url_bot_check"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      {/* Outer Bordered Box for Input Fields */}
      <div className="border border-[#4A2E35]/30 bg-transparent rounded-none overflow-hidden">
        {/* Name Input */}
        <div className="border-b border-[#4A2E35]/30">
          <input
            type="text"
            name="name"
            required
            aria-label="Name"
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#5C4B48]"
            placeholder="Name *"
          />
        </div>

        {/* Email Input */}
        <div className="border-b border-[#4A2E35]/30">
          <input
            type="email"
            name="email"
            required
            aria-label="Email"
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#5C4B48]"
            placeholder="Email *"
          />
        </div>

        {/* Message Input */}
        <div>
          <textarea
            rows={6}
            name="message"
            required
            aria-label="Message"
            className="w-full p-4 bg-transparent border-none focus:ring-0 focus:outline-none text-[#4A2E35] text-xs font-sans placeholder-[#5C4B48] resize-none"
            placeholder="Message *"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="text-xs uppercase tracking-[0.15em] text-[#4A2E35] font-semibold hover:underline cursor-pointer transition-colors bg-transparent border-none p-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Submit →"}
        </button>
      </div>
    </form>
  );
}
