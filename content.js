/* The Links at Norman — site content. Every fact here comes from the club's own
   site (linksatnormangolf.com, pulled 2026-10-07). Nothing invented: no hours,
   no green fees and no reviews were published there, so none appear here. */
window.SITE = {
 brand: {
 name: 'THE LINKS AT NORMAN',
 suffix: '',
 tagline: 'Golf & Athletic Club — Norman, Oklahoma',
 city: 'Norman, OK',
 address: '3927 24th Avenue SE, Norman, OK 73071',
 phone: '(405) 329-6549',
 phoneHref: 'tel:+14053296549',
 email: 'ProShop@LinksAtNorman.Golf',
 bookUrl: 'https://apimanager-cc32.clubcaddie.com/webapi/view/dbfdabab',
 memberUrl: 'https://customer-cc32.clubcaddie.com/login?clubid=103413',
 socials: [],
 },

 nav: [
 { label: 'The Course', href: '#stretch' },
 { label: 'The Club', href: '#services' },
 { label: 'Membership', href: '#paperwork' },
 { label: 'Book a Tee Time', href: '#book', cta: true },
 ],

 hero: {
 src: 'assets/photos/hero.jpg',
 alt: 'A flagged green and bunker at The Links at Norman under a towering sunset storm cloud',
 readout: 'NORMAN, OKLAHOMA · LESS THAN 3 MILES FROM OU',
 lines: ['Cedar, elm,', 'and a twelve-acre lake.'],
 sub: 'Eighteen holes on what used to be a sheep farm, routed in and out of the trees and around the water. Championship length from the tips, friendly from every other tee.',
 cue: 'walk the lake stretch',
 spec: [
 { k: 'PAR', v: '71' },
 { k: 'FROM THE TIPS', v: '6,519 YDS' },
 { k: 'GREENS', v: 'BENTGRASS' },
 { k: 'DESIGN', v: 'LINDY LINDSEY' },
 ],
 },

 /* THE SCORECARD — the signature scene. Holes 12–15 play around the lake. */
 card: {
 title: 'AROUND THE LAKE',
 read: 'HOLES 12–15 · PAR 16 · 1,591 YDS',
 cardTitle: 'THE LINKS AT NORMAN · BACK NINE',
 intro: 'The back nine turns toward the water at 12 and does not let go until 15. Four holes, one lake, and the hole the club calls its signature.',
 complete: 'AROUND THE LAKE · CARDED',
 verdict: 'Par through 15 and the round is yours.',
 verdictEm: 'yours',
 disclaimer: 'Hole sketches drawn from the club’s own notes — illustrative, not to scale.',
 holes: [
 { n: 12, par: 3, yds: 202, name: 'Over the water', img: 'assets/holes/hole-12.svg', note: 'A par 3 over water to a green backed by a grove of trees. Every yard of it is carry.' },
 { n: 13, par: 4, yds: 412, name: 'The signature', img: 'assets/holes/hole-13.svg', note: 'The signature hole wraps around the 12-acre lake. The views from this one are the ones you remember.' },
 { n: 14, par: 4, yds: 379, name: 'The mound', img: 'assets/holes/hole-14.svg', note: 'A long par 4 to a green with a huge mound behind it. Long is not as bad as it looks.' },
 { n: 15, par: 5, yds: 598, name: 'Around the lake', img: 'assets/holes/hole-15.svg', note: 'A dogleg left around the lake, and the longest hole on the course. Do not go for it in two — there is no room.' },
 ],
 },

 manifesto: {
 lines: ['Championship golf,', 'family club prices.'],
 em: 'family',
 support:
 'Unlimited golf, two pools, a fitness center and the Grill, for one family membership. The mission is simple: a family-friendly club with affordable championship golf, and service that is the same every time you walk in.',
 stats: [
 { n: '18', label: 'holes' },
 { n: '71', label: 'par' },
 { n: '4', label: 'sets of tees' },
 { n: '12', label: 'acre lake' },
 ],
 },

 servicesKicker: 'THE GOLF & ATHLETIC CLUB',
 servicesTitle: 'More than <em>eighteen</em> holes.',
 services: [
 {
 title: 'Tee Times',
 spec: 'BOOK ONLINE OR THROUGH THE PRO SHOP',
 blurb: 'Members book four days ahead. Everyone signs in at the pro shop before they tee off.',
 price: '',
 img: 'assets/holes/hole-13.svg',
 },
 {
 title: 'The Pro Shop',
 spec: 'CLOTHING · EQUIPMENT · SIGN-IN',
 blurb: 'Gear, apparel, and the people who run the tee sheet.',
 price: '',
 img: 'assets/photos/merch.jpg',
 },
 {
 title: 'The Pools',
 spec: 'RESORT-STYLE POOL · WADING POOL · CABANA',
 blurb: 'A resort-style pool, plus a wading pool with a fountain for the small ones.',
 price: '',
 img: 'assets/photos/pool.jpg',
 },
 {
 title: 'Fitness Center',
 spec: 'CARDIO · WEIGHT TRAINING · WHIRLPOOL & SAUNA',
 blurb: 'Treadmills, bikes and a full weight room, with a whirlpool and sauna after.',
 price: '',
 img: 'assets/photos/cardio.jpg',
 },
 {
 title: 'The Grill',
 spec: 'HOT SANDWICHES · SOFT DRINKS',
 blurb: 'Casual food at the turn or after the round, open to members.',
 price: '',
 img: 'assets/photos/grill.jpg',
 },
 {
 title: 'The Clubhouse',
 spec: 'LOCKER ROOMS · BILLIARDS · ACTIVITY ROOM',
 blurb: 'Men’s and ladies’ locker rooms, an activity room with billiards, and tanning.',
 price: '',
 img: 'assets/photos/clubhouse.jpg',
 },
 ],

 /* "extra" = the membership panel */
 extra: {
 kicker: 'FAMILY MEMBERSHIP',
 title: 'One membership for the whole family.',
 sub: 'Full year-round golf and every club amenity, for you, your spouse and your children under 22.',
 img: 'assets/photos/weights.jpg',
 imgAlt: 'The weight room at The Links at Norman',
 items: [
 { k: '$125 / MONTH', v: 'Family membership on a 12-month contract with an automatic monthly draft.' },
 { k: '$1,500 / YEAR', v: 'The same membership, paid in full for the year.' },
 { k: 'UNLIMITED GOLF', v: 'No green fees and four-day advance tee times. Adults can join the Men’s and Ladies’ Golf Associations.' },
 { k: 'CART PLAN · $50 / MONTH', v: 'Optional, subject to course policy. Carts must be driven by approved drivers.' },
 ],
 fine: 'Dues are subject to sales tax. Membership includes access across the Lindsey Golf network.',
 },

 crew: {
 kicker: 'THE CLUB',
 title: 'Ask for <em>Chris.</em>',
 photos: [], /* pool + clubhouse already show in the club grid; no repeats */
 leadPhoto: 'assets/photos/proshop.jpg',
 leadAlt: 'The front desk of the pro shop',
 leadCap: 'THE PRO SHOP · GENERAL MANAGER CHRIS JOHNSTON',
 story: 'The Links at Norman sits on a piece of land you would not expect three miles from campus: an old sheep farm, cedar and elm, and a twelve-acre lake in the middle of it all. The course plays friendly for every handicap, the clubhouse has room for the whole family, and the pro shop is where you sign in, book your time and ask anything.',
 certs: ['BENTGRASS GREENS', 'BERMUDA FAIRWAYS', 'COLLARED SHIRTS', 'SOFT SPIKES'],
 },

 reviews: [],

 booking: {
 title: 'Book a tee time.',
 sub: 'Book online, or call the pro shop. Members get four-day advance tee times. Collared shirts and soft spikes, please — and carts stay on the path unless the 90-degree rule is posted.',
 badges: ['PAR 71', 'BLACK 6,519', 'WHITE 5,986', 'GOLD 5,423', 'RED 4,833'],
 hours: [],
 directions: 'From Highway 9, exit south on Highway 77. Turn east on Cedar Lane, then south on 24th Avenue SE. The entrance is on the left.',
 },

 footer: {
 line: 'The Links at Norman Golf & Athletic Club — affordable championship golf in Norman, Oklahoma.',
 fine: 'Leasing office (405) 321-3430 · Pro shop (405) 329-6549',
 },
};
