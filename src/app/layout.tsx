import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cbjhatutorials.in"),
  title: "C.B. Jha Tutorials | Academic Coaching & Home Tutors in Patna",
  description: "Guiding Students from Class 6 to 12 — At Home, In Coaching, and Beyond.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "C.B. Jha Tutorials",
    description: "Guiding Students from Class 6 to 12 — At Home, In Coaching, and Beyond.",
    url: "https://cbjhatutorials.in",
    siteName: "C.B. Jha Tutorials",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://cbjhatutorials.in/#organization",
        "name": "C.B. Jha Tutorials",
        "url": "https://cbjhatutorials.in",
        "logo": "https://cbjhatutorials.in/images/logo.png",
        "email": "contact.cbjha@gmail.com",
        "telephone": "+919470808655",
        "sameAs": [
          "https://share.google/bENgF7gUJ1k64l4P1",
          "https://maps.app.goo.gl/DjKVL4ccrKGACSgC6"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://cbjhatutorials.in/#localbusiness",
        "name": "C.B. Jha Tutorials",
        "url": "https://cbjhatutorials.in",
        "telephone": "+919470808655",
        "email": "contact.cbjha@gmail.com",
        "foundingDate": "2009",
        "founder": { "@type": "Person", "name": "Chandra Bhushan Jha" },
        "hasCredential": "MSME Registered",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dhanaut, Ward No. 03, Near Premlata Kunj Apartment, Mahuabag, Rupaspur",
          "addressLocality": "Patna",
          "addressRegion": "Bihar",
          "postalCode": "801506",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.5941",
          "longitude": "85.1376"
        },
        "hasMap": "https://maps.app.goo.gl/DjKVL4ccrKGACSgC6"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-accent/30 selection:text-primary">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1 pb-[58px] lg:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
