import { useRef, useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import landingBg from "@/assets/site/landing-background.png.asset.json";
import returnTicketAsset from "@/assets/site/return-ticket.png.asset.json";

export const Route = createFileRoute("/listen")({
  head: () => ({
    meta: [
      { title: "Listen — CannaBusTeD · My Fake Life" },
      {
        name: "description",
        content:
          "Pick where you listen to My Fake Life by CannaBusTeD. Stream, watch, or play it right here on the bus.",
      },
      { property: "og:title", content: "Listen — CannaBusTeD · My Fake Life" },
      {
        property: "og:description",
        content:
          "Pick where you listen to My Fake Life. Stream, watch, or play it right here on the bus.",
      },
    ],
  }),
  component: ListenPage,
});

/* ---------- Real platform logos (decorative; aria-hidden) ---------- */

const IconApple = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M16.7 12.6c0-2.8 2.3-4.1 2.4-4.2-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.4-.5 8.5 1.4 11.3.9 1.4 2 2.9 3.5 2.8 1.4-.1 1.9-.9 3.6-.9s2.2.9 3.6.9c1.5 0 2.5-1.4 3.4-2.7a12 12 0 0 0 1.5-3.2c-.1 0-2.9-1.1-3-4.6zM14 4.5A4.3 4.3 0 0 0 15 1.2a4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1 3.2A3.7 3.7 0 0 0 14 4.5z" />
  </svg>
);
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 17.3a.75.75 0 0 1-1 .25c-2.8-1.7-6.3-2.1-10.5-1.1a.75.75 0 1 1-.3-1.5c4.5-1 8.4-.6 11.5 1.3.4.2.5.7.3 1.1zm1.5-3.3a.93.93 0 0 1-1.3.3c-3.2-2-8.1-2.5-11.9-1.4a.94.94 0 1 1-.5-1.8c4.4-1.3 9.8-.7 13.4 1.5.5.3.6.9.3 1.4zm.1-3.5C15.3 8.3 8.6 8 4.9 9.2a1.13 1.13 0 1 1-.6-2.2c4.3-1.3 11.6-1 16 1.6 1 .6.2 2.3-1.2 1.7z" />
  </svg>
);
const IconAmazon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M15.4 13.7c-1.8 1.3-4.3 2-6.5 2-3 0-5.8-1.1-7.8-3-.2-.1 0-.4.2-.3 2.2 1.3 5 2 7.8 2 2 0 4.1-.4 6.1-1.2.3-.1.6.2.2.5zm.7-.9c-.2-.3-1.5-.1-2-.1-.2 0-.2-.1 0-.3 1-.7 2.7-.5 2.9-.3.2.3-.1 2-1 2.9-.2.1-.3 0-.2-.1.2-.5.6-1.7.3-2.1zM13.6 2.4 13.4 4c0 .2.1.3.3.3 1-.1 2.1.1 3 .5.6.2.6.5.6 1V8c0 .3-.1.4-.3.2-1-.7-2.3-1.1-3.7-1.1-1.9 0-3 .9-3 2.8 0 1.4.7 2.2 2 2.5 1.6.4 2.2.6 3 1.2 0 .1.1.2 0 .3l-.4 1.2c-.1.2-.3.3-.4.2-1-.5-2-.7-3.2-.7-2 0-3 1-3 2.5 0 1.3.7 2 1.9 2 1.1 0 2-.5 2.8-1.3l.6.6c.1.1.3.2.4 0 .4-.4.9-.9 1.5-1.1.2-.1.2-.2.1-.4-.4-.7-.6-1.3-.6-2.5V7.5c0-1.7-1.2-3-3.6-3-1.2 0-2.5.3-3.4.9-.2.1-.2.4 0 .4z" />
  </svg>
);
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
  </svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M19.6 6.7a5.5 5.5 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2.1-3.4h-3.4v12.5a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V8.6a6 6 0 1 0 5.3 5.9V8.3a8.8 8.8 0 0 0 5.4 1.8V6.7z" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="w-5 h-5" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);

/* ---------- Platform button (matches existing SocialIconButtons style) ---------- */

type PlatformProps = {
  href: string;
  label: string;
  Icon: React.ComponentType;
};

