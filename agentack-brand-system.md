# Agentack Brand System

Software and AI for Gulf real estate. Version 1.2 (forest green and gold, light and dark themes).

**Direction:** Quiet authority. Deep forest green carries the weight, sage provides rest, and gold is the single restrained accent. Calm, premium, bilingual (English and Arabic, with full RTL support).

**The one rule:** green is the brand, gold is the accent. Gold appears in about 5% of any screen: a rule, an icon, a numeral, an eyebrow label. Never a full-bleed background, never body text.

---

## 1. Light theme

An off-white canvas with white surfaces and deep green for emphasis.

| Role | Token | Hex | Use |
|---|---|---|---|
| Background | `--bg` | `#F5F5F0` | Page canvas |
| Surface | `--surface` | `#FFFFFF` | Cards, forms, panels |
| Text | `--ink` | `#142D24` | Primary text |
| Deep green | `--headline` | `#103B2A` | Headlines, primary buttons, brand panels |
| Muted text | `--muted` | `#5D6B62` | Secondary text, captions |
| Soft green | `--soft` | `#E9EEE7` | Section bands, tags, hover states |
| Border | `--border` | `#D8DFD7` | Dividers, outlines |
| **Gold accent** | `--gold` | `#A88945` | Rules, icons, markers, large numerals (not small text) |
| Gold text | `--gold-text` | `#7A6125` | Small gold labels on light backgrounds (about 5.4:1) |
| Gold on green | `--gold-on-green` | `#C9AE6E` | Gold on deep green panels (about 5.8:1) |

### Light theme behaviour

- Primary button: deep green fill, off-white text.
- Secondary button: 1.5 px deep green outline, deep green text, transparent fill.
- Cards: white fill, 1 px border, 3 px gold rule across the top.
- Tags and chips: soft green fill, border outline, deep green text.
- Brand panel: deep green fill, off-white heading, gold-on-green eyebrow.

---

## 2. Dark theme

A deep forest night, never pure black. Same hierarchy as light, with the primary action inverted.

| Role | Token | Hex | Use |
|---|---|---|---|
| Background | `--bg` | `#0B1A14` | Page canvas |
| Band | `--band` | `#0F2219` | Full-width section bands |
| Surface | `--surface` | `#112A20` | Cards, forms, panels |
| Text | `--ink` | `#F5F5F0` | Primary text |
| Headline | `--headline` | `#F5F5F0` | Headlines (inverts from deep green) |
| Muted text | `--muted` | `#A9B7AE` | Secondary text, captions (about 8.6:1) |
| Soft green | `--soft` | `#17332A` | Tags, hover states |
| Border | `--border` | `#24443A` | Dividers, outlines |
| Brand panel | `--brand-panel` | `#103B2A` | Deep green panels, identical in both themes |
| **Gold accent** | `--gold` | `#C9AE6E` | Rules, icons, markers, eyebrows |
| Gold text | `--gold-text` | `#C9AE6E` | Small gold labels (about 8.3:1) |

### Dark theme behaviour

- Primary button: off-white fill, deep green text.
- Secondary button: 1.5 px off-white outline, off-white text, transparent fill.
- Cards: `#112A20` fill, `#24443A` border, 3 px light-gold rule across the top.
- Tags and chips: `#17332A` fill, `#24443A` border, off-white text.
- Brand panel: stays `#103B2A` with a `#24443A` border so it still reads as the brand colour.
- Gold lifts rather than glows: the lighter `#C9AE6E` is the only gold used on dark.

---

## 3. Theme pairs at a glance

| Role | Light | Dark |
|---|---|---|
| Canvas | `#F5F5F0` | `#0B1A14` |
| Section band | `#E9EEE7` | `#0F2219` |
| Surface | `#FFFFFF` | `#112A20` |
| Text | `#142D24` | `#F5F5F0` |
| Muted text | `#5D6B62` | `#A9B7AE` |
| Headline | `#103B2A` | `#F5F5F0` |
| Primary button fill / text | `#103B2A` / `#F5F5F0` | `#F5F5F0` / `#103B2A` |
| Brand panel | `#103B2A` | `#103B2A` |
| Soft green | `#E9EEE7` | `#17332A` |
| Border | `#D8DFD7` | `#24443A` |
| Gold accent | `#A88945` | `#C9AE6E` |
| Gold text | `#7A6125` | `#C9AE6E` |

### Balance

- Light: off-white and white about 58%, deep green about 25%, soft green about 12%, gold 5% or less.
- Dark: dark canvas and surfaces about 70%, off-white text about 15%, deep green panels about 10%, gold 5% or less.

---

## 4. Typography

Same in both themes.

