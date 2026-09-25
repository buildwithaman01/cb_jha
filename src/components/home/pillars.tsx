"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, UserCheck, Home, Users } from "lucide-react";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    title: "Academic Coaching",
    description: "Classroom batches & 1-on-1 mentoring, doubt-clearing sessions, Class 6–12, all subjects.",
    href: "/academic-coaching",
    icon: BookOpen,
    // square border, thick left rule in Navy Blue, no radius
    className: "border border-border rounded-none border-l-4 border-l-primary bg-card text-card-foreground shadow-sm hover:-translate-y-1 transition-transform",
    iconClass: "text-primary",
  },
  {
    title: "Home Tuition",
    description: "Verified home tutors coming to your child, all subjects, flexible scheduling.",
    href: "/home-tuition",
    icon: UserCheck,
    // slight top border arc, warm off-white background
    className: "border-t-[6px] border-t-accent rounded-t-xl rounded-b-md bg-[#FDFBF7] text-card-foreground shadow-sm hover:-translate-y-1 transition-transform",
    iconClass: "text-accent",
  },
  {
    title: "Residential Care",
    description: "Safe stay + study environment for outstation students. Dedicated supervision.",
    href: "/residential-hostel",
    icon: Home,
    // soft 8px radius, Forest Green left stripe, earthier feel
    className: "border border-border/50 rounded-lg border-l-[6px] border-l-secondary bg-[#F5F8F6] text-card-foreground shadow-md hover:-translate-y-1 transition-transform",
    iconClass: "text-secondary",
  },
  {
    title: "School Staffing",
    description: "Guest & regular faculty supply (PRT/TGT/PGT) for schools. Leave covers & experts.",
    href: "/school-staffing",
    icon: Users,
    // clean, minimal — almost form-like, institutional
    className: "border border-border/80 bg-white rounded-sm shadow-sm hover:-translate-y-1 transition-transform",
    iconClass: "text-muted-foreground",
  },
];

export function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Use gsap.context directly (synchronous) so it cleans up perfectly in React Strict Mode
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      className="py-24 bg-background relative overflow-hidden"
    >
      <Container>
        <div className="mb-10 md:mb-16 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Comprehensive Education, <br />
            <span className="text-accent">Tailored to Every Need.</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Whether your child learns best in a classroom, at home, or needs a focused residential environment, we provide verified experts and structured care.
          </p>
        </div>

        {/* Mobile: horizontal scroll snap | Desktop: 4-col grid */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          {/* Mobile scrollable track */}
          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 sm:overflow-x-visible"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`group flex flex-col p-6 md:p-8 snap-start shrink-0 w-[78vw] sm:w-auto h-full ${pillar.className}`}
                >
                  <div className="mb-5 w-11 h-11 flex items-center justify-center bg-background/50 border border-border/50">
                    <Icon className={`w-5 h-5 ${pillar.iconClass}`} />
                  </div>
                  
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                    {pillar.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-primary/80 group-hover:text-accent transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Mobile scroll hint dots */}
          <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
            {PILLARS.map((p) => (
              <div key={p.title} className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
