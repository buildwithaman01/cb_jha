import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CheckCircle2, GraduationCap, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Coaching Class 6–12 | C.B. Jha Tutorials Patna",
  description: "Small-batch classroom coaching for CBSE, ICSE, and Bihar State Board. Class 6–12, all subjects. Morning and evening batches. Enroll now.",
};

const BATCHES = [
  { name: "Morning Batch", time: "6:00 AM – 9:00 AM", classes: "Class 6–10" },
  { name: "Afternoon Batch", time: "12:00 PM – 3:00 PM", classes: "Class 6–8" },
  { name: "Evening Batch", time: "4:00 PM – 7:30 PM", classes: "Class 9–12" },
];

const FEATURES = [
  { title: "Expert Faculty", body: "Subject matter experts with years of board-exam focused teaching experience.", icon: GraduationCap },
  { title: "Small Batch Size", body: "Max 15–20 students per batch ensuring personal attention and effective learning.", icon: Users },
  { title: "Comprehensive Material", body: "Updated notes, practice sheets, and regular mock tests aligned with the latest syllabus.", icon: BookOpen },
];

const PROGRAMS = [
  {
    level: "Middle School — Class 6–8",
    desc: "The transition years are crucial. We focus on building a strong core in Mathematics and Science, encouraging analytical thinking rather than rote learning.",
    subjects: ["Maths Foundation", "Science Exploration", "English Grammar & Writing", "Hindi", "Social Science"],
  },
  {
    level: "High School — Class 9–10",
    desc: "Board exam preparation starts here. Curriculum strictly aligned with the latest CBSE/ICSE/Bihar Board patterns, ensuring students are confident when it counts.",
    subjects: ["Intensive Maths & Science", "NTSE Preparation", "Regular Mock Tests", "Doubt Clearing Sessions"],
  },
  {
    level: "Senior Secondary — Class 11–12",
    desc: "Specialized coaching for Science and Commerce streams. Balancing board excellence with competitive exam foundations.",
    subjects: ["Physics, Chemistry, Maths/Bio", "Accountancy & Economics", "JEE/NEET Foundation", "Career Counseling"],
  },
];

export default function AcademicCoachingPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Academic Coaching Class 6–12",
    "description": "Comprehensive small-batch classroom coaching for CBSE, ICSE, and Bihar State Board students for all major subjects.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "C.B. Jha Tutorials",
      "sameAs": "https://cbjhatutorials.in",
    },
    "educationalLevel": "Class 6 to Class 12",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="bg-background min-h-screen pb-24">
        {/* Hero */}
        <PageHero
          eyebrow="Academic Coaching"
          headline="Classroom Coaching"
          highlight="That Actually Works."
          description="Small-batch expert coaching for Class 6–12. CBSE, ICSE, and Bihar State Board. Focused on genuine understanding — not just syllabus completion."
          tags={["CBSE", "ICSE", "Bihar State Board", "Class 6–12", "Small Batches", "Free Demo"]}
          variant="navy"
        />

        {/* Batch Timings */}
        <section className="bg-[#22262B] py-12 border-y border-accent/10">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {BATCHES.map((b) => (
                <div key={b.name} className="flex items-center gap-4 p-5 border border-white/8 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm">{b.name}</p>
                    <p className="text-accent text-xs font-medium">{b.time}</p>
                    <p className="text-white/40 text-xs">{b.classes}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Container className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left — Main content */}
            <div className="lg:col-span-8">
              {/* Programs */}
              <div className="mb-16">
                <h2 className="font-heading text-2xl font-bold text-primary mb-8">Programs Offered</h2>
                <div className="space-y-10">
                  {PROGRAMS.map((prog) => (
                    <div key={prog.level} className="border-l-4 border-l-primary pl-6">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{prog.level}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{prog.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prog.subjects.map((subj) => (
                          <li key={subj} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                            {subj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-16">
                <h2 className="font-heading text-2xl font-bold text-primary mb-8">Why Our Classrooms?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {FEATURES.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div key={f.title} className="p-6 bg-white border border-border hover:border-accent/40 transition-colors">
                        <div className="w-10 h-10 bg-primary/8 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2 text-sm">{f.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{f.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Boards & Subjects */}
              <div className="p-8 bg-primary text-primary-foreground">
                <h3 className="font-heading text-lg font-bold mb-5 text-accent">Boards & Subjects Covered</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent/70 mb-2">Boards</p>
                    <ul className="space-y-1 text-primary-foreground/70">
                      <li>• CBSE (Central Board)</li>
                      <li>• ICSE (Council)</li>
                      <li>• Bihar State Board (BSEB)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent/70 mb-2">Subjects</p>
                    <p className="text-primary-foreground/70 leading-relaxed">Mathematics, Physics, Chemistry, Biology, English, Hindi, Social Science, Accountancy, Economics, Business Studies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — CTA Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                {/* Enroll CTA */}
                <div className="p-7 bg-card border border-border shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">Admissions Open</h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Limited seats per batch to ensure quality attention. Apply early to secure your spot.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center h-12 w-full bg-accent text-accent-foreground font-heading font-semibold text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                  >
                    Apply Now / Enquire
                  </Link>
                  <a
                    href="https://wa.me/919470808655?text=I%27d%20like%20to%20enquire%20about%20academic%20coaching%20batches"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-10 w-full mt-3 border border-green-300 bg-green-50 text-green-700 text-sm font-medium hover:bg-green-100 transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                </div>

                {/* Quick facts */}
                <div className="p-5 border border-border bg-card space-y-3">
                  {[
                    { label: "Batch Size", value: "Max 15–20 students" },
                    { label: "Duration", value: "Academic year / Semester" },
                    { label: "Study Material", value: "Included" },
                    { label: "Doubt Sessions", value: "Weekly, dedicated" },
                    { label: "Progress Reports", value: "Monthly to parents" },
                    { label: "Demo Class", value: "Free, no commitment" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-semibold text-foreground">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
}
