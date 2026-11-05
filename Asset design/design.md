# Aptivo Design System (design.md)

A playful learning app for kids. This document describes the visual language seen in the mobile mockup and extends it into a **responsive system** that works from small phones to large desktop monitors.

> **Source of truth note:** Hex values, sizes and font choice are estimated from the mockup image. Treat them as the starting point and adjust them once you have the original design file.

---

## 1. Product Overview

| Item | Description |
|---|---|
| Product | Aptivo, a kids learning app |
| Audience | Children (primary users) and parents (settings, oversight) |
| Mascot | **Petal**, a coral flower with big googly eyes |
| Subjects | Math, Coding/Logic, Art, Music, Science, Reading |
| Core loop | Pick subjects, take short lessons, earn streaks and badges |
| Tone | Friendly, warm, encouraging, never stressful |

### Design principles

1. **Playful but clear.** Bright colors and a mascot make it fun, but every screen has one obvious next action.
2. **One color per subject.** Color is the main way kids recognise a subject. Use it consistently on tiles, headers, progress bars and lesson cards.
3. **Big, soft, touchable.** Large rounded shapes, generous padding and large tap targets suit small hands.
4. **Celebrate progress.** Streaks, badges, percentages and progress rings are always visible.
5. **Parents stay in control.** Parent settings sit apart from the child's play areas.
6. **Fluid by default.** Layout adapts to the available width. It never depends on a fixed device size.

---

## 2. Color

### 2.1 Brand and surface

| Token | Hex | Usage |
|---|---|---|
| `--color-brand` | `#F4664B` | Primary buttons, splash background, active tab, streak header, Petal mascot |
| `--color-brand-strong` | `#E1523A` | Button pressed state, high-contrast brand text |
| `--color-brand-soft` | `#FDE3DC` | Tinted backgrounds, selected states |
| `--color-bg` | `#FEF4E6` | App background (warm cream) |
| `--color-surface` | `#FFFFFF` | Cards, list rows, inputs, tab bar |
| `--color-surface-muted` | `#F3EBDD` | Locked or disabled tiles, progress tracks |
| `--color-border` | `#E8DCC8` | Hairline borders on rows and inputs |
| `--color-ink` | `#2A2A2E` | Primary text |
| `--color-ink-soft` | `#6B6B73` | Secondary text, captions |
| `--color-ink-on-color` | `#FFFFFF` | Text on brand and subject colors |

### 2.2 Subject colors

| Subject | Token | Hex |
|---|---|---|
| Math | `--subject-math` | `#3B82E8` |
| Coding / Logic | `--subject-logic` | `#5DD0AC` |
| Art | `--subject-art` | `#8A7BE0` |
| Music | `--subject-music` | `#D84B80` |
| Science | `--subject-science` | `#5E9F1F` |
| Reading | `--subject-reading` | `#F2A230` |

Each subject also needs a **dark** variant (about 15% darker) for text and thin bars on light backgrounds, and a **tint** (about 85% lighter) for soft backgrounds.

### 2.3 Feedback colors

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#3DB56B` | Correct answers, completed lessons |
| `--color-warning` | `#F2A230` | Gentle hints |
| `--color-error` | `#E5484D` | Errors in parent areas and forms |
| `--color-locked` | `#BDB7AB` | Locked content and "Coming soon" |

### 2.4 Contrast rules

- White text on `--subject-logic` (mint) and `--subject-reading` (amber) is borderline. Use `--color-ink` text or the dark variant on those two colors when text is smaller than 18px.
- Body text on cream must be `--color-ink`. Never use a subject color for body text.
- Never rely on color alone. Always pair it with an icon or label.

---

## 3. Typography

### 3.1 Typefaces

| Role | Font | Fallback stack |
|---|---|---|
| Display (wordmark, headings) | **Rubik** (Bold / SemiBold) | `"Rubik", "Nunito", system-ui, sans-serif` |
| UI and body | **Rubik** (Regular / Medium) | `"Rubik", system-ui, -apple-system, "Segoe UI", sans-serif` |
| Handwritten annotation (marketing only) | Script face | Not used inside the app |

Rubik's slightly rounded corners match the soft shapes of the interface. Load weights 400, 500 and 700 only. Use `font-display: swap`.

### 3.2 Fluid type scale

