# Atma Gyan — Research Prototype Notes

## Stack note
Built on TanStack Start (React 19, TypeScript, Tailwind v4, Lucide) — this platform's fixed framework — instead of Next.js. Structure maps 1:1: `src/routes/*` = pages, `src/components/site/*` = components, `src/data/*` = content, `src/lib/*` = validation/booking/metadata.

## Editing content
- Contact details, nav: `src/data/site.ts`
- Packages (prices, itineraries, verification status): `src/data/packages.ts`
- Articles: `src/data/blog.ts`
- Images / gallery: `src/data/images.ts` (all images are AI-generated illustrations — replace with licensed property photos)

## Dev-only QA
- `/research` — package table, verification status, source links, QA checklist (dev builds only).
- Yellow "Research note" boxes appear only in dev builds.
- Tests: `bunx vitest run`.

## Source-data inconsistencies
1. 3-day retreat: $115 per person vs €225 for two people.
2. Family retreat: homepage price differs from packages page ($950 for three).
3. 11-day retreat: title says 11 days, description says 10-day / 10 nights; USD vs EUR; itinerary and accommodation inclusions inconsistent.
4. 14-night homestay: $399 — basis (per person?) unclear.

## Needs business verification
- All current prices, currencies and pricing basis
- Itineraries for the 4, 5, 6, 8, 11-day and 14-night packages
- Inclusions/exclusions for packages 2, 3, 4, 6, 7
- Founder story and "10+ years teaching" claim; yoga session times
- Room types beyond "shared attached room"; vegan options
- Ayurvedic massage provider/details
- Google rating (5.0 / 4 reviews) — hidden in production until re-checked
- Real guest reviews with permission to publish
- Exact map pin; cancellation and payment terms

## Deployment
Click Publish in Lovable. A sitemap.xml can be added once a public domain exists; `public/robots.txt` already allows crawling.
