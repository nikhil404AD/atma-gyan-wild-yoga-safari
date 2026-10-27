import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, type GalleryCategory } from "@/data/images";
import { cn } from "@/lib/utils";

const cats: ("All" | GalleryCategory)[] = ["All", "Yoga", "Meditation", "Wildlife", "Nature", "Accommodation", "Food", "Culture"];

export function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const move = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);
  const close = () => { setIdx(null); lastFocus.current?.focus(); };

  useEffect(() => {
    if (idx === null) return;
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [idx, move]);

  return (
    <div>
      <div role="group" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={cn("rounded-full border px-4 py-1.5 text-sm", cat === c ? "border-forest bg-forest text-on-dark" : "border-border hover:border-forest")}>{c}</button>
        ))}
      </div>
      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((g, i) => (
          <li key={g.src + g.category} className="mb-4 break-inside-avoid">
            <button onClick={(e) => { lastFocus.current = e.currentTarget; setIdx(i); }} className="group block w-full overflow-hidden rounded-lg" aria-label={`Open image: ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={1280} height={896} className="w-full transition-transform duration-500 group-hover:scale-105" />
            </button>
            <p className="mt-1.5 text-xs text-muted-foreground">{g.category} · Illustrative image</p>
          </li>
        ))}
      </ul>
      {idx !== null && items[idx] && (
        <div role="dialog" aria-modal="true" aria-label={items[idx].alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-4" onClick={close}>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={items[idx].src} alt={items[idx].alt} className="max-h-[80vh] w-auto rounded-lg" />
            <figcaption className="mt-3 text-center text-sm text-on-dark">{items[idx].alt}</figcaption>
          </figure>
          <button ref={closeRef} onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full p-2 text-on-dark hover:bg-on-dark/10"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous image" className="absolute left-2 rounded-full p-2 text-on-dark hover:bg-on-dark/10"><ChevronLeft className="size-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next image" className="absolute right-2 rounded-full p-2 text-on-dark hover:bg-on-dark/10"><ChevronRight className="size-8" /></button>
        </div>
      )}
    </div>
  );
}
