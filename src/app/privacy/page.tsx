import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | C.B. Jha Tutorials Patna",
  description: "Privacy policy for C.B. Jha Tutorials regarding student, parent, and tutor personal data protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/75 text-sm">
              Last updated: February 2026 · C.B. Jha Tutorials, Patna
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="max-w-3xl space-y-8 text-foreground/85 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">1. Information We Collect</h2>
            <p>
              When you submit an inquiry form or application on C.B. Jha Tutorials (cbjhatutorials.in), we collect essential contact details including your name, telephone number, email address, student class, residential locality in Patna, and academic requirements.
            </p>
            <p>
              For educator applicants, we collect educational degrees, teaching experience, preferred localities, and government identity documentation strictly for credential verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">2. How We Use Your Information</h2>
            <p>
              We use collected information solely for educational counseling, matching students with verified tutors, coordinating demo classes, processing hostel residency applications, and institutional communications.
            </p>
            <p>
              We do not sell, rent, or trade your personal data to third-party commercial marketing agencies under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">3. Data Security &amp; Confidentiality</h2>
            <p>
              We implement industry-standard safeguards to protect parent, student, and educator records. Tutor identity documents are stored in secure archives accessible only to authorized administrative staff for verification purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">4. Analytics &amp; Cookies</h2>
            <p>
              Our website uses Google Analytics (GA4) to understand general traffic trends and improve user experience. These tools collect anonymized browser data and do not capture personally identifiable private files.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">5. Contact Information</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to update your recorded information, please contact us at:
            </p>
            <div className="p-4 bg-muted/40 border border-border text-xs space-y-1">
              <p><strong>C.B. Jha Tutorials</strong></p>
              <p>Dhanaut, Ward No. 03, Near Premlata Kunj Apartment, Mahuabag, Rupaspur, Patna — 801506</p>
              <p>Email: <a href="mailto:contact.cbjha@gmail.com" className="text-primary underline">contact.cbjha@gmail.com</a></p>
              <p>Phone: +91 94708 08655</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