Sizes scale with the viewport using `clamp()`. Minimum size is for 320px screens and maximum is for 1280px and up.

| Token | Min | Max | Weight | Line height | Use |
|---|---|---|---|---|---|
| `--text-display` | 40px | 72px | 700 | 1.05 | Splash and welcome wordmark |
| `--text-h1` | 24px | 40px | 700 | 1.15 | Screen titles ("Pick what you love") |
| `--text-h2` | 20px | 28px | 600 | 1.2 | Section titles ("Your Lessons") |
| `--text-h3` | 16px | 20px | 600 | 1.25 | Card titles, subject names |
| `--text-body` | 15px | 18px | 400 | 1.5 | Body copy, lesson descriptions |
| `--text-label` | 13px | 15px | 500 | 1.3 | Buttons, tabs, chips |
| `--text-caption` | 11px | 13px | 400 | 1.3 | Percentages, lesson counts, hints |

Rules:

- Use sentence case everywhere. Avoid all caps except the "APTIVO" wordmark on the splash.
- Keep body line length under 65 characters on large screens.
- Never go below 11px, and keep it for captions only.
- Respect the user's browser font-size setting by using `rem`, not `px`, in production.

---

## 4. Layout, Spacing and Shape

### 4.1 Spacing scale (4px base)

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |

Page padding is fluid: `clamp(16px, 4vw, 48px)`.

### 4.2 Corner radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Inputs, small chips |
| `--radius-md` | 14px | List rows, buttons |
| `--radius-lg` | 20px | Cards, subject tiles |
| `--radius-xl` | 28px | Hero cards, course header |
| `--radius-full` | 999px | Pills, avatars, tab indicator |

### 4.3 Elevation

The mockup is mostly flat. Use depth sparingly.

| Token | Value | Use |
|---|---|---|
| `--shadow-0` | none | Default for tiles and cards |
| `--shadow-1` | `0 1px 2px rgba(42,42,46,.08)` | List rows on cream |
| `--shadow-2` | `0 6px 16px rgba(42,42,46,.12)` | Hovered or focused cards on desktop, dialogs |

### 4.4 Playful tilt

Tiles on the Courses screen are rotated slightly to feel hand-placed.

- Rotate alternating tiles between `-3deg` and `+3deg`.
- Remove rotation on hover and focus, and for `prefers-reduced-motion`.
- Never tilt text-heavy cards or buttons.

---

## 5. Iconography and Illustration

- **Icon style:** Rounded, 2px stroke, simple shapes. Size 20px in tab bars and rows, 28px inside subject tiles, 40px in course headers.
- **Subject icons:** Math (plus sign, number blocks), Coding/Logic (code brackets, lightbulb), Art (palette), Music (note), Science (flask), Reading (book).
- **Mascot (Petal):**
  - Coral flower with five rounded petals, big white eyes with black pupils, small smile and eyelashes.
  - Eyes only (no petals) appear peeking from the top of lesson cards and from the splash screen.
  - Use Petal for onboarding, empty states, encouragement and celebration. Do not use it for errors.
- **Badges:** Round medallions (ribbon, flame, star). Locked badges are grey with a padlock.
- **Decoration:** Stack of books on the Home progress card. Keep decoration out of the way of tap targets.

Provide all illustrations as SVG so they scale cleanly on every screen.

---

## 6. Components

### 6.1 Buttons

| Variant | Style |
|---|---|
| Primary | Background `--color-brand`, white text, `--radius-md`, height 52px, full width on mobile, auto width (min 200px) on tablet and up |
| Secondary | White background, `--color-brand` text, 1.5px brand border |
| Ghost | Transparent, ink text, for low-priority actions |
| Subject button | Background is the subject color (for example "Start Learning" can inherit brand) |

States: hover darkens by 6%, pressed uses `--color-brand-strong` and scales to 0.98, disabled uses `--color-surface-muted` with `--color-ink-soft` text, focus shows a 3px outline `--color-ink` with 2px offset.

Minimum touch target is **48 x 48px** (prefer 52px for primary actions).

### 6.2 Text input

- Height 52px, white surface, `--radius-md`, 1.5px `--color-border`.
- Placeholder in `--color-ink-soft` ("Type your name").
- Focus: border `--color-brand` plus 3px brand-soft ring.
- Always show a visible label or an accessible label. A placeholder alone is not a label.

### 6.3 Subject tile (selection)

