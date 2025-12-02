import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message: string;
}

export async function sendContactNotification(
  data: ContactFormData
): Promise<void> {
  try {
    // TEMPORARY: Hardcoded fallback API key for testing Leap deployment
    // TODO: Remove hardcoded key once Leap secret configuration is working
    const resendApiKey = process.env.RESEND_API_KEY || "re_PY3As4cS_4HhPbsa55oGEY5XeWfHvPCYm";
    const recipientEmail = process.env.CONTACT_EMAIL || "matt@wanderingtern.com";
    const fromEmail = process.env.FROM_EMAIL || "noreply@wanderingtern.com";

    console.log("Email notification attempt:", {
      hasApiKey: !!resendApiKey,
      apiKeyLength: resendApiKey.length,
      recipientEmail,
      fromEmail,
      submitterName: data.name
    });

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured - skipping email notification");
      return;
    }

    // Initialize Resend client at runtime with the injected secret
    const resend = new Resend(resendApiKey);

    console.log("Attempting to send email via Resend...");

    const result = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
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

    console.log("Resend API response:", result);
    console.log(`✅ Contact notification sent to ${recipientEmail} for ${data.name}`);
  } catch (error) {
    console.error("❌ Failed to send contact notification:");
    console.error("Error details:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    // Don't rethrow - let the service continue even if email fails
  }
}
