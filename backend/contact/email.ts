// import { Resend } from "resend";

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
  // Temporarily disabled email notifications to allow deployment
  // TODO: Re-enable after resolving Leap secret configuration issues
  console.log("Contact form submission received:", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    messagePreview: data.message.substring(0, 50) + "..."
  });

  /* Email functionality temporarily commented out
  try {
    // Leap injects secrets as environment variables at runtime
    const resendApiKey = process.env.RESEND_API_KEY || "";
    const recipientEmail = process.env.CONTACT_EMAIL || "matt@wanderingtern.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not configured - skipping email notification");
      return;
    }

    // Initialize Resend client at runtime with the injected secret
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
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

    console.log(`Contact notification sent to ${recipientEmail} for ${data.name}`);
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    // Don't rethrow - let the service continue even if email fails
  }
  */
}
