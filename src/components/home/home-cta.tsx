import { Container } from "@/components/ui/container";
import Link from "next/link";

export function HomeCta() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Amber accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent/60" />
            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Get Started</span>
            <div className="h-px w-10 bg-accent/60" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-6">
            Ready to give your child{" "}
            <span className="text-accent">the right guidance?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Whether you need a home tutor, a coaching batch, or a residential study environment — we have the right solution. Book a free consultation and our academic counselor will help you decide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 bg-accent text-[#22262B] font-heading font-semibold text-base tracking-wide hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(232,163,61,0.4)] transition-all duration-300 border-b-[3px] border-[#c8882a]"
            >
              Book a Free Consultation
            </Link>
            <a
              href="https://wa.me/919470808655?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20C.B.%20Jha%20Tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-10 bg-transparent text-white border border-white/20 font-heading font-semibold text-base hover:bg-white/8 hover:border-white/40 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-current text-green-400" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z"/>
              </svg>
              WhatsApp Us Now
            </a>
          </div>

          <p className="mt-8 text-primary-foreground/40 text-sm">
            📍 Patna, Bihar &nbsp;·&nbsp; Mon–Sat, 9 AM – 7 PM &nbsp;·&nbsp; Free demo class available
          </p>
        </div>
      </Container>
    </section>
  );
}
