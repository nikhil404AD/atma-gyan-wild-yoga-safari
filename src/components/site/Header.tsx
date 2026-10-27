import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", solid ? "bg-forest-deep shadow-soft" : "bg-transparent")}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-ivory focus:px-3 focus:py-2 focus:text-forest">Skip to content</a>
      <div className="container-page flex h-20 items-center justify-between gap-4 text-on-dark">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-semibold">{site.shortName}</span>
          <span className="mt-1 text-[0.6rem] font-bold tracking-[0.3em] text-gold">WILD YOGA & SAFARI</span>
        </Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="border-b border-transparent py-1 opacity-90 hover:opacity-100 data-[status=active]:border-gold data-[status=active]:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/book" className="btn btn-gold hidden sm:inline-flex">Book Your Retreat</Link>
          <button className="xl:hidden rounded p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="xl:hidden border-t border-on-dark/10 bg-forest-deep text-on-dark">
          <ul className="container-page flex flex-col py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: n.to === "/" }} onClick={() => setOpen(false)} className="block py-3 font-display text-xl data-[status=active]:text-gold">{n.label}</Link>
              </li>
            ))}
            <li className="pt-3"><Link to="/book" onClick={() => setOpen(false)} className="btn btn-gold w-full">Book Your Retreat</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
