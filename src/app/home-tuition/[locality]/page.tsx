import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShieldCheck, MapPin, CheckCircle2, Phone, Star, Clock, BookOpen, UserCheck, ArrowRight } from "lucide-react";

interface LocalityData {
  slug: string;
  name: string;
  pincode: string;
  distanceFromCampus: string;
  landmark: string;
  nearbySchools: string[];
  intro: string;
  popularSubjects: string[];
}

const LOCALITIES: Record<string, LocalityData> = {
  "rupaspur-patna": {
    slug: "rupaspur-patna",
    name: "Rupaspur",
    pincode: "801506",
    distanceFromCampus: "Under 1 km (Immediate Dispatch)",
    landmark: "Near Mahuabag, Premlata Kunj & Bailey Road Flyover",
    nearbySchools: ["DAV Public School", "St. Karen's High School", "DPS Patna", "Loyola High School"],
    intro: "Located in the immediate vicinity of our Dhanaut campus, Rupaspur enjoys the fastest tutor dispatch and direct academic oversight by founder Chandra Bhushan Jha. Whether your child attends nearby schools along Bailey Road or prepares for board exams, we provide vetted home tutors at your doorstep.",
    popularSubjects: ["Class 10 CBSE Maths & Science", "Class 12 Physics & Chemistry", "Class 6–8 Foundation", "Primary All-Subject Tutors"],
  },
  "danapur-patna": {
    slug: "danapur-patna",
    name: "Danapur",
    pincode: "801503",
    distanceFromCampus: "2–4 km",
    landmark: "Danapur Cantt, Saguna More & Danapur Station Road",
    nearbySchools: ["Army Public School Danapur", "Kendriya Vidyalaya Danapur", "St. Dominic Savio's", "DAV Khagaul"],
    intro: "Danapur's diverse student community — from defense personnel families in the Cantt to residential residents near Saguna More — counts on C.B. Jha Tutorials for structured, disciplined home tutoring. Our educators bring rigorous syllabus coverage and regular mock test evaluation directly to your residence.",
    popularSubjects: ["CBSE Board Preparation", "Science & Mathematics (Class 9–10)", "Senior Secondary Physics", "Class 1–5 Basic Concepts"],
  },
  "bailey-road-patna": {
    slug: "bailey-road-patna",
    name: "Bailey Road",
    pincode: "801503 / 800014",
    distanceFromCampus: "1–3 km",
    landmark: "RPS More, Gola Road, Saguna More to Jagdeo Path corridor",
    nearbySchools: ["St. Karen's Secondary School", "Delhi Public School", "G.D. Goenka", "RPS Residential School"],
    intro: "Bailey Road is Patna's fastest growing residential corridor. With dozens of major apartment complexes and premier CBSE schools nearby, parents along Bailey Road trust our 40-year legacy for punctual, verified tutors who deliver consistent academic improvement.",
    popularSubjects: ["CBSE Class 9 & 10 Mathematics", "Class 11–12 Physics & Chemistry", "ICSE Science & English", "Class 1–8 Foundation"],
  },
  "boring-road-patna": {
    slug: "boring-road-patna",
    name: "Boring Road",
    pincode: "800001",
    distanceFromCampus: "6–7 km",
    landmark: "Boring Canal Road, Crossing, Anandpuri & Nageshwar Colony",
    nearbySchools: ["St. Michael's High School", "Loyola High School", "Notre Dame Academy", "Mount Carmel"],
    intro: "As Patna's traditional education capital, Boring Road demands the highest standard of academic excellence. Our verified home tutors help convent and premier school students gain an edge without the hassle of traveling through congested evening traffic.",
    popularSubjects: ["ICSE & CBSE Board Mastery", "Senior Secondary Physics & Maths", "Chemistry & Biology", "English Grammar & Writing"],
  },
  "kankarbagh-patna": {
    slug: "kankarbagh-patna",
    name: "Kankarbagh",
    pincode: "800020",
    distanceFromCampus: "9–11 km",
    landmark: "Hanuman Nagar, PC Colony, Malahi Pakri, Doctors Colony & Tempo Stand",
    nearbySchools: ["Kendriya Vidyalaya Kankarbagh", "St. Severin's", "DAV BSEB Colony", "Patna Central School"],
    intro: "Kankarbagh is Asia's largest residential colony with thousands of school-going students. Our network of over 50 verified tutors stationed across South Patna ensures that parents in Kankarbagh receive reliable, subject-specialist educators tailored to their child's board and pace.",
    popularSubjects: ["Class 6–10 All Subjects", "CBSE Board Science & Maths", "Class 11–12 Commerce & Science", "Bihar State Board (BSEB) Specialization"],
  },
  "patliputra-patna": {
    slug: "patliputra-patna",
    name: "Patliputra Colony",
    pincode: "800013",
    distanceFromCampus: "5–6 km",
    landmark: "Patliputra Roundabout, Alpana Market & Polytechnic",
    nearbySchools: ["St. Michael's High School", "Loyola High School", "Don Bosco Academy", "Hartmann Girls' High School"],
    intro: "Home to many of Patna's most discerning families, Patliputra Colony requires teachers with strong conceptual clarity, English fluency, and refined pedagogical skills. Our handpicked tutors provide focused 1-on-1 tutoring matched to top CISCE and CBSE curricula.",
    popularSubjects: ["ICSE English & Mathematics", "CBSE Science Streams", "Primary Foundation (Nursery to Class 5)", "Economics & Accountancy"],
  },
  "ashiana-nagar-patna": {
    slug: "ashiana-nagar-patna",
    name: "Ashiana Nagar",
    pincode: "800025",
    distanceFromCampus: "3–4 km",
    landmark: "Ashiana More, Phase 1 & 2, Ashiana-Digha Road & Passport Office",
    nearbySchools: ["St. Karen's Collegiate School", "Radiant International", "St. Michael's", "DAV Khagaul"],
    intro: "Ashiana Nagar is a prominent residential hub connecting Bailey Road and Digha. Families here trust C.B. Jha Tutorials for punctual home tutors who align directly with school homework, upcoming unit tests, and board exam blueprints.",
    popularSubjects: ["Class 8–10 Maths & Science", "Class 11–12 Science Stream", "Hindi & Sanskrit", "Primary School Care"],
  },
  "rajendra-nagar-patna": {
    slug: "rajendra-nagar-patna",
    name: "Rajendra Nagar",
    pincode: "800016",
    distanceFromCampus: "10–12 km",
    landmark: "Moin-ul-Haq Stadium, Rajendra Nagar Terminal & Bazar Samiti",
    nearbySchools: ["St. Paul's High School", "Don Bosco Academy", "BSEB Patna High School", "Rose Bud School"],
    intro: "With its storied educational heritage, Rajendra Nagar remains a focal point for serious academic preparation. Our verified home tutors in Rajendra Nagar work with both CBSE and Bihar Board students to reinforce fundamentals, solve past year papers, and secure top grades.",
    popularSubjects: ["BSEB & CBSE Class 10 Boards", "Class 12 Physics, Chemistry & Maths", "Class 6–8 Science & Social Studies", "Junior Level All Subjects"],
  },
};

