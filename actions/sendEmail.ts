"use server";

import { Resend } from "resend";

export interface FormState {
  success: boolean;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic Validation
  if (!name || name.trim() === "") {
    return {
      success: false,
      message: "Please enter your name.",
    };
  }

  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  if (!message || message.trim() === "") {
    return {
      success: false,
      message: "Please enter your message.",
    };
  }

  const recipientEmail = process.env.CONTACT_EMAIL;

  if (!recipientEmail) {
    console.error("CONTACT_EMAIL environment variable is not defined.");
    return {
      success: false,
      message: "Server configuration error: Recipient email is not configured.",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333333; line-height: 1.6;">
  
  <h2 style="font-family: Georgia, serif; color: #4A2E35; font-size: 24px; font-weight: normal; margin-top: 0; margin-bottom: 30px; letter-spacing: 0.5px;">
    New Studio Inquiry
  </h2>

  <div style="margin-bottom: 24px;">
    <p style="margin: 0 0 12px 0;">
      <span style="color: #666666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</span><br>
      <strong style="font-size: 16px;">${name}</strong>
    </p>

    <p style="margin: 0;">
      <span style="color: #666666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span><br>
      <a href="mailto:${email}" style="color: #4A2E35; text-decoration: none; font-size: 16px;">${email}</a>
    </p>
  </div>

  <hr style="border: none; border-top: 1px solid #E8E2DA; margin: 30px 0;" />

  <p style="color: #666666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">
    Message
  </p>
  <div style="white-space: pre-wrap; background: #F7F4F0; padding: 24px; border: 1px solid #E8E2DA; border-radius: 4px; font-size: 15px; color: #444444;">${message}</div>

  <p style="font-size: 12px; color: #999999; margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
    This is an automated message from Amritha's portfolio website.
  </p>

</div>
      `,
    });

    if (data.error) {
      return {
        success: false,
        message: data.error.message || "Failed to send email via Resend API.",
      };
    }

    return {
      success: true,
      message: "Thank you for your inquiry. We will be in touch shortly.",
    };
  } catch (error: any) {
    console.error("Error sending email via Resend:", error);
    return {
      success: false,
      message: error?.message || "An unexpected error occurred while sending your message.",
    };
  }
}
