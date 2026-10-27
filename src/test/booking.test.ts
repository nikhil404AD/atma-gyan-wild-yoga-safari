import { describe, expect, it } from "vitest";
import { inquiryWhatsApp, validateInquiry, type Inquiry } from "@/lib/booking";
import { packages } from "@/data/packages";

const base: Inquiry = { name: "Asha", email: "asha@example.com", phone: "", packageTitle: "Yoga & Wildlife Adventure Retreat", arrival: "2026-11-01", departure: "2026-11-03", guests: "2", message: "" };

describe("booking inquiry", () => {
  it("accepts a valid inquiry", () => expect(validateInquiry(base)).toEqual({}));
  it("rejects departure on or before arrival", () => expect(validateInquiry({ ...base, departure: "2026-11-01" }).departure).toBeDefined());
  it("rejects invalid email", () => expect(validateInquiry({ ...base, email: "nope" }).email).toBeDefined());
  it("requires name", () => expect(validateInquiry({ ...base, name: " " }).name).toBeDefined());
  it("uses the international WhatsApp number 9779816630829", () => {
    expect(inquiryWhatsApp(base).startsWith("https://wa.me/9779816630829?text=")).toBe(true);
    expect(decodeURIComponent(inquiryWhatsApp(base))).toContain("Guests: 2");
  });
});

describe("packages", () => {
  it("has seven packages with unique slugs", () => {
    expect(packages).toHaveLength(7);
    expect(new Set(packages.map((p) => p.slug)).size).toBe(7);
  });
  it("flags the 11-day package as conflicting", () => {
    expect(packages.find((p) => p.slug === "11-day-yoga-wildlife-retreat")?.verificationStatus).toBe("Conflicting source data");
  });
  it("features the 3, 8 and 11 day retreats", () => {
    expect(packages.filter((p) => p.featured).map((p) => p.durationDays)).toEqual([3, 8, 11]);
  });
});
