import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Tuition | C.B. Jha Tutorials",
  description: "Get verified, expert home tutors for your child. Flexible timings, personalized attention, and guaranteed results.",
};

export default function HomeTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
