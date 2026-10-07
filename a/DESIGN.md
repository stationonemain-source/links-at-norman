---
name: The Links at Norman — A · Member card
description: One blue club card, white paper, and the real course surveyed to scale in spring.
colors:
  logo-blue: "#006BB3"
  field-blue: "#005A97"
  scrim-blue: "#004F86"
  lime: "#85C443"
  lime-hover: "#93CF55"
  ink: "#0E1B26"
  ink-2: "#3E4C58"
  ink-3: "#5E6C78"
  rule: "#D8E1EA"
  paper: "#FFFFFF"
  course-tint: "#EEF4F9"
  on-blue-2: "#E3F0FA"
typography:
  display:
    fontFamily: "Boska, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 1.5rem + 5.2vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Boska, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, 1.4rem + 3.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Boska, 'Times New Roman', serif"
    fontSize: "clamp(4rem, 2.4rem + 5.5vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Boska, 'Times New Roman', serif"
    fontSize: "clamp(1.6rem, 1.3rem + 1vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.1
  lead:
    fontFamily: "Switzer, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Switzer, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'ss01'"
  label:
    fontFamily: "Switzer, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "Switzer, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  hairline: "2px"
  xs: "4px"
  sm: "6px"
  md: "8px"
  card: "14px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "16px"
  lg: "32px"
  xl: "40px"
  gutter: "clamp(20px, 5vw, 72px)"
  section: "clamp(64px, 9vw, 128px)"
  section-gap: "clamp(40px, 5vw, 64px)"
  max: "1240px"
components:
  button-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-lime-hover:
    backgroundColor: "{colors.lime-hover}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-blue:
    backgroundColor: "{colors.logo-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "15px 22px"
  button-blue-hover:
    backgroundColor: "{colors.field-blue}"
    textColor: "{colors.paper}"
  header:
    backgroundColor: "{colors.logo-blue}"
    textColor: "{colors.paper}"
    height: "68px"
    padding: "0 {spacing.gutter}"
  member-card-front:
    backgroundColor: "{colors.logo-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(16px, 2vw, 24px)"
  member-card-back:
    backgroundColor: "{colors.field-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(16px, 2vw, 24px)"
  hole-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 3vw, 40px)"
  blue-field:
    backgroundColor: "{colors.field-blue}"
    textColor: "{colors.paper}"
    padding: "{spacing.section} {spacing.gutter}"
  course-ground:
    backgroundColor: "{colors.course-tint}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} {spacing.gutter}"
  map-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
---

# Design System: The Links at Norman — A · Member card

## Overview

**Creative North Star: "The Card and the Ground"**

The page has one product, a family membership card, and one proof, the real course. Everything in the system serves those two objects. The club's own logo colours are the whole palette: logo blue is the field the card and header sit on, lime is reserved for the thing you press and the thing that is selected, and white paper carries the reading. Nothing is drawn to stand in for the course; the course is shown as surveyed, every hole an aerial plate at one ground scale, with the yardage line and 100-yard marks drawn onto the photograph in lime. This is a club site that looks like the club's own card and its own land, not like a template with the club's name dropped in.

Density is editorial and unhurried: generous section padding, big Boska headlines that drop to a tight 0.98 line-height, and Switzer body at 17px with a comfortable 1.55 measure. Hierarchy is carried by size and weight contrast in the display face (700 for headlines, 900 for numerals and the price), never by small uppercase labels. The build contains no `text-transform`, no eyebrows, no stat band, no icon grid.

The build rejects the hero → slogan → number band → card grid template. It also rejects code-drawn illustration: when a diagram is needed (hole routing, the course locator), it is a line drawn over the real aerial.

**Key Characteristics:**
- Two-colour brand palette (logo blue, logo lime) plus white paper and a blue-tinted course ground; nothing else is introduced.
- Boska display at 700/900 against Switzer text; the 900 weight is for numbers (hole No., price, tag numerals) and the one emphasised phrase.
- Real aerial plates as a component family: one ground scale, tee-down, with lime yardage marks drawn in SVG over the photo.
- Pills for every action; soft radii (4/6/8/14) for images, panels and the card.
- Depth only on objects that are physically "on" the page: the card (plastic), the hole panel, the map chips. Everything else is flat tonal layering.
- Motion is one easing curve (`cubic-bezier(.2,.8,.2,1)`), used for the card turn, tag rise and button lift, and fully disabled under `prefers-reduced-motion`.

## Colors

The palette is the club's logo, extended only by what legibility on blue and on white requires.

