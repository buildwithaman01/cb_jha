import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { Star, Trophy, Award, TrendingUp, CheckCircle2, UserCheck, ShieldCheck, Quote, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Results & Success Stories | C.B. Jha Tutorials Patna",
  description: "Read real academic transformations, board exam achievements, and verified parent reviews from students across Patna coached by C.B. Jha Tutorials.",
  openGraph: {
    title: "Success Stories & Board Results | C.B. Jha Tutorials",
    description: "Real score improvements, CBSE/ICSE/BSEB board results, and parent feedback across Patna.",
    url: "https://www.cbjhatutorials.in/success-stories",
  },
};

const CASE_STUDIES = [
  {
    student: "Aarav K.",
    classBoard: "Class 10 · CBSE",
    school: "St. Karen's Secondary School, Bailey Road",
    initialScore: "68% in Pre-Boards",
    finalScore: "94.2% in CBSE Boards",
    subjectFocus: "Mathematics & Science",
    locality: "Rupaspur / Bailey Road",
    quote: "I used to panic during 3-hour maths papers. My home tutor from C.B. Jha Tutorials analyzed my past test mistakes, made me solve 10 full-length sample papers under timed conditions, and restored my confidence.",
  },
  {
    student: "Priya S.",
    classBoard: "Class 12 (Science) · CBSE",
    school: "DAV Public School, BSEB Colony",
    initialScore: "54/100 in Term 1 Physics",
    finalScore: "93/100 in Board Physics",
    subjectFocus: "Physics & Physical Chemistry",
    locality: "Boring Road",
    quote: "Physics derivations always seemed impossible to remember until Chandra Bhushan Jha Sir guided me on conceptual visualization. His line-by-line derivation practice completely changed my score.",
  },
  {
    student: "Rohan M.",
    classBoard: "Class 10 · ICSE",
    school: "St. Michael's High School, Digha",
    initialScore: "74% in Mid-Terms",
    finalScore: "95.6% in ICSE Boards",
    subjectFocus: "Physics, Chemistry & English Literature",
    locality: "Patliputra Colony",
    quote: "ICSE demands detailed analytical answers. Our home tutor had deep experience with the Selina textbooks and helped me write crisp, examiner-focused points in Chemistry and Biology.",
  },
  {
    student: "Sneha R.",
    classBoard: "Class 10 · Bihar State Board (BSEB)",
    school: "Rajendra Nagar High School",
    initialScore: "First Division Target",
    finalScore: "462/500 (92.4% - Distinction)",
    subjectFocus: "Science & Sanskrit",
    locality: "Kankarbagh",
    quote: "The objective question drills and structured Hindi/Sanskrit grammar sessions made the biggest difference in my aggregate marks. Extremely grateful to the C.B. Jha team.",
  },
];

const TUTOR_SPOTLIGHTS = [
  {
    name: "Rameshwar P. Singh",
    qualification: "M.Sc Mathematics · B.Ed",
    experience: "14+ Years Teaching",
    specialization: "Class 9–12 Mathematics (Calculus & Coordinate Geometry)",
    verifiedBadge: "Senior Master Tutor",
  },
  {
    name: "Anjali Kumari",
    qualification: "M.Sc Chemistry (PU) · B.Ed",
    experience: "9+ Years Teaching",
    specialization: "Class 8–10 Science & Class 11–12 Organic Chemistry",
    verifiedBadge: "Gold Medalist Educator",
  },
  {
    name: "Vivek Anand",
    qualification: "B.Tech · M.Sc Physics",
    experience: "11+ Years Teaching",
    specialization: "Secondary Science, Mechanics & Electricity",
    verifiedBadge: "Board Paper Specialist",
  },
  {
    name: "Sunita Verma",
    qualification: "M.A. English · B.Ed",
    experience: "12+ Years Teaching",
    specialization: "Primary Foundation & ICSE English Grammar/Literature",
    verifiedBadge: "Early Learning Expert",
  },
];

const PARENT_REVIEWS = [
  {
    parent: "Dr. Alok Srivastava",
    locality: "Saguna More, Patna",
    studentDetail: "Parent of Class 9 CBSE Student",
    review: "Finding a punctual, disciplined tutor who treats teaching as a profession rather than a hobby is rare in Patna. C.B. Jha Tutorials matched a teacher who hasn't missed a single scheduled class in 8 months.",
  },
  {
    parent: "Sunil Sharma",
    locality: "Kankarbagh, Patna",
    studentDetail: "Parent of Class 10 BSEB Student",
    review: "The weekly test system is exceptional. I receive a clear breakdown of where my daughter lost marks and what will be revised in the next week. Her board preparation was completely stress-free.",
  },
  {
    parent: "Meera Choudhary",
    locality: "Ashiana Nagar, Patna",
    studentDetail: "Parent of Class 7 & Class 11 Students",
    review: "We have two children with completely different learning needs. C.B. Jha Tutorials provided a patient lady teacher for our younger son and a specialized Physics tutor for our daughter. Both are thriving.",
  },
];

