import { api } from "encore.dev/api";
import db from "../db";

export interface SubmitContactRequest {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message: string;
}

export interface SubmitContactResponse {
  success: boolean;
  message: string;
}

export const submit = api<SubmitContactRequest, SubmitContactResponse>(
  { expose: true, method: "POST", path: "/contact/submit" },
  async (params) => {
    await db.exec`
      INSERT INTO contacts (name, email, phone, address, message)
      VALUES (${params.name}, ${params.email}, ${params.phone}, ${params.address || null}, ${params.message})
    `;

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    };
  }
);
