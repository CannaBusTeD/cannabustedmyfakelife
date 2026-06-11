import { useEffect, useRef, useState } from "react";
import { tracks, type Track } from "@/data/tracks";

function formatTime(s: number) {
  if (!isFinite(s)) return "—:—";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function AlbumPlayer() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [openLyrics, setOpenLyrics] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const current: Track = tracks[index];

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.src = current.audio;
    a.load();
    if (playing) a.play().catch(() => setPlaying(false));
  }, [index]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing]);

  const play = (i: number) => {
    if (i === index) {
      setPlaying((p) => !p);
    } else {
      setIndex(i);
      setPlaying(true);
    }
  };

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          if (index < tracks.length - 1) {
            setIndex(index + 1);
            setPlaying(true);
          } else setPlaying(false);
        }}
      />

      {/* Now Playing */}
      <div className="wallpaper-panel rounded-sm p-6 sm:p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 vignette pointer-events-none" />
        <div className="relative flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <img
            src={current.cover}
            alt={`${current.title} cover art`}
            className="w-44 h-44 sm:w-52 sm:h-52 object-cover shadow-2xl ring-1 ring-oxblood/40"
          />
          <div className="flex-1 w-full text-center sm:text-left">
            <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground">
              Track {current.num.toString().padStart(2, "0")} / 23 — Now Playing
            </div>
            <h3 className="font-display text-3xl sm:text-4xl mt-2 text-parchment text-balance">
              {current.title}
            </h3>
            <p className="font-script text-ember/90 text-lg mt-1">CannaBusTeD · My Fake Life</p>

            {/* Controls */}
            <div className="mt-5 flex items-center gap-3 justify-center sm:justify-start">
              <button
                onClick={() => { setIndex(Math.max(0, index - 1)); setPlaying(true); }}
                className="w-9 h-9 rounded-full border border-border/70 hover:border-ember/80 hover:text-ember transition flex items-center justify-center"
                aria-label="Previous"
              >‹</button>
              <button
                onClick={() => setPlaying((p) => !p)}
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-ember transition flex items-center justify-center text-lg shadow-lg shadow-primary/40"
                aria-label={playing ? "Pause" : "Play"}
              >{playing ? "❚❚" : "▶"}</button>
              <button
                onClick={() => { setIndex(Math.min(tracks.length - 1, index + 1)); setPlaying(true); }}
                className="w-9 h-9 rounded-full border border-border/70 hover:border-ember/80 hover:text-ember transition flex items-center justify-center"
                aria-label="Next"
              >›</button>
              <div className="font-mono text-xs text-muted-foreground ml-2">
                {formatTime(time)} <span className="opacity-50">/</span> {formatTime(duration)}
              </div>
            </div>

            {/* progress */}
            <div className="mt-3 relative h-1 bg-secondary/60 rounded">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-oxblood to-ember rounded"
                style={{ width: `${duration ? (time / duration) * 100 : 0}%` }}
              />
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={time}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setTime(v);
                  if (audioRef.current) audioRef.current.currentTime = v;
                }}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
                aria-label="Seek"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tracklist */}
      <ol className="divide-y divide-border/60 border-y border-border/60">
        {tracks.map((t, i) => {
          const isCurrent = i === index;
          const isOpen = openLyrics === t.slug;
          return (
            <li key={t.slug} className="group">
              <div
                className={`flex items-center gap-4 px-3 sm:px-5 py-3 transition ${
                  isCurrent ? "bg-primary/10" : "hover:bg-secondary/40"
                }`}
              >
                <button
                  onClick={() => play(i)}
                  className="w-10 h-10 flex-shrink-0 rounded-full border border-border/60 group-hover:border-ember/80 group-hover:text-ember flex items-center justify-center font-mono text-xs"
                  aria-label={`Play ${t.title}`}
                >
                  {isCurrent && playing ? "❚❚" : isCurrent ? "▶" : t.num.toString().padStart(2, "0")}
                </button>
                <img src={t.cover} alt="" className="w-10 h-10 object-cover hidden sm:block ring-1 ring-border/60" />
                <div className="flex-1 min-w-0">
                  <div className={`font-display text-lg leading-tight truncate ${isCurrent ? "text-ember" : "text-parchment"}`}>
                    {t.title}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                    Track {t.num.toString().padStart(2, "0")}
                  </div>
                </div>
                <button
                  onClick={() => setOpenLyrics(isOpen ? null : t.slug)}
                  className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-ember transition"
                >
                  {isOpen ? "Close" : "Lyrics"}
                </button>
              </div>
              {isOpen && (
                <div className="px-5 sm:px-12 pb-8 pt-2 wallpaper-panel">
                  <pre className="font-script text-base sm:text-lg leading-relaxed text-parchment/90 whitespace-pre-wrap text-balance">
{t.lyrics}
                  </pre>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
