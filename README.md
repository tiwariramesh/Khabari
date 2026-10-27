# Khabari

**Khabari** (खबरी) is someone who brings you the news. This one brings you the story of my work: the personal portfolio of **Ramesh Tiwari**, project management consultant, trainer and PMP®.

Live at **[rameshtiwari.com](https://www.rameshtiwari.com)**.

## What's on the site

- **Hero**: who I am, at a glance, with a way to get in touch.
- **About**: my journey in three steps, from engineer to project leader to trainer.
- **Resume**: the latest resume as a PDF and as plain text for applicant tracking systems.
- **Core competencies**: project practices, tools and professional skills.
- **Career journey**: a timeline of roles, with the highlights of each.
- **Learning & credentials**: degrees and industry certifications (PMP, CAPM, CSPO and more).
- **Services**, **contact** and a **privacy policy**.

Light and dark themes, and it works on phones as well as large screens.

## Built with

React 19, Vite, Tailwind CSS v4 and a few shadcn/ui components, with icons from Lucide.

## Run it locally

You need [Node.js](https://nodejs.org) 22 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Change the content

Almost everything you read on the site comes from one file: **`src/data/mockData.js`**. That covers the profile, the About steps, roles, skills, education, certifications, services and social links. Edit it and the page updates.

Other files you may want:

| What | Where |
|---|---|
| Images (photo, logos, badges) | `public/images/`, as small WebP files |
| Resume downloads | `public/resume/Ramesh_Tiwari_Resume.pdf` and `.txt` |
| Privacy policy text | `src/assets/privacy_policy.md` |
| Colours, spacing and type | `src/index.css` |

Keep images small: export them at about twice the size they appear on the page and save them as WebP, so the site stays fast.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). The custom domain, www.rameshtiwari.com, is set in the repository's **Settings → Pages**.
