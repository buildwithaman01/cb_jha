import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Tutors in Patna (Nursery to Class 12) | C.B. Jha Tutorials",
  description: "Find verified home tutors & online tuition in Patna for Nursery to Class 12. CBSE, ICSE, Bihar Board. 200+ screened teachers at your doorstep. Free trial class.",
};

export default function HomeTuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.cbjhatutorials.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Home Tuition",
        "item": "https://www.cbjhatutorials.in/home-tuition",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
