import { SOCIAL_LINKS, SOCIAL_BUTTONS } from "@/data/social";

interface Props {
  variant?: "pill" | "ghost";
  className?: string;
}

export function SocialButtons({ variant = "pill", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] font-mono text-[11px] uppercase tracking-[0.25em] rounded-sm transition";
  const styles =
    variant === "pill"
      ? "border border-border/70 text-parchment hover:border-ember hover:text-ember"
      : "text-muted-foreground hover:text-ember";

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      {SOCIAL_BUTTONS.map(({ key, label }) => (
        <a
          key={key}
          href={SOCIAL_LINKS[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={`CannaBusTeD on ${label} (opens in new tab)`}
          className={`${base} ${styles}`}
        >
          {label} <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}
