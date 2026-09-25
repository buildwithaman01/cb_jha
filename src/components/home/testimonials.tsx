"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote: "C.B. Jha Tutorials changed my son's approach to studying. The personalized attention in Home Tuition was exactly what he needed to score a 95% in his boards.",
    author: "Rajesh Kumar",
    role: "Parent of Class 10 Student",
  },
  {
    quote: "Their residential facility provides a disciplined yet caring environment. My daughter was able to focus entirely on her JEE prep without any distractions.",
    author: "Anita Sharma",
    role: "Parent of Class 12 Student",
  },
  {
    quote: "As a school administrator, partnering with them for staffing has been seamless. The quality of guest faculty they provide is outstanding.",
    author: "Dr. S. K. Singh",
    role: "Principal",
  },
  {
    quote: "The academic coaching batches are small and focused. The teachers don't just complete the syllabus; they ensure we actually understand the concepts.",
    author: "Priya V.",
    role: "Class 11 Student",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal scroll effect
      const track = trackRef.current;
      if (track) {
        // Calculate how far to move left
        const scrollWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        const xOffset = -(scrollWidth - windowWidth + 100); // 100px padding adjustment

        if (windowWidth >= 768) { // Only animate on desktop/tablet
          gsap.to(track, {
            x: xOffset,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: "+=2000", // Scroll duration
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#FAFAF7] overflow-hidden">
      <Container className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          Trusted by <span className="text-accent">Parents & Schools.</span>
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl">
          Don't just take our word for it. Hear from the families and institutions who have experienced our dedication firsthand.
        </p>
      </Container>

      {/* Horizontal Scroll Track */}
      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div 
          ref={trackRef} 
          className="flex flex-nowrap gap-6 md:gap-8 w-max pb-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="w-[300px] md:w-[450px] flex-shrink-0 bg-white p-8 md:p-10 border border-border shadow-sm rounded-sm relative group hover:border-accent/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              <p className="text-foreground/80 leading-relaxed italic mb-8 relative z-10 text-lg">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-heading font-bold text-primary">{t.author}</h4>
                <p className="text-sm text-foreground/60">{t.role}</p>
              </div>
            </div>
          ))}
          {/* Spacer for the end of scroll */}
          <div className="w-[10vw] flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
