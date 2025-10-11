import { api } from "encore.dev/api";
import db from "../db";

interface SubmitContactFormParams {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message: string;
}

interface SubmitContactFormResponse {
  success: boolean;
  message: string;
}

// Submits a contact form inquiry to the database.
export const submit = api<SubmitContactFormParams, SubmitContactFormResponse>(
  { expose: true, method: "POST", path: "/contact/submit" },
  async (params) => {
    await db.exec`
      INSERT INTO contact_submissions (name, email, phone, address, message)
      VALUES (${params.name}, ${params.email}, ${params.phone}, ${params.address || null}, ${params.message})
    `;

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    };
  }
);
