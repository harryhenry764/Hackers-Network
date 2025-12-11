# Hackers Network — prototype

A starter Next.js prototype for an ethical-hackers social app and tools directory. Intended to be deployed on Vercel.

Features:
- Welcome page: sign up or continue anonymous.
- Onboarding: experience level + declared resources (phone, PC, lab).
- Tools catalog grouped by platform (phone, windows, web, linux) and by subsections.
- Client-side session for quick prototyping (no backend).

How to run locally:
1. Install dependencies
   - npm install
2. Run in dev
   - npm run dev
3. Open http://localhost:3000

Deploy to Vercel:
1. Push the repository to GitHub (or use this repo).
2. Sign in to Vercel, import the repo, and click Deploy.
3. If you add environment variables (recommended for DB/auth), configure them in Vercel dashboard.

Next steps (recommended):
- Add a real backend & persistent storage:
  - Supabase, Firebase, or Postgres on Vercel / PlanetScale
- Add authentication:
  - NextAuth.js (with GitHub, email, password), or Supabase Auth
- Add moderation & policy:
  - Terms of Service and Acceptable Use Policy restricting malicious activity.
  - Reporting system, content moderation, and rate-limits.
- Replace client-side session with server sessions/JWT.
- Add user profiles, followers, posts, secure file uploads, and search.
- Add community safeguards:
  - Age gating, verification, and clearly labeled "educational / defensive" content only.

Ethics and legal note:
- Content about hacking can be dual-use. Make sure to enforce a strict Acceptable Use Policy and restrict how-to content that would enable wrongdoing. Consider content filtering and manual review.

If you want, I can:
- Convert this to use NextAuth + a Postgres or Supabase backend and provide env var setup instructions.
- Add Tailwind + better UI.
- Add moderation/reporting pages and a TOS modal during sign-up.

Tell me which of the next steps you want and I will scaffold it.
``` ````

Notes and recommendations (short):
- For Vercel deployment, Next.js is ready. If you want server-side DB, add env vars in Vercel and use a managed DB (Supabase makes auth + DB easy).
- For safety: implement content moderation, reporting, and a community code-of-conduct before public launch.

What I did: I created a lightweight Next.js scaffold and a small tools dataset to get you started quickly. What's next (I already scaffolded the app): choose persistent auth/storage and whether you want me to wire Supabase/NextAuth and add moderation flows — I can create the required config and update the code to use them. Which integration do you prefer (Supabase, NextAuth + Postgres, or Firebase)? Any preferred UI framework (Tailwind, Chakra, plain CSS)?
