# 💍 Sofia & Marco — Digital Wedding Invitation

A warm, romantic digital wedding invitation built with **React + Vite**.

## Colour Palette

| Token | Colour | Use |
|---|---|---|
| Ivory | `#FAF6F0` | Backgrounds |
| Blush | `#E8C4B0` | Accents, borders |
| Gold | `#C9A96E` | Decorative elements |
| Bark | `#6B4C30` | Primary text |

## Sections

- **Hero** — Names, date, venue with botanical corner illustrations
- **Details** — Ceremony, cocktails & reception cards
- **Schedule** — Full day-of timeline
- **Dress Code** — Attire guide with colour swatches
- **RSVP** — Interactive form with confirmation state
- **Footer** — Contact & closing

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Customisation

### Change the couple's names
Search and replace `Sofia` and `Marco` across all `.jsx` files.

### Change the date / venue
- **Hero.jsx** — date string and venue name
- **Details.jsx** — ceremony times and venue rooms
- **Schedule.jsx** — the `events` array
- **Footer.jsx** — date and location line

### Change the RSVP deadline
- **RSVP.jsx** — eyebrow text `"Kindly Reply By May 1st"`

### Connect the RSVP form to a backend
In `RSVP.jsx`, replace the `handleSubmit` function body with a `fetch` call to your API, Formspree endpoint, or email service.

## Fonts Used

- **Cormorant Garamond** — Display / headings (Google Fonts)
- **Jost** — Body / UI text (Google Fonts)

Both load from Google Fonts via `index.html` — no extra setup needed.
