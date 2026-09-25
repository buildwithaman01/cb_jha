import { Hero } from "@/components/home/hero";
import { Pillars } from "@/components/home/pillars";
import { Stats } from "@/components/home/stats";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/home-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C.B. Jha Tutorials | Academic Coaching, Home Tutors & Hostel in Patna",
  description: "Expert academic coaching, verified home tutors, residential hostel & school staffing in Patna, Bihar. Class 6–12, all boards. Founded by Chandra Bhusan Jha.",
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
