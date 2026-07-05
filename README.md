# Shubham & Janhavi — Wedding Invitation Website

A premium, fully responsive, single-page wedding invitation. Pure HTML5 / CSS3 / vanilla JS — no build step, no frameworks, no heavy libraries.

## Run it
Just open `index.html` in a browser. For maps, fonts and the gallery images to load you need an internet connection (they use Google Maps embed, Google Fonts and Unsplash placeholders). To serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize everything in one place
Open **`js/config.js`** and edit the `window.WEDDING` object:

| Field | What it controls |
|---|---|
| `brideName`, `groomName`, `brideFull`, `groomFull` | Names throughout the site |
| `weddingISO`, `weddingEndISO`, `weddingTime` | Countdown + "Add to Calendar" |
| `venueName`, `address`, `mapsLink`, `mapsQuery` | Venue, directions, embedded map, map QR |
| `phone`, `whatsapp`, `email`, `instagram`, `facebook` | Contact section + floating buttons |
| `upiId`, `bankName`, `bankAcc`, `bankIfsc` | Gift section + UPI QR |
| `heroImage`, `bridePhoto`, `groomPhoto` | Main photos |
| `gallery[]` | Gallery images (masonry) |
| `events[]` | Event cards (add/remove freely) |

Names shown in the hero, footer and Our Story are also in the translation table (`window.I18N`) so they read well in both languages — update them there too if you change the couple's names.

## Features
- Hero with animated names, floating heart particles, gradient fallback
- Sticky nav → hamburger on mobile, scroll-spy active links
- Live countdown with "day has arrived" message
- Our Story timeline, Bride & Groom cards, Event cards
- Masonry gallery with lightbox (keyboard + swipeable arrows), lazy loading, `srcset`
- Venue with embedded map, Get Directions, and a **self-generated QR code** (no external QR service)
- Validated RSVP form → confetti on submit
- Gift section with UPI QR + bank details
- **Dark / Light** mode, **English / मराठी** language toggle (both remembered via localStorage)
- Background music toggle, Share, Download-as-PDF (print), Back-to-top, floating WhatsApp
- SEO meta + Open Graph + Wedding `Event` structured data + inline SVG favicon
- Accessible: keyboard focus styles, ARIA labels, `prefers-reduced-motion` respected, works without JS

## Files
```
index.html
css/styles.css
js/config.js       ← edit this
js/main.js         ← app logic
js/qrcode.min.js   ← tiny built-in QR generator (no dependency)
assets/images | icons | music
```

## Notes
- **Music:** add `assets/music/theme.mp3` (a royalty-free instrumental).
- **RSVP:** currently celebrates locally. To collect responses, POST the form data to your endpoint (Google Forms, Formspree, a serverless function…) inside the submit handler in `main.js` where the comment marks it.
- **Photos:** the site ships with Unsplash placeholders so it looks complete instantly — swap them for your own in `config.js`.
