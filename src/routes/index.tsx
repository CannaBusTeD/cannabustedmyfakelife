import { createFileRoute, Link } from "@tanstack/react-router";
import landingBg from "@/assets/site/landing-background.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CannaBusTeD — Night service · My Fake Life" },
      {
        name: "description",
        content:
          "I'm housebound. So I built somewhere to go. A double album and a whole world from CannaBusTeD. Mind the step.",
      },
      { property: "og:title", content: "Night service · My Fake Life" },
      {
        property: "og:description",
        content:
          "A double album and a whole world, built by a blind man who isn't going anywhere. You are. Mind the step.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
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

      <main className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-6 py-10 text-center">
        {/* Bus destination sign */}
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.5em] uppercase text-parchment/90 bg-background/55 backdrop-blur-sm px-4 py-2 rounded-sm border border-border/60">
          Night service · My Fake Life
        </p>

        <h1 className="font-script text-ember normal-case mt-10 sm:mt-12 text-5xl sm:text-7xl md:text-8xl leading-[1.05] text-balance max-w-4xl">
          <span className="block">I'm housebound.</span>
          <span className="block text-balance">So I built somewhere to go.</span>
        </h1>

        <p className="font-display italic text-parchment/85 mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed text-balance max-w-2xl">
          A double album and a whole world, built by a blind man who isn't going
          anywhere. You are. Mind the step.
        </p>

        <div className="mt-12 sm:mt-14 flex flex-col items-center gap-7">
          <Link
            to="/album"
            className="btn-poster btn-poster--ember landing-focus text-base sm:text-lg tracking-[0.4em] px-8 py-4"
          >
            ▶ Come aboard
          </Link>

          <Link
            to="/listen"
            className="landing-quiet-link landing-focus font-script text-ember text-2xl sm:text-3xl"
          >
            Just here for the music →
          </Link>
        </div>
      </main>
    </div>
  );
}
