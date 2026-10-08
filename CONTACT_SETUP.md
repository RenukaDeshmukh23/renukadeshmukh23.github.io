# Activate private email enquiries

The form is designed for GitHub Pages. Visitors submit an enquiry on your site;
Formspree receives it and sends an email notification to the address you configure
in your Formspree account. Your receiving email address does not appear in the
website source or configuration. No WhatsApp number is required or published.

## One-time setup

1. Create your own account at https://formspree.io/register.
2. Create a form named **Portfolio enquiries**. Configure and verify the private
   receiving email in Formspree. Do not add that email to the GitHub repository.
3. Copy the form endpoint from the dashboard. It looks like
   `https://formspree.io/f/xxxxxxxx`; the final value is your actual form ID.
4. Edit `_config.yml` and set:

   ```yaml
   contact_form_endpoint: "https://formspree.io/f/xxxxxxxx"
   ```

   Paste your actual endpoint in place of this example. This public form-ID URL
   is intended for your website. It is not your login, password or API key.
5. Commit the change and wait for the GitHub Pages deployment to finish.
6. Send one test enquiry from your live website. Confirm that it appears in
   Formspree and reaches your private inbox. Check the spam folder if needed.

You can share only the form endpoint with me to add it to the portfolio package.
You do not need to share your receiving email or WhatsApp number.

## What visitors see

The form asks for their name, reply email, optional company/website, service and
project brief. It includes labelled inputs, browser validation, a spam honeypot,
sending feedback and error recovery. A failed request preserves the entered
brief; only an accepted submission resets the form. LinkedIn is available as an
alternative. Without JavaScript, a configured form uses Formspree's normal
confirmation page.

Until an endpoint is configured, sending is disabled and the form explains that
LinkedIn is available. There is no fake successful submission or test destination.

## Privacy and plan limits

- The receiving address stays in the provider's settings. Visitors' submitted
  information is processed by Formspree; the form discloses this.
- Never commit your inbox address, phone number, password, API keys or provider
  login credentials. No secrets are needed in this site.
- Formspree's Free plan currently allows 50 submissions/month. Check the current
  plan and notification settings in your account. Email delivery and spam filters
  should be verified with a live test; the portfolio cannot guarantee delivery.
- A direct WhatsApp link reveals the destination number. Automatic WhatsApp
  alerts would need a separate server-side or provider integration. This package
  uses private email notifications and contains no WhatsApp links or numbers.

Official references:

- https://help.formspree.io/articles/building-your-form/building-an-html-form
- https://help.formspree.io/articles/troubleshooting/unable-to-submit-form-error
- https://formspree.io/plans/