export default function SuccessStoriesPage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "C.B. Jha Tutorials",
    "url": "https://www.cbjhatutorials.in/success-stories",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": PARENT_REVIEWS.map((rev) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.parent,
      },
      "reviewBody": rev.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
      },
    })),
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
        "name": "Success Stories",
        "item": "https://www.cbjhatutorials.in/success-stories",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="bg-background min-h-screen pb-24">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-accent/60" />
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Results &amp; Impact</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Proven Academic Success <br />
                <span className="text-accent">Across All of Patna.</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Behind every top board score is a student who believed in themselves and a teacher who refused to let them settle for average. Here are real stories of transformation.
              </p>
            </div>
          </Container>
        </section>

        {/* Realistic Metrics Banner */}
        <div className="bg-[#22262B] py-8 border-b border-accent/20">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent block">40+</span>
                <span className="text-xs text-white/70 uppercase tracking-wider">Years Teaching Legacy</span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent block">5,000+</span>
                <span className="text-xs text-white/70 uppercase tracking-wider">Students Guided in Patna</span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent block">200+</span>
                <span className="text-xs text-white/70 uppercase tracking-wider">Verified Educators</span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent block">94.8%</span>
                <span className="text-xs text-white/70 uppercase tracking-wider">Parent Satisfaction Rate</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Student Case Studies */}
        <Container className="mt-16 lg:mt-24">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">Student Turnarounds</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
              From Pre-Board Struggles to Board Rankers
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Real results achieved through personalized 1-on-1 pacing, customized test series, and constant doubt clearing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <div
                key={idx}
                className="bg-card border border-border p-7 relative hover:border-accent/60 transition-all hover:-translate-y-1 shadow-xs"
              >
                <div className="flex items-start justify-between gap-4 mb-4 border-b border-border/60 pb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{study.student}</h3>
                    <p className="text-xs text-accent font-semibold">{study.classBoard}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{study.school}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Final Board Result</span>
                    <span className="font-heading text-lg font-bold text-secondary">{study.finalScore}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 bg-muted/40 border border-border/60 text-xs mb-5">
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Before Tuition:</span>
                    <strong className="text-foreground">{study.initialScore}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Subject Focus:</span>
                    <strong className="text-foreground">{study.subjectFocus}</strong>
                  </div>
                </div>

                <blockquote className="text-xs text-muted-foreground italic leading-relaxed pl-3 border-l-2 border-accent">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </Container>

        {/* Tutor Spotlight Section */}
        <section className="bg-primary/[0.02] py-20 mt-20 border-y border-border">
          <Container>
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">Faculty Spotlight</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
                Meet the Educators Behind the Results
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our tutors are not college students passing time. They are experienced subject specialists with postgraduate degrees, B.Ed training, and proven board success records.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TUTOR_SPOTLIGHTS.map((tutor) => (
                <div key={tutor.name} className="p-6 bg-card border border-border shadow-xs hover:border-accent transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-bold text-primary text-base mb-4">
                    {tutor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-wider mb-2">
                    {tutor.verifiedBadge}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-1">{tutor.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{tutor.qualification}</p>
                  <p className="text-xs font-semibold text-primary mb-3">{tutor.experience}</p>
                  <p className="text-xs text-foreground/80 leading-relaxed border-t border-border/60 pt-3">
                    {tutor.specialization}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Parent Reviews */}
        <Container className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-1 text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent" />
              ))}
            </div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">
              What Patna Parents Say
            </h2>
            <p className="text-muted-foreground text-sm">
              Direct feedback from families in Rupaspur, Boring Road, Kankarbagh, and across Patna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARENT_REVIEWS.map((rev, i) => (
              <div key={i} className="p-7 bg-card border border-border flex flex-col justify-between shadow-xs">
                <div>
                  <Quote className="w-6 h-6 text-accent/50 mb-3" />
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic mb-6">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>
                <div className="border-t border-border/60 pt-4">
                  <h3 className="font-heading font-bold text-sm text-foreground">{rev.parent}</h3>
                  <p className="text-xs text-accent font-medium">{rev.locality}</p>
                  <p className="text-[11px] text-muted-foreground">{rev.studentDetail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion CTA */}
          <div className="mt-20 p-8 sm:p-12 bg-primary text-primary-foreground border-l-4 border-accent">
            <div className="max-w-2xl">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Give Your Child The Same Advantage
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">
                Book a Free 1-Hour Diagnostic Demo Class
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                Let a verified tutor assess your child&apos;s current syllabus grasp, identify concept blindspots, and design a customized study blueprint for upcoming exams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/home-tuition"
                  className="inline-flex h-12 items-center justify-center bg-accent text-[#22262B] px-8 text-sm font-heading font-semibold hover:bg-accent/90 transition-colors"
                >
                  Request Home Tutor Now
                </Link>
                <a
                  href="tel:+919470808655"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-heading font-medium hover:bg-white/10 transition-colors text-white"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Call +91 94708 08655
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

