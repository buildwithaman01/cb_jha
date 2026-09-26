import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  /** Small label above the headline e.g. "Home Tuition" */
  eyebrow: string;
  /** Main large heading */
  headline: string;
  /** Highlighted part of heading (renders in accent color, on same line or new line) */
  highlight?: string;
  /** Paragraph below heading */
  description?: string;
  /** Tags / pills shown below description */
  tags?: string[];
  /** Visual variant: 'navy' (default), 'dark', 'light', 'green' */
  variant?: "navy" | "dark" | "light" | "green";
  /** Optional right-side slot for a quick-info card or stat */
  aside?: React.ReactNode;
  className?: string;
}

const VARIANTS = {
  navy: {
    section: "bg-primary text-primary-foreground",
    topBorder: "bg-accent",
    dot: "bg-accent/30",
    eyebrow: "text-accent/80",
    line: "bg-accent/40",
    tag: "border-white/15 text-white/60",
  },
  dark: {
    section: "bg-[#22262B] text-white",
    topBorder: "bg-accent",
    dot: "bg-accent/30",
    eyebrow: "text-accent/80",
    line: "bg-accent/40",
    tag: "border-white/15 text-white/60",
  },
  light: {
    section: "bg-[#FDFBF7] text-foreground border-b border-accent/15",
    topBorder: "bg-accent",
    dot: "bg-accent/40",
    eyebrow: "text-accent",
    line: "bg-accent/40",
    tag: "border-border text-foreground/60 bg-white",
  },
  green: {
    section: "bg-secondary text-secondary-foreground",
    topBorder: "bg-accent",
    dot: "bg-accent/30",
    eyebrow: "text-accent/80",
    line: "bg-accent/40",
    tag: "border-white/15 text-white/60",
  },
};

export function PageHero({
  eyebrow,
  headline,
  highlight,
  description,
  tags,
  variant = "navy",
  aside,
  className,
}: PageHeroProps) {
  const v = VARIANTS[variant];

  return (
    <section className={cn("relative overflow-hidden", v.section, className)}>
      {/* Top accent line */}
      <div className={cn("absolute top-0 left-0 right-0 h-[3px]", v.topBorder)} />

      {/* Subtle dot-grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Diagonal accent mark — top-right corner */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at top right, #E8A33D, transparent 70%)",
        }}
      />

      <Container className="relative z-10 pt-24 pb-14 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        {aside ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <HeroContent eyebrow={eyebrow} headline={headline} highlight={highlight} description={description} tags={tags} v={v} />
            </div>
            <div className="lg:col-span-5">{aside}</div>
          </div>
        ) : (
          <HeroContent eyebrow={eyebrow} headline={headline} highlight={highlight} description={description} tags={tags} v={v} />
        )}
      </Container>
    </section>
  );
}

function HeroContent({
  eyebrow,
  headline,
  highlight,
  description,
  tags,
  v,
}: Omit<PageHeroProps, "variant" | "aside" | "className"> & { v: typeof VARIANTS["navy"] }) {
  return (
    <div className="max-w-3xl">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-4 md:mb-5">
        <div className={cn("w-2 h-2 rounded-full shrink-0", v.dot)} />
        <div className={cn("h-px w-8 shrink-0", v.line)} />
        <span className={cn("text-xs font-semibold tracking-[0.22em] uppercase", v.eyebrow)}>
          {eyebrow}
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-heading font-bold leading-[1.12] tracking-tight mb-4 md:mb-5 text-[1.85rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem]">
        {headline}
        {highlight && (
          <>
            <br />
            <span className="text-accent">{highlight}</span>
          </>
        )}
      </h1>

      {/* Description */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-75 mb-6 max-w-2xl">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 border text-xs font-medium rounded-sm backdrop-blur-xs transition-colors",
                v.tag
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