Used on "Pick what you love".

- Solid subject color, `--radius-lg`, aspect ratio about 4:3.
- Icon at the top, subject name below in `--text-h3`.
- Selected state: 3px white inner ring plus a check badge in the corner.
- Grid: 2 columns on phones, 3 on tablets, 3 to 6 on desktop.

### 6.4 Lesson card (Home)

- White or subject-tinted body, a **colored top band** with Petal's eyes peeking over the edge.
- Title (subject), subtitle (topics, for example "Crafts, Doodling"), thin progress bar, and "x/y lessons" with a percentage.
- Two columns on phones, three on tablets, four on desktop.

### 6.5 Progress ring card

- Circular ring showing overall percentage (for example 30%) with the label "progress".
- Books illustration on the right.
- Full width on mobile. On desktop it sits in the dashboard header next to the greeting.

### 6.6 Course tile (Courses screen)

- Small rotated rounded square in the subject color with an icon and a lowercase label (addition, puzzles, riddles, counting, and so on).
- **Locked state:** grey `--color-locked`, padlock icon, label "Coming soon". Not focusable as a link, but still readable by screen readers.
- Group tiles under subject headings with a small icon.

### 6.7 Search field

- White pill with magnifier icon and "Search" placeholder.
- Full width, sticky at the top of the Courses list on mobile.

### 6.8 Course header

- Full-bleed subject color (blue for Math), radius `--radius-xl` on the bottom corners.
- Course icon in a white rounded square, title ("Counting to 20"), and meta ("Math · 6 lessons").
- A short description and a white progress card ("2 of 6 lessons done").

### 6.9 Lesson row

- White row, `--radius-md`, 56px minimum height, title on the left, optional status icon on the right.
- States: **default**, **current** (2px subject-color outline), **completed** (check icon), **locked**.
- Row types: lessons ("Numbers 1 to 5"), game ("Counting Game"), quiz ("Practice Quiz 1").

### 6.10 Streak banner

- Full-width coral header with flame icon, "6 day streak!" and the helper line "Keep it going, learn today".
- Use `--text-h2` for the streak count.

### 6.11 Subject progress bar

- Icon, subject name, bar and percentage (for example Math 40%).
- Bar track `--color-surface-muted`, fill is the subject color, height 8px, fully rounded.
- Always expose the value as text (percentage) next to the bar.

### 6.12 Badge and trophy case

- A row or grid of round badges. Earned badges are colored. Locked ones are grey with a padlock.
- Show a tooltip or caption on tap or hover ("Earned for a 3 day streak").

### 6.13 Stat tiles (Profile)

- Three equal tiles: **14 lessons**, **3 badges**, **6 day streak**.
- Number in `--text-h2`, label in `--text-caption`.

### 6.14 Settings list

- White rows with leading icon, label and a chevron.
- Items: Edit avatar, Parent settings, Notifications, Help.
- **Parent settings** is protected by a parent gate (for example a simple math question aimed at adults).

### 6.15 Navigation

| Viewport | Pattern |
|---|---|
| Below 768px | **Bottom tab bar**: Home, Courses, Progress, Profile. Active tab is a coral pill with icon and label. Inactive tabs show icon only. |
| 768px to 1199px | **Navigation rail** on the left (80px wide), icon above label, active item in a coral pill. |
| 1200px and up | **Sidebar** (240px wide) with logo, full labels, and the profile summary at the bottom. |

Top-level destinations never change between layouts, only the container does.

---

## 7. Screens

### 7.1 Onboarding

| # | Screen | Content |
|---|---|---|
| 1 | Splash | Full coral background, Petal's eyes and the white "APTIVO" wordmark centered |
| 2 | Welcome | Cream background, coral "Aptivo" wordmark at the top, a large Petal peeking up from the bottom edge |
| 3 | Name | Petal illustration, "Hi! I'm Petal. What's your name?", text input, primary **Continue** button |
| 4 | Pick what you love | Title, six subject tiles in a grid, primary **Start Learning** button |

### 7.2 Main app

| # | Screen | Content |
|---|---|---|
| 5 | Home | Greeting ("Hello Alyssa, what are you learning today?"), notification bell, progress ring card, "Your Lessons" grid of lesson cards |
| 6 | Courses | "My courses", search, tiles grouped by subject, locked "Coming soon" tiles |
| 7 | Course detail | Colored header, progress card, "Lessons" list (lessons, game, quizzes) |
| 8 | Progress | Streak banner, "By subject" bars, "Badges earned" row |
| 9 | Profile | Avatar, name and streak, three stat tiles, Trophy case, settings list |