### Primary
- **Logo Blue** (`logo-blue`): The club's blue. The sticky header, the front of the member card, the primary blue button, link colour on white, the baseline rule under the skyline tags, and the selected tag's numeral.
- **Field Blue** (`field-blue`): A step deeper, 7.2:1 against white. The membership section's full-bleed field, the back of the card, the open mobile menu, and the hover state of blue buttons.
- **Scrim Blue** (`scrim-blue`): The hero's base and the colour of its gradient scrims (left-to-right 0.94 → 0.08 alpha; bottom fade 0 → 0.9). Only ever seen through alpha over the aerial plate.

### Secondary
- **Logo Lime** (`lime`): The action colour and the selection colour. The Book / Call button, the selected tag's 3px outline, the focus ring, text selection, the nav hover underline, the card-back bullets, and every drawn mark on the survey (yardage line, 100-yard ticks, tee dot, green ring, locator route). Lime never fills a surface larger than a button.
- **Lime Hover** (`lime-hover`): The lime button's hover only.

### Neutral
- **Ink** (`ink`): Primary text on white; the footer ground; the map pin ring and pin label ground.
- **Ink 2** (`ink-2`): Secondary paragraphs on white (section intros, hole notes, amenity text), 8.3:1.
- **Ink 3** (`ink-3`): Tertiary labels on white (nine labels, captions, "Par" yardage, contact keys), 5.3:1.
- **Rule** (`rule`): Every hairline on white: list dividers, contacts table, hole-nav top rule.
- **Paper** (`paper`): The reading ground and the hole detail panel.
- **Course Tint** (`course-tint`): The light blue-tinted ground under the course section only, so the white hole panel reads as lifted off it.
- **On-Blue 2** (`on-blue-2`): Secondary text on any blue surface (hero sub, card alt line, membership lead, terms keys, fine print), ≥4.7:1. On blue, hairlines are `rgba(255,255,255,.28–.3)` rather than Rule.

