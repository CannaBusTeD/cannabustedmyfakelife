import busAsset from "@/assets/site/voice-bus.png.asset.json";

const VOICE_URL = "https://thevoice.canabuster.com";

type Variant = "tile" | "doorway";

export function SecretVoiceTile({
  variant = "tile",
  label = "Take The Voice Route",
  caption,
}: {
  variant?: Variant;
  label?: string;
  caption?: string;
}) {
  if (variant === "tile") {
    return (
      <a
        href={VOICE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open The Voice by CannaBusTeD in a new tab"
        className="group relative wallpaper-panel rounded-sm overflow-hidden ring-1 ring-border/60 hover:ring-ember/70 transition block"
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={busAsset.url}
            alt="Secret bus route link to The Voice by CannaBusTeD"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition duration-700 group-hover:scale-105"
            style={{ filter: "sepia(0.2) contrast(1.05) brightness(0.85)" }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(255,200,140,0.10), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.85), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 vignette pointer-events-none" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
            <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-ember/90">
              Unmarked Stop
            </div>
            <div className="font-display text-base sm:text-lg leading-tight text-parchment text-balance mt-0.5 italic">
              {label}
            </div>
          </figcaption>
        </div>
        <div className="px-3 sm:px-4 py-3 flex items-center justify-between border-t border-border/40">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Side Road
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-ember group-hover:underline">
            Board ▶
          </span>
        </div>
      </a>
    );
  }

  // Doorway variant: bottom-right discovered bus stop
  return (
    <div className="flex justify-center sm:justify-end">
      <a
        href={VOICE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open The Voice by CannaBusTeD in a new tab"
        className="group relative block w-full max-w-sm sm:max-w-md overflow-hidden rounded-sm ring-1 ring-ember/30 hover:ring-ember/70 transition shadow-2xl"
        style={{ transform: "rotate(-1.2deg)" }}
      >
        <div className="relative aspect-square overflow-hidden">
          <img
            src={busAsset.url}
            alt="Secret bus route link to The Voice by CannaBusTeD"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
            style={{ filter: "sepia(0.25) contrast(1.08) brightness(0.82)" }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(255,190,120,0.12), transparent 50%), linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 vignette pointer-events-none" />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-parchment/70 bg-background/50 backdrop-blur px-2 py-1 rounded-sm border border-border/40">
              Route · Unlisted
            </span>
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-ember/90 bg-background/50 backdrop-blur px-2 py-1 rounded-sm border border-ember/30">
              One Way
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="font-script text-ember text-xl">still listening?</div>
            <div className="font-display text-2xl sm:text-3xl text-parchment text-balance leading-tight mt-1 italic">
              {label}
            </div>
            {caption && (
              <div className="mt-2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                {caption}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
