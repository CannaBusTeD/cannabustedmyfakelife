import { SOCIAL_LINKS } from "@/data/social";

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
  </svg>
);
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2.1-10.5-1.1a.75.75 0 1 1-.3-1.5c4.5-1 8.4-.6 11.5 1.3.4.2.5.7.3 1.1zm1.5-3.3a.93.93 0 0 1-1.3.3c-3.2-2-8.1-2.5-11.9-1.4a.94.94 0 1 1-.5-1.8c4.4-1.3 9.8-.7 13.4 1.5.5.3.6.9.3 1.4zm.1-3.5C15.3 8.3 8.6 8 4.9 9.2a1.13 1.13 0 1 1-.6-2.2c4.3-1.3 11.6-1 16 1.6 1 .6.2 2.3-1.2 1.7z" />
  </svg>
);
const IconApple = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M16.7 12.6c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.5 1.4 11.3.9 1.4 2 2.9 3.5 2.8 1.4-.1 1.9-.9 3.6-.9s2.2.9 3.6.9c1.5 0 2.5-1.4 3.4-2.7a12 12 0 0 0 1.5-3.2c-.1 0-2.9-1.1-3-4.6zM14 4.5A4.3 4.3 0 0 0 15 1.2a4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1 3.2A3.7 3.7 0 0 0 14 4.5z" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);

const ICONS = {
  youtube: IconYouTube,
  spotify: IconSpotify,
  apple: IconApple,
  facebook: IconFacebook,
} as const;

const LABELS: Record<keyof typeof ICONS, string> = {
  youtube: "YouTube",
  spotify: "Spotify",
  apple: "Apple Music",
  facebook: "Facebook",
};

export function SocialIconButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 justify-center ${className}`}>
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((key) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={SOCIAL_LINKS[key]}
            target="_blank"
            rel="noreferrer"
            aria-label={`CannaBusTeD on ${LABELS[key]} (opens in new tab)`}
            className="group inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 min-h-[44px] rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment hover:border-ember hover:text-ember hover:bg-oxblood/20 transition shadow-inner"
          >
            <Icon />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em]">
              {LABELS[key]}
            </span>
          </a>
        );
      })}
    </div>
  );
}
