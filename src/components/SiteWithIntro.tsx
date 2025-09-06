import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteWithIntro({ children }: { children: React.ReactNode }) {
  const [showSite, setShowSite] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(true);

  // Respect reduced motion: skip intro entirely
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setShowSite(true);
  }, []);

  // If autoplay fails (iOS can be picky), show play/enter UI
  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>("#tgmc-intro");
    if (!video) return;
    const attempt = async () => {
      try {
        await video.play();
      } catch {
        setCanAutoplay(false);
      }
    };
    attempt();
  }, []);

  return (
    <div className="relative">
      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSite ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-hidden={!showSite}
      >
        {children}
      </motion.div>

      {/* Intro overlay */}
      <AnimatePresence>
        {!showSite && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            role="dialog"
            aria-label="Welcome"
          >
            <div className="absolute inset-0">
              <video
                id="tgmc-intro"
                className="h-full w-full object-cover"
                // Provide BOTH sources for broad browser support
                playsInline
                muted
                autoPlay
                preload="auto"
                onEnded={() => setShowSite(true)}
                poster="/video/intro-poster.jpg"
              >
                <source src="/video/tgmc-logo-reveal.webm" type="video/webm" />
                <source src="/video/tgmc-logo-reveal.mp4" type="video/mp4" />
              </video>
              {/* Optional dark gradient for text contrast over video */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/40 via-sky-900/10 to-sky-900/60" />
            </div>

            {/* Controls (always available + accessible) */}
            <div className="absolute inset-x-0 bottom-10 mx-auto flex w-full max-w-5xl items-center justify-between px-6">
              <button
                onClick={() => setShowSite(true)}
                className="rounded-xl bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur-sm shadow"
              >
                Enter site
              </button>

              {!canAutoplay && (
                <p className="rounded-xl bg-white/70 px-3 py-2 text-xs text-slate-800 backdrop-blur-sm shadow">
                  Tap "Enter site" to continue
                </p>
              )}
            </div>

            {/* Skip link for keyboard users */}
            <button
              onClick={() => setShowSite(true)}
              className="absolute right-4 top-4 rounded-lg bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur-sm shadow focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Skip intro
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
