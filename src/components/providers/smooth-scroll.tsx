"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Skip Lenis entirely on true touch-only devices (phones/tablets)
    // but KEEP it active on laptops/desktops (including trackpads)
    const isTouchOnly =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (isTouchOnly) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      // Do NOT intercept touch events so trackpad native scroll is never blocked
      touchMultiplier: 0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker provides time in milliseconds — pass directly, no conversion
    const raf = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.refresh();
    };
  }, []);

  return <>{children}</>;
}
