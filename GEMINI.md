# Tourex Project Instructions

## Architectural Conventions

### Search & Maps
- **Map Display:** The interactive Google Map in the search results should be hidden by default and accessible via a "Show Map" toggle button to maintain a clean list-first UI on desktop and mobile.
- **Data Integration:** Always prioritize local TOUREX `Package` results by boosting them to the top of search results. These should be visually distinguished with a "Tourex Exclusive" badge.
- **Caching:** Location-based search results must be cached server-side (using Prisma `SearchCache`) with a 30-day eviction policy to optimize Google Maps API costs.

### Geolocation & Privacy
- **Consent:** Always obtain explicit user consent via a clear, DPDP Act-compliant privacy modal before requesting browser geolocation. Explain that the location is used only for the current search and not stored permanently.

### Frontend
- **Framework:** Next.js for the landing page (`frontend/`), React + Vite for the admin dashboard (`client/`).
- **Styling:** Use Tailwind CSS for consistent spacing and cinematic aesthetics.
- **Components:** Maintain the `SearchBar` component as the central hub for location discovery.

### Backend
- **Framework:** Node.js + Express.
- **ORM:** Prisma with PostgreSQL (Production) / SQLite (Development).
- **Security:** Use `helmet` for CSP and `express-rate-limit` to protect sensitive routes like `/api/search` and `/api/webhook`.
