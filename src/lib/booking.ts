import { site } from "@/data/site";

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  packageTitle: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
}

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(v: Inquiry): InquiryErrors {
  const e: InquiryErrors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (v.name.length > 100) e.name = "Name must be under 100 characters.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.length > 30) e.phone = "Phone number is too long.";
  if (!v.arrival) e.arrival = "Please choose an arrival date.";
  if (!v.departure) e.departure = "Please choose a departure date.";
  else if (v.arrival && v.departure <= v.arrival) e.departure = "Departure must be after arrival.";
  const g = Number(v.guests);
  if (!v.guests || !Number.isInteger(g) || g < 1 || g > 20) e.guests = "Enter between 1 and 20 guests.";
  if (v.message.length > 1000) e.message = "Message must be under 1000 characters.";
  return e;
}

export function inquiryText(v: Inquiry) {
  return [
    `Hello Atma Gyan, I'd like to ask about availability.`,
    `Name: ${v.name.trim()}`,
    v.packageTitle && `Retreat: ${v.packageTitle}`,
    v.arrival && `Arrival: ${v.arrival}`,
    v.departure && `Departure: ${v.departure}`,
    v.guests && `Guests: ${v.guests}`,
    v.message.trim() && `Notes: ${v.message.trim()}`,
  ].filter(Boolean).join("\n");
}

export function inquiryWhatsApp(v: Inquiry) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(inquiryText(v))}`;
}

export function inquiryMailto(v: Inquiry) {
  return `mailto:${site.email}?subject=${encodeURIComponent("Retreat inquiry — " + (v.packageTitle || "General"))}&body=${encodeURIComponent(inquiryText(v) + `\nEmail: ${v.email}\nPhone: ${v.phone}`)}`;
}