---

## 8. Responsive Design

### 8.1 Approach

- **Mobile first.** Write the small-screen layout as the default and enhance upward with `min-width` queries.
- **Fluid first, breakpoints second.** Use `clamp()`, `minmax()`, `auto-fit` and percentages so layouts adapt smoothly between breakpoints.
- **Content decides.** Add a breakpoint only where the content breaks, not for specific devices.
- Support widths from **320px** to **2560px**, portrait and landscape, and browser zoom up to 200%.

### 8.2 Breakpoints

| Name | Min width | Typical devices | Columns | Gutter | Max content width |
|---|---|---|---|---|---|
| `xs` | 0 | Small phones | 4 | 16px | fluid |
| `sm` | 480px | Large phones | 4 | 16px | fluid |
| `md` | 768px | Tablets (portrait) | 8 | 24px | 720px |
| `lg` | 1024px | Tablets (landscape), small laptops | 12 | 24px | 960px |
| `xl` | 1280px | Laptops, desktops | 12 | 32px | 1200px |
| `2xl` | 1600px | Large monitors | 12 | 32px | 1360px |

Also adapt to orientation: in landscape on phones (`max-height: 500px`), reduce vertical padding and move the tab bar to a side rail.

### 8.3 Layout patterns by component

| Screen or component | xs to sm (phones) | md (tablet) | lg to 2xl (desktop) |
|---|---|---|---|
| Navigation | Bottom tab bar | Left rail | Left sidebar |
| Splash and welcome | Full screen, content centered | Same, with max width 480px | Split layout: illustration on one side, content on the other |
| Name entry | Single column | Centered card, max 480px | Centered card with larger Petal |
| Pick what you love | 2 columns | 3 columns | 3 columns (up to 6 on 2xl), max 900px |
| Home | Progress card, then 2 column lessons | Progress card, then 3 column lessons | Header row (greeting plus progress card), 4 column lesson grid |
| Courses | Search, then tiles in a 3 column grid | 4 to 5 column grid | 6 column grid, with subject groups side by side |
| Course detail | Header, then stacked lesson list | Same, wider rows | **Two panes**: course header and progress on the left (sticky), lesson list on the right |
| Progress | Streak banner, bars, badges stacked | Streak banner plus bars in two columns | Dashboard: streak, subjects and badges in a three card grid |
| Profile | Stacked | Two columns (identity and stats, then settings) | Same, inside a centered 720px container |

### 8.4 Wireframes

**Phone (xs, sm)**

```
+------------------------+
| Hello Alyssa      (bell)|
| [ 30% progress  books ]|
| Your Lessons           |
| [Art     ] [Coding   ] |
| [Math    ] [Music    ] |
|                        |
| (Home)(Courses)(Prog)(Me)|
+------------------------+
```

**Tablet (md)**

```
+----+-------------------------------------+
|    | Hello Alyssa                  (bell)|
| H  | [ 30% progress           books ]    |
| C  | Your Lessons                        |
| P  | [Art ] [Coding] [Math ]             |
| Me | [Music] [Science] [Reading]         |
+----+-------------------------------------+
```

**Desktop (lg and up)**

```
+----------+----------------------------------------------+
| Aptivo   | Hello Alyssa, what are you learning?   (bell)|
|          | +-------------------+ +--------------------+ |
| Home     | | 30% progress      | | 6 day streak       | |
| Courses  | +-------------------+ +--------------------+ |
| Progress | Your Lessons                                 |
| Profile  | [Art] [Coding] [Math] [Music]                |
|          | [Science] [Reading]                          |
| (Alyssa) |                                              |
+----------+----------------------------------------------+
```

### 8.5 Responsive rules

