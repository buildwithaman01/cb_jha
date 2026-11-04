import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Clock, User, ArrowRight, BookOpen, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Insights & Board Prep Blog | C.B. Jha Tutorials Patna",
  description: "Expert advice on CBSE, ICSE, and Bihar Board exam preparation, choosing home tutors in Patna, and study strategies from veteran educators.",
  openGraph: {
    title: "Education & Board Exam Blog | C.B. Jha Tutorials",
    description: "Guidance on school boards, home tuition, and exam success from Patna's trusted educational mentors.",
    url: "https://www.cbjhatutorials.in/blog",
  },
};

export default function BlogIndexPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "C.B. Jha Tutorials Academic Blog",
    "description": "Educational insights, board exam guidance, and tuition tips for students and parents in Patna.",
    "url": "https://www.cbjhatutorials.in/blog",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "C.B. Jha Tutorials",
      "logo": "https://www.cbjhatutorials.in/images/logo.png",
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author,
      },
      "url": `https://www.cbjhatutorials.in/blog/${post.slug}`,
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
        "name": "Blog",
        "item": "https://www.cbjhatutorials.in/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListSchema).replace(/</g, "\\u003c"),
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
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Academic Resources</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
                Insights for Parents &amp; <br />
                <span className="text-accent">Students in Patna.</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Practical advice on board exam excellence, school boards, and personalized home tutoring rooted in 40+ years of teaching experience.
              </p>
            </div>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <Container className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border p-7 flex flex-col justify-between hover:border-accent/60 transition-all hover:-translate-y-1 group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground mb-4">
                    <span className="px-2.5 py-1 bg-accent/10 text-accent font-semibold tracking-wider uppercase">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2 py-0.5 bg-muted text-foreground/70">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-foreground/80 font-medium">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary font-bold hover:text-accent transition-colors"
                  >
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Consultation Callout */}
          <div className="mt-20 p-8 lg:p-12 bg-[#22262B] text-white border-l-4 border-accent">
            <div className="max-w-2xl">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Need Specific Guidance For Your Child?
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Talk Directly With Founder Chandra Bhushan Jha
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                Whether you need advice on board choices, weak fundamentals in mathematics or physics, or finding the right home tutor in your locality, our academic counselor is here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center bg-accent text-[#22262B] px-8 text-sm font-heading font-semibold hover:bg-accent/90 transition-colors"
                >
                  Book Free Academic Consultation
                </Link>
                <a
                  href="https://wa.me/919470808655?text=Hello%20C.B.%20Jha%20Tutorials%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20consult%20regarding%20my%20child%27s%20academics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-heading font-medium hover:bg-white/10 transition-colors text-white"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

