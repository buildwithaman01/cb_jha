import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Founder Chandra Bhushan Jha | C.B. Jha Tutorials Patna",
  description: "Founded by Chandra Bhushan Jha (M.Sc Physics, B.Ed). 40+ years of teaching excellence since 1984. Former Principal, Vice Principal & Physics mentor in Patna.",
};

const CREDENTIALS = [
  {
    icon: GraduationCap,
    label: "Academic Qualifications",
    detail: "M.Sc in Physics (Lalit Narayan Mishra College, Darbhanga) · B.Ed (IGNOU)",
  },
  {
    icon: Clock,
    label: "Teaching Experience",
    detail: "Teaching Physics & Secondary/Higher Secondary students since 1984 (40+ Years)",
  },
  {
    icon: Award,
    label: "Institutional Leadership",
    detail: "Former Principal, Vice Principal, Academic Coordinator & Mentor in branded institutions in Patna",
  },
  {
    icon: BookOpen,
    label: "Subjects & Specialization",
    detail: "Senior Secondary Physics, Board Exam Mentorship, Concept-first Science & Mathematics",
  },
];

const MILESTONES = [
  {
    year: "1984",
    event: "Chandra Bhushan Jha begins his dedicated teaching career, mentoring secondary and higher secondary Physics students in Patna.",
  },
  {
    year: "1990s–2000s",
    event: "Served in key educational leadership roles — as Principal, Vice Principal, and Academic Coordinator across prominent Patna schools.",
  },
  {
    year: "2009",
    event: "Founded C.B. Jha Tutorials in Patna to make systematic, high-touch academic mentoring accessible to every student.",
  },
  {
    year: "2012",
    event: "Launched the Verified Home Tuition division to connect Patna families with screened, dependable subject tutors at home.",
  },
  {
    year: "2015",
    event: "Established the School Staffing unit, supplying PRT, TGT, and PGT teachers to partner schools across Bihar.",
  },
  {
    year: "2018",
    event: "Opened Residential Care facility for outstation students seeking focused, disciplined board exam preparation in Patna.",
  },
  {
    year: "Present",
    event: "Over 40 years of continuous teaching legacy, 5,000+ students guided, 200+ verified tutors, and 30+ school partnerships.",
  },
];

