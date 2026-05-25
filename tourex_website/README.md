# Tourex Meta Bot

A premium, production-ready AI-powered WhatsApp customer support system for TOUREX, a North Bengal based travel company.

## Features

- **WhatsApp AI Chatbot**: Automated responses using OpenAI GPT-4o with a cinematic, emotional local travel expert persona.
- **Admin Dashboard**: Dark cinematic UI for managing live chats, travel leads, and tour packages.
- **Smart Lead Collection**: Automatically identifies and stores customer details like destination, date, and budget.
- **Human Handoff**: Detects when a customer needs human assistance and alerts the admin.
- **Package Management**: CRUD operations for tour packages and itineraries.
- **Multilingual Support**: Handles Bengali, English, and Hinglish.

## Tech Stack

- **Frontend**: React + Vite + TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Node.js + Express, Prisma ORM, PostgreSQL.
- **AI**: OpenAI API (GPT-4o).
- **Communication**: Meta WhatsApp Cloud API.

## Setup Instructions

### 1. Meta WhatsApp Cloud API Setup

1. Go to the [Meta for Developers](https://developers.facebook.com/) portal.
2. Create a new App (Type: Business).
3. Add "WhatsApp" to your app.
4. Note your **Phone Number ID** and **WhatsApp Business Account ID**.
5. Set up a **Permanent Access Token** (via System User in Business Manager).
6. Configure the **Webhook**:
   - Callback URL: `https://your-backend-url.com/api/webhook`
   - Verify Token: A secret string of your choice.
   - Subscribe to `messages` in Webhook fields.

### 2. Backend Configuration

1. Navigate to the `server` directory.
2. Create a `.env` file based on the following template:

```env
PORT=5000
DATABASE_URL="postgresql://user:password@host:port/dbname?sslmode=require"
WHATSAPP_TOKEN="your_permanent_access_token"
VERIFY_TOKEN="your_webhook_verify_token"
PHONE_NUMBER_ID="your_phone_number_id"
OPENAI_API_KEY="your_openai_api_key"
JWT_SECRET="your_secure_jwt_secret"
```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Configuration

1. Navigate to the `client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   VITE_API_URL="http://localhost:5000/api"
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Backend (Railway / Render)
- Connect your GitHub repository.
- Set the Root Directory to `server`.
- Add all environment variables.
- The build command is `npm install` and start command is `npm start`.

### Database (Supabase / NeonDB)
- Create a PostgreSQL database and get the connection string for `DATABASE_URL`.

### Frontend (Vercel)
- Connect your GitHub repository.
- Set the Root Directory to `client`.
- Add `VITE_API_URL` environment variable pointing to your deployed backend.

## AI Persona Details

The chatbot is configured as **Tourex AI Support**, a local North Bengal travel expert. It focuses on:
- Yelbong River Canyon
- Charkhole & Kaffergaon
- Jhandi & Ravangla
- Dzuku Valley
- Offbeat Sikkim & Kalimpong villages
- Dooars & Tea Gardens

It promotes "Experiences over Tours" with a cinematic and emotional storytelling approach.

## License

ISC
