---
name: The Links at Norman — B · Yardage Book
description: A pocket yardage book set as a magazine feature; white page, black ink, hairline rules, lime highlighter, blue links.
colors:
  page: "#FFFFFF"
  ink: "#141414"
  ink-2: "#4A4A4A"
  ink-3: "#6B6B6B"
  rule: "#DADADA"
  lime: "#85C443"
  lime-wash: "#EEF7E3"
  blue: "#006BB3"
  total-tint: "#F6F6F6"
  button-pressed: "#000000"
typography:
  display:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(3rem, 1.5rem + 8.5vw, 9.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.6rem + 4vw, 5.2rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.012em"
  pull:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(1.7rem, 1.1rem + 3vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
  note:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.05rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.35
  standfirst:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "clamp(1.15rem, 1rem + 0.7vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.4
  title:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "Gambetta, Georgia, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  figures:
    fontFamily: "Supreme, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "tabular-nums"
  label:
    fontFamily: "Supreme, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Supreme, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.6
  plate-mark:
    fontFamily: "Supreme, system-ui, sans-serif"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: 1
rounded:
  mark: "2px"
  control: "3px"
  dot: "50%"
spacing:
  hair: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  row: "clamp(36px, 4vw, 64px)"
  block: "clamp(40px, 5vw, 72px)"
  section: "clamp(56px, 8vw, 120px)"
  gutter: "clamp(20px, 6vw, 96px)"
  column-gap: "clamp(32px, 5vw, 96px)"
  head-gap: "clamp(20px, 4vw, 72px)"
  measure: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    typography: "{typography.figures}"
    rounded: "{rounded.control}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.button-pressed}"
    textColor: "{colors.page}"
  button-quiet:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.figures}"
    rounded: "{rounded.control}"
    padding: "14px 20px"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
  button-turn:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.figures}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  button-turn-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
  masthead-tee:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  highlight-mark:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.figures}"
    rounded: "{rounded.mark}"
    padding: "2px 6px"
  scorecard-hole:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.figures}"
    rounded: "{rounded.mark}"
    padding: "3px 4px"
  scorecard-hole-hover:
    backgroundColor: "{colors.lime-wash}"
    textColor: "{colors.ink}"
  scorecard-hole-current:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  map-chip:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "9px 13px"
  map-chip-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
---

# Design System: The Links at Norman — B · Yardage Book

## Overview

**Creative North Star: "The Pocket Yardage Book"**

