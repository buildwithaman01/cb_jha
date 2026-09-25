import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Staffing | C.B. Jha Tutorials",
  description: "Providing high-quality guest faculty and permanent teaching staff (PRT, TGT, PGT) to schools across the region.",
};

export default function SchoolStaffingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
