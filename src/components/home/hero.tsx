"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "Students Guided" },
  { value: "50+", label: "Verified Tutors" },
  { value: "98%", label: "Parent Satisfaction" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register plugin client-side only (avoids SSR crash on Vercel)
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Entrance animations only — no scrub/parallax that fights trackpad scroll
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.1 })
        .fromTo(".hero-line-1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.1")
        .fromTo(".hero-line-2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.45")
        .fromTo(".hero-sub", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-cta", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.25")
        .fromTo(".hero-stat", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.1");
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={containerRef}
      className="relative flex flex-col min-h-[100svh] overflow-hidden bg-[#0A0E14]"
      aria-label="Homepage hero"
      suppressHydrationWarning
    >
      {/* ── Background Image with parallax wrapper ── */}
      <div
        ref={bgRef}
        className="absolute -top-[15%] left-0 h-[130%] w-full pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient — stronger at bottom left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/60 to-[#0A0E14]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14]/80 via-[#0A0E14]/30 to-transparent" />
      </div>

      {/* ── Main content — vertically centered ── */}
      <div ref={contentRef} className="relative z-10 flex-1 flex flex-col justify-center">
        <Container className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-3 mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent/90 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                  Patna, Bihar · Est. 2009
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-white leading-[1.15] tracking-tight mb-6 md:mb-8">
              <span className="hero-line-1 block text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]">
                Guiding Students
              </span>
              <span className="hero-line-2 block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-accent mt-2 md:mt-3">
                from Class 6 to 12 and Beyond.
              </span>
            </h1>

            {/* Services tag line */}
            <p className="hero-sub text-base md:text-xl text-white/70 font-medium mb-10 md:mb-12 leading-relaxed tracking-wide">
              Academic Coaching &nbsp;·&nbsp; Home Tutors &nbsp;·&nbsp; Residential Care &nbsp;·&nbsp; School Staffing
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[56px] px-8 bg-accent text-[#1B1B1B] font-heading font-bold text-[16px] tracking-wide border-b-[3px] border-[#c8882a] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(232,163,61,0.45)] active:translate-y-0 transition-all duration-200 touch-manipulation"
              >
                Book a Free Consultation
              </Link>
              <a
                href="https://wa.me/919470808655?text=Hi%2C%20I%27d%20like%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-[56px] px-8 border border-white/20 text-white font-heading font-semibold text-[15px] tracking-wide hover:bg-white/10 hover:border-white/40 active:bg-white/15 transition-all duration-200 touch-manipulation"
              >
                <svg className="w-5 h-5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </Container>
      </div>

      {/* ── Stats bar — pinned to bottom of hero ── */}
      <div className="relative z-10 border-t border-white/8 bg-white/[0.04] backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="hero-stat flex flex-col items-center justify-center py-5 md:py-6 px-4 text-center"
              >
                <span className="font-heading font-bold text-accent text-2xl md:text-3xl leading-none mb-1">
                  {s.value}
                </span>
                <span className="text-white/45 text-[11px] font-medium tracking-wide uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Scroll cue — desktop only */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute bottom-[90px] right-10 flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-14 bg-gradient-to-b from-white to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
        <span className="text-white text-[9px] tracking-[0.35em] uppercase rotate-90 origin-center mt-2">Scroll</span>
      </div>
    </section>
  );
}
