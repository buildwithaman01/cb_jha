import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Teacher Staffing in Bihar (PRT, TGT, PGT) | C.B. Jha",
  description: "Verified school teacher staffing & guest faculty placement across Patna and Bihar. Reliable PRT, TGT, PGT educators for CBSE & ICSE schools. 30-day guarantee.",
};

export default function SchoolStaffingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
