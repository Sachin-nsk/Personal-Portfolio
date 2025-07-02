# Contact Form Setup Instructions

## Option 1: Formspree (Recommended - Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: xpzgkqyw)
5. Replace `YOUR_FORM_ID` in Contact.tsx with your actual form ID
6. Update the fetch URL to: `https://formspree.io/f/YOUR_FORM_ID`

**Pros:** Easy setup, free tier available, handles spam protection
**Cons:** Limited submissions on free plan

## Option 2: EmailJS (Client-side)

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up and create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Install EmailJS: `npm install emailjs-com`
5. Replace the placeholder values in the EmailJS function
6. Uncomment the EmailJS submission method

**Pros:** No backend required, good free tier
**Cons:** Exposes API keys in frontend (use environment variables)

## Option 3: Netlify Forms (If deploying to Netlify)

1. Add `data-netlify="true"` to your form element
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Uncomment the Netlify submission method
4. Deploy to Netlify

**Pros:** Built into Netlify, very simple
**Cons:** Only works with Netlify hosting

## Option 4: Custom Backend (Advanced)

Create your own backend API using:
- Node.js + Express + Nodemailer
- Python + Flask/FastAPI + SMTP
- Supabase Edge Functions

## Environment Variables

For production, create a `.env` file:
```
VITE_FORMSPREE_ID=your_formspree_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then use `import.meta.env.VITE_FORMSPREE_ID` instead of hardcoded values.