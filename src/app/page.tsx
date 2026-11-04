import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { Stats } from "@/components/home/stats";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/home-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C.B. Jha Tutorials | Academic Coaching & Home Tutors in Patna",
  description: "Premier academic coaching (Class 6–10) & verified home tuition (Nursery–12) across Patna. Residential hostel & school staffing. Founded by Chandra Bhushan Jha.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhyUs />
      <Stats />
      <Testimonials />
      <HomeCta />
    </>
  );
}
