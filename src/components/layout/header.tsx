"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Coaching", href: "/academic-coaching" },
  { name: "Home Tuition", href: "/home-tuition" },
  { name: "School Staffing", href: "/school-staffing" },
  { name: "Hostel", href: "/residential-hostel" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerBg = isHome
    ? scrolled
      ? "bg-[#0A0E14]/95 backdrop-blur-md border-b border-white/8"
      : "bg-transparent border-b border-transparent"
    : "bg-background/95 backdrop-blur-md border-b border-border/40";

  const linkColor =
    isHome && !scrolled
      ? "text-white/80 hover:text-white"
      : "text-foreground/80 hover:text-foreground";
  const activeColor = "text-accent font-semibold";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          headerBg
        )}
      >
        <Container>
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center shrink-0 w-[240px] h-[55px] md:w-[320px] md:h-[72px]"
              aria-label="C.B. Jha Tutorials Home"
            >
              <Image
                src="/images/logo.png"
                alt="C.B. Jha Tutorials"
                fill
                priority
                sizes="(max-width: 768px) 240px, 320px"
                className={cn(
                  "object-contain object-left transition-all duration-300",
                  isHome && !scrolled ? "brightness-0 invert" : ""
                )}
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 py-1 whitespace-nowrap",
                    pathname === link.href ? activeColor : linkColor
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full transition-all duration-200" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919470808655"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                  isHome && !scrolled
                    ? "text-white/70 hover:text-white"
                    : "text-foreground/70 hover:text-foreground"
                )}
              >
                <Phone className="w-3.5 h-3.5" />
                +91 94708 08655
              </a>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center bg-accent text-accent-foreground text-sm font-heading font-semibold px-5 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,163,61,0.4)] transition-all duration-200 border-b-2 border-[#c8882a]"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile — Phone icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+919470808655"
                aria-label="Call us"
                className={cn(
                  "flex items-center justify-center w-10 h-10 transition-colors",
                  isHome && !scrolled ? "text-white/80" : "text-foreground/80"
                )}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                className={cn(
                  "flex items-center justify-center w-10 h-10 transition-colors",
                  isHome && !scrolled ? "text-white" : "text-foreground"
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Full-screen Mobile Menu with CSS transitions (no Framer Motion reparenting) */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[#0A0E14] flex flex-col transition-all duration-300 ease-in-out lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        )}
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        aria-hidden={!isOpen}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="C.B. Jha Tutorials"
              width={160}
              height={42}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className="flex flex-col flex-1 px-6 py-8 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between py-5 border-b border-white/6 font-heading text-2xl font-semibold transition-colors",
                  pathname === link.href
                    ? "text-accent"
                    : "text-white hover:text-accent"
                )}
              >
                {link.name}
                <span className="text-white/20 text-lg">›</span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="px-6 pb-6 pt-4 border-t border-white/8 space-y-3">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center h-14 w-full bg-accent text-accent-foreground font-heading font-bold text-base border-b-[3px] border-[#c8882a] hover:opacity-95 transition-opacity"
          >
            Book Free Consultation
          </Link>
          <a
            href="https://wa.me/919470808655?text=Hi%2C%20I%27d%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 h-12 w-full border border-white/15 text-white/70 font-medium text-sm hover:bg-white/5 transition-colors"
          >
            <svg className="w-4 h-4 fill-green-400" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
