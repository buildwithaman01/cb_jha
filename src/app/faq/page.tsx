import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | C.B. Jha Tutorials",
  description: "Find answers to common questions about our academic coaching, home tuition, school staffing, and hostel facilities.",
};

const faqs = [
  {
    category: "Home Tuition",
    questions: [
      {
        q: "How are your home tutors verified?",
        a: "Every tutor undergoes a rigorous 3-step verification process: Document verification (Aadhar/PAN), Subject Knowledge test, and a personal interview to ensure they meet our teaching standards."
      },
      {
        q: "Can I request a trial class before confirming?",
        a: "Yes, we offer a free demo class with the matched tutor. You only commit if you and your child are completely satisfied with their teaching style."
      },
      {
        q: "What if I'm not satisfied with the tutor assigned?",
        a: "If at any point you are not satisfied, simply let us know. We will arrange a replacement tutor at no extra cost within 48 hours."
      }
    ]
  },
  {
    category: "Academic Coaching",
    amount: 2,
    questions: [
      {
        q: "What are the batch sizes at your coaching center?",
        a: "We maintain small batch sizes (typically 15-20 students) to ensure personalized attention and effective doubt-clearing for every student."
      },
      {
        q: "Do you provide study material?",
        a: "Yes, we provide comprehensive, updated study materials, regular assignments, and previous years' question banks tailored to CBSE, ICSE, and State Boards."
      }
    ]
  },
  {
    category: "School Staffing",
    questions: [
      {
        q: "How fast can you supply a guest teacher?",
        a: "Depending on the subject and locality, we can usually provide a qualified guest teacher within 24 to 48 hours to ensure your classes continue uninterrupted."
      },
      {
        q: "Do you offer a replacement guarantee for permanent staff?",
        a: "Yes, we offer a 30-day replacement guarantee. If the placed teacher leaves or is found unsuitable within the first month, we will provide a replacement at no additional charge."
      }
    ]
  },
  {
    category: "Residential & Hostel",
    questions: [
      {
        q: "Is mess/food included in the hostel fee?",
        a: "Yes, our hostel fee includes 3 nutritious meals a day. We ensure hygienic and quality food is provided to all resident students."
      },
      {
        q: "What is the visiting policy for parents?",
        a: "Parents and authorized local guardians can visit during designated visiting hours on weekends. Prior intimation is appreciated for security reasons."
      },
      {
        q: "Is there a curfew timing?",
        a: "Yes, for the safety and discipline of the students, there is a strict curfew time. Students must be inside the premises by the designated time every evening."
      }
    ]
  }
];

export default function FAQPage() {
  // Generate FAQ Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-background min-h-screen pb-24">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative">
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Everything you need to know about our services, methodologies, and policies.
              </p>
            </div>
          </Container>
        </section>

        <Container className="mt-16 lg:mt-24">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="font-heading text-3xl font-bold text-primary mb-8 border-b border-border pb-4">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-card border border-border p-6 rounded-sm">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        {item.q}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