export function generateStaticParams() {
  return Object.keys(LOCALITIES).map((slug) => ({
    locality: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string }>;
}): Promise<Metadata> {
  const { locality } = await params;
  const data = LOCALITIES[locality];

  if (!data) {
    return {
      title: "Home Tutors in Patna | C.B. Jha Tutorials",
      description: "Verified home tutors in Patna.",
    };
  }

  return {
    title: `Home Tutors in ${data.name}, Patna (Nursery–12) | C.B. Jha`,
    description: `Verified home tutors in ${data.name}, Patna for CBSE, ICSE & Bihar Board. 200+ screened tutors for Nursery to Class 12. Book a free demo class today.`,
    openGraph: {
      title: `Home Tutors in ${data.name}, Patna | C.B. Jha Tutorials`,
      description: `Verified doorstep tutors in ${data.name}, Patna for Nursery to Class 12. 40+ years teaching legacy. Free trial class available.`,
      url: `https://www.cbjhatutorials.in/home-tuition/${data.slug}`,
    },
  };
}

export default async function LocalityPage({
  params,
}: {
  params: Promise<{ locality: string }>;
}) {
  const { locality } = await params;
  const data = LOCALITIES[locality];

  if (!data) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": `C.B. Jha Tutorials - Home Tutors in ${data.name}, Patna`,
    "url": `https://www.cbjhatutorials.in/home-tuition/${data.slug}`,
    "telephone": "+919470808655",
    "email": "contact.cbjha@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Chandra Bhushan Jha",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${data.name}, Patna, Bihar`,
    },
    "description": `Verified home tutors and online tuition in ${data.name}, Patna for Nursery to Class 12. CBSE, ICSE, and Bihar Board.`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How quickly can a home tutor start in ${data.name}, Patna?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Once you submit your requirements, we match an educator within 24 hours and arrange a free demo class at your home in ${data.name}. Regular classes start immediately after your approval.`,
        },
      },
      {
        "@type": "Question",
        "name": `Are female tutors available for home tuition in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we have verified female and male tutors available across ${data.name} for primary, middle, and senior secondary students.`,
        },
      },
      {
        "@type": "Question",
        "name": `Which classes and boards do your tutors cover in ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We cover Nursery to Class 12 for CBSE, ICSE, and Bihar State Board across Mathematics, Science, English, Hindi, Social Science, Physics, Chemistry, Biology, Accountancy, and Economics.`,
        },
      },
      {
        "@type": "Question",
        "name": `What is the tutor verification process?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Every tutor undergoes government ID verification, residential verification, academic degree evaluation, and a personal interview with founder Chandra Bhushan Jha before being assigned to your child.`,
        },
      },
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
        "name": "Home Tuition",
        "item": "https://www.cbjhatutorials.in/home-tuition",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Service Areas",
        "item": "https://www.cbjhatutorials.in/home-tuition/service-areas",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": data.name,
        "item": `https://www.cbjhatutorials.in/home-tuition/${data.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="bg-background min-h-screen pb-24">
        {/* Breadcrumbs */}
        <div className="bg-[#1C2025] py-3 text-xs border-b border-white/10">
          <Container>
            <div className="flex items-center gap-2 text-white/60">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/home-tuition" className="hover:text-accent transition-colors">Home Tuition</Link>
              <span>/</span>
              <Link href="/home-tuition/service-areas" className="hover:text-accent transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-accent font-medium">{data.name}</span>
            </div>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                  {data.name}, Patna (Pincode {data.pincode})
                </span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Verified Home Tutors in <br />
                <span className="text-accent">{data.name}, Patna</span>
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed mb-8">
                {data.intro}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/home-tuition"
                  className="inline-flex h-12 items-center justify-center bg-accent text-[#22262B] px-8 text-sm font-heading font-semibold hover:bg-accent/90 transition-all hover:-translate-y-0.5"
                >
                  Book Free Demo Class
                </Link>
                <a
                  href={`https://wa.me/919470808655?text=Hello%2C%20I%20am%20looking%20for%20a%20home%20tutor%20in%20${encodeURIComponent(data.name)}%2C%20Patna.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-heading font-medium hover:bg-white/10 transition-colors text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Quick Facts Bar */}
        <div className="bg-[#22262B] py-5 border-b border-accent/20">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-white/80">
              <div>
                <span className="text-accent font-semibold block">Dispatch Time:</span>
                <span>{data.distanceFromCampus}</span>
              </div>
              <div>
                <span className="text-accent font-semibold block">Key Landmark:</span>
                <span className="truncate block">{data.landmark}</span>
              </div>
              <div>
                <span className="text-accent font-semibold block">Classes Covered:</span>
                <span>Nursery to Class 12</span>
              </div>
              <div>
                <span className="text-accent font-semibold block">Trial Class:</span>
                <span>100% Free Demo at Home</span>
              </div>
            </div>
          </Container>
        </div>

        <Container className="mt-14 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Why Parents in this locality choose us */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-5">
                  Why Families in {data.name} Choose C.B. Jha Tutorials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 border border-border bg-card">
                    <ShieldCheck className="w-6 h-6 text-accent mb-2" />
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">
                      Personally Verified Tutors
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Every tutor dispatched to {data.name} undergoes Aadhaar verification, address check, and a direct interview with founder Chandra Bhushan Jha.
                    </p>
                  </div>
                  <div className="p-5 border border-border bg-card">
                    <UserCheck className="w-6 h-6 text-accent mb-2" />
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">
                      1-on-1 Personalized Attention
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      No rushing through chapters. Tutors pace their teaching strictly to your child&apos;s grasping power and school test schedules.
                    </p>
                  </div>
                  <div className="p-5 border border-border bg-card">
                    <Clock className="w-6 h-6 text-accent mb-2" />
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">
                      Flexible Timings at Home
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Morning or evening sessions, 3 to 6 days a week. We adapt to your household&apos;s routine and extra-curricular commitments.
                    </p>
                  </div>
                  <div className="p-5 border border-border bg-card">
                    <BookOpen className="w-6 h-6 text-accent mb-2" />
                    <h3 className="font-heading font-bold text-base text-foreground mb-1">
                      Regular Progress Reports
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Monthly feedback reports and weekly test tracking ensure you see tangible improvement in school unit tests and term exams.
                    </p>
                  </div>
                </div>
              </div>

              {/* Schools Nearby */}
              <div className="p-6 bg-muted/30 border border-border">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Schools We Frequently Cater to Around {data.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Our tutors are thoroughly familiar with the examination patterns, project submissions, and textbook choices of these schools:
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.nearbySchools.map((school) => (
                    <span
                      key={school}
                      className="px-3 py-1.5 bg-background border border-border text-xs font-semibold text-foreground/80 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      {school}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Subjects */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  Popular Tuition Requests in {data.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.popularSubjects.map((subj) => (
                    <div key={subj} className="p-3.5 border border-border bg-card flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-xs font-medium text-foreground">{subj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Process */}
              <div className="border-t border-border pt-10">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                  How to Get a Home Tutor in {data.name} (4 Steps)
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Submit Your Requirement", desc: `Fill our online form or message us on WhatsApp with student's class, board, and address in ${data.name}.` },
                    { step: "2", title: "Tutor Profile Matching", desc: "Our academic team screens our 200+ tutor database and identifies the top 2 matched candidates." },
                    { step: "3", title: "Free Trial Demo Class", desc: "The selected tutor conducts a 1-hour free trial lesson at your home. Observe their method and communication." },
                    { step: "4", title: "Confirm Schedule & Begin", desc: "Only after your child and you are 100% satisfied, finalize the monthly schedule and fee structure." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 p-4 border border-border bg-card">
                      <span className="font-heading text-2xl font-bold text-accent shrink-0 w-8">{s.step}.</span>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-foreground mb-0.5">{s.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local FAQs */}
              <div className="border-t border-border pt-10">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  Frequently Asked Questions — {data.name}
                </h3>
                <div className="space-y-4">
                  <div className="p-5 border border-border bg-card">
                    <h4 className="font-heading font-bold text-sm text-foreground mb-2">
                      How soon can a tutor start in {data.name}, Patna?
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We usually dispatch a tutor for a free demo within 24 to 48 hours of receiving your requirement. For urgent board exam preparation, expedited matching is available.
                    </p>
                  </div>
                  <div className="p-5 border border-border bg-card">
                    <h4 className="font-heading font-bold text-sm text-foreground mb-2">
                      Are female tutors available for home tuition in {data.name}?
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Yes. We have qualified female educators available across {data.name} for pre-primary, primary, and senior secondary students upon request.
                    </p>
                  </div>
                  <div className="p-5 border border-border bg-card">
                    <h4 className="font-heading font-bold text-sm text-foreground mb-2">
                      What if we are not satisfied with the tutor?
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We offer a no-questions-asked tutor replacement guarantee. If the teaching chemistry isn&apos;t right, we will match another verified tutor at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="p-7 bg-primary text-primary-foreground border-t-4 border-accent shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-2 text-white">
                    Request Tutor in {data.name}
                  </h3>
                  <p className="text-xs text-primary-foreground/75 leading-relaxed mb-6">
                    Leave your contact details and our academic counselor will match the right tutor for your child today.
                  </p>

                  <div className="space-y-3">
                    <Link
                      href="/home-tuition"
                      className="flex items-center justify-center w-full h-12 bg-accent text-[#22262B] font-heading font-semibold text-sm hover:bg-accent/90 transition-colors"
                    >
                      Fill Online Request Form
                    </Link>
                    <a
                      href={`https://wa.me/919470808655?text=Hello%2C%20I%20am%20looking%20for%20a%20home%20tutor%20in%20${encodeURIComponent(data.name)}%2C%20Patna.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-12 bg-[#25D366] text-white font-heading font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <a
                      href="tel:+919470808655"
                      className="flex items-center justify-center gap-2 w-full h-11 border border-white/20 text-white font-heading font-medium text-xs hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      Call +91 94708 08655
                    </a>
                  </div>
                </div>

                {/* Quick Locality Navigation */}
                <div className="p-5 border border-border bg-card">
                  <h4 className="font-heading font-bold text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Other Patna Service Areas
                  </h4>
                  <div className="space-y-2">
                    {Object.values(LOCALITIES)
                      .filter((l) => l.slug !== data.slug)
                      .map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/home-tuition/${loc.slug}`}
                          className="flex items-center justify-between text-xs text-foreground/80 hover:text-accent py-1 border-b border-border/40 last:border-0"
                        >
                          <span>{loc.name}</span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        </Link>
                      ))}
                  </div>
                  <Link
                    href="/home-tuition/service-areas"
                    className="block text-center text-xs font-semibold text-primary hover:text-accent mt-4 pt-2 border-t border-border"
                  >
                    View All 40+ Localities &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

