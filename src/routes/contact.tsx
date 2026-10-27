import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { ContactSection } from "@/components/site/ContactSection";
import { BookingForm } from "@/components/site/BookingForm";
import { PageHero, SectionHead } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact", "Contact Atma Gyan Wild Yoga & Safari in Meghauli, Chitwan by WhatsApp, phone or email.", "/contact"),
  component: () => (
    <>
      <PageHero image={img.village} eyebrow="Contact" title="Get in touch" subtitle="WhatsApp is usually the quickest way to reach the host." crumbs={[{ label: "Contact" }]} />
      <ContactSection />
      <section className="container-page max-w-3xl pb-24">
        <SectionHead title="Send an inquiry" />
        <div className="mt-8"><BookingForm /></div>
      </section>
    </>
  ),
});