The page is paper. Everything on it is set the way a golf magazine would set a course feature: a white sheet, black and two greys of ink, hairline rules dividing one thing from the next, and one highlighter pen (the club's lime) that marks the par, the hole you are on, the yardages on the aerial plates and the line of play. The club's logo blue is kept for one job, hyperlinks, so a reader always knows what is clickable. There is no colour field, no tinted panel, no gradient, no shadow; the only images are the club's own photographs and the surveyed ground.

The eighteen holes are pages you turn, not a scroll. The spread is a native horizontal scroll-snap track inside two black rules, each page carrying a folio ("No. 7"), a huge serif par with the yardage set beneath in the sans, the club's own note at reading size, and a 260px greyscale locator at the right. The rest of the document reads downward in the same editorial measure: title, standfirst, facts line, full-bleed photograph, then section after section opened by a black rule and a two-column head (large serif heading left, grey intro right).

Density is generous. Gutters run to 96px, sections breathe at up to 120px, and headings are measured in ch. Hierarchy is carried by size and rule weight rather than by weight or colour: black rules (#141414) open sections and bracket the book; hairline rules (#DADADA) separate rows, facts, terms and table lines.

**Key Characteristics:**
- White page, three inks, one hairline grey; no fills except the lime highlighter and the greyed total column.
- Gambetta for everything read; Supreme (tabular) for every number, folio, caption, label and control.
- Two rule weights do the work of borders, cards and panels: black opens, hairline divides.
- Lime is a highlighter: it sits behind or on top of information, never as a surface.
- Blue appears only on hyperlinks in running text.
- Pages turn horizontally; everything else reads down the sheet at a single 1280px measure.

## Colors

A printer's palette: paper, three weights of black ink, one hairline grey, one fluorescent highlighter, one link blue.

### Primary
- **Highlighter Lime** (`lime`): the club's own green used exactly as a highlighter pen. It sits behind "Par 71" in the facts line, behind the current hole number on the scorecard, under each yardage mark and as the dotted line of play on the aerial plates, as the route stroke on the greyscale locators and the map pin, as the bullet dot in the "Included" list, and as the text-selection colour. It is never a background panel or a button fill.
- **Lime Wash** (`lime-wash`): the highlighter at a quarter strength. Hover state of a scorecard hole number and the first-line wash on the membership pull quote. Always under ink text, never under white.

### Secondary
- **Logo Blue** (`blue`): hyperlinks in running text (phone numbers, the member portal, the Station credit is ink). Nothing else is blue; the brand colour is spent on the one thing a reader needs to recognise.

### Neutral
- **Page** (`page`): the sheet. Also the text colour on ink buttons and the masthead at 92% with an 8px backdrop blur.
- **Ink** (`ink`): headings, body, controls, section-opening rules, the scorecard header rule, the masthead name, the map pin label fill.
- **Ink 2** (`ink-2`): standfirst, section intros, yardage line under the par, counter, facts line, captions in dl lists. Measured at 8.6:1 on white.
- **Ink 3** (`ink-3`): folios, photo captions, table row labels, term labels, the colophon, the masthead subtitle. Measured at 5.3:1 on white; the lightest text ink the build uses.
- **Hairline** (`rule`): every dividing rule that is not a section opener: facts line, folio underline, book-nav, table cells, dl rows, list rows, masthead bottom.
- **Total Tint** (`total-tint`): the only grey fill on the sheet, behind Out / In / Total cells of the scorecard.
- **Pressed Black** (`button-pressed`): hover of the ink button and masthead tee button.

### Named Rules
**The Highlighter Rule.** Lime marks information that already exists (a par, a yardage, a current hole, a route). It never fills a surface, a card, a button or a section; if a lime shape has no number or line inside or beneath it, it is wrong.

**The One Blue Rule.** Logo blue appears only on hyperlinks in running text. Buttons are ink, marks are lime, nothing else is blue.

**The Two Rules Rule.** Structure is drawn with exactly two strokes: a 1px ink rule opens a section or brackets the book; a 1px hairline divides rows, cells and facts. No other border, box or panel exists.

## Typography

**Display Font:** Gambetta (with Georgia, serif), self-hosted Fontshare, 400/500/700 and italics
**Body Font:** Gambetta
**Label/Figures Font:** Supreme (with system-ui, sans-serif), self-hosted Fontshare, 400/500/700, always `font-variant-numeric: tabular-nums` when it carries numbers

**Character:** A reading serif with a magazine's confidence, set loose at 18px on the sheet and tightened only slightly (-0.012em) when it grows; a plain, even sans takes every number, folio, caption and control so that the serif is never asked to tabulate. Italic Gambetta 400 is the only emphasis in headings and body ("for *the Links*", "golf *and* athletic club").

### Hierarchy
- **Display** (Gambetta 400, `clamp(3rem, 1.5rem + 8.5vw, 9.5rem)`, 1): the title "A yardage book for the Links." only, 12ch max, italic for the emphasised phrase.
- **Headline** (Gambetta 500, `clamp(2.6rem, 1.6rem + 4vw, 5.2rem)`, 1): section openers "Hole by hole.", "After the round.", "Membership."; the Visit heading steps down to `clamp(2.2rem, 1.4rem + 3vw, 4rem)`. The hole par on each page uses the same size at weight 400 with its yardage set beneath in Supreme `clamp(1rem, .9rem + .5vw, 1.35rem)` Ink 2.
- **Pull** (Gambetta 400, `clamp(1.7rem, 1.1rem + 3vw, 4rem)`, 1.1): the membership pull quote, 22ch max, first line washed in lime.
- **Note** (Gambetta 400, `clamp(1.25rem, 1.05rem + 1vw, 2rem)`, 1.35): the club's own hole note on each page, 30ch max.
- **Standfirst** (Gambetta 400, `clamp(1.15rem, 1rem + .7vw, 1.6rem)`, 1.4, Ink 2): the opener standfirst and section intros (intros range 1.05rem to 1.4rem by section), 46–54ch max.
- **Title** (Gambetta 500, 1.5rem, 1.15): sub-heads inside the scorecard aside and the membership "Included" column.
- **Body** (Gambetta 400, 18px, 1.5): running text; Ink 2 when it is explanatory, Ink when it is the club speaking. Address lines step up to 1.3rem, dl values to 1.2rem, list items to 1.1rem.
- **Figures** (Supreme 400/500, 15.5px, tabular): the facts line, dl rows, buttons (500), scorecard cells (15px; 12.5px between 560 and 1000px), book-nav counter (15px).
- **Label** (Supreme 400, 14–14.5px): masthead, folios, map chips. Row labels on the scorecard are Supreme 500 at 13px Ink 3.
- **Caption** (Supreme 400, 13.5px, Ink 3): photo captions, term labels, the colophon (1.6 leading).
- **Plate mark** (Supreme 600, 38px in the SVG's own units, 46px on the upright plate): yardage numerals on the aerial plates, ink on a lime tab with a white halo.

### Named Rules
**The Numbers Are Sans Rule.** Any string that is mostly digits (yardages, pars, prices, phone numbers, folios, dates, the counter) is set in Supreme with tabular figures. Gambetta never tabulates.

**The Size Carries Hierarchy Rule.** Headings move by size, not weight: 400 for the title and pars, 500 for section heads and titles, 600 only in the sans for the masthead name, plate marks and scorecard header. Bold Gambetta (700) is loaded but unused; do not reach for it.

**The Italic Is the Only Emphasis Rule.** Emphasis in serif is Gambetta 400 italic. No underlines outside links, no colour, no weight change.

## Layout

A single editorial measure. Every section pads `clamp(56px, 8vw, 120px)` top and bottom and uses the shared gutter `clamp(20px, 6vw, 96px)`; content inside the book, club, membership and visit sections is capped at 1280px and centred. Section openers are a 1px ink rule that runs gutter-to-gutter, then a two-column head (`1fr / 1.3fr`, heading left, grey intro right, gap `clamp(20px, 4vw, 72px)`, items aligned to the end or start depending on section).

Working two-column grids share one gap scale, `clamp(32px, 5vw, 96px)`: opener standfirst/facts (`1.4fr / 1fr`), scorecard tables/aside (`1.4fr / 1fr`), membership terms/includes (`1fr / 1fr`), visit text/map (`1fr / 1.2fr`). All collapse to one column at 1000px.

The opener is the exception to the measure: the title runs edge to gutter at 12ch, and the sunset photograph breaks out to full bleed (negative gutter margin) at a 2.1 aspect, 4:3 under 560px, with its caption re-indented to the gutter.

The spread (`.pages`) is a flex track with `overflow-x: auto; scroll-snap-type: x mandatory`, scrollbar hidden, each page `flex: 0 0 100%; scroll-snap-align: start; scroll-snap-stop: always`. A page is a grid of `1fr / 260px` with row gap `clamp(20px, 3vw, 48px)` and column gap `clamp(32px, 5vw, 80px)`, padded `clamp(28px, 4vw, 56px)` vertically and nothing horizontally (the track's two ink rules are the only frame). The plate spans both columns and is height-driven: `--ph: min(520px, 60vh)` on wide screens, `min(560px, 58vh)` below 1000px, with the width derived from the plate's own `--w/--h` ratio set inline per hole. The landscape plate (tee at the left) shows above 1000px; the upright plate replaces it below, and the 260px locator disappears.

The club photo grid is six columns at 16px with named areas (pool spans four, gym two; whirlpool two, grill one, shop one, house two), with per-figure aspect ratios (16:9, 8:9, 4:3, 3:4, 3:4, 4:3). Below 1000px it becomes two columns, gym reverting to 4:3.

Vertical rhythm inside blocks is small and fixed: 4px between a term and its value, 8px cell padding, 9–16px list and dl rows, 12–14px under a caption or sub-head, 22px between tables, 28px above a note or action. Larger steps are fluid: `clamp(36px, 4vw, 64px)` above the spread, `clamp(40px, 5vw, 72px)` above grids and photo sets, `clamp(48px, 6vw, 88px)` above the scorecard.

Breakpoints: 1000px (columns collapse, plates swap, locator hides, masthead nav drops to its own ruled row) and 560px (photo to 4:3, turn-button labels hide leaving the arrows, membership buttons go full width, scorecard returns to 15px since the table no longer competes with a locator).

## Elevation & Depth

Flat. The sheet has no shadows, no tonal layering and no raised surfaces; depth is implied only by rule weight (ink opens, hairline divides) and by the greyscale treatment of the locator and visit map (`grayscale(1) contrast(1.05) brightness(1.04–1.08)`) that pushes the ground back behind a lime route. The sticky masthead sits on white at 92% with an 8px backdrop blur and a hairline below; that blur is the only hint that anything floats. One pin on the visit map carries a `0 2px 8px rgba(0,0,0,.45)` shadow to lift a 16px lime dot off a photograph; it is a map marker, not a system shadow, and nothing else may borrow it.

### Named Rules
**The Flat Sheet Rule.** No box-shadow on any surface, control or card. If an element needs separating from its neighbour, draw a hairline.

## Shapes

Square by default. Rules, tables, photographs, the plate frames and the map chips have no radius. Controls carry a barely-perceptible 3px (ink buttons, quiet buttons, turn buttons, masthead tee button); highlights carry 2px (the lime `mark` on "Par 71", the scorecard hole-number pads). True circles (50%) are reserved for dots: the 10px lime list bullet and the 16px lime map pin with its 3px white ring. Lines on the plates are round-capped and round-joined; the line of play is a lime 5-unit stroke dashed `2 16` over a white 11-unit halo at 90%, the tee a lime disc with a white 5-unit ring, the green a white disc with a lime 6-unit ring. Borders, where they exist, are 1px ink on white (quiet button, turn button, map chip) and invert to ink-on-white → white-on-ink on hover.

## Components

### Buttons
Quiet, square-shouldered ink buttons; the loudest thing on the page is still black.
- **Shape:** near-square (3px radius); map chips are fully square (0).
- **Primary** (`.btn`, masthead `.tee`): ink fill, white Supreme 500 at 15.5px (14.5px in the masthead), `14px 20px` (masthead `9px 14px`), inline-flex with a 10px gap to a 14px stroked arrow icon (1.8 stroke, round caps). Used for "Book a tee time" and "Call the pro shop".
- **Hover / Focus:** fill deepens to #000 and the button lifts 1px over `.25s cubic-bezier(.2,.8,.2,1)`; focus-visible is a 2px ink outline offset 4px (global). Reduced motion removes the transition.
- **Quiet** (`.btn-quiet`): no fill, 1px ink border, ink text; inverts to ink fill / white text on hover. Used for the secondary action beside a primary ("ProShop@LinksAtNorman.Golf").
- **Turn** (`.turn`): the quiet button at `10px 16px`, 15px, for Previous / Next; label text hides under 560px leaving the arrow.
- **Map chip** (`.map-links a`): white fill, 1px ink border, 14px Supreme 500, `9px 13px`, no radius, inverts on hover; sits 14px from the map's bottom-left.

### Highlight Mark
- **Style:** lime behind ink text, `2px 6px`, 2px radius, Supreme 500. One per fact line ("Par 71"); the same treatment marks the current hole on the scorecard.

### Scorecard (signature)
Holes run across, Par and Yards down; two tables (Out, then In + Total) 22px apart, 540px minimum on wide screens and scrollable, free-flowing below 1000px.
- **Type:** Supreme 15px tabular; header hole numbers 600 over a 1px ink rule; row labels Supreme 500 13px Ink 3, left-aligned, 3.6em wide.
- **Cells:** `8px 4px`, centred, hairline below; `8px 1px` below 1000px.
- **Hole numbers:** links to pages, ink, no underline, `3px 4px` with 2px radius; lime-wash on hover, lime when `aria-current="true"` (set by the book as it turns).
- **Totals:** 600 on Total Tint (#F6F6F6).

### The Spread (signature)
Eighteen pages inside two ink rules. Each: folio (Supreme 14px Ink 3, hairline beneath, 14px pad) → par in Gambetta 400 at headline size with yardage in Supreme beneath → the club's note at Note size, 30ch → a 260px greyscale locator with a 44-unit lime route, top-aligned 56px down the right column. The plate, centred above, is a photograph with an SVG overlay in the same box: lime yardage tabs with 600-weight ink numerals, white tick marks, a dashed lime line of play on a white halo, lime tee disc, lime-ringed green. Below the track, a hairline-topped `.book-nav` holds Previous / counter ("No. **7** of 18", Supreme 15px, bold ink numeral) / Next at 14px padding. Keyboard arrows turn pages; prefers-reduced-motion makes the scroll instant. The URL hash follows the page only after the reader has interacted.

### Lists and Terms
- **Definition rows** (`.terms`, `.card-aside dl`): hairline-divided rows at 16px (terms) or 8px (facts) padding; labels Supreme 13.5px Ink 3, values Gambetta 1.2rem or Supreme 15.5px tabular when numeric, value right-aligned when on one line.
- **Included list:** hairline rows at 9px, 22px left indent for a 10px lime dot at 19px from the top.

### Navigation
- **Masthead:** sticky, white at 92% with 8px blur, hairline below, `14px gutter`. Name Supreme 600 14.5px ink with the subtitle in 400 Ink 3 after 10px; links 22px apart in ink, underline on hover; "Book a tee time" as the ink tee button. Below 1000px the subtitle hides and the links drop to a full-width third row under their own hairline, spaced between, the tee button pushed right.
- **Skip link:** ink block with white text at `10px 14px`, parked at -60px, lands at 12px on focus.

### Figures and Captions
- Photographs are the club's own, full-width in their cell, `object-fit: cover` to the declared aspect; captions Supreme 13.5px Ink 3, 10–12px below. The opener photo alone breaks to full bleed.

## Do's and Don'ts

### Do:
- **Do** set every number in Supreme with `font-variant-numeric: tabular-nums`, including prices, phone numbers, pars, yardages and folios.
- **Do** open a section with a 1px ink rule and a two-column head (serif heading left, Ink 2 intro right); divide everything inside with 1px hairlines.
- **Do** keep lime as a highlighter behind or on information: "Par 71", the current hole, yardage tabs, the line of play, the locator route, list dots, the pin.
- **Do** keep the type ramp fluid with `clamp()` and cap measures in ch (12ch title, 22ch pull, 30ch note, 46–54ch running text).
- **Do** use the 3px / 2px / 50% radius set and nothing in between; map chips stay fully square.
- **Do** invert on hover (ink-on-white to white-on-ink) for any bordered control; deepen to #000 for filled ones.
- **Do** honour `prefers-reduced-motion`: no transitions, instant page turns, no smooth document scroll.
- **Do** show aerial ground in greyscale wherever it is a locator or map, so the lime route reads.

### Don't:
- **Don't** fill a surface, card, band or section with lime, blue, or any colour; the sheet is white and the only grey fill is the scorecard total column.
- **Don't** use logo blue for anything but hyperlinks in running text.
- **Don't** add box-shadows, tinted panels or borders heavier than 1px; separation is a hairline.
- **Don't** bold Gambetta or colour it for emphasis; use Gambetta 400 italic.
- **Don't** set Gambetta below 18px; small text drops to Supreme (15.5 → 13 px).
- **Don't** replace the horizontal paged spread with a vertical stack of holes, or add the stat-band / card-grid pattern the build refuses.
- **Don't** introduce glyph or icon fonts; the only icons are the two inline stroked arrows at 12–14px.
- **Don't** invent hours, fees or reviews to fill a facts line; the facts line holds par and the four tee yardages only.
