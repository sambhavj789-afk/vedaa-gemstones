# Vedaa — Natural Gemstones

A single-page site for Vedaa, built from the catalogue. React + Vite + Tailwind CSS.

---

## Run it locally

You need Node.js 18 or newer. Check with `node -v`. If you don't have it, install from nodejs.org (LTS).

```bash
cd vedaa
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173). Edits save and reload automatically.

To make a production build:

```bash
npm run build     # output goes to dist/
npm run preview   # serve that build locally to check it
```

## Put it online

**Vercel** (easiest, free):

1. Push the folder to a GitHub repo.
2. Go to vercel.com → Add New → Project → import the repo.
3. Vercel detects Vite on its own. Framework: Vite. Build command: `npm run build`. Output: `dist`.
4. Deploy. Add the custom domain under Project → Settings → Domains.

**Netlify** works the same way — build command `npm run build`, publish directory `dist`.

---

## Pages

| Route | Page | File |
|---|---|---|
| `/` | Home — hero, pillars, featured stones, Alis | `src/pages/Home.jsx` |
| `/collection` | All thirteen stones on the pedestal | `src/pages/CollectionPage.jsx` |
| `/collection/emerald` etc. | One page per stone | `src/pages/StonePage.jsx` |
| `/about` | The standard, Alis, global reach | `src/pages/About.jsx` |
| `/contact` | Enquiry form | `src/pages/Contact.jsx` |

Stone pages are generated from the data file — a new stone in `src/data/gemstones.js` gets its page automatically at `/collection/<slug>`.

`vercel.json` is required for deployment: it makes Vercel serve the app for deep links like `/collection/ruby`. Netlify needs the same thing — a `_redirects` file in `public/` containing `/* /index.html 200`.

## Editing content

Almost everything you'll want to change lives in two files.

| What | Where |
|---|---|
| Stone names, origins, descriptions, order | `src/data/gemstones.js` |
| Phone, email, WhatsApp number, Instagram | `src/data/contact.js` |
| Colours and fonts | `tailwind.config.js` and `src/index.css` |
| Page copy | the matching file in `src/pages/` or `src/components/` |

To add a stone: copy one object in `src/data/gemstones.js`, change the fields, drop the photo into `public/images/`. The pedestal section picks it up automatically.

To remove one: delete its object.

## Images

All photography is pulled from the catalogue PDF and sits in `public/images/`. To replace any of them, keep the same filename and use a **portrait 2:3 crop** — the sticky-stage effect depends on every stone being shot on the same stand, at the same distance.

**One thing to fix:** `amethyst.jpg` is a crop from the cover photograph, since the catalogue has no amethyst page. It's soft at full size. Shoot the amethyst on the same brass stand as the others and swap the file in.

## How the collection section works

Every stone in the catalogue is photographed on the same brass stand, from the same angle. The site uses that: on desktop, the photo column stays pinned while the text scrolls, and the stones crossfade in place — so it reads as one stone being lifted off the stand and the next set down. On mobile it falls back to a stacked layout, since pinned columns don't work on a narrow screen.

The dark backdrop of each photograph is dissolved into the page background with a CSS mask (`.dissolve` in `src/index.css`), so there's no visible image edge.

## The enquiry form

There is no backend. The form composes a message and hands it to the visitor's email client or WhatsApp. That's deliberate — nothing to host, nothing to maintain, and enquiries land in the inbox already in use.

If you later want submissions to arrive without opening a mail client, the quickest routes are Formspree or Netlify Forms; both need only a small change to `src/components/Enquiry.jsx`.

## Before launch

- Replace `amethyst.jpg` with a real photograph.
- Confirm the phone number and email in `src/data/contact.js`.
- Add the Instagram URL in the same file if there is one.
- Read the amethyst description in `src/data/gemstones.js` — it's new copy, not from the catalogue.
- Add a favicon at `public/favicon.svg` and link it in `index.html`.