function PlatformLink({ href, label, Icon }: PlatformProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Listen on ${label}, opens in a new tab`}
      className="landing-focus group inline-flex items-center justify-center gap-3 w-full min-h-[52px] px-5 py-3 rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment hover:border-ember hover:text-ember hover:bg-oxblood/20 transition shadow-inner"
    >
      <Icon />
      <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.3em]">
        {label}
      </span>
      <span aria-hidden className="opacity-50">↗</span>
    </a>
  );
}

function ListenPage() {
  const [ticketOpen, setTicketOpen] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (ticketOpen && !wasOpenRef.current) {
      firstFieldRef.current?.focus();
    } else if (!ticketOpen && wasOpenRef.current) {
      buttonRef.current?.focus();
    }
    wasOpenRef.current = ticketOpen;
  }, [ticketOpen]);

  return (
    <div className="relative min-h-dvh text-foreground overflow-hidden">
      {/* Landing page background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url("${landingBg.url}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Decorative dark wash over the site background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.12 0.012 30 / 0.55), oklch(0.08 0.01 30 / 0.85) 75%)",
        }}
      />
      {/* Slow amber streetlight drift — disabled for reduced motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 landing-amber-drift mix-blend-screen opacity-60"
      />

      <main className="relative z-10 min-h-dvh flex flex-col items-center px-6 py-16 sm:py-20 text-center">
        <h1 className="font-script text-ember text-4xl sm:text-5xl md:text-6xl leading-snug text-balance max-w-2xl">
          Pick where you listen. The bus is still here when you&apos;re done.
        </h1>

        {/* Featured — play on site */}
        <div className="mt-12 sm:mt-14">
          <Link
            to="/album"
            hash="tracks"
            className="btn-poster btn-poster--ember landing-focus text-base sm:text-lg tracking-[0.4em] px-10 py-5"
          >
            ▶ Play it here on the bus
          </Link>
        </div>

        {/* Stream the album */}
        <section aria-labelledby="stream-heading" className="mt-16 sm:mt-20 w-full max-w-md">
          <h2
            id="stream-heading"
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6"
          >
            Stream the album
          </h2>
          <div className="flex flex-col items-stretch gap-4">
            <PlatformLink
              href="https://music.apple.com/ug/artist/cannabusted/1592297432"
              label="Apple Music"
              Icon={IconApple}
            />
            <PlatformLink
              href="https://open.spotify.com/artist/5ffLruUeSIhhOxr5PdVPI5?si=OF4YBFuJSbS0ZbGnjwvSJw"
              label="Spotify"
              Icon={IconSpotify}
            />
            <PlatformLink
              href="https://music.amazon.co.uk/artists/B09KJF6SFQ"
              label="Amazon Music"
              Icon={IconAmazon}
            />
          </div>
        </section>

        {/* Watch and follow */}
        <section aria-labelledby="follow-heading" className="mt-14 sm:mt-16 w-full max-w-md">
          <h2
            id="follow-heading"
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-6"
          >
            Watch and follow
          </h2>
          <div className="flex flex-col items-stretch gap-4">
            <PlatformLink
              href="https://youtube.com/@cannabusted?si=dkAMHMxNYIwT6he0"
              label="YouTube"
              Icon={IconYouTube}
            />
            <PlatformLink
              href="https://www.tiktok.com/@cannabusted?_r=1&_t=ZN-97LXxKhMoy6"
              label="TikTok"
              Icon={IconTikTok}
            />
            <PlatformLink
              href="https://www.facebook.com/cannabusted"
              label="Facebook"
              Icon={IconFacebook}
            />
          </div>
        </section>

        {/* Return ticket — Mailchimp embedded form */}
        <section
          aria-labelledby="return-ticket-heading"
          className="mt-20 sm:mt-24 w-full max-w-md border-t border-border/40 pt-12"
        >
          <h2
            id="return-ticket-heading"
            className="font-script text-ember text-3xl sm:text-4xl leading-tight"
          >
            Free return ticket
          </h2>
          <p className="font-display italic text-parchment/85 mt-4 text-base sm:text-lg leading-relaxed text-balance">
            Leave your email and I&apos;ll let you know when the next door opens.
            No spam, no noise — just a tap on the shoulder when there&apos;s
            somewhere new to go.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={ticketOpen}
              aria-controls="return-ticket-form"
              onClick={() => setTicketOpen((v) => !v)}
              className="landing-focus group inline-block rounded-sm overflow-hidden transition-transform hover:scale-[1.02] focus-visible:scale-[1.02]"
            >
              <span className="sr-only">
                Free return ticket {ticketOpen ? "(form open, press to close)" : "(press to open form)"}
              </span>
              <img
                src={returnTicketAsset.url}
                alt=""
                aria-hidden="true"
                className="block w-full max-w-md h-auto select-none"
                draggable={false}
              />
            </button>
          </div>

          {ticketOpen && (
            <form
              id="return-ticket-form"
              action="https://cannabusted.us8.list-manage.com/subscribe/post?u=a8448f9c89e80a0fa55313ab9&id=ca871d90ba&f_id=006166e1f0"
              method="post"
              target="_blank"
              noValidate
              className="mt-8 flex flex-col gap-5 text-left"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mce-FNAME"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/90"
                >
                  First name
                </label>
                <input
                  ref={firstFieldRef}
                  id="mce-FNAME"
                  type="text"
                  name="FNAME"
                  autoComplete="given-name"
                  className="landing-focus w-full min-h-[48px] px-4 py-3 rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment placeholder:text-parchment/40 font-display text-base focus:border-ember outline-none"
                  placeholder="Ted"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mce-EMAIL"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-parchment/90"
                >
                  Email address <span className="text-ember">*</span>
                </label>
                <input
                  id="mce-EMAIL"
                  type="email"
                  name="EMAIL"
                  autoComplete="email"
                  required
                  className="landing-focus w-full min-h-[48px] px-4 py-3 rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment placeholder:text-parchment/40 font-display text-base focus:border-ember outline-none"
                  placeholder="you@somewhere.com"
                />
              </div>

              {/* Mailchimp anti-spam honeypot — must be hidden from sighted users and screen readers, not focusable */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_a8448f9c89e80a0fa55313ab9_ca871d90ba"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <button
                  type="submit"
                  name="subscribe"
                  className="btn-poster btn-poster--ember landing-focus text-sm sm:text-base tracking-[0.35em] px-8 py-4"
                >
                  Get my return ticket
                </button>
                <button
                  type="button"
                  onClick={() => setTicketOpen(false)}
                  className="landing-quiet-link landing-focus font-mono text-[11px] uppercase tracking-[0.3em] text-parchment/70 hover:text-ember"
                >
                  Close
                </button>
              </div>
            </form>
          )}
        </section>


        {/* Quiet link back to landing */}
        <div className="mt-16 sm:mt-20">
          <Link
            to="/"
            className="landing-quiet-link landing-focus font-script text-ember text-xl sm:text-2xl"
          >
            ← Back to the door
          </Link>
        </div>
      </main>
    </div>
  );
}
