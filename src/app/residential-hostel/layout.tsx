import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Residential Hostel in Patna | C.B. Jha Tutorials",
  description: "Safe, disciplined residential student hostel in Patna near Rupaspur. 24/7 security, nutritious meals, dedicated study hours & supervision for outstation students.",
};

export default function ResidentialHostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
