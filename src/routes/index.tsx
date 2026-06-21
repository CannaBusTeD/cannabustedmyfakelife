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
            Leave your email and I'll let you know when the next door opens.
            No spam, no noise — just a tap on the shoulder when there's
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

              {/* Mailchimp anti-spam honeypot */}
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
      </main>
    </div>
  );
}
