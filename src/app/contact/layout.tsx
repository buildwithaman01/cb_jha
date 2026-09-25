import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | C.B. Jha Tutorials",
  description: "Get in touch with us for admissions, home tuition inquiries, or school staffing requirements.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