| Role | Font | Notes |
|---|---|---|
| Display / headings | Georgia, 'Times New Roman', serif | Regular weight, line height about 1.1 |
| Interface and body | DM Sans (alternate: Manrope) | Weights 400, 500, 600. Body 16 to 18 px at 1.6 |
| Arabic display | Noto Naskh Arabic | Headlines only, weight 600, line height 1.4 to 1.5 |
| Arabic interface and body | IBM Plex Sans Arabic | Pairs with DM Sans. About 1 px larger, line height 1.8 to 1.9, no letter spacing |

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Noto+Naskh+Arabic:wght@500;600;700&display=swap" rel="stylesheet">
```

| Style | Size / line height | Font |
|---|---|---|
| Display | 64 / 1.08 | Georgia |
| Heading | 36 / 1.15 | Georgia |
| Subheading | 22 / 1.3 | DM Sans 600 |
| Body | 17 / 1.6 | DM Sans 400 |
| Caption | 13 / 1.4 | DM Sans 500 |

Eyebrow labels: 13 px, weight 600, uppercase, letter spacing 0.14em, gold text colour. Do not use uppercase or letter spacing in Arabic.

---

## 5. Components

| Component | Light | Dark |
|---|---|---|
| Primary button | `#103B2A` fill, `#F5F5F0` text | `#F5F5F0` fill, `#103B2A` text |
| Secondary button | `#103B2A` outline and text | `#F5F5F0` outline and text |
| Link | `#103B2A`, hover `#7A6125` | `#F5F5F0`, hover `#C9AE6E` |
| Tag / chip | `#E9EEE7` fill, `#D8DFD7` border | `#17332A` fill, `#24443A` border |
| Card | `#FFFFFF`, `#D8DFD7` border, `#A88945` top rule | `#112A20`, `#24443A` border, `#C9AE6E` top rule |
| Brand panel | `#103B2A`, `#F5F5F0` heading, `#C9AE6E` eyebrow | same, plus `#24443A` border |
| Input | `#FFFFFF` fill, `#D8DFD7` border | `#112A20` fill, `#24443A` border, `#F5F5F0` text |

Shared specs: buttons 48 px minimum height, radius 10, weight 600. Cards radius 16, padding 28. Brand panels radius 20 to 24. Inputs 48 px minimum height with a real `<label>`. Touch targets at least 44 px.

---

## 6. Logo mark (placeholder)

A rounded square holding a gold arch with a small dot, with the wordmark "Agentack" in Georgia. This is a stand-in drawn for the mockups. Replace it with the final mark.

Light version:

```svg
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
  <rect width="34" height="34" rx="9" fill="#103B2A"/>
  <path d="M10 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="#C9AE6E" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="17" cy="21" r="1.8" fill="#C9AE6E"/>
</svg>
```

Dark version (lighter tile with a border so it separates from the dark canvas):

```svg
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
  <rect x="0.5" y="0.5" width="33" height="33" rx="8.5" fill="#17332A" stroke="#24443A"/>
  <path d="M10 25V15a7 7 0 0 1 14 0v10" fill="none" stroke="#C9AE6E" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="17" cy="21" r="1.8" fill="#C9AE6E"/>
</svg>
```

---

## 7. Principles

1. **Restraint over decoration.** Generous space, few colours, no gradients or stock skylines.
2. **Gold is a whisper.** One gold moment per screen. If everything is gold, nothing is.
3. **Bilingual by default.** Arabic is a first-class layout, not a translation, mirrored for right-to-left.
4. **Never pure black.** Dark stays in the forest-green family.
5. **Primary actions invert** in dark. Deep green panels stay deep green in both themes.

---

## 8. Arabic and RTL

- Set `lang="ar" dir="rtl"` on the page or section. Flex rows mirror automatically.
- Keep the Latin wordmark `dir="ltr"`.
- Georgia has no Arabic glyphs, so use Noto Naskh Arabic for headlines and IBM Plex Sans Arabic for everything else.
- Sample Arabic copy used in the mockups (have a native speaker review it before use):
  - Headline: ثقة هادئة لسوق العقارات في الخليج.
  - Tagline: وكلاء ذكاء اصطناعي للعقارات في الخليج
  - Primary button: احجز عرضاً توضيحياً

---

## 9. CSS tokens (light and dark)

```css
:root {
  --bg: #F5F5F0;
  --band: #E9EEE7;
  --surface: #FFFFFF;
  --ink: #142D24;
  --muted: #5D6B62;
  --headline: #103B2A;
  --button-bg: #103B2A;
  --button-text: #F5F5F0;
  --brand-panel: #103B2A;
  --soft: #E9EEE7;
  --border: #D8DFD7;
  --gold: #A88945;
  --gold-text: #7A6125;
  --gold-on-green: #C9AE6E;

  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-display-ar: 'Noto Naskh Arabic', serif;
  --font-body-ar: 'IBM Plex Sans Arabic', system-ui, sans-serif;
}

/* Dark follows the system setting */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0B1A14;
    --band: #0F2219;
    --surface: #112A20;
    --ink: #F5F5F0;
    --muted: #A9B7AE;
    --headline: #F5F5F0;
    --button-bg: #F5F5F0;
    --button-text: #103B2A;
    --brand-panel: #103B2A;
    --soft: #17332A;
    --border: #24443A;
    --gold: #C9AE6E;
    --gold-text: #C9AE6E;
  }
}

/* Manual dark override */
:root[data-theme="dark"] {
  --bg: #0B1A14;
  --band: #0F2219;
  --surface: #112A20;
  --ink: #F5F5F0;
  --muted: #A9B7AE;
  --headline: #F5F5F0;
  --button-bg: #F5F5F0;
  --button-text: #103B2A;
  --brand-panel: #103B2A;
  --soft: #17332A;
  --border: #24443A;
  --gold: #C9AE6E;
  --gold-text: #C9AE6E;
}
```

Usage: add `data-theme="light"` or `data-theme="dark"` to the root element to force a theme. Without it, the site follows the visitor's system setting.

---

## 10. Notes

- The light palette was extracted from a reference site. The dark values, the two added gold tones, the arch mark and all sample copy are proposals for Agentack.
- `#A88945` is about 3.6:1 on the off-white canvas, which is why small gold text uses `#7A6125` instead.
- Keep Agentack's own mark and voice rather than copying any other brand's identity.
- Headline, feature names and the sample enquiry card in the mockups are placeholder copy.