const PHILOSOPHY = [
  {
    title: "Excellence in Concept",
    body: "We reject rote memorization. Our teaching methodology is rooted in fundamental clarity so students build intuitive grasp and genuine exam confidence.",
  },
  {
    title: "Uncompromising Integrity",
    body: "Every tutor is personally screened. Transparent parent updates, honest feedback, and ethical academic counseling form our bedrock.",
  },
  {
    title: "Total Accountability",
    body: "From doubt clearing and continuous evaluation to warden-supervised study hours in our hostel, we take full responsibility for each student's progress.",
  },
];

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chandra Bhushan Jha",
    "jobTitle": "Founder & Senior Physics Educator",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "C.B. Jha Tutorials",
      "url": "https://www.cbjhatutorials.in",
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Lalit Narayan Mishra College, Darbhanga",
      },
      {
        "@type": "EducationalOrganization",
        "name": "Indira Gandhi National Open University (IGNOU)",
      },
    ],
    "description": "Eminent Physics teacher and educational leader in Patna since 1984. Former Principal, Vice Principal, and founder of C.B. Jha Tutorials.",
    "knowsAbout": [
      "Physics Education",
      "CBSE Board Preparation",
      "ICSE Board Preparation",
      "Bihar State Board",
      "Academic Leadership",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cbjhatutorials.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.cbjhatutorials.in/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

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
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Our Story &amp; Leadership</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              40+ Years of Academic<br />
              <span className="text-accent">Excellence in Patna.</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-2xl">
              Founded by Chandra Bhushan Jha — veteran Physics educator, former Principal, and mentor to generations of students across Bihar since 1984.
            </p>
          </Container>
        </section>

        {/* Founder Section — Editorial Magazine Layout */}
        <Container className="mt-20 lg:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Portrait & Credentials */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] bg-[#22262B] overflow-hidden border border-border shadow-md">
                <Image 
                  src="/images/founder.jpeg" 
                  alt="Chandra Bhushan Jha - Founder & Senior Physics Educator" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent z-10" />
              </div>

              {/* Founder Tag & Qualifications Badge */}
              <div className="mt-6 p-5 bg-card border border-border space-y-3">
                <div className="border-b border-border/60 pb-3">
                  <h3 className="font-heading text-lg font-bold text-primary">Chandra Bhushan Jha</h3>
                  <p className="text-xs text-accent font-semibold tracking-wide uppercase">Founder &amp; Director</p>
                </div>
                <div className="space-y-2.5 text-xs text-foreground/80">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>M.Sc (Physics)</strong> — Lalit Narayan Mishra College, Darbhanga</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>B.Ed</strong> — IGNOU</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>40+ Years Teaching</strong> — Guiding Physics students since 1984</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Former Principal &amp; VP</strong> — Premier institutions across Patna</span>
                  </div>
                </div>
              </div>

              {/* Pullquote */}
              <blockquote className="mt-6 border-l-4 border-accent pl-6">
                <p className="font-heading text-lg font-bold text-primary leading-snug italic">
                  &ldquo;Every student who walks through our door deserves a teacher who believes in their potential and teaches with genuine responsibility.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-muted-foreground">
                  — Chandra Bhushan Jha
                </footer>
              </blockquote>
            </div>

            {/* Story text & Detailed Bio */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">The Founder&apos;s Journey</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                A Lifetime Dedicated to Teaching
              </h2>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Chandra Bhushan Jha has been at the forefront of quality science education in Patna for over four decades. After completing his Master of Science (M.Sc) in Physics from Lalit Narayan Mishra College, Darbhanga and obtaining his Bachelor of Education (B.Ed) from IGNOU, he chose education not just as a career, but as his life&apos;s calling.
                </p>
                <p>
                  Since 1984, he has taught Physics to thousands of secondary and higher secondary students. Over the years, he has served in distinguished academic leadership roles — as Principal, Vice Principal, Academic Coordinator, and Mentor in several of Patna&apos;s most respected educational institutions.
                </p>
                <p>
                  In 2009, driven by the conviction that personalized guidance and disciplined learning should be accessible to all students, he established <strong className="text-foreground">C.B. Jha Tutorials</strong>. What started with dedicated small-batch classroom teaching quickly expanded into Patna&apos;s most dependable educational ecosystem.
                </p>
                <p>
                  Today, under his active personal supervision, C.B. Jha Tutorials delivers high-impact learning across four integrated pillars:
                </p>
              </div>

              {/* Four pillars mini list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-8">
                <div className="p-4 bg-muted/40 border border-border">
                  <p className="font-heading font-bold text-sm text-primary mb-1">Academic Coaching (6–10)</p>
                  <p className="text-xs text-muted-foreground">Focused classroom batches in Dhanaut &amp; Rupaspur, building rigorous fundamentals for board success.</p>
                </div>
                <div className="p-4 bg-muted/40 border border-border">
                  <p className="font-heading font-bold text-sm text-primary mb-1">Home &amp; Online Tuition (Nursery–12)</p>
                  <p className="text-xs text-muted-foreground">Over 200 background-verified home and online tutors serving all 40+ key localities across Patna.</p>
                </div>
                <div className="p-4 bg-muted/40 border border-border">
                  <p className="font-heading font-bold text-sm text-primary mb-1">Residential Hostel</p>
                  <p className="text-xs text-muted-foreground">Safe stay with structured study hours and round-the-clock care for outstation students.</p>
                </div>
                <div className="p-4 bg-muted/40 border border-border">
                  <p className="font-heading font-bold text-sm text-primary mb-1">School Staffing</p>
                  <p className="text-xs text-muted-foreground">Trusted PRT, TGT, and PGT faculty provider partnering with over 30 leading schools in Bihar.</p>
                </div>
              </div>

              {/* Key Credentials Grid */}
              <div className="mt-8 border-t border-border pt-8">
                <h3 className="font-heading text-lg font-bold text-primary mb-4">Credentials &amp; Specializations</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CREDENTIALS.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="p-4 border border-border bg-card">
                        <div className="flex items-center gap-2.5 mb-2">
                          <Icon className="w-4 h-4 text-accent" />
                          <p className="font-heading font-semibold text-xs text-foreground uppercase tracking-wider">{c.label}</p>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{c.detail}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-12 px-8 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact Our Team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/919470808655?text=Hello%20Chandra%20Bhushan%20Jha%20Sir%2C%20I%20would%20like%20to%20consult%20regarding%20my%20child%27s%20education"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 border border-accent/40 bg-accent/5 text-primary font-heading font-semibold text-sm hover:bg-accent/10 transition-colors"
                >
                  Connect with Founder
                </a>
              </div>
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
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Milestones &amp; History</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-white mb-12">
              A 40-Year Heritage. <span className="text-accent">Milestone by Milestone.</span>
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
                      <p className="text-white/70 leading-relaxed text-sm md:text-base">{m.event}</p>
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
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Educational Philosophy</span>
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

          {/* Digital Partner Section */}
          <div className="mt-16 md:mt-20 bg-primary/[0.03] border border-accent/20 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
                Technology &amp; Digital Partner
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2">
                Built with Pride by Pehchanly Digital Solution
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This digital learning portal, web architecture, and search visibility are designed, engineered, and powered by{' '}
                <a
                  href="https://pehchanly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline underline-offset-4 hover:text-accent transition-colors"
                >
                  Pehchanly Digital Solution
                </a>
                .
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://pehchanly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-primary text-primary-foreground font-heading font-semibold text-xs tracking-wider uppercase hover:bg-primary/90 transition-all rounded-xs shadow-xs"
              >
                Visit Pehchanly
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
