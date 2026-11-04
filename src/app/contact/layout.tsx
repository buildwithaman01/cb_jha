import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact C.B. Jha Tutorials | Coaching & Home Tutors in Patna",
  description: "Get in touch with C.B. Jha Tutorials in Dhanaut, Patna. Inquire for Class 6–10 coaching, Nursery–12 home tuition, hostel care & school staffing. Call now.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact C.B. Jha Tutorials",
    "url": "https://www.cbjhatutorials.in/contact",
    "description": "Contact C.B. Jha Tutorials in Dhanaut, Patna for coaching, home tuition, hostel, and school staffing.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "C.B. Jha Tutorials",
      "telephone": "+919470808655",
      "email": "contact.cbjha@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dhanaut, Ward No. 03, Near Premlata Kunj Apartment, Mahuabag, Rupaspur",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "801506",
        "addressCountry": "IN"
      }
    }
  };

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
        "name": "Contact Us",
        "item": "https://www.cbjhatutorials.in/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
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
