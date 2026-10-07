# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, published from this folder to GitHub Pages
(stationonemain-source.github.io/links-at-norman, noindex). Inferred from the existing
deployment; Circle did not ask for a framework.

## Users

1. **Norman-area families and golfers deciding whether to join** — comparing what $125 a month
   buys (golf, pools, gym, Grill) against paying green fees elsewhere. Mostly on phones.
2. **Golfers who want to play this week** — they need the tee sheet in one tap.
3. **The club's GM (Chris Johnston) seeing a spec pitch from Station** — he judges whether this
   looks like *his* club and better than his Wix site.

## Product Purpose

The website of The Links at Norman Golf & Athletic Club. Success = membership enquiries (call
the pro shop) and tee times booked through the club's own Club Caddie tee sheet, which every
booking button must link to: `https://apimanager-cc32.clubcaddie.com/webapi/view/dbfdabab`.
Memberships are the primary goal (Circle, 2026-10-07); booking is always one tap away.

## Positioning

A Lindy Lindsey championship 18 (par 71, 6,519 yds) on an old sheep farm under three miles from
OU, routed through cedar and elm around a 12-acre lake — sold as a family athletic club for less
than most Norman gym-plus-pool memberships. Neighbouring courses can't claim the lake, the
13th, or golf + pools + fitness under one family rate.

## Operating Context

Members book four days ahead; everyone signs in at the pro shop. Carts are mandatory (walking is
not allowed), soft spikes, collared shirts. Part of the Lindsey Golf network (Gold Card reciprocity).

## Capabilities and Constraints

- Real facts only (source: linksatnormangolf.com, pulled 2026-10-07; see ../STATE.md).
- NOT published by the club: hours, green fees, reviews, staff beyond the GM. Never invent them.
- Membership: $125/mo (12-month contract, auto draft) or $1,500/yr, plus tax; family = member,
  spouse, children under 22. Cart plan $50/mo.
- Footer credit "Designed by Station.Solutions"; page stays noindex while it is a spec.

## Brand Commitments

- Name: The Links at Norman (Golf & Athletic Club). Logo: tall condensed blue serif "THE LINKS"
  with a lime flag — `assets/logo.png`; logo blue #006BB3, lime #85C443.
- Typeface direction pinned by Circle: build TWO versions — (A) a display serif echoing the
  logo + Switzer: Zodiak was named, Boska shipped because it matches the wordmark (rendered test
  2026-10-07); (B) golf-magazine editorial: Gambetta + Supreme.
- Circle's standing rules: no stock "slop" fonts; no code-drawn illustrations standing in for the
  real thing; no slogan-headline + big-number-band + card-grid template feel; scroll films short.

## Evidence on Hand

- From linksatnormangolf.com (pulled 2026-10-07): /amenities lists the activity room with billiards,
  tanning beds, whirlpool & sauna; /contact lists the leasing office (405) 321-3430 beside the pro shop;
  /rules-regulations gives collared shirts, soft spikes, carts required (no walking), cart drivers 16+,
  the 90-degree rule, and golfers under 14 with an adult. These are the club's own published facts.

- Club photos (their own site): `assets/photos/` — one course photo (sunset hero), pro shop,
  merch wall, Grill, cardio room, weight room, whirlpool, pool, clubhouse exterior.
- Hole-by-hole notes and yardages for all 18 holes, four tee sets (STATE.md).
- Public-domain USGS aerial imagery of the actual course (chosen by Circle 2026-10-07 to show
  the holes). No testimonials, no press, no awards beyond "Golf Advisor top courses in Oklahoma"
  and pace-of-play honours mentioned by third-party listings (unverified — don't claim).

## Product Principles

1. Real over pretty: every image is the actual club or the actual ground.
2. Membership value must be legible in one screen: price, who it covers, what it unlocks.
3. Booking is the club's own tee sheet, never a fake form.
4. It should read as this specific course — the lake, the cedars, No. 13 — not "a golf club".

## Accessibility & Inclusion

WCAG AA contrast; works one-handed on a phone; motion respects prefers-reduced-motion.
