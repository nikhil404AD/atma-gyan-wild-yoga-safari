import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { BookingForm } from "@/components/site/BookingForm";
import { PageHero } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): { package?: string } => (typeof s["package"] === "string" ? { package: s["package"] } : {}),
  head: () => pageMeta("Booking Inquiry", "Ask about availability for a yoga and wildlife retreat at Atma Gyan in Chitwan, Nepal.", "/book"),
  component: Book,
});

function Book() {
  const { package: pkg } = Route.useSearch();
  return (
    <>
      <PageHero image={img.hero} eyebrow="Book" title="Ask about availability" subtitle="Tell us your dates and we'll reply personally. Submitting this form is an inquiry, not a confirmed reservation." crumbs={[{ label: "Book" }]} />
      <section className="container-page max-w-3xl py-20">
        <BookingForm key={pkg ?? ""} defaultPackage={pkg ?? ""} />
        <p className="mt-6 text-sm text-muted-foreground">Payment instructions are shared directly and securely by the host after your stay is confirmed.</p>
      </section>
    </>
  );
}
