import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | C.B. Jha Tutorials — Patna's Trusted Education Partner",
  description: "Learn about founder Chandra Bhusan Jha, our 15+ year legacy of academic excellence in Patna, Bihar, and our mission to make quality education accessible.",
};

const MILESTONES = [
  { year: "2009", event: "C.B. Jha Tutorials founded by Chandra Bhusan Jha with a small batch of 12 students." },
  { year: "2012", event: "Expanded to include Home Tuition service — first tutor network launched in Patna." },
  { year: "2015", event: "School Staffing division launched, partnering with 10+ schools across Bihar." },
  { year: "2018", event: "Residential Hostel facility opened for outstation students." },
  { year: "2022", event: "Network crosses 200+ verified tutors and 5,000 students guided." },
  { year: "2024", event: "10,000+ students served. Recognized as one of Patna's most trusted educational institutions." },
];

const PHILOSOPHY = [
  {
    title: "Excellence",
    body: "We don't settle for average. Our teaching methodologies are continuously refined to meet the highest academic standards — not just to pass, but to truly understand.",
  },
  {
    title: "Integrity",
    body: "Honest feedback, transparent progress tracking, and ethical counseling form the core of our relationships with parents and schools alike.",
  },
  {
    title: "Dedication",
    body: "Our teachers go above and beyond — extra doubt classes, personal mentoring, follow-up calls to parents. This level of care is non-negotiable.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <Container className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Our Story</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            15 Years of Guiding<br />
            <span className="text-accent">Bihar&apos;s Students.</span>
          </h1>
          <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-2xl">
            Founded by Chandra Bhusan Jha — a mission-driven educator who believed that quality guidance shouldn't be limited to those who can afford premium coaching.
          </p>
        </Container>
      </section>

      {/* Founder Section — Editorial Magazine Layout */}
      <Container className="mt-20 lg:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] bg-[#22262B] overflow-hidden border border-border">
              <Image 
                src="/images/founder.jpeg" 
                alt="Chandra Bhushan Jha - Founder" 
                fill 
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              {/* Duotone accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent z-10" />
            </div>

            {/* Pullquote */}
            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-heading text-xl font-bold text-primary leading-snug italic">
                &ldquo;Every student who walks through our door deserves a teacher who believes in them.&rdquo;
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">
                — Chandra Bhusan Jha, Founder
              </footer>
            </blockquote>
          </div>

          {/* Story text */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">A Legacy of Trust</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                What started in 2009 as a small batch of passionate students has grown into one of Patna&apos;s most trusted educational institutions. For over 15 years, C.B. Jha Tutorials has been synonymous with dedication, discipline, and outstanding results.
              </p>
              <p>
                Chandra Bhusan Jha began with a simple conviction: that the right teacher at the right time can change the trajectory of a child&apos;s life. That conviction has guided every hiring decision, every tutor verification, and every parent conversation since day one.
              </p>
              <p>
                Today, the institution serves students across all four pillars — Academic Coaching, Home Tuition, Residential Care, and School Staffing — with the same personal touch that defined its founding.
              </p>
              <p>
                Our success is measured entirely by the success of our students. When a student scores 95% in boards, when a school finds a reliable guest teacher on short notice, when a parent from outside Patna trusts us with their child&apos;s residential care — that&apos;s the metric we care about.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 h-12 px-8 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>

      {/* Timeline */}
      <section className="bg-[#22262B] py-20 mt-20 lg:mt-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#FAFAF7 1px, transparent 1px), linear-gradient(90deg, #FAFAF7 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <Container className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Our Journey</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-white mb-12">
            15 Years. <span className="text-accent">Milestone by Milestone.</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden md:block" />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-8 items-start md:ml-6">
                  <div className="shrink-0 hidden md:flex flex-col items-center -ml-6">
                    <div className="w-3.5 h-3.5 rounded-full bg-accent border-2 border-[#22262B] relative z-10" />
                  </div>
                  <div>
                    <span className="inline-block mb-1 font-heading text-sm font-bold text-accent tracking-wider">{m.year}</span>
                    <p className="text-white/70 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <Container className="mt-20 lg:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Our Philosophy</span>
            <div className="h-px w-10 bg-accent/60" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary">What We Stand For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY.map((p, i) => (
            <div key={i} className="p-8 border border-border hover:border-accent/40 transition-colors bg-card">
              <div className="w-10 h-10 bg-primary/8 flex items-center justify-center mb-5">
                <span className="font-heading font-bold text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
