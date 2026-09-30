# VNTechies blog — visual revamp: before / after

Evolutionary refresh of the existing Tailwind design system (not a rewrite). Approved
direction: AWS-style orange buttons (orange fill, dark label), global token changes,
no file deletions, Tailwind stays on 3.0.23, sticky header from `md` up only.

## What was measured, and what wasn't

- **Verified**
  - `npm run lint` → exit 0 (one pre-existing `<img>` warning in `pages/aws-certification-paths.js`, not from this work).
  - `npm run build` → exit 0; all pages exported; sitemap generated.
  - Homepage copy and links identical to `HEAD` (babel AST diff: 44/44 text nodes, 10/10 hrefs; FAQ only merged the two heading text nodes).
  - Contrast ratios below computed in Node from the token hex values.
- **Not completed**
  - The headless-Chrome pass (light/dark screenshots at desktop/tablet/mobile, live DOM
    contrast audit, sticky-position and BottomNav-clearance assertions) was interrupted.
  - Items marked _(computed)_ rest on CSS reasoning plus a standalone browser test of the
    sticky/overflow rule — not on a rendered check of the final pages.

## Tokens (single source of truth)

- `css/tailwind.css` holds one set of RGB-channel custom properties for light and dark.
- `tailwind.config.js` exposes them as semantic Tailwind colors: `bg-surface`,
  `text-fg-muted`, `border-line`, `text-brand-strong`, `bg-brand/10`, and so on.
  Neutrals switch with `.dark` automatically, so most `dark:` color pairs were removed
  from the rewritten components.
- Elevation is three token levels; the old `shadow-sm … shadow-2xl` classes are remapped
  onto them, so ~225 existing usages get correct dark-mode shadows with no markup change.

## Color

| Element                 | Before                                        | After                                                |
| ----------------------- | --------------------------------------------- | ---------------------------------------------------- |
| Body text               | pure `#000` / `#fff` (hard-coded on `<body>`) | token `#0f172a` / `#e2e8f0` — 16.4:1 / 15.8:1        |
| Links / orange text     | `orange-400`/`500`, **2.3–2.8:1** (fails AA)  | `#c2410c` light / `#fb923c` dark — **5.2:1 / 7.8:1** |
| Primary button          | white on orange, **2.8:1** (fails)            | AWS-style: dark label on brand orange — **6.4:1**    |
| Eyebrows / orange chips | `#ea580c` on tint, **3.1:1** (fails)          | `#9a3412` / `#fdba74` — **≥6:1**                     |
| Inline code             | red-400 on gray-100, **2.5:1** (fails)        | token text on 7% tint — **≥12:1**                    |
| Focus ring              | `rgba(orange / .65)`, **2.0:1** (fails)       | solid `accent-strong` — **≥3.2:1**                   |
| Cool accent             | ad-hoc blues / cyans / purples                | one `info` sky token (cert codes, quotes, glow)      |

- Purple kept only where it is a product color (Data/AI course pages, pricing, paths).
- Gray aliased to slate, aligning ~1,800 legacy `gray-*` classes with the neutral tokens.

## Type

- `theme.fontSize` had replaced Tailwind's scale, so ~280 `text-xs` / `text-lg` /
  `text-6xl` / `text-7xl` classes produced **no CSS** — e.g. the hero `<h1>` rendered at
  the same size as section `<h2>`s. Restored a full scale (`xs` → `7xl`) with paired line
  heights ≥ 1.15 so stacked Vietnamese diacritics do not collide.
- Hero uses `.page-display` (4xl → 6xl); page/section headings use `.page-heading`
  (3xl → 5xl), so the hero sits above section titles again.
- Post body: 17px / 1.8 line-height, capped at `max-w-3xl` (~72 chars). Was `max-w-none`
  (~110 chars on wide screens).
- Removed the render-blocking Google-hosted Inter (duplicated the self-hosted font);
  registered JetBrains Mono as the `mono` family.

