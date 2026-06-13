import { createFileRoute } from "@tanstack/react-router";
import { AlbumPlayer } from "@/components/AlbumPlayer";
import { Gallery } from "@/components/Gallery";
import { LyricBook } from "@/components/LyricBook";
import { SocialIconButtons } from "@/components/SocialIconButtons";
import { SecretVoiceTile } from "@/components/SecretVoiceTile";
import heroAsset from "@/assets/site/hero-portrait.png.asset.json";
import signalAsset from "@/assets/site/signal-room.png.asset.json";
import albumCover from "@/assets/site/album-cover.png.asset.json";
import innerSleeve from "@/assets/site/inner-sleeve.png.asset.json";
import albumBanner from "@/assets/site/album-banner.png.asset.json";
import tracklistPoster from "@/assets/site/tracklist-poster.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CannaBusTeD — My Fake Life" },
      {
        name: "description",
        content:
          "My Fake Life — a 23-track concept album from CannaBusTeD. Songs, videos, lyrics, artwork and the odd uncomfortable truth.",
      },
      { property: "og:title", content: "CannaBusTeD — My Fake Life" },
      {
        property: "og:description",
        content:
          "Step inside a strange little world of music, masks, memory, humour and hurt. A 23-track concept album from CannaBusTeD.",
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
        <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between gap-3">
          <a href="#top" className="font-display text-xl tracking-wide text-parchment shrink-0">
            CannaBus<span className="text-ember">TeD</span>
          </a>
          <nav className="hidden sm:flex gap-7 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#tracks" className="hover:text-ember transition">Listen</a>
            <a href="#gallery" className="hover:text-ember transition">Videos</a>
            <a href="#lyricbook" className="hover:text-ember transition">My Fake Lyrics</a>
            <a href="#about" className="hover:text-ember transition">About</a>
            <a href="#press" className="hover:text-ember transition">Press</a>
          </nav>
...
      {/* My Fake Lyrics — horizontal */}
      <section id="lyricbook" className="relative z-10 mt-24 sm:mt-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 text-center mb-10">
          <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
            Inside The Album
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mt-2 text-parchment">My Fake Lyrics</h2>
          <p className="font-script text-ember text-xl mt-1">turn the pages — the room turns with you</p>
        </div>
        <LyricBook />
      </section>
...
          <div className="flex flex-wrap justify-center gap-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <a href="#tracks" className="hover:text-ember">Listen</a>
            <a href="#gallery" className="hover:text-ember">Watch</a>
            <a href="#lyricbook" className="hover:text-ember">My Fake Lyrics</a>
            <a href="#about" className="hover:text-ember">About</a>
            <a href="#press" className="hover:text-ember">Press</a>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground opacity-70">
            © CannaBusTeD · Songs · Stories · Signals
          </div>

        </div>
      </footer>
    </div>
  );
}
