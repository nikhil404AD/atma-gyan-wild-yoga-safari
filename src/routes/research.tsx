import { createFileRoute, Link } from "@tanstack/react-router";
import { formatPrice, packages } from "@/data/packages";

// Development-only QA dashboard. Renders nothing useful in production.
export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "Research QA | Atma Gyan" }, { name: "robots", content: "noindex" }] }),
  component: Research,
});

const checklist = [
  "All navigation links work", "Every package detail page renders", "Prices and durations come from data/packages.ts",
  "Conflicting package information is flagged", "Booking form validates (required, email, departure > arrival)",
  "WhatsApp links use 9779816630829", "Images load", "No horizontal overflow on mobile", "Page metadata present", "No decorative buttons",
];

function Research() {
  if (!import.meta.env.DEV) return <div className="container-page pb-20 pt-36"><h1 className="text-4xl">Not available</h1></div>;
  return (
    <div className="container-page pb-20 pt-36 text-sm">
      <h1 className="text-5xl text-forest">Research & QA</h1>
      <h2 className="mt-10 text-3xl">Package data</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border text-left">
          <thead className="bg-muted"><tr>{["Title", "Duration", "Price", "Basis", "Status", "Notes", "Page"].map((h) => <th key={h} className="p-2">{h}</th>)}</tr></thead>
          <tbody>{packages.map((p) => (
            <tr key={p.slug} className="border-t align-top">
              <td className="p-2">{p.title}</td><td className="p-2">{p.durationLabel}</td><td className="p-2">{formatPrice(p)}</td><td className="p-2">{p.pricingBasis}</td>
              <td className="p-2 font-bold">{p.verificationStatus}</td><td className="p-2">{p.researchNotes.join(" ")}</td>
              <td className="p-2"><Link className="underline" to="/packages/$slug" params={{ slug: p.slug }}>open</Link> · <a className="underline" href={p.sourceUrl} target="_blank" rel="noreferrer">source</a></td>
            </tr>))}</tbody>
        </table>
      </div>
      <h2 className="mt-10 text-3xl">QA checklist</h2>
      <ul className="mt-4 space-y-2">{checklist.map((c) => <li key={c}><label className="flex gap-2"><input type="checkbox" />{c}</label></li>)}</ul>
    </div>
  );
}
