import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | C.B. Jha Tutorials Patna",
  description: "Terms and conditions of educational services, tuition coordination, and hostel residency at C.B. Jha Tutorials.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
              Terms of Service
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
            <h2 className="font-heading text-xl font-bold text-primary">1. Overview of Services</h2>
            <p>
              C.B. Jha Tutorials provides academic coaching classes (Class 6–10), home and online tuition coordination (Nursery to Class 12), school faculty placement, and residential hostel facilities in Patna, Bihar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">2. Home Tuition Coordination &amp; Free Demo</h2>
            <p>
              We provide one free 1-hour trial demo class with the matched educator. Parents are under no financial commitment until they are completely satisfied with the teaching style and confirm the monthly schedule.
            </p>
            <p>
              If at any point during regular classes a family is unsatisfied with an assigned tutor, C.B. Jha Tutorials provides a replacement educator without additional registration charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">3. Classroom Coaching &amp; Admissions</h2>
            <p>
              Admissions to coaching batches at our Dhanaut/Rupaspur center are subject to batch seat capacity (max 15–20 students) to preserve personalized doubt-clearing and teacher attention. Regular attendance and timely completion of assignments are expected of all enrolled students.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">4. Residential Hostel Rules</h2>
            <p>
              Resident students must adhere to hostel disciplinary rules, including compulsory evening study hours (8:30 PM to 10:30 PM), curfew timings, and visitor policies. Parental visitation requires prior notice to the residential warden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-primary">5. Governing Law</h2>
            <p>
              Any disputes arising from institutional agreements or educational coordination are subject to the jurisdiction of the courts of Patna, Bihar.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

