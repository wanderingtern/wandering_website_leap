import { Resend } from "resend";
import { secret } from "encore.dev/config";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message: string;
}

const resendApiKey = secret("ResendAPIKey");
const recipientEmail = secret("ContactEmail");
const fromEmail = secret("FromEmail");

export async function sendContactNotification(
  data: ContactFormData
): Promise<void> {
  if (!resendApiKey()) {
    console.warn("ResendAPIKey is not configured - skipping email notification");
    return;
  }

  const resend = new Resend(resendApiKey());

  try {
    await resend.emails.send({
      from: fromEmail(),
      to: recipientEmail(),
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ""}
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}` : ""}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString()}
      `,
    });

    console.log(`Contact notification sent to ${recipientEmail()} for ${data.name}`);
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    throw new Error("Failed to send email notification");
  }
}
