import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential & Hostel | C.B. Jha Tutorials",
  description: "A safe, focused, and disciplined residential environment for outstation students preparing for boards and competitive exams.",
};

export default function ResidentialHostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
