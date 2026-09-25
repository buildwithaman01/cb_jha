import { Container } from "@/components/ui/container";
import Link from "next/link";

const WHY_US = [
  {
    num: "01",
    title: "Founder-Led & Personally Verified",
    body: "Every tutor in our network is personally interviewed and verified by our founder. No third-party aggregator — just direct accountability.",
  },
  {
    num: "02",
    title: "All Subjects, Class 6–12",
    body: "Maths, Science, English, Hindi, Social Science, Accountancy, Economics — all boards: CBSE, ICSE, and Bihar State Board.",
  },
  {
    num: "03",
    title: "One Trusted Name for Everything",
    body: "On-site coaching, home tuition, and residential — a student can move from one mode to another without changing their institution.",
  },
  {
    num: "04",
    title: "Board Exam Specialists",
    body: "15+ years of targeted board exam preparation. Our students consistently score in the top percentile across all boards.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-[#22262B] relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#FAFAF7 1px, transparent 1px), linear-gradient(90deg, #FAFAF7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
              We don&apos;t just teach.{" "}
              <span className="text-accent">We take responsibility.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              In over 15 years, we have built something rare in the education space — a reputation that parents trust and students return to.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors"
            >
              Read Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-white/8">
            {WHY_US.map((item) => (
              <div key={item.num} className="py-7 group">
                <div className="flex gap-6 items-start">
                  <span className="font-heading text-3xl font-bold text-white/10 group-hover:text-accent/30 transition-colors shrink-0 leading-none mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
