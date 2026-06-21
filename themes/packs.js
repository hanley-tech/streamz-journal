/* ============================================================================
 * Streamz Journal — Theme Packs (extension point)
 * ----------------------------------------------------------------------------
 * Add your own themes, hands, and backgrounds here. This file is loaded before
 * the app and merged in automatically. Everything is optional.
 *
 * You can define three globals:
 *
 *   window.STREAMZ_HANDS        — extra hands, merged into the built-in registry
 *   window.STREAMZ_BACKGROUNDS  — extra backgrounds
 *   window.STREAMZ_THEMES       — extra theme packs (appended to the dropdown)
 *
 * ---- HAND ------------------------------------------------------------------
 *   id: {
 *     kind: 'image',
 *     src:  'assets/my_hand.png',    // transparent PNG, pencil tip at lower-left
 *     fx: 0.05, fy: 0.92,            // tip position as a FRACTION of width/height
 *     k: 6.2,                        // on-screen width in line-heights
 *     type: 'My Pack', tone: 'Tan'   // shown in the Hand dropdown as "type · tone"
 *   }
 *   Tip: photograph/draw the hand on a flat green background, key it out, then
 *   the pencil tip is the bottom-left-most opaque pixel — fx = x/width, fy = y/height.
 *
 * ---- BACKGROUND ------------------------------------------------------------
 *   id: { kind:'image', src:'assets/my_desk.jpg', vignette:0.45 }
 *   id: { kind:'gradient', css:'radial-gradient(...)', vignette:0.4 }
 *   id: { kind:'none' }              // transparent (journal only — good for OBS)
 *
 * ---- THEME -----------------------------------------------------------------
 *   {
 *     id:'my-theme', name:'My Theme',
 *     paper:{ style:'ruled'|'grid'|'blank', color:'#f7f1de',
 *             rule:'rgba(60,90,160,.3)', rule2:'rgba(...)', margin:'rgba(200,80,80,.35)' },
 *     pen:{ font:'Caveat', ink:'#1c3a6e' },
 *     hand:'real_light',             // a hand id (built-in or one you defined above)
 *     bg:'desk',                     // a background id
 *     sound:'pencil'|'pen'|'none'
 *   }
 * ==========================================================================*/

// ---- Optional fonts (added to the Pen dropdown + usable as pen.font in any theme) ----
// 'link' = a stylesheet URL (Google Fonts etc); 'css' = an @font-face for a self-hosted file.
// window.STREAMZ_FONTS = [
//   { name:'Lobster',  link:'https://fonts.googleapis.com/css2?family=Lobster&display=swap' },
//   { name:'My Brand', css:"@font-face{font-family:'My Brand';src:url('assets/fonts/brand.woff2') format('woff2')}" },
// ];

// ---- Optional sound files (otherwise the built-in SYNTHESIZED sounds are used) ----
// Uncomment to play real audio files instead of the synth. Point to the bundled
// WAVs or your own (mp3/wav/ogg). Any missing/failed file falls back to the synth.
// NOTE: file-based sounds need the page served over http:// (file:// blocks fetch) —
// the synth works everywhere. Toggle Sound on, or use the 🔊 Test button.
// window.STREAMZ_SFX = {
//   scratch: 'assets/sfx/scratch.wav',   // per-character writing
//   flip:    'assets/sfx/flip.wav',      // page turn
//   chime:   'assets/sfx/chime.wav',     // line lock-in (Enter)
// };

// ---- Yoyo the Witch pack: a feminine hand + golden feather quill -------------
window.STREAMZ_HANDS = {
  // feminine hand, plum nails, full feather in-frame; nib at (fx,fy)
  quill_gold:   { kind:'image', src:'assets/quill_gold.png',   fx:0.1426, fy:0.6165, k:6.0, ar:1.5, type:'Quill', tone:'Gold' },
  // fully in Yoyo's palette: iridescent violet feather, amethyst shaft, purple nails
  quill_violet: { kind:'image', src:'assets/quill_purple.png', fx:0.1211, fy:0.5638, k:6.0, ar:1.5, type:'Quill', tone:'Violet' },
  // gold feather but bright orchid nails + bright lavender sleeve (Yoyo's bright purple)
  quill_bright: { kind:'image', src:'assets/quill_gold_bright.png', fx:0.2158, fy:0.3607, k:9.1, ar:1.5, type:'Quill', tone:'Gold Bright' },
  // clean natural manicure (clear polish), cream sleeve — neutral classic look
  quill_clean:  { kind:'image', src:'assets/quill_clean.png',       fx:0.1084, fy:0.4036, k:6.0, ar:1.5, type:'Quill', tone:'Clean' },
  // young, fitted fine sheer lilac mesh sleeve, slim straight long arm
  quill_mesh:   { kind:'image', src:'assets/quill_mesh.png',        fx:0.0361, fy:0.4635, k:8.5, ar:1.5, type:'Quill', tone:'Mesh' },
};