## Component classes (extended, not one-off utilities)

- **Refined:** `.surface-panel*`, `.action-btn-*`, `.page-*`.
- **Added:** `.surface-panel-interactive`, `.surface-panel-lg`, `.surface-glass`,
  `.surface-brand`, `.page-display`, `.page-section`, `.page-highlight`,
  `.panel-heading`, `.panel-label`, `.action-link`,
  `.action-btn-lg` / `-sm` / `-inverse` / `-on-brand`,
  `.nav-link` (+ `-featured` / `-stacked`, with `aria-current`),
  `.icon-btn`, `.icon-tile`, `.chip` + `.tone-info` / `-success` / `-danger`,
  `.input-field`.
- `line-clamp-2` / `line-clamp-3` added as utilities (absent in TW 3.0.23, so those
  classes previously did nothing).

## By area

### Global chrome

- `.app-shell`: `overflow:hidden` → `overflow-x:clip`, which restores `position:sticky`
  for the header and sidebars _(computed; the rule itself confirmed in a standalone
  headless-Chrome test)_.
- Header: 64px glass bar, sticky from `md` up only (mobile keeps BottomNav). Current page
  marked with `aria-current`.
- ThemeSwitch exposes `aria-pressed`. Footer social icons go neutral → brand on
  hover/focus. BottomNav uses the same glass, safe-area padding, a passing active color,
  and `aria-hidden` icons.
- Reduced-motion users get animations and smooth-scroll disabled.

### Homepage (`pages/index.js`, `components/home/FAQ.js`)

- Replaced only the JSX; lines 1–185 (data + `PageSEO`) kept byte-identical so this does
  not collide with the parallel SEO effort's Phase 1b.
- Swapped three 400–600px blurred blobs for one CSS glow; hero highlight, buttons, course
  cards (2 → 4 columns), stat tiles, USP / pain / outcome / track panels, testimonials,
  and an orange `.surface-brand` CTA all moved to tokens.
- No copy changed (AST-verified). CTA's Instagram glyph → chat icon.

### Post / course layouts

- `overflow-x-clip` so sidebars stick _(computed)_.
- Token-driven prose: one definition for both modes, replacing the separate
  `dark:prose-dark`.
- Share links became single styled anchors; lesson list uses `.nav-link-stacked` +
  `aria-current`; back / prev / next became secondary buttons.

### Large Course landing layouts (7 files)

- Not hand-edited; they inherit the global changes (slate grays, shadow levels, full type
  scale, focus ring, chrome). Migrating them is a sensible phase 2.

## Consolidated / deprecated

- Removed `--font-display` / `fontFamily.display` (unused duplicate), `.soft-divider`,
  the `typography.dark` block, and all `dark:prose-dark` / `prose-neutral` usages.
- Replaced classes that are dead on TW 3.0.23 (`animate-pulse-slow`, `pb-safe`, `xs:`,
  `text-md`, `slate-950`, `/35` opacity, colored `shadow-*`) where they mattered.
- Per the approved direction: no files deleted, Tailwind stays on 3.0.23, buttons are
  AWS-style (orange fill, dark label).

## To finish verification

Re-run the interrupted headless pass (temp harness at `/tmp/vnt-shots/`, already fixed to
exclude `127.0.0.1`): light/dark screenshots at desktop/tablet/mobile plus a live DOM
contrast audit, sticky assertions, and BottomNav clearance. Build artifacts (`out/`,
`.next/`) are git-ignored; only `/tmp/vnt-shots/` would need cleanup afterward.

## Coordination note

A parallel SEO effort committed on branch `seo/phase-1a` (commits `4853f76`, `2525a7f`)
and swept in the `_document.js` and `layouts/DocumentLayout.js` edits from this work. The
rest of the visual work is currently unstaged on top of that branch — confirm that is the
intended branch before committing.
