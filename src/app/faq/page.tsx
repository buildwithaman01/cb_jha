import { Container } from "@/components/ui/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Coaching, Home Tutors & Hostel | C.B. Jha Tutorials",
  description: "Answers to frequent questions about academic coaching batches, verified home tutors in Patna, fee structures, demo classes, and residential hostel facilities.",
};

const faqs = [
  {
    category: "Home Tuition & Online Classes",
    questions: [
      {
        q: "Which classes and boards do your home tutors cover in Patna?",
        a: "We provide home tutors and live online tuition for students from Nursery all the way up to Class 12. We cover CBSE, ICSE, and Bihar State Board (BSEB) across Mathematics, Science (Physics, Chemistry, Biology), Commerce (Accountancy, Economics), English, Hindi, and Social Studies."
      },
      {
        q: "Which localities in Patna do you serve?",
        a: "We serve all major localities across Patna (40+ areas), including Rupaspur, Dhanaut, Bailey Road, Saguna More, Gola Road, Danapur, Boring Road, Patliputra, Ashiana Nagar, Kankarbagh, Rajendra Nagar, Anisabad, and surrounding neighborhoods."
      },
      {
        q: "How are your home tutors verified?",
        a: "Every tutor undergoes a rigorous 4-step verification: Aadhaar and ID validation, residential verification, subject competence evaluation, and a direct interview with founder Chandra Bhushan Jha."
      },
      {
        q: "Can I request a trial class before confirming?",
        a: "Yes, we provide a free 1-hour demo class with the matched tutor at your home. You only confirm the schedule if you and your child are completely satisfied."
      },
      {
        q: "What if I'm not satisfied with the tutor assigned?",
        a: "We provide a 100% tutor replacement guarantee. If the teaching chemistry is not right, simply notify us and we will assign another verified educator within 48 hours."
      }
    ]
  },
  {
    category: "Academic Coaching",
    amount: 2,
    questions: [
      {
        q: "Which classes are covered in your classroom coaching batches?",
        a: "Our classroom coaching batches at our Dhanaut/Rupaspur campus are specifically focused on Class 6 to 10 for CBSE, ICSE, and Bihar Board. For Class 11 and 12, we provide specialized 1-on-1 home tutoring and live online guidance."
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="bg-background min-h-screen pb-24">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground pt-24 pb-14 md:pt-28 md:pb-20 lg:py-28 relative">
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
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
