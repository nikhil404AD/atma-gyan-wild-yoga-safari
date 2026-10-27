import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta("Privacy Policy", "How Atma Gyan Wild Yoga & Safari handles information you share in inquiries.", "/privacy"),
  component: () => (
    <article className="container-page max-w-3xl pb-20 pt-36 prose-article">
      <h1 className="text-5xl text-forest">Privacy Policy</h1>
      <p>This website does not store your inquiry on a server. When you prepare an inquiry, it is sent only through the channel you choose — WhatsApp or email — directly to the host.</p>
      <h2>What we collect</h2>
      <ul><li>Your name, email and optional phone number</li><li>Your preferred retreat, dates and number of guests</li><li>Any message you choose to include</li></ul>
      <h2>How it is used</h2>
      <p>Only to reply to your inquiry and arrange your stay. We do not sell or share your information.</p>
      <h2>Contact</h2>
      <p>Questions: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <p className="text-sm text-muted-foreground">Prototype policy — to be reviewed by the business before publication.</p>
    </article>
  ),
});
