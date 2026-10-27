import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/terms")({
  head: () => pageMeta("Terms & Conditions", "Booking terms for retreats at Atma Gyan Wild Yoga & Safari in Chitwan.", "/terms"),
  component: () => (
    <article className="container-page max-w-3xl pb-20 pt-36 prose-article">
      <h1 className="text-5xl text-forest">Terms & Conditions</h1>
      <h2>Inquiries and confirmation</h2>
      <p>Submitting an inquiry does not create a reservation. A stay is confirmed only when the host confirms in writing.</p>
      <h2>Prices</h2>
      <p>Prices shown are indicative and may change. The host confirms the final price, currency and inclusions before booking.</p>
      <h2>Activities</h2>
      <p>Safaris and park activities are run by licensed third parties and depend on weather, season and park rules. Wildlife sightings are not guaranteed.</p>
      <h2>Health</h2>
      <p>Please share any health conditions before practising yoga. Practise within your own limits.</p>
      <p className="text-sm text-muted-foreground">Prototype terms — cancellation and payment terms to be supplied by the business.</p>
    </article>
  ),
});
