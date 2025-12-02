import { api } from "encore.dev/api";
import db from "../db";
import { sendContactNotification } from "./email";

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
    // Save to database
    await db.exec`
      INSERT INTO contacts (name, email, phone, address, message)
      VALUES (${params.name}, ${params.email}, ${params.phone}, ${params.address || null}, ${params.message})
    `;

    // Send email notification
    try {
      await sendContactNotification(params);
    } catch (error) {
      // Log the error but don't fail the request
      // The contact is already saved in the database
      console.error("Failed to send email notification:", error);
    }

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    };
  }
);