1. **Grids:** use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr))` for tile and card grids so they reflow without extra breakpoints.
2. **Images and illustrations:** SVG with `max-width: 100%; height: auto`. Mascot illustrations use `clamp()` sizes (for example `clamp(160px, 40vw, 320px)`).
3. **Primary buttons:** full width below `md`, content width at `md` and up. Keep the primary action reachable at the bottom on phones.
4. **Safe areas:** pad fixed bars with `env(safe-area-inset-*)`, and use `viewport-fit=cover`. The bottom tab bar needs `padding-bottom: env(safe-area-inset-bottom)`.
5. **Viewport height:** use `100dvh` instead of `100vh` for full-screen layouts so mobile browser bars do not cut off content.
6. **Overflow:** never let the page scroll sideways. Wide content scrolls inside its own container.
7. **Long text:** allow wrapping, never truncate titles that kids need to read. Use `overflow-wrap: anywhere` for names.
8. **Foldables and split screens:** layouts must work at any width, so avoid fixed pixel widths on containers.
9. **Input modes:** touch, mouse and keyboard all work. Hover effects only apply under `@media (hover: hover)`.
10. **Dark mode:** not part of the original mockup. If added later, keep subject colors recognisable and use a warm dark background (`#241F1C`) rather than pure black.

---

## 9. Motion

| Interaction | Animation | Duration |
|---|---|---|
| Button press | Scale to 0.98 | 100ms |
| Tab change | Pill slides to the new tab | 200ms |
| Progress bar and ring fill | Animates from the old value to the new value | 600ms ease-out |
| Badge earned | Pop with a small bounce, plus Petal celebration | 500ms |
| Petal eyes | Subtle blink or look-around on idle screens | 3 to 6s loop |
| Screen change | Short fade and 8px slide | 200ms |

Rules:

- Motion should answer a child's action or celebrate progress. Avoid decorative looping motion elsewhere.
- Respect `prefers-reduced-motion: reduce` by removing tilt, bounce, blink and slide, and keeping simple fades.
- Never auto-advance content that a child may still be reading.

---

## 10. Accessibility

- **WCAG 2.2 AA** is the target for all screens.
- **Touch targets:** 48 x 48px minimum, with at least 8px between targets.
- **Focus:** visible 3px focus ring on every interactive element. Tab order follows visual order.
- **Labels:** every icon-only button (bell, back, tabs when collapsed) has an accessible name.
- **Progress:** bars and rings expose `role="progressbar"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.
- **Locked content:** announce "Coming soon, locked".
- **Language level:** short sentences, simple words, reading level suitable for early readers. Consider read-aloud support for lesson text.
- **Color:** never use color alone to show state. Add icons or text.
- **Zoom and text size:** layouts hold up at 200% zoom and larger system text sizes.
- **Child privacy and safety:** collect the minimum data (a first name or nickname only). Gate parent settings, external links and purchases behind a parent check.

---

## 11. Content and Voice

- Speak as **Petal**: friendly, short and encouraging.
- Use sentence case and plain words.
- Examples:
  - Greeting: "Hello Alyssa, what are you learning today?"
  - Onboarding: "Hi! I'm Petal. What's your name?"
  - Streak: "6 day streak! Keep it going, learn today."
  - Locked: "Coming soon"
  - Empty state: "No lessons yet. Pick a subject to start."
  - Mistakes: "Almost! Try again." (never "Wrong")
- Name actions consistently: the button is **Continue** on one screen and the same word is used in the next step. The primary learning action is **Start learning** (or **Start** when space is tight).

---

## 12. Design Tokens (CSS)

```css
:root {
  /* Color: brand and surface */
  --color-brand: #F4664B;
  --color-brand-strong: #E1523A;
  --color-brand-soft: #FDE3DC;
  --color-bg: #FEF4E6;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F3EBDD;
  --color-border: #E8DCC8;
  --color-ink: #2A2A2E;
  --color-ink-soft: #6B6B73;
  --color-ink-on-color: #FFFFFF;

  /* Color: subjects */
  --subject-math: #3B82E8;
  --subject-logic: #5DD0AC;
  --subject-art: #8A7BE0;
  --subject-music: #D84B80;
  --subject-science: #5E9F1F;
  --subject-reading: #F2A230;

  /* Color: feedback */
  --color-success: #3DB56B;
  --color-warning: #F2A230;
  --color-error: #E5484D;
  --color-locked: #BDB7AB;

  /* Type */
  --font-sans: "Rubik", system-ui, -apple-system, "Segoe UI", sans-serif;
  --text-display: clamp(2.5rem, 1.6rem + 4vw, 4.5rem);
  --text-h1: clamp(1.5rem, 1.1rem + 1.8vw, 2.5rem);
  --text-h2: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  --text-h3: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
  --text-body: clamp(0.9375rem, 0.88rem + 0.3vw, 1.125rem);
  --text-label: clamp(0.8125rem, 0.78rem + 0.2vw, 0.9375rem);
  --text-caption: clamp(0.6875rem, 0.66rem + 0.15vw, 0.8125rem);

  /* Space */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --page-pad: clamp(1rem, 4vw, 3rem);

  /* Shape */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 999px;

  /* Elevation */
  --shadow-1: 0 1px 2px rgba(42, 42, 46, 0.08);
  --shadow-2: 0 6px 16px rgba(42, 42, 46, 0.12);

  /* Layout */
  --container-max: 1200px;
  --nav-rail-width: 80px;
  --nav-sidebar-width: 240px;
  --tabbar-height: 64px;
  --tap-target: 48px;
}

