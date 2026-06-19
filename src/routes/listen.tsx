import { createFileRoute, Link } from "@tanstack/react-router";

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

function ListenPage() {
  return (
    <div className="relative min-h-dvh text-foreground overflow-hidden">
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

      <main className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="font-script text-ember text-3xl sm:text-4xl md:text-5xl leading-snug text-balance max-w-2xl">
          Pick where you listen. The bus is still here when you&apos;re done.
        </h1>

        {/* Featured — play on site */}
        <div className="mt-12 sm:mt-14">
          <Link
            to="/album"
            hash="tracks"
            className="btn-poster btn-poster--ember landing-focus text-sm sm:text-base tracking-[0.35em] px-8 py-4"
          >
            ▶ Play it here on the bus
          </Link>
        </div>

        {/* Stream the album */}
        <section aria-labelledby="stream-heading" className="mt-14 sm:mt-16 w-full max-w-md">
          <h2
            id="stream-heading"
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-5"
          >
            Stream the album
          </h2>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://music.apple.com/cannabusted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Apple Music, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              Apple Music
            </a>
            <a
              href="https://open.spotify.com/artist/5ffLruUeSIhhOxr5PdVPI5?si=OF4YBFuJSbS0ZbGnjwvSJw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              Spotify
            </a>
            <a
              href="https://music.amazon.co.uk/artists/B09KJF6SFQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Amazon Music, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              Amazon Music
            </a>
          </div>
        </section>

        {/* Watch and follow */}
        <section aria-labelledby="follow-heading" className="mt-14 sm:mt-16 w-full max-w-md">
          <h2
            id="follow-heading"
            className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground mb-5"
          >
            Watch and follow
          </h2>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://youtube.com/@cannabusted?si=dkAMHMxNYIwT6he0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on YouTube, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@cannabusted?_r=1&_t=ZN-97LXxKhMoy6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch on TikTok, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/cannabusted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Facebook, opens in a new tab"
              className="btn-poster landing-focus w-full justify-center"
            >
              Facebook
            </a>
          </div>
        </section>

        {/* Quiet link back to landing / album */}
        <div className="mt-14 sm:mt-16">
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
