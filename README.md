# ✒️ Streamz Journal

A single-file web app: you type, and an animated hand holding a pen or feather quill
**"writes" your words into a journal** — with real handwriting fonts, word-wrap, new
lines, a page-turn animation, magical sparkles, and a feather that flexes with spring
physics. Built for streaming (OBS / vertical & horizontal), but fun on its own.

No build, no server, no dependencies — it's one `index.html` plus an `assets/` folder.

## Quick start

Open **`index.html`** in a browser (double-click it, or drag it into Chrome), then
click the page and start typing. That's it.

> It needs internet **once** to pull the handwriting fonts from Google Fonts. To use
> your own theme packs (`themes/packs.js`), serve the folder with any static server —
> e.g. `python3 -m http.server` — since `file://` blocks loading sibling scripts in
> some browsers.

## Keyboard

| Key | Action |
|---|---|
| *(type)* | The hand writes your characters as you go |
| **Enter** | New line (a shimmer "locks in" the finished line). Text also auto-wraps at the page edge |
| **Tab** | Turn the page with a flip animation |
| **Esc** | Pause / resume typing |
| **F9** | Hide / show the control bar (for a clean stream capture) |
| **◀ / Resume** | Review previous pages, then return to the live page |

When the page fills up it **turns automatically** and carries any overflow (and
anything you typed ahead) onto the next page, so fast typing never runs off the end.

## Controls

| Control | What it does |
|---|---|
| **Theme** | One-click looks that set paper + pen + hand + background + sound together |
| **Aspect** | Lock the frame to 16:9, 9:16, 1:1, 4:3, or 3:4 |
| **Paper** | Ruled / grid / blank, plus paper color |
| **Pen** | Handwriting font + ink color |
| **Speed** | Characters written per second |
| **Spacing** | Line spacing (lines per page) |
| **Text** | Text size, independent of spacing (script fonts render small — bump this) |
| **Margins** | Left / right / top / bottom insets; the bottom margin sets where the page auto-turns |
| **Hand** | Realistic or cartoon hand / feather quill, in Light / Medium / Deep tones, size, show/hide |
| **Desk** | Toggle the background image |
| **✨ FX** | Magical sparkles that trail the nib and shimmer along the feather |
| **🔮 Glow** | Animated halo — the whole page pulses with light |
| **📚 Bind** | Bound-book look (leather cover, gilt edge, page-stack, spine) |
| **Sound** | Subtle writing scratch, a twinkly line-lock chime, and a page-turn whoosh |
| **Full** | Fullscreen |

Your settings (theme, aspect, paper, pen, speed, spacing, text size, margins, hand +
size/visibility, background, sound, FX/glow/bind) are saved to `localStorage` and
**restored on reload**, so a live stream survives a refresh.

## Themes

**Built in** (in `index.html`): Classic Cream · Blue Notebook · Engineer Grid · Old
Parchment · Chalkboard.

**Bundled pack** (`themes/packs.js`, loaded automatically): **📖 Hogwarts Spellbook**
in *Gilded* and *Ink* — rendered as a bound leather tome — plus the **✨ Yoyo the
Witch** set (*Yoyo × Hogwarts*, *Lavender Letter*, *Golden Spell*) and *Midnight Ink*.
The Yoyo themes are a worked example of a fully custom pack: a feminine hand holding a
feather quill, aged page textures, a celestial lavender background, ink glow, and
Hogwarts-style fonts.

### Make your own pack

Everything is data-driven. Edit **`themes/packs.js`** (it's loaded before the app and
merged in, and is fully commented with the schema). You can define:

- `window.STREAMZ_THEMES` — extra themes (paper, pen font + ink, hand, background, sound,
  sparkle palette, page glow, bound-book frame, page-border texture, default lines/size)
- `window.STREAMZ_HANDS` — extra hands/quills (a transparent PNG + the nib position as a
  fraction of width/height, on-screen size, and an optional `grip` line for the feather hinge)
- `window.STREAMZ_BACKGROUNDS` — image / gradient / none
- `window.STREAMZ_FONTS` — extra handwriting fonts (a Google Fonts URL or a self-hosted `@font-face`)
- `window.STREAMZ_SFX` — your own writing / chime / flip / page sounds

## URL presets (great for OBS Browser Sources)

Preset everything via query params:

```
index.html?theme=yoyo&ar=9:16&font=Kalam&speed=14&paper=ruled&ink=%231c3a6e
```

`theme`, `ar`, `font`, `speed`, `paper` (ruled|grid|blank), `ink` (URL-encoded hex),
`hand` (e.g. `real_deep`, `cartoon_medium`, `quill_gold`). Add `&demo` for sample text.
A `?theme=…`/`?hand=…` link wins for that view, while your saved global prefs are kept.

## Streaming with OBS

1. Open `index.html`, pick an aspect ratio, press **F9** to hide the UI, **Full** for fullscreen.
2. In OBS add a **Window Capture** (or a **Browser Source** pointed at the file/URL) and crop to the frame.
3. The letterboxed background fills the rest — or just capture the journal region.

## Deploy

It's static files at the repo root, so it deploys anywhere:

- **GitHub Pages** — included. A workflow (`.github/workflows/pages.yml`) publishes on
  every push to `main`. One-time: repo **Settings → Pages → Source: GitHub Actions**.
  Your site lands at `https://<user>.github.io/<repo>/`.
- **Netlify / Vercel / Cloudflare Pages / S3** — drag-and-drop the folder or point at the
  repo; there's no build command (publish directory = repo root).

## How it works

Plain HTML/CSS/JS in one file — no framework, no bundler. The hand is drawn to a
`<canvas>` each frame and the feather is bent with a small spring-physics hinge
(rigid hand, floppy feather). Sparkles are a lightweight particle system; the page-turn
is a CSS 3D strip animation. Everything persists to `localStorage`.

## Credits & license

- **Fonts** — [Google Fonts](https://fonts.google.com/) (Caveat, Dancing Script, Pinyon
  Script, Great Vibes, Alex Brush, and more), loaded at runtime under the SIL Open Font License.
- **Artwork** — the hands, quills, backgrounds, and textures in `assets/` were generated
  with AI image tools for this project.
- The **Yoyo the Witch** pack's palette is an homage to public branding of
  [@yoyothewitch](https://www.instagram.com/yoyothewitch/) and is provided as an example;
  it implies no affiliation or endorsement.

Released under the **[MIT License](LICENSE)** © 2026 Hanley Leung.