### Named Rules
**The Press-or-Selected Rule.** Lime marks what you can press and what is currently chosen (plus the survey's own drawn marks). It is never a background, never a heading colour, never decoration.

**The Two-Blue Rule.** Surfaces are Logo Blue or Field Blue; Scrim Blue exists only as alpha over a photograph. Do not introduce a fourth blue.

**The Alpha Hairline Rule.** On white, rules are `rule`. On blue, rules are white at 28–30% alpha. Neither ever uses Ink 3.

## Typography

**Display Font:** Boska (with Times New Roman, serif), self-hosted 400/700/900
**Body Font:** Switzer (with system-ui, Segoe UI, sans-serif), self-hosted 400/500/600/700, `ss01` on

**Character:** Boska echoes the condensed serif of the club's wordmark, so the headlines read as the logo's family rather than a borrowed magazine face. Switzer is plain and even underneath it. The pairing is formal at the top and conversational everywhere you actually read.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 1.5rem + 5.2vw, 5.6rem)`, 0.98, −0.005em): The hero H1 only. Balanced wrapping (`text-wrap: balance`). At ≤520px it becomes `clamp(2.5rem, 12vw, 3.4rem)`.
- **Headline** (700, `clamp(2.3rem, 1.4rem + 3.6vw, 4.4rem)`, 0.98): Section H2s (course, club, membership, visit). Emphasis inside a headline is Boska 900, same colour, never italic.
- **Numeral** (900, `clamp(4rem, 2.4rem + 5.5vw, 7.5rem)`, 0.9, −0.02em): The hole number in Logo Blue. The same 900 weight at smaller sizes carries the tag numerals (24px) and the card price (`1.35em` of `clamp(2rem, .9rem + 3vw, 3.2rem)`).
- **Title** (700, `clamp(1.6rem, 1.3rem + 1vw, 2.2rem)`, 1.1): H3s in the amenities list and "The card covers". The hole's par line is Switzer at `clamp(1.8rem, 1.2rem + 2vw, 2.9rem)` with the yardage in Ink 3 at weight 400.
- **Lead** (400, `clamp(1.05rem, 1rem + .35vw, 1.25rem)`, 1.5): Hero sub and membership lead on blue in On-Blue 2; hole notes on white in Ink 2. Measure 40–46ch.
- **Body** (400, 17px, 1.55): Default. Section intros and amenity copy are capped at 52ch.
- **Label** (600, 14–15.5px): Button text (16px/600), nav links (15.5px/500), nine labels (14px/600 Ink 3), terms keys (14.5px/600 On-Blue 2). Sentence case, never tracked, never uppercase.
- **Caption** (400, 12.5–14px): Photo captions, the hero plate caption, card foot lines, "Where it sits on the property", footer text.

### Named Rules
**The Weight-Not-Case Rule.** Hierarchy comes from Boska 700 vs 900 and from size. The build has zero uppercase and zero letter-spaced labels; keep it that way.

**The Two-Family Rule.** Boska for headlines and numbers; Switzer for everything you read, including small headings like "Front nine". No third face.

## Layout

A single centred column of `max` (1240px) inside a fluid gutter (`clamp(20px, 5vw, 72px)`); the hero, header, blue field and footer bleed to the viewport while their content stays in the column. Sections breathe at `clamp(64px, 9vw, 128px)` vertical padding, and each section's lead block is a two-column "section head" (headline left, intro right, aligned to the baseline) that collapses to one column at ≤900px.

Inside sections, the grid is asymmetric and content-shaped: hero 1.05fr / 0.95fr; club lead 1.7fr / 1fr; membership lead 1.2fr / 1fr; visit 1fr / 1.2fr; terms a three-up; the hole panel `auto | 1fr | 300px` with the plate spanning both rows. Vertical rhythm inside sections uses 12 / 16 / 32 / 40px steps and the clamp `section-gap` between a head and its body.

The skyline is the layout signature: 18 aerial tags in two rows of nine, each `max(78px, (column − 8×12px) / 9)` wide so nine always fit the column, bottom-aligned on a 2px Logo Blue baseline so plate heights read as relative hole length. At ≤900px the rows become horizontal scrollers with proximity snap and a thin blue scrollbar.

Breakpoints are 1080px (hero to equal columns), 900px (the main collapse: header 62px with hamburger, hero stacks with a top-down scrim, hole panel stacks, one-column lists) and 520px (full-width buttons, H1 at 12vw, single-column contacts). The hero is `max(640px, 100svh − 68px)` tall on desktop and content-height on mobile.

## Elevation & Depth

Depth is mostly tonal: blue fields against white paper, the course tint under a white panel, white at alpha for hairlines on blue. Shadows are used only where an object is physically on top of the page, and they are all soft, offset downward, and tinted with blue-black rather than neutral grey. There are no hard offset shadows and no glows.

### Shadow Vocabulary
- **Card plastic** (`box-shadow: 0 34px 60px -24px rgba(0,25,50,.65), 0 6px 14px -8px rgba(0,25,50,.4)`): The member card's two-layer drop; the only heavy shadow. Paired with a one-direction sheen (`linear-gradient(112deg, rgba(255,255,255,.16), transparent 38%)`) that reads as plastic.
- **Panel lift** (`box-shadow: 0 24px 50px -36px rgba(14,27,38,.35)`): The white hole detail panel on the course tint.
- **Chip lift** (`box-shadow: 0 4px 14px -6px rgba(0,0,0,.5)` and `0 2px 10px rgba(0,0,0,.5)` on the pin): Small white controls sitting on the aerial map.
- **Menu drop** (`box-shadow: 0 20px 40px -20px rgba(0,0,0,.5)`): The open mobile nav sheet.

### Named Rules
**The On-Top Rule.** A shadow means the element is a physical object laid on the page: the card, the panel, a chip on a photo. Text blocks, sections and images never carry one.

## Shapes

Actions are pills (999px). Objects have soft corners that scale with their size: 4px for small things (tag plate tops, map pin label, skip link, amenity thumbnails), 6px for photographs and plates, 8px for panels and the map frame, 14px for the card. The focus ring is 3px lime with a 3px offset and a 2px radius. True circles (50%) appear only for the map pin dot and the card-back bullets. Buttons carry a 1.5px border (transparent on filled variants, white at 55% on ghost); hairlines are 1px. Aerial tags are cut square at the bottom so they sit flush on the baseline rule.

## Components

### Buttons
Rounded, confident, sentence case; one filled action per surface, the alternative outlined.
- **Shape:** Pill (999px), 15px 22px, Switzer 600 16px, inline-flex with a 10px gap to an optional 14px stroke-arrow SVG. In the header: 12px 18px / 15px.
- **Lime (primary):** Lime ground, Ink text. Hover lightens to `lime-hover`; every button lifts 1px on hover and returns on active. Used for Book a tee time (header, hero, visit) and Call in the membership field.
- **Ghost:** Transparent, white text, `rgba(255,255,255,.55)` border; hover goes to a full white border on `rgba(255,255,255,.08)`. Only on blue surfaces.
- **Blue:** Logo Blue ground, white text, hover to Field Blue. On white surfaces.
- **Focus:** Global 3px lime outline, 3px offset.
- **Mobile:** At ≤520px action buttons go full width and centred; the header button drops its arrow.

### Header
Sticky, 68px (62px ≤900px), Logo Blue, white text. Four-column grid: knockout logo (42px / 36px tall), nav pushed right (Switzer 500 15.5px, 1.5px bottom border that turns lime on hover), the lime Book pill, and a two-bar hamburger that appears at ≤900px and rotates into a cross. The mobile nav is a fixed Field Blue sheet under the header with 18px links divided by white-18% hairlines.

### Member Card (signature)
A `<button>` at credit-card proportions (aspect 1.586, max 420px), resting at −5° and straightening to −2° on hover; a click flips it 180° over 0.8s on the house ease. Front: Logo Blue, white knockout logo at 27% width, "Family membership" in Boska 700, the price in Boska (`$125` at 900), the alt line and a foot row divided by a white-28% hairline. Back: Field Blue, Boska 700 heading, a Switzer list with 7px lime dot bullets, foot row. Both faces share the card-plastic shadow and sheen and a 13px/600 "turn" affordance top-right with a lime 14px rotate glyph. On load it enters from −9° / +28px; reduced-motion skips the entrance and all transitions.

### Aerial Tag (skyline)
A link holding one aerial plate (`width: var(--tagw)`, 4px top radius, flush bottom) over a foot row: Boska 900 24px numeral and a 13px Ink 3 "Par 4 · 360". Hover lifts 4px and brightens the plate 8%. Selected (`aria-current="true"`): 3px lime outline on the plate, numeral turns Logo Blue, the par line turns Ink at 600. Tags rise 24px from the baseline when the skyline scrolls into view, staggered 35ms each.

### Hole Panel (signature)
White, 8px, panel-lift shadow, `clamp(20px, 3vw, 40px)` padding. Left: the plate, sized by height (`min(640px, 76vh)`) so every hole shares one scale, with an SVG overlay: white 11px halo under a lime 5px dotted (2 16) line, white 100-yard ticks with lime-boxed Switzer 600 yardage labels, lime tee dot and lime-ringed green. Centre: hole No. in Boska 900 Logo Blue, par line, note in Ink 2. Right (300px): a desaturated course locator (`saturate(.55) brightness(.92)`) with the hole's route as a 34px lime polyline with a drop shadow, captioned in 13px Ink 3. Bottom: prev/next links (Switzer 600, 16px stroke arrows) above a `rule` hairline. Default hole is 13; without JS the panel for No. 1 shows.

### Blue Field (membership)
Field Blue section, white text, headline capped at 16ch with the price phrase in Boska 900. Terms are a three-up definition list over a white-30% rule; the covers list runs in two columns with 8×1.5px On-Blue 2 dash bullets. Actions: lime Call, ghost email. Fine print 14px On-Blue 2 at 78ch.

### Lists and Tables
- **Amenities:** Rows divided by `rule`, `1fr | 180px` (image 180×120, 4px), Boska Title + Ink 2 copy. Image shrinks to 120×86 at ≤900px and goes full-width 180px tall at ≤520px.
- **Contacts:** `130px | 1fr` rows on `rule` hairlines; keys in Ink 3, values as 500-weight links.

### Aerial Map
8px clipped frame with a positioned pin (18px white dot, 3px Ink ring, chip shadow; Ink label 13px/600, 4px) and bottom-left white pill chips (14px/600 Ink, 9px 13px) that turn lime on hover.

### Footer
Ink ground, 14px/1.6 text in `#B9C8D6` with sources in `#8EA2B4` and white links; 56px knockout logo in the first column. These two footer greys are footer-only and not system tokens.

