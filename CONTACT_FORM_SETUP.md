# Contact Form Email Configuration

The contact form has been configured to send email notifications to **matt@wanderingtern.com** when someone submits a form.

## Email Service

The form uses [Resend](https://resend.com) for sending transactional emails. Resend offers:
- 100 emails/day on the free tier
- Excellent deliverability
- Simple API

## Required Environment Variables

You need to configure the following environment variables in your Encore app:

### 1. RESEND_API_KEY (Required)

Get your API key from Resend:
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Create an API key from the dashboard

**Set in Encore:**
```bash
encore secret set --prod RESEND_API_KEY
# Or for development:
encore secret set --dev RESEND_API_KEY
```

### 2. CONTACT_EMAIL (Optional, defaults to matt@wanderingtern.com)

The email address where contact form submissions will be sent.

```bash
encore secret set --prod CONTACT_EMAIL matt@wanderingtern.com
```

### 3. FROM_EMAIL (Optional, defaults to onboarding@resend.dev)

The "from" email address for notifications. If you've verified your domain with Resend, you can use your own domain:

```bash
encore secret set --prod FROM_EMAIL noreply@wanderingtern.com
```

## Domain Verification (Recommended)

To use your own domain (wanderingtern.com) as the sender:

1. Log into Resend dashboard
2. Go to "Domains" section
3. Add your domain (wanderingtern.com)
4. Add the provided DNS records to your domain
5. Wait for verification
6. Update the FROM_EMAIL environment variable

## Testing

To test the contact form:
1. Ensure all environment variables are set
2. Deploy your app or run locally
3. Submit a test form at your website
4. Check your inbox at matt@wanderingtern.com

## How It Works

When someone submits the contact form:
1. **Data is saved** to the database (`contacts` table)
2. **Email is sent** to matt@wanderingtern.com with all form details
3. **User sees** a success message

Note: If email sending fails, the form submission still succeeds (data is saved), but an error is logged.

## Dependencies

- `resend`: ^4.0.0 (added to backend/package.json)

Run `bun install` in the backend directory to install dependencies.

## Support

For issues with Resend, check their documentation: [resend.com/docs](https://resend.com/docs)
