"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { useInView } from "framer-motion";

const STATS = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Students Guided" },
  { value: 50, suffix: "+", label: "Partner Schools" },
  { value: 100, suffix: "%", label: "Dedication" },
];

function Counter({ 
  value, 
  suffix, 
  label 
}: { 
  value: number; 
  suffix: string; 
  label: string 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
          // Easing function (easeOutExpo)
          const progress = 1 - Math.pow(2, -10 * (elapsedTime / duration));
          setCount(Math.floor(progress * value));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-primary py-20 border-y border-accent/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FAFAF7 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-accent/20">
          {STATS.map((stat, i) => (
            <Counter key={i} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
