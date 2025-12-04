import { Resend } from "resend";
import { secret } from "encore.dev/config";

const resendApiKey = secret("RESEND_API_KEY");
const contactEmail = secret("CONTACT_EMAIL");
const fromEmail = secret("FROM_EMAIL");

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message: string;
  photoUrl?: string;
}

export async function sendContactNotification(
  data: ContactFormData
): Promise<void> {
  const resend = new Resend(resendApiKey());

  try {
    await resend.emails.send({
      from: fromEmail(),
      to: contactEmail(),
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ""}
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        ${data.photoUrl ? `<p><strong>Photo:</strong> <a href="${data.photoUrl}">View Attachment</a></p>` : ""}
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
${data.photoUrl ? `\nPhoto: ${data.photoUrl}` : ""}

Submitted on: ${new Date().toLocaleString()}
      `,
    });

    console.log(`Contact notification sent to ${contactEmail()} for ${data.name}`);
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    throw new Error("Failed to send email notification");
  }
}
