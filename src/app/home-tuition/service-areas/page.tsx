import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas - Home Tutors in Patna | C.B. Jha Tutorials",
  description: "C.B. Jha Tutorials provides verified home tutors across all major localities in Patna, including Boring Road, Kankarbagh, Rajendra Nagar, and more.",
};

const localities = [
  "Boring Road",
  "Kankarbagh",
  "Rajendra Nagar",
  "Patliputra Colony",
  "Danapur",
  "Bailey Road",
  "Kadam Kuan",
  "Anisabad",
  "Phulwari Sharif",
  "Ashiana Nagar",
  "Gandhi Maidan",
  "Kumhrar"
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We provide verified, experienced home tutors for Class 6 to 12 across all major localities in Patna.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-16 lg:mt-24">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-6">
            Find a Home Tutor Near You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Distance shouldn't be a barrier to quality education. C.B. Jha Tutorials connects you with local, background-verified educators right in your neighborhood.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localities.map((locality) => (
              <div key={locality} className="bg-card border border-border p-6 rounded-sm group hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      Home Tutors in {locality}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Expert tutors for CBSE, ICSE, and State Board available in {locality}.
                    </p>
                    <Link href="/home-tuition" className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors">
                      Request Tutor <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted border border-border p-8 lg:p-12 rounded-sm text-center">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            Don't see your area listed?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are constantly expanding our network of qualified educators. Contact us to check availability in your specific neighborhood.
          </p>
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-accent px-8 text-base font-semibold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