html { font-size: 100%; }
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-ink);
  font: 400 var(--text-body) / 1.5 var(--font-sans);
}
```

### Core responsive snippets

```css
/* App shell: bottom tabs on phones, rail on tablets, sidebar on desktop */
.app { min-height: 100dvh; display: grid; grid-template-rows: 1fr auto; }
.main { padding: var(--page-pad); max-width: var(--container-max); margin-inline: auto; width: 100%; }
.tabbar {
  position: sticky; bottom: 0; height: var(--tabbar-height);
  padding-bottom: env(safe-area-inset-bottom);
  background: var(--color-surface); display: flex; justify-content: space-around;
}

@media (min-width: 768px) {
  .app { grid-template-columns: var(--nav-rail-width) 1fr; grid-template-rows: 1fr; }
  .tabbar { position: sticky; top: 0; height: 100dvh; flex-direction: column;
            justify-content: flex-start; padding-bottom: 0; }
}
@media (min-width: 1200px) {
  .app { grid-template-columns: var(--nav-sidebar-width) 1fr; }
}

/* Fluid card grid */
.grid-cards {
  display: grid; gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr));
}

/* Primary button */
.btn-primary {
  min-height: 52px; padding-inline: var(--space-5); width: 100%;
  border: 0; border-radius: var(--radius-md);
  background: var(--color-brand); color: var(--color-ink-on-color);
  font: 500 var(--text-label) / 1 var(--font-sans);
}
@media (min-width: 768px) { .btn-primary { width: auto; min-width: 200px; } }
.btn-primary:focus-visible { outline: 3px solid var(--color-ink); outline-offset: 2px; }

/* Hover only where hover exists */
@media (hover: hover) { .btn-primary:hover { background: var(--color-brand-strong); } }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
  .tile { transform: none !important; }
}
```

### Tailwind (optional)

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: { sm: "480px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1600px" },
    extend: {
      colors: {
        brand: { DEFAULT: "#F4664B", strong: "#E1523A", soft: "#FDE3DC" },
        cream: "#FEF4E6",
        ink: { DEFAULT: "#2A2A2E", soft: "#6B6B73" },
        subject: {
          math: "#3B82E8", logic: "#5DD0AC", art: "#8A7BE0",
          music: "#D84B80", science: "#5E9F1F", reading: "#F2A230",
        },
      },
      fontFamily: { sans: ["Rubik", "system-ui", "sans-serif"] },
      borderRadius: { md: "14px", lg: "20px", xl: "28px" },
    },
  },
};
```

---

## 13. Implementation Checklist

- [ ] All sizes use `rem`, `%`, `dvh` or `clamp()`. No fixed device widths.
- [ ] Navigation switches between bottom tabs, rail and sidebar at 768px and 1200px.
- [ ] Every grid reflows without horizontal scroll from 320px to 2560px.
- [ ] Touch targets are at least 48px.
- [ ] Safe-area insets applied to fixed bars.
- [ ] Subject colors used consistently across tiles, headers, bars and cards.
- [ ] Text contrast meets 4.5:1 (check mint and amber surfaces).
- [ ] Focus states visible on every interactive element.
- [ ] `prefers-reduced-motion` respected.
- [ ] Locked states communicated with an icon and text, not color alone.
- [ ] Parent settings protected by a parent gate.
- [ ] Tested on: 320px phone, 390px phone, 768px tablet portrait, 1024px tablet landscape, 1440px desktop, 200% zoom.
