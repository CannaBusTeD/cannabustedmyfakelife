import { useRef, useState } from "react";
import { tracks } from "@/data/tracks";
import { VIDEO_IDS } from "@/data/videos";
import { VideoModal } from "@/components/VideoModal";

export function Gallery() {
  const [open, setOpen] = useState<{ videoId: string; title: string } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openVideo = (slug: string, title: string, el: HTMLButtonElement) => {
    const videoId = VIDEO_IDS[slug];
    if (!videoId) return;
    triggerRef.current = el;
    setOpen({ videoId, title });
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {tracks.map((t) => {
          const videoId = VIDEO_IDS[t.slug];
          return (
            <figure
              key={t.slug}
              className="group relative wallpaper-panel rounded-sm overflow-hidden ring-1 ring-border/60 hover:ring-ember/60 transition"
            >
              <button
                type="button"
                onClick={(e) => openVideo(t.slug, t.title, e.currentTarget)}
                disabled={!videoId}
                aria-label={`Watch the video for ${t.title}`}
                className="block w-full text-left disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={t.cover}
                    alt={`${t.title} — cover art`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute inset-0 vignette pointer-events-none" />
                  {videoId && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <span className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center text-xl shadow-2xl shadow-primary/40">
                        ▶
                      </span>
                    </div>
                  )}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      Track {t.num.toString().padStart(2, "0")}
                    </div>
                    <div className="font-display text-base sm:text-lg leading-tight text-parchment text-balance mt-0.5">
                      {t.title}
                    </div>
                  </figcaption>
                </div>
                <div className="px-3 sm:px-4 py-3 flex items-center justify-between border-t border-border/40">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    {videoId ? "Video" : "Audio only"}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ember group-hover:underline">
                    {videoId ? "Watch ▶" : "—"}
                  </span>
                </div>
              </button>
            </figure>
          );
        })}
      </div>

      <VideoModal
        videoId={open?.videoId ?? null}
        title={open?.title}
        onClose={() => setOpen(null)}
        returnFocusTo={triggerRef.current}
      />
    </>
  );
}
