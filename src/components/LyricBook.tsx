import { useCallback, useEffect, useRef, useState } from "react";
import { LYRIC_BOOK_PAGES } from "@/data/lyricbook";
import secretDoor from "@/assets/site/secret-door.png.asset.json";

export function LyricBook() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = el.children[i] as HTMLElement | undefined;
    if (target) target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const items = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      items.forEach((it, i) => {
        const itCenter = it.offsetLeft + it.offsetWidth / 2;
        const d = Math.abs(itCenter - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActiveIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const total = LYRIC_BOOK_PAGES.length;
  const prev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const next = () => scrollToIndex(Math.min(total - 1, activeIndex + 1));

  return (
    <div className="relative">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="relative flex gap-5 sm:gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 px-[max(1rem,calc((100vw-min(640px,90vw))/2))] sm:px-[max(2rem,calc((100vw-min(720px,80vw))/2))] scroll-smooth lyricbook-scroller"
        aria-label="My Fake Lyrics — scroll or swipe sideways"
      >
        {LYRIC_BOOK_PAGES.map((p, i) => (
          <figure
            key={p.id}
            className="snap-center shrink-0 w-[min(640px,90vw)] sm:w-[min(560px,70vw)] md:w-[min(620px,55vw)]"
            aria-current={i === activeIndex ? "page" : undefined}
          >
            <div
              className="relative ring-1 ring-border/60 shadow-2xl bg-card overflow-hidden"
              style={{ aspectRatio: "210 / 297" }}
            >
              <img
                src={p.src}
                alt={`${p.title} — My Fake Lyrics ${p.caption ?? `page ${i + 1}`}`}
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover"

                draggable={false}
              />
              <div className="absolute inset-0 vignette pointer-events-none" />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {p.caption ?? `page ${i + 1}`} · {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous page"
          className="w-11 h-11 rounded-full border border-border/70 text-parchment hover:text-ember hover:border-ember transition disabled:opacity-30 disabled:cursor-not-allowed bg-background/40 backdrop-blur"
        >
          ←
        </button>
        <div
          className="flex items-center gap-1.5"
          role="tablist"
          aria-label="Lyric book pages"
        >
          {LYRIC_BOOK_PAGES.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-6 bg-ember" : "w-1.5 bg-border hover:bg-parchment/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          disabled={activeIndex === total - 1}
          aria-label="Next page"
          className="w-11 h-11 rounded-full border border-border/70 text-parchment hover:text-ember hover:border-ember transition disabled:opacity-30 disabled:cursor-not-allowed bg-background/40 backdrop-blur"
        >
          →
        </button>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
        swipe / scroll sideways · more pages added as the album unfolds
      </p>
    </div>
  );
}