window.STREAMZ_BACKGROUNDS = {
  magic: { kind:'image', src:'assets/bg_magic.jpg', vignette:0.30 },
  // @yoyothewitch palette: lavender/lilac + rose-magenta + gold, celestial moon & stars
  yoyo:  { kind:'image', src:'assets/bg_yoyo.jpg',  vignette:0.28 },
};

window.STREAMZ_THEMES = [
  {
    // SIGNATURE: Hogwarts parchment + quill, recolored to Yoyo's purple/gold witch palette
    id:'yoyo', name:'✨ Yoyo × Hogwarts',
    paper:{ style:'blank', color:'#3a1d5e', texture:'assets/parchment_plum.jpg' },
    pen:{ font:'Pinyon Script', ink:'#ffe9b0' }, textSize:120,
    glow:'0 0 8px rgba(255,210,120,.95), 0 0 18px rgba(230,140,255,.65), 0 1px 0 rgba(35,16,62,.85)',
    sparkle:['#ffe9b0','#ffd27a','#e7b3ff','#ff9ad8'],
    bookGlow:'rgba(210,150,255,.6)',
    hand:'quill_mesh', bg:'yoyo', sound:'pen'
  },
  {
    // LIGHT: elegant lilac parchment letter, deep violet copperplate ink (her soft lavender brand)
    id:'yoyo-light', name:'✨ Yoyo · Lavender Letter',
    paper:{ style:'blank', color:'#cdbbe0', texture:'assets/parchment_lilac.jpg' },
    pen:{ font:'Pinyon Script', ink:'#5a2a86' }, textSize:120,
    glow:'0 1px 0 rgba(255,255,255,.30), 0 0 5px rgba(150,80,200,.30)',
    sparkle:['#e3c8ff','#caa0f0','#fff0b0','#ffffff'],
    hand:'quill_violet', bg:'yoyo', sound:'pen'
  },
  {
    // her YouTube thumbnail vibe: glowing gold names on darker enchanted parchment
    id:'yoyo-gold', name:'✨ Yoyo · Golden Spell',
    paper:{ style:'blank', color:'#3a2c14', texture:'assets/parchment_dark.jpg' },
    pen:{ font:'Great Vibes', ink:'#ffe39c' }, textSize:120,
    glow:'0 0 7px rgba(255,200,90,.95), 0 0 16px rgba(255,150,40,.6), 0 1px 0 rgba(90,55,0,.65)',
    sparkle:['#ffe39c','#ffc24d','#fff4cf'],
    hand:'quill_bright', bg:'yoyo', sound:'pen'
  },
  {
    // ornate beige spellbook page with a decorative border + curvy brush script (like the thumbnail)
    id:'spellbook', name:'📖 Hogwarts Spellbook (Gilded)',
    paper:{ style:'blank', color:'#e6d8ba', border:{ src:'assets/ornament_gold.png', slice:'6% 9%', paper:'assets/parchment_warm.jpg' } },
    pen:{ font:'Alex Brush', ink:'#33210e' }, lines:8, textSize:130,
    glow:'0 1px 0 rgba(255,250,235,.20), 0 1px 2px rgba(40,25,8,.45)',
    sparkle:['#ffe39c','#ffc24d','#fff4cf'],
    bookGlow:'rgba(255,200,110,.65)', book:'tome',
    hand:'quill_clean', bg:'magic', sound:'pen'
  },
  {
    // same bound spellbook, but the border is drawn in light brown sepia ink (not gilt)
    id:'spellbook-ink', name:'📖 Hogwarts Spellbook (Ink)',
    paper:{ style:'blank', color:'#e6d8ba', border:{ src:'assets/ornament_brown.png', slice:'6% 9%', paper:'assets/parchment_warm.jpg' } },
    pen:{ font:'Alex Brush', ink:'#3a2a16' }, lines:8, textSize:130,
    glow:'0 1px 0 rgba(255,250,235,.18), 0 1px 2px rgba(40,25,8,.4)',
    sparkle:['#ffe7c2','#e9cfa0','#fff4df'],
    bookGlow:'rgba(255,205,130,.6)', book:'tome',
    hand:'quill_clean', bg:'magic', sound:'pen'
  },
  // A plain example pack:
  {
    id:'midnight', name:'Midnight Ink',
    paper:{ style:'ruled', color:'#10141c', rule:'rgba(120,160,255,.16)', margin:'rgba(120,160,255,.22)' },
    pen:{ font:'Caveat', ink:'#a9c6ff' },
    hand:'cartoon_light', bg:'slate', sound:'pen'
  },
];
