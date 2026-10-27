import { img } from "./images";

export type VerificationStatus = "Verified" | "Needs confirmation" | "Conflicting source data";

export interface ItineraryDay { day: number; title: string; items: string[] }

export interface RetreatPackage {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  durationDays: number;
  durationNights: number;
  durationLabel: string;
  displayedPrice: number;
  currency: "USD" | "EUR";
  pricingBasis: string;
  alternativePrice?: string;
  highlights: string[];
  activities: string[];
  accommodation?: string;
  meals?: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  image: string;
  gallery: string[];
  featured: boolean;
  availabilityStatus: "On request";
  verificationStatus: VerificationStatus;
  researchNotes: string[];
  sourceUrl: string;
  lastVerifiedAt: string | null;
}

const REF = "https://atmagyanwildyoga.com/packages";

export const packages: RetreatPackage[] = [
  {
    id: "p1",
    slug: "yoga-wildlife-adventure-retreat-3-days",
    title: "Yoga & Wildlife Adventure Retreat",
    shortDescription: "A short, complete introduction to yoga, meditation and the forests of Meghauli.",
    fullDescription:
      "Two nights of morning and evening practice, sound and candlelight meditation, a guided nature walk, cycling and an afternoon jeep safari in the community forest — with home-cooked vegetarian meals in between.",
    durationDays: 3, durationNights: 2, durationLabel: "3 days / 2 nights",
    displayedPrice: 120, currency: "USD", pricingBasis: "per person",
    alternativePrice: "€225 for two people (shown on the package page)",
    highlights: ["Daily yoga & meditation", "Community-forest jeep safari", "Home-cooked vegetarian meals"],
    activities: ["Yoga", "Meditation", "Jeep safari", "Cycling", "Nature walks"],
    accommodation: "Shared attached room",
    meals: "Homemade vegetarian meals; vegan-friendly on request",
    inclusions: ["Yoga and meditation sessions", "Accommodation", "Meals", "Drinking water and tea"],
    exclusions: ["Transport to and from the center", "Ayurvedic massage (may cost extra)"],
    itinerary: [
      { day: 1, title: "Arrival & evening practice", items: ["Arrival between approx. 2 PM and 4 PM", "Afternoon tea and snacks", "Evening yoga and sound meditation", "Dinner", "Candlelight meditation"] },
      { day: 2, title: "Forest & practice", items: ["Early wake-up", "Nature walk", "Morning yoga and meditation", "Breakfast and lunch", "Afternoon jeep safari in the community forest", "Evening yoga and meditation", "Dinner", "Candlelight meditation"] },
      { day: 3, title: "Departure", items: ["Breakfast and departure"] },
    ],
    image: img.hero, gallery: [img.hero, img.yoga, img.wildlife, img.food],
    featured: true, availabilityStatus: "On request",
    verificationStatus: "Conflicting source data",
    researchNotes: ["Price shown as $120 per person and €225 for two people — currency and basis differ."],
    sourceUrl: `${REF}/yoga-wildlife-adventure-retreat-3-days`, lastVerifiedAt: null,
  },
  {
    id: "p2",
    slug: "yoga-wildlife-after-trekking-retreat-4-days",
    title: "Yoga & Wildlife After Trekking Retreat",
    shortDescription: "Rest tired legs after the mountains with gentle practice and slow days in the lowlands.",
    fullDescription: "A shorter retreat for travellers arriving from a trek who want rest, gentle yoga, meditation and some time in nature. The exact itinerary is arranged with the host.",
    durationDays: 4, durationNights: 3, durationLabel: "4 days / 3 nights",
    displayedPrice: 180, currency: "USD", pricingBasis: "per person",
    highlights: ["Recovery-focused yoga", "Meditation", "Nature time in Meghauli"],
    activities: ["Yoga", "Meditation"],
    inclusions: [], exclusions: [], itinerary: [],
    image: img.meditation, gallery: [img.meditation, img.yoga],
    featured: false, availabilityStatus: "On request",
    verificationStatus: "Needs confirmation",
    researchNotes: ["Itinerary and inclusions not published — confirm with operator."],
    sourceUrl: REF, lastVerifiedAt: null,
  },
  {
    id: "p3",
    slug: "family-yoga-wildlife-retreat-5-days",
    title: "Family Yoga & Wildlife Retreat",
    shortDescription: "Yoga, nature and village life shared as a family.",
    fullDescription: "A five-day family retreat combining yoga, nature exploration and homestay life. Occupancy, inclusions and current price must be confirmed with the host.",
    durationDays: 5, durationNights: 4, durationLabel: "5 days / 4 nights",
    displayedPrice: 950, currency: "USD", pricingBasis: "for three people",
    highlights: ["Family-friendly practice", "Nature exploration", "Homestay experience"],
    activities: ["Yoga", "Meditation", "Nature walks"],
    inclusions: [], exclusions: [], itinerary: [],
    image: img.village, gallery: [img.village, img.yoga],
    featured: false, availabilityStatus: "On request",
    verificationStatus: "Conflicting source data",
    researchNotes: ["Homepage price differs from packages page ($950 for three)."],
    sourceUrl: REF, lastVerifiedAt: null,
  },
  {
    id: "p4",
    slug: "wildlife-adventure-ayurvedic-massage-retreat-6-days",
    title: "Wildlife Adventure & Ayurvedic Massage Retreat",
    shortDescription: "Wildlife exploration balanced with restorative Ayurvedic massage.",
    fullDescription: "Six days pairing wildlife activities around Chitwan with Ayurvedic massage. Massage details, providers and inclusions should be confirmed before booking.",
    durationDays: 6, durationNights: 5, durationLabel: "6 days / 5 nights",
    displayedPrice: 400, currency: "USD", pricingBasis: "per person",
    highlights: ["Wildlife activities", "Ayurvedic massage", "Vegetarian meals"],
    activities: ["Wildlife activities", "Ayurvedic massage"],
    inclusions: [], exclusions: [], itinerary: [],
    image: img.river, gallery: [img.river, img.wildlife],
    featured: false, availabilityStatus: "On request",
    verificationStatus: "Needs confirmation",
    researchNotes: ["Massage provider, number of sessions and inclusions unconfirmed."],
    sourceUrl: REF, lastVerifiedAt: null,
  },
  {
    id: "p5",
    slug: "8-days-yoga-wildlife-retreat",
    title: "Yoga & Wildlife Adventure Retreat",
    shortDescription: "A full week of daily practice, river, forest and Tharu culture.",
    fullDescription: "Daily yoga and meditation alongside nature walks, canoeing on the Rapti River, a jeep safari, a walking safari, cycling through Meghauli and a Tharu cultural dance evening.",
    durationDays: 8, durationNights: 7, durationLabel: "8 days / 7 nights",
    displayedPrice: 460, currency: "USD", pricingBasis: "per person",
    highlights: ["Canoeing on the Rapti River", "Jeep & walking safari", "Tharu cultural dance"],
    activities: ["Daily yoga & meditation", "Nature walks", "Canoeing on the Rapti River", "Jeep safari", "Walking safari", "Cycling", "Tharu cultural dance"],
    meals: "Home-cooked vegetarian meals",
    inclusions: ["Accommodation", "Meals", "Selected wildlife activities", "Park entry fees"],
    exclusions: ["Transport to and from the center", "Ayurvedic massage"],
    itinerary: [],
    image: img.yoga, gallery: [img.yoga, img.river, img.wildlife, img.village],
    featured: true, availabilityStatus: "On request",
    verificationStatus: "Needs confirmation",
    researchNotes: ["Day-by-day itinerary not captured — request from operator."],
    sourceUrl: `${REF}/8-days-yoga-wildlife-retreat`, lastVerifiedAt: null,
  },
  {
    id: "p6",
    slug: "11-day-yoga-wildlife-retreat",
    title: "Yoga & Wildlife Retreat",
    shortDescription: "An extended immersion in practice, wildlife and village rhythm.",
    fullDescription: "A long-stay retreat combining yoga, meditation and wildlife experiences around Chitwan. Duration, itinerary and price must be confirmed — the published sources disagree.",
    durationDays: 11, durationNights: 10, durationLabel: "11 days (listed)",
    displayedPrice: 680, currency: "USD", pricingBasis: "per person",
    alternativePrice: "Another page shows a euro price",
    highlights: ["Extended daily practice", "Wildlife experiences", "Slow village life"],
    activities: ["Yoga", "Meditation", "Wildlife activities"],
    inclusions: [], exclusions: [], itinerary: [],
    image: img.wildlife, gallery: [img.wildlife, img.meditation, img.river],
    featured: true, availabilityStatus: "On request",
    verificationStatus: "Conflicting source data",
    researchNotes: ["Title says 11 days; description says 10-day journey / 10 nights.", "USD on listing vs EUR on another page.", "Itinerary and accommodation inclusions inconsistent."],
    sourceUrl: `${REF}/11-day-yoga-wildlife-retreat`, lastVerifiedAt: null,
  },
  {
    id: "p7",
    slug: "homestay-yoga-retreat-14-nights",
    title: "Homestay Yoga Retreat",
    shortDescription: "Two quiet weeks of homestay life, vegetarian food and daily practice.",
    fullDescription: "A long homestay retreat focused on yoga, meditation, vegetarian meals and Nepali hospitality. Confirm whether the price is per person and what is included.",
    durationDays: 15, durationNights: 14, durationLabel: "14 nights",
    displayedPrice: 399, currency: "USD", pricingBasis: "basis to be confirmed",
    highlights: ["Homestay living", "Daily yoga & meditation", "Vegetarian meals"],
    activities: ["Yoga", "Meditation"],
    meals: "Vegetarian meals",
    inclusions: [], exclusions: [], itinerary: [],
    image: img.stay, gallery: [img.stay, img.food],
    featured: false, availabilityStatus: "On request",
    verificationStatus: "Needs confirmation",
    researchNotes: ["Unclear if $399 is per person; inclusions unconfirmed."],
    sourceUrl: REF, lastVerifiedAt: null,
  },
];

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug);
}

export function formatPrice(p: Pick<RetreatPackage, "displayedPrice" | "currency">) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: p.currency, maximumFractionDigits: 0 }).format(p.displayedPrice);
}
