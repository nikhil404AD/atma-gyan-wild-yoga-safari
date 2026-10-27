// Single source of truth for business contact details and navigation.
export const site = {
  name: "Atma Gyan Wild Yoga & Safari",
  shortName: "Atma Gyan",
  tagline: "Wild Yoga & Safari",
  referenceUrl: "https://atmagyanwildyoga.com/",
  address: {
    street: "Rampur Road, Meghauli, Telauli",
    locality: "Bharatpur",
    postalCode: "44200",
    region: "Chitwan",
    country: "Nepal",
  },
  phoneDisplay: "+977 981-6630829",
  phoneHref: "tel:+9779816630829",
  whatsappNumber: "9779816630829",
  email: "pawankandel1982@gmail.com",
  instagram: "atmagyan.chitwan",
  instagramUrl: "https://www.instagram.com/atmagyan.chitwan/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Atma+Gyan+Wild+Yoga+Meghauli+Chitwan",
  mapsEmbed: "https://www.google.com/maps?q=Meghauli,+Chitwan,+Nepal&output=embed",
  // Research data — only show publicly once re-checked against the live listing.
  googleRating: { value: 5.0, count: 4, verified: false },
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/yoga-meditation", label: "Yoga & Meditation" },
  { to: "/wildlife-safari", label: "Wildlife & Safari" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