## Do's and Don'ts

### Do:
- **Do** put every surface on Logo Blue, Field Blue, Paper or Course Tint, and reach for lime only when something is pressable or selected (The Press-or-Selected Rule).
- **Do** set headlines in Boska 700 and numbers in Boska 900; use size and weight for hierarchy, sentence case throughout (The Weight-Not-Case Rule).
- **Do** keep buttons as pills (999px, 15px 22px, Switzer 600 16px) with one lime action and an outline or blue alternative per surface.
- **Do** show the course as the real aerial at one ground scale, with any routing or yardage drawn in lime SVG over the photograph, and keep the provenance line in the footer.
- **Do** use `rule` (#D8E1EA) hairlines on white and white at 28–30% alpha on blue (The Alpha Hairline Rule).
- **Do** use the house ease `cubic-bezier(.2,.8,.2,1)` for transforms, and switch every transition off under `prefers-reduced-motion`.

### Don't:
- **Don't** add uppercase, letter-spaced eyebrows or kickers above headlines; the build has none and hierarchy does not need them.
- **Don't** introduce a fourth blue, a grey background, or any accent beyond the logo's lime (The Two-Blue Rule).
- **Don't** put shadows on text blocks, sections or photographs; only the card, the hole panel and chips on the map sit on top of the page (The On-Top Rule).
- **Don't** draw the course or its holes as illustration, icons or abstract shapes; the aerial plate is the component.
- **Don't** fill a surface with lime or use it as a heading colour.
- **Don't** use a third typeface or a system display face in place of Boska.
