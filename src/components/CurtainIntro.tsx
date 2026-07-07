import { useEffect, useState } from "react";
import socialImage from "@/assets/site/social-my-fake-life.png.asset.json";

type Phase = "hidden" | "poster" | "opening" | "done";

export function CurtainIntro() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    // Only show once per browser session
    try {
      if (sessionStorage.getItem("mfl_intro_played") === "1") {
        setPhase("done");
        return;
      }
    } catch {
      // sessionStorage unavailable; play anyway
    }

    // Lock scroll while intro plays
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    setPhase("poster");
    const t1 = window.setTimeout(() => setPhase("opening"), 1600);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = prevOverflow;
      try {
        sessionStorage.setItem("mfl_intro_played", "1");
      } catch {
        /* noop */
      }
    }, 4200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const opening = phase === "opening";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      style={{
        // Fade the whole overlay out at the very end
        transition: "opacity 500ms ease 3300ms",
        opacity: opening ? 0 : 1,
        pointerEvents: opening ? "none" : "auto",
      }}
    >
      {/* Poster image behind curtains */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transition: "transform 1400ms ease-out, opacity 600ms ease",
          transform: opening ? "scale(1.06)" : "scale(1)",
        }}
      >
        <img
          src={socialImage.url}
          alt="My Fake Life"
          className="max-h-full max-w-full object-contain"
          draggable={false}
        />
      </div>

      {/* Curtains */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
        style={{
          background:
            "repeating-linear-gradient(90deg, #2a0505 0px, #4a0a0a 22px, #6b0f0f 44px, #4a0a0a 66px, #2a0505 88px)",
          boxShadow: "inset -40px 0 80px rgba(0,0,0,0.75), inset 0 0 120px rgba(0,0,0,0.5)",
          transform: opening ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 2400ms cubic-bezier(0.7, 0, 0.3, 1)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
        style={{
          background:
            "repeating-linear-gradient(90deg, #2a0505 0px, #4a0a0a 22px, #6b0f0f 44px, #4a0a0a 66px, #2a0505 88px)",
          boxShadow: "inset 40px 0 80px rgba(0,0,0,0.75), inset 0 0 120px rgba(0,0,0,0.5)",
          transform: opening ? "translateX(100%)" : "translateX(0)",
          transition: "transform 2400ms cubic-bezier(0.7, 0, 0.3, 1)",
        }}
      />

      {/* Top valance for theatre feel */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16"
        style={{
          background:
            "linear-gradient(180deg, #1a0303 0%, #3a0808 60%, rgba(0,0,0,0) 100%)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
        }}
      />
    </div>
  );
}
