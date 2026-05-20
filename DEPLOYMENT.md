# Tourex Deployment Guide

This guide provides instructions for deploying the Tourex AI Support system to production environments.

## Architecture Overview

- **Backend:** Node.js + Express (Deploy on Railway / Render)
- **Admin Dashboard:** React + Vite (Deploy on Vercel / Netlify)
- **Landing Page:** Next.js (Deploy on Vercel)
- **Database:** PostgreSQL (Provision via Supabase / NeonDB / Railway)

---

## 1. Database Configuration (Prisma)

Before deploying the backend, you MUST update the Prisma provider to PostgreSQL.

1.  Open `server/prisma/schema.prisma`.
2.  Change the `datasource db` block:
    ```prisma
    datasource db {
      provider = "postgresql" // Changed from "sqlite"
      url      = env("DATABASE_URL")
    }
    ```
3.  Ensure your `DATABASE_URL` environment variable follows the PostgreSQL format:
    `postgresql://user:password@host:port/dbname?sslmode=require`

---

## 2. Service-Specific Environment Variables

### Backend Server (`server/`)
Set these on Railway/Render:
- `PORT`: 5000 (or default)
- `DATABASE_URL`: Your PostgreSQL connection string
- `JWT_SECRET`: A long, secure random string
- `CLIENT_URL`: The URL of your deployed Admin Dashboard (for CORS)
- `OPENAI_API_KEY`: Your OpenAI API key
- `WHATSAPP_TOKEN`: Meta WhatsApp Permanent Access Token
- `PHONE_NUMBER_ID`: Your WhatsApp Phone Number ID
- `VERIFY_TOKEN`: Your Webhook Verify Token

### Admin Dashboard (`client/`)
Set these on Vercel/Netlify:
- `VITE_API_URL`: `https://your-backend-api.com/api`

### Landing Page (`frontend/`)
Set these on Vercel:
- `NEXT_PUBLIC_API_URL`: `https://your-backend-api.com`

---

## 3. Deployment Steps

### Backend (Railway)
1.  Connect your GitHub repository.
2.  Set the **Root Directory** to `tourex_website/tourex/server`.
3.  Add the environment variables listed above.
4.  Build Command: `npm install && npx prisma generate`
5.  Start Command: `npm start`

### Admin Dashboard (Vercel)
1.  Connect your GitHub repository.
2.  Set the **Root Directory** to `tourex_website/tourex/client`.
3.  Vercel will auto-detect Vite. Add `VITE_API_URL`.
4.  Deploy.

### Landing Page (Vercel)
1.  Connect your GitHub repository.
2.  Set the **Root Directory** to `tourex_website/tourex/frontend`.
3.  Vercel will auto-detect Next.js. Add `NEXT_PUBLIC_API_URL`.
4.  Deploy.

---

## 5. Security & Hardening

The application includes several production-ready security features:
- **Rate Limiting:** Stricter limits on `/api/admin/login` (10 attempts/15min) and `/api/webhook`.
- **Prompt Injection Protection:** Incoming WhatsApp messages and Admin outgoing messages are scanned for injection patterns (e.g., "ignore previous instructions").
- **Input Validation:** Backend routes validate email formats, numeric prices, and required fields.
- **Security Headers:** `helmet` is configured with a strict Content Security Policy (CSP).

### Recommended Enhancements:
- **MFA:** For high-security environments, consider adding Multi-Factor Authentication (MFA) to the admin login flow.
- **Cookies:** While the app currently uses Bearer tokens, switching to `HttpOnly`, `Secure` cookies is recommended for mitigating XSS-based token theft.
- **WAF:** Deploy behind a Web Application Firewall (like Cloudflare) to block common exploits at the edge.

---
## 6. Post-Deployment Verification

1.  **Check API Health:** Visit `https://your-backend-api.com/` (Should see "Tourex AI Support API is running...").
2.  **Verify Database:** Ensure the first admin is created using the `create-admin.js` script (you can run this locally pointing to your production database once, or as a one-time task on your hosting provider).
3.  **Webhook Setup:** Update your Meta Developer Portal Webhook URL to `https://your-backend-api.com/api/webhook`.

---
*Created by Gemini CLI - May 2026*
