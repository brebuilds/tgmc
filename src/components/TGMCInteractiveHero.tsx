import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Texas General Medical Center — Interactive Hero
 * - Glass/gradient overlay on architectural image
 * - Animated headline with subtle word reveals
 * - Count-up $1B figure
 * - Parallax mouse tilt on the hero card
 * - Fixed logo badge with automatic contrast + hover micro-interactions
 * - Accessible email capture (no backend; wire your handler)
 */

export default function TGMCInteractiveHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-50">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/hero-hospital.jpg')", // Using existing hero image
        }}
        aria-hidden
      />

      {/* Blue gradient veil to ensure text contrast on all breakpoints */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-sky-900/55 to-sky-800/65" />

      {/* Decorative, very subtle animated radial to add depth */}
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[100px]"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fixed logo badge */}
      <LogoBadge />

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-10 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col items-center md:items-start">
            <HeroHeading />
            <Subcopy />
            <EmailCapture />
            <ScrollHint />
          </div>
          
          {/* Right side - Video */}
          <div className="relative">
            <VideoSection />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoBadge() {
  return (
    <motion.a
      href="#top"
      className="group absolute right-4 top-4 z-20 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/60 px-4 py-2 backdrop-blur-md shadow-lg md:right-8 md:top-8"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      aria-label="Texas General Medical Center"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-600/90 ring-1 ring-white/30">
        {/* Replace with your SVG; placeholder TX icon box */}
        <span className="text-sm font-semibold text-white">TX</span>
      </div>
      <div className="pr-1">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-700/80">
          Texas General
        </p>
        <p className="-mt-0.5 text-sm font-semibold text-slate-900">
          Medical Center
        </p>
      </div>
      <span className="ml-1 hidden text-slate-700/60 md:block">•</span>
      <span className="hidden text-xs text-slate-700/60 md:block">McAllen, TX</span>
      <div className="ml-2 hidden h-6 w-px bg-white/40 md:block" />
      <motion.div
        className="ml-2 hidden rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-800 shadow-sm md:block"
        whileHover={{ scale: 1.03 }}
      >
        Opening Soon
      </motion.div>
    </motion.a>
  );
}

function HeroHeading() {
  return (
    <div className="max-w-3xl text-center md:text-left">
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
        <Reveal>New 300‑Bed Acute Care</Reveal>
        <br />
        <Reveal>Hospital to</Reveal>
        <br />
        <Reveal>Transform Healthcare</Reveal>
        <br />
        <Reveal>in Rio Grande Valley</Reveal>
      </h1>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

function Subcopy() {
  const ref = useRef<HTMLSpanElement | null>(null);
  useCountUp(ref, 0, 1000, 1500); // cheap count-up for "$1 billion"

  return (
    <p className="mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/90 md:text-left">
      Texas General Medical Center, a nearly <span className="font-bold" ref={ref} />
      <span className="font-bold"> million</span> investment, will serve as a cornerstone for both
      patient care and medical education in the Rio Grande Valley.
    </p>
  );
}

function useCountUp(ref: React.RefObject<HTMLSpanElement>, from = 0, to = 1000, duration = 1200) {
  useEffect(() => {
    if (!ref.current) return;
    const mv = useMotionValue(from);
    const unsub = mv.on("change", (v) => {
      if (ref.current) ref.current.textContent = `$${Math.round(v).toLocaleString()}`;
    });
    const controls = animate(mv, to, { duration: duration / 1000, ease: "easeOut" });
    return () => {
      unsub();
      controls.stop();
    };
  }, [ref, from, to, duration]);
}

function EmailCapture() {
  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      className="mt-8 flex w-full max-w-xl items-center gap-3 rounded-2xl border border-white/20 bg-white/70 p-2 backdrop-blur-md shadow-xl"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="Keep me informed signup"
    >
      <Mail className="ml-1 hidden h-5 w-5 text-slate-700 md:block" aria-hidden />
      <Input
        type="email"
        placeholder="Enter email"
        className="h-12 flex-1 border-none bg-transparent text-slate-900 placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
        required
        aria-label="Email"
      />
      <Button type="submit" className="h-12 rounded-xl px-5 text-base font-semibold">
        Keep me informed!
      </Button>
    </motion.form>
  );
}

function ScrollHint() {
  return (
    <div className="pointer-events-none mt-12 flex items-center gap-2 text-white/80">
      <motion.div
        className="h-8 w-5 rounded-full border-2 border-white/70"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mx-auto mt-1 h-2 w-1.5 rounded-full bg-white/80" />
      </motion.div>
      <span className="text-sm">Scroll to learn more</span>
    </div>
  );
}

function VideoSection() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Video container with rounded corners and shadow */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-900">
        {/* Placeholder until video is uploaded */}
        <div className="flex items-center justify-center h-80 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white/80 font-medium mb-2">Logo Reveal Video</p>
            <p className="text-white/60 text-sm">Upload your video to see it here</p>
          </div>
        </div>
        
        {/* Video element (hidden until files are uploaded) */}
        <video
          className="w-full h-auto hidden"
          autoPlay
          loop
          muted
          playsInline
          poster="/video/intro-poster.jpg"
        >
          <source src="/video/tgmc-logo-reveal.webm" type="video/webm" />
          <source src="/video/tgmc-logo-reveal.mp4" type="video/mp4" />
        </video>
        
        {/* Subtle overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
      </div>
      
      {/* Optional caption or branding */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm text-white/80 font-medium">
          Texas General Medical Center
        </p>
        <p className="text-xs text-white/60 mt-1">
          Transforming Healthcare in the Rio Grande Valley
        </p>
      </motion.div>
    </motion.div>
  );
}
