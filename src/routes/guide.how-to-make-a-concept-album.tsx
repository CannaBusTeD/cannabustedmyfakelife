import { createFileRoute, Link } from "@tanstack/react-router";
import landingBg from "@/assets/site/landing-background.png.asset.json";

const TITLE = "How to Make a Concept Album — CannaBusTeD";
const DESCRIPTION =
  "How a 23-track concept album gets made: finding the thread, mapping the running order, writing motifs, and finishing a big record from one room.";

const URL = "https://cannabusted.com/guide/how-to-make-a-concept-album";

export const Route = createFileRoute("/guide/how-to-make-a-concept-album")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Make a Concept Album",
          description: DESCRIPTION,
          author: { "@type": "Person", name: "CannaBusTeD" },
          publisher: { "@type": "MusicGroup", name: "CannaBusTeD" },
          mainEntityOfPage: URL,
        }),
      },
    ],
  }),
  component: GuidePage,
});

type StepProps = {
  n: string;
  heading: string;
  children: React.ReactNode;
};

function Step({ n, heading, children }: StepProps) {
  return (
    <section className="mt-12 border-t border-border/40 pt-8">
      <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
        Step {n}
      </p>
      <h2 className="font-script text-ember text-3xl sm:text-4xl leading-tight mt-3">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 font-display text-parchment/90 text-base sm:text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function GuidePage() {
  return (
    <div className="relative min-h-dvh text-foreground overflow-hidden">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${landingBg.url})` }}
      />
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-background/75" />

      <main className="relative mx-auto max-w-2xl px-6 py-20 sm:py-28 pb-32">
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
          From the bus
        </p>
        <h1 className="font-script text-ember text-4xl sm:text-6xl leading-tight mt-4">
          How to make a concept album
        </h1>
        <p className="font-display italic text-parchment/85 mt-6 text-lg sm:text-xl leading-relaxed text-balance">
          I wrote and finished <em>My Fake Life</em>, a 23-track double album,
          from one room. This is how the work actually went — not theory, just
          the order I found things in.
        </p>

        <Step n="01" heading="Find the thread before the songs">
          <p>
            A concept album is not a themed playlist. It is one idea strong
            enough to survive twenty-odd songs. Write the thread down in a
            single sentence first. If you cannot say it in a sentence, the
            record will not hold together at track fourteen.
          </p>
          <p>
            Mine was a life I invented because the real one stopped moving.
            Everything on the album had to answer to that sentence, or it went
            in a different pile.
          </p>
        </Step>

        <Step n="02" heading="Map the journey, not the tracklist">
          <p>
            Before you sequence songs, sketch the emotional route: where the
            listener boards, where they get lost, where they see something they
            recognise, where they get off. Then write songs to fill the gaps in
            that route. Writing to a gap is far easier than writing to a blank
            page.
          </p>
        </Step>

        <Step n="03" heading="Build recurring motifs on purpose">
          <p>
            The glue is repetition with variation. Pick a small kit of things
            that reappear: a phrase, a character, a chord move, an instrument, a
            place. Use each one at least three times across the record — early,
            in the middle, and changed at the end. That third appearance is what
            makes a listener feel the album was planned rather than collected.
          </p>
        </Step>

        <Step n="04" heading="Write in batches, edit as a whole">
          <p>
            Write songs in clusters of three or four so they share a mood, then
            stop and listen to the whole thing in order. Big records fail at the
            join, not at the song. Cut anything that repeats a point already
            made better elsewhere, even if it is a good song on its own.
          </p>
        </Step>

        <Step n="05" heading="Sequence like a set list">
          <p>
            Running order is composition. Open with something that states the
            world, put your strangest track where attention is highest rather
            than at the end, and give the listener two or three quiet landings
            across the record. On a double album, treat each half as its own
            arc with its own opener and closer.
          </p>
        </Step>

        <Step n="06" heading="Produce for consistency, not perfection">
          <p>
            A concept album needs to sound like one place. Lock a small palette
            of sounds and reuse it. Keep a reference track from early on and
            check every new mix against it. Consistency across twenty songs
            reads as intention; twenty separately perfect mixes read as a
            compilation.
          </p>
        </Step>

        <Step n="07" heading="Finish it, then build the world around it">
          <p>
            The record is the centre, not the whole thing. Artwork, a lyric
            book, sleeve notes and a place to read them all extend the same
            idea. Make those after the music is locked, so they describe the
            album you actually made rather than the one you planned.
          </p>
        </Step>

        <section className="mt-16 border-t border-border/40 pt-10">
          <h2 className="font-script text-ember text-3xl sm:text-4xl leading-tight">
            Hear one that was made this way
          </h2>
          <p className="font-display italic text-parchment/85 mt-4 text-base sm:text-lg leading-relaxed">
            <em>My Fake Life</em> is 23 tracks, a lyric book and a set of doors
            to walk through. Everything above came out of making it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/album"
              className="landing-focus inline-flex items-center justify-center min-h-[52px] px-6 rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment hover:border-ember hover:text-ember transition font-mono text-[11px] uppercase tracking-[0.3em]"
            >
              Ride the album
            </Link>
            <Link
              to="/listen"
              className="landing-focus inline-flex items-center justify-center min-h-[52px] px-6 rounded-sm border border-border/70 bg-background/40 backdrop-blur-sm text-parchment hover:border-ember hover:text-ember transition font-mono text-[11px] uppercase tracking-[0.3em]"
            >
              Where to listen
            </Link>
          </div>
        </section>

        <div className="mt-16">
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
