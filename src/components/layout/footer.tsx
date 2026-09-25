import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="C.B. Jha Tutorials"
                width={180}
                height={47}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs leading-relaxed mb-4">
              Guiding Students from Class 6 to 12 — At Home, In Coaching, and Beyond. Founded by Chandra Bhushan Jha.
            </p>
            {/* MSME Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-accent/30 text-accent text-[10px] font-medium tracking-wide uppercase">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              MSME Registered
            </span>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/academic-coaching" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Academic Coaching
                </Link>
              </li>
              <li>
                <Link href="/home-tuition" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home Tuition
                </Link>
              </li>
              <li>
                <Link href="/school-staffing" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  School Staffing
                </Link>
              </li>
              <li>
                <Link href="/residential-hostel" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Residential &amp; Hostel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li>
                <strong className="text-white/90">Phone:</strong><br />
                <a href="tel:+919470808655" className="hover:text-accent transition-colors">
                  +91 94708 08655
                </a>
              </li>
              <li>
                <strong className="text-white/90">Email:</strong><br />
                <a href="mailto:contact.cbjha@gmail.com" className="hover:text-accent transition-colors break-all">
                  contact.cbjha@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white/90">Address:</strong><br />
                Dhanaut, Ward No. 03,<br />
                Near Premlata Kunj Apartment,<br />
                Mahuabag, Rupaspur,<br />
                Patna, Bihar — 801506
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/DjKVL4ccrKGACSgC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:underline text-xs font-medium"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-primary-foreground/60">
            <p className="mb-2 md:mb-1">
              &copy; {new Date().getFullYear()} C.B. Jha Tutorials. All rights reserved. &nbsp;·&nbsp; MSME Registered
            </p>
            <p className="text-xs text-primary-foreground/40">
              Built with <span className="text-red-500">❤️</span> by{' '}
              <a 
                href="https://pehchanly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors underline underline-offset-2"
              >
                Pehchanly Digital Solution
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
