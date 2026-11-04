import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Clock, User, ArrowLeft, Calendar, Share2, BookOpen, CheckCircle2, Phone } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | C.B. Jha Tutorials",
      description: "Educational blog article not found.",
    };
  }

  const pageTitle = post.title.length > 55 ? post.title : `${post.title} | C.B. Jha`;

  return {
    title: pageTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://www.cbjhatutorials.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.cbjhatutorials.in/about",
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "C.B. Jha Tutorials",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.cbjhatutorials.in/images/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.cbjhatutorials.in/blog/${post.slug}`,
    },
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
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.cbjhatutorials.in/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="bg-background min-h-screen pb-24">
        {/* Navigation Breadcrumb */}
        <div className="bg-[#1C2025] py-3 text-xs border-b border-white/10">
          <Container>
            <div className="flex items-center gap-2 text-white/60">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-accent font-medium truncate max-w-xs sm:max-w-md">{post.title}</span>
            </div>
          </Container>
        </div>

        {/* Article Header */}
        <header className="bg-primary text-primary-foreground py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent mb-6 hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
              </Link>

              <div className="flex items-center gap-3 text-xs text-primary-foreground/70 mb-3">
                <span className="px-2.5 py-0.5 bg-accent/20 text-accent font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-accent" />
                  {post.readTime}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  {post.publishedAt}
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-primary-foreground/80">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{post.author}</p>
                  <p className="text-primary-foreground/60">Senior Mentor · C.B. Jha Tutorials Patna</p>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* Article Content & Sidebar */}
        <Container className="mt-14 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Article Body */}
            <article className="lg:col-span-8 space-y-10">
              <div className="p-6 bg-accent/10 border-l-4 border-accent text-foreground leading-relaxed text-base italic">
                {post.excerpt}
              </div>

              <div className="space-y-12">
                {post.content.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="font-heading text-2xl font-bold text-primary border-b border-border/70 pb-2">
                      {section.heading}
                    </h2>
                    <div className="space-y-3.5 text-muted-foreground leading-relaxed text-base">
                      {section.body.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Author Box */}
              <div className="mt-16 p-6 sm:p-8 border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-bold text-lg text-primary shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                      Written by {post.author}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      Educator at C.B. Jha Tutorials, guiding students in Patna across CBSE, ICSE, and Bihar Board curriculums with rigorous conceptual mentoring.
                    </p>
                    <Link
                      href="/about"
                      className="text-xs font-semibold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
                    >
                      Learn more about our faculty &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="p-6 bg-primary text-primary-foreground border-t-4 border-accent shadow-md">
                  <span className="text-accent text-[11px] font-bold uppercase tracking-widest block mb-1">
                    Book Free Demo Class
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Looking for a Verified Home Tutor in Patna?
                  </h3>
                  <p className="text-xs text-primary-foreground/75 leading-relaxed mb-6">
                    Connect with screened educators across 40+ localities in Patna. Free 1-hour home demo with no obligation.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/home-tuition"
                      className="flex items-center justify-center w-full h-11 bg-accent text-[#22262B] font-heading font-semibold text-xs tracking-wider uppercase hover:bg-accent/90 transition-colors"
                    >
                      Request a Home Tutor
                    </Link>
                    <a
                      href="https://wa.me/919470808655?text=Hello%20C.B.%20Jha%20Tutorials%2C%20I%20am%20looking%20for%20a%20home%20tutor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full h-11 bg-[#25D366] text-white font-heading font-semibold text-xs tracking-wider uppercase hover:bg-[#20bd5a] transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* More Articles */}
                <div className="p-5 border border-border bg-card">
                  <h4 className="font-heading font-bold text-xs text-muted-foreground uppercase tracking-wider mb-4">
                    Other Recommended Articles
                  </h4>
                  <div className="space-y-3">
                    {BLOG_POSTS.filter((p) => p.slug !== post.slug).map((other) => (
                      <Link
                        key={other.slug}
                        href={`/blog/${other.slug}`}
                        className="block group text-xs py-2 border-b border-border/40 last:border-0"
                      >
                        <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">
                          {other.title}
                        </span>
                        <span className="text-muted-foreground text-[11px]">{other.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}

