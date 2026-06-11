import { createFileRoute } from "@tanstack/react-router";
import { AlbumPlayer } from "@/components/AlbumPlayer";
import heroAsset from "@/assets/site/hero-portrait.png.asset.json";
import signalAsset from "@/assets/site/signal-room.png.asset.json";
import albumCover from "@/assets/site/album-cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CannaBusTeD — My Fake Life" },
      {
        name: "description",
        content:
          "My Fake Life — a 23-track album from CannaBusTeD. Songs, stories, signals. Stream every track, read every lyric, walk through the world the album was written from.",
      },
      { property: "og:title", content: "CannaBusTeD — My Fake Life" },
      {
        property: "og:description",
        content:
          "A 23-track album from CannaBusTeD. Stream every track, read every lyric, step inside the worn world it was written from.",
      },
      { property: "og:type", content: "music.album" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CannaBusTeD — My Fake Life" },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: AlbumSite,
});

function AlbumSite() {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-clip">
      {/* Top nav */}
      <header className="relative z-20">
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-wide text-parchment">
            CannaBus<span className="text-ember">TeD</span>
          </a>
          <nav className="hidden sm:flex gap-7 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#album" className="hover:text-ember transition">Album</a>
            <a href="#tracks" className="hover:text-ember transition">Tracks</a>
            <a href="#about" className="hover:text-ember transition">About</a>
            <a href="#press" className="hover:text-ember transition">Press</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10">
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6">
          <div className="relative rounded-sm overflow-hidden ring-1 ring-border/60">
            <img
              src={heroAsset.url}
              alt="CannaBusTeD — writer at a worn desk in red glasses, lighthouse and harbor receding behind him"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 vignette pointer-events-none" />
          </div>
          <div className="absolute inset-x-0 bottom-3 sm:bottom-10 flex justify-center pointer-events-none">
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.5em] uppercase text-parchment/80 bg-background/40 backdrop-blur px-4 py-2 rounded-sm border border-border/60">
              Musician · Writer · Storyteller · Truth Digger
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center mt-10 sm:mt-16">
          <p className="font-script text-ember text-2xl">a new album</p>
          <h1 className="font-display text-5xl sm:text-7xl text-parchment mt-2 tracking-tight text-balance">
            My Fake Life
          </h1>
          <div className="ink-rule w-40 mx-auto my-6" />
          <p className="font-display text-lg sm:text-xl text-parchment/80 leading-relaxed text-balance">
            Twenty-three songs about the masks we wear, the rooms we leave, and the small honest sounds
            that escape anyway. Follow the thread. Find the truth. Write the next verse.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-ember transition px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] rounded-sm shadow-lg shadow-primary/30"
            >
              ▶ Play the album
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-border/70 hover:border-ember hover:text-ember transition px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] rounded-sm"
            >
              Read the story
            </a>
          </div>
        </div>
      </section>

      {/* Album panel */}
      <section id="album" className="relative z-10 max-w-6xl mx-auto px-5 mt-24 sm:mt-32">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="relative">
            <img
              src={albumCover.url}
              alt="My Fake Life album cover — two figures in a worn sepia-walled room"
              className="w-full h-auto shadow-2xl ring-1 ring-oxblood/40"
            />
            <div className="absolute -inset-3 -z-10 bg-gradient-to-br from-oxblood/40 to-transparent blur-2xl" />
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
              The Album
            </div>
            <h2 className="font-display text-4xl sm:text-5xl mt-2 text-parchment text-balance">
              Every version of me, moving through the bruise.
            </h2>
            <div className="ink-rule w-32 my-6" />
            <p className="text-parchment/80 leading-relaxed text-lg">
              <em>My Fake Life</em> is a record about being caught — by mirrors, by memory, by the
              quieter things that watch when no one is supposed to be watching. It moves between the
              accusation and the apology, the laugh and the wound, the easy way and the hard way,
              until the mask slips and what is left is the song.
            </p>
            <p className="text-parchment/70 leading-relaxed mt-4">
              Recorded between rooms. Mixed by candle. Mastered for the late hour.
            </p>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div>
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">Tracks</dt>
                <dd className="text-parchment text-lg mt-1">23</dd>
              </div>
              <div>
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">Artist</dt>
                <dd className="text-parchment text-lg mt-1">CannaBusTeD</dd>
              </div>
              <div>
                <dt className="text-muted-foreground uppercase tracking-[0.25em] text-[10px]">Era</dt>
                <dd className="text-parchment text-lg mt-1">2026</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Player + tracks */}
      <section id="tracks" className="relative z-10 max-w-5xl mx-auto px-5 mt-24 sm:mt-32">
        <div className="text-center mb-10">
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            Signal Routing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mt-2 text-parchment">The Tracklist</h2>
          <p className="font-script text-ember text-xl mt-1">listen close, the room is listening back</p>
        </div>
        <AlbumPlayer />
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mt-28 sm:mt-36">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="relative rounded-sm overflow-hidden ring-1 ring-border/60">
            <img
              src={signalAsset.url}
              alt="CannaBusTeD inside a signal room of dials, lanterns, typewriters and maps"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 vignette pointer-events-none" />
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-muted-foreground text-center">
            The Bus is now boarding
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mt-2 text-parchment text-center text-balance">
            Songs, stories, signals.
          </h2>
          <div className="ink-rule w-32 mx-auto my-6" />
          <div className="space-y-5 text-parchment/85 leading-relaxed text-lg">
            <p>
              <span className="font-script text-ember text-2xl">CannaBusTeD</span> writes from the
              edge of a room nobody else bothered to turn the lamp on in. The songs arrive the way
              weather does — late, certain, smelling of where they have been.
            </p>
            <p>
              He has spent most of his life noticing what passes for ordinary, and refusing to let it.
              The songs on <em>My Fake Life</em> were written across nights, journeys, kitchens and
              corridors — wherever a small honest sentence could be coaxed into staying still long
              enough to be sung.
            </p>
            <p>
              The Bus is a way of travelling between them. It carries the signal. It boards anyone
              who is listening.
            </p>
          </div>
        </div>
      </section>

      {/* Press / Quotes */}
      <section id="press" className="relative z-10 max-w-5xl mx-auto px-5 mt-28 sm:mt-36">
        <div className="text-center mb-10">
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            From The Margins
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mt-2 text-parchment">Words From The Album</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { q: "The song disappears into what it disturbed, and the disturbance keeps singing.", t: "—  liner notes" },
            { q: "I write to make sense of the noise.", t: "— CannaBusTeD" },
            { q: "Not just songs. Stories. Signals. Connection.", t: "— studio wall" },
          ].map((c) => (
            <figure key={c.q} className="wallpaper-panel rounded-sm p-6 relative">
              <div className="absolute inset-0 vignette pointer-events-none" />
              <blockquote className="font-script text-xl text-parchment/95 leading-snug">
                “{c.q}”
              </blockquote>
              <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {c.t}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-32 border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-4 items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© CannaBusTeD · My Fake Life</div>
          <div className="flex gap-6">
            <a href="#tracks" className="hover:text-ember">Listen</a>
            <a href="#about" className="hover:text-ember">About</a>
            <a href="#press" className="hover:text-ember">Press</a>
          </div>
          <div className="opacity-70">Songs · Stories · Signals</div>
        </div>
      </footer>
    </div>
  );
}
