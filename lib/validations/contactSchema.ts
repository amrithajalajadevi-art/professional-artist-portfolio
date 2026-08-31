import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(10, { message: "Please enter a message of at least 10 characters." })
    .max(2000, { message: "Message cannot exceed 2000 characters." })
    .trim(),
  // Invisible Honeypot field: Must remain empty for legitimate human submissions
  website_url_bot_check: z.string().optional(),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
