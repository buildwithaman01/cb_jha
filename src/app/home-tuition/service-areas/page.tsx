import { Container } from "@/components/ui/container";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, Phone, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Tutors in Patna — 40+ Service Areas | C.B. Jha Tutorials",
  description: "Verified home tutors across 40+ localities in Patna including Rupaspur, Bailey Road, Boring Road, Kankarbagh & Danapur. Nursery to Class 12. Free demo class.",
};

interface LocalityItem {
  name: string;
  slug?: string;
  description: string;
  popularFor: string;
}

interface LocalityZone {
  zone: string;
  areas: LocalityItem[];
}

const LOCALITY_ZONES: LocalityZone[] = [
  {
    zone: "West Patna (Direct Vicinity & Danapur Region)",
    areas: [
      { name: "Rupaspur", slug: "rupaspur-patna", description: "Home base of C.B. Jha Tutorials. Fastest tutor dispatch for all subjects.", popularFor: "CBSE & ICSE, Class 6–10 Coaching & 1-on-1 Tutors" },
      { name: "Dhanaut", description: "Walking distance from our coaching campus near Mahuabag & Premlata Kunj.", popularFor: "Primary, Middle & High School Home Mentors" },
      { name: "Bailey Road", slug: "bailey-road-patna", description: "Comprehensive tutor coverage spanning RPS More to Saguna More corridor.", popularFor: "Maths, Physics & Chemistry Specialists" },
      { name: "Saguna More", description: "Major transit hub with top verified tutors for science and commerce.", popularFor: "Senior Secondary Board & Foundation Prep" },
      { name: "Gola Road", description: "High-density residential corridor with daily tutor sessions available.", popularFor: "CBSE Class 1–10 All Subjects" },
      { name: "Danapur Cantt & Station Road", slug: "danapur-patna", description: "Trusted home mentors for families stationed in Danapur and Army Cantt.", popularFor: "Discipline-first School Syllabus & Board Prep" },
      { name: "Khagaul & Khagaul Road", description: "Convenient doorstep tuition for DAV Khagaul and nearby school students.", popularFor: "Science, Mathematics & English" },
      { name: "RPS More", description: "Immediate access to senior coaching tutors along the RPS residential area.", popularFor: "Intensive 1-on-1 Doubt Clearing" },
      { name: "Rukanpura", description: "Active tutor network near residential societies and private apartments.", popularFor: "Primary Foundation to Class 10 Boards" },
      { name: "Jagdeo Path", description: "Experienced home tutors for CBSE, ICSE, and BSEB board students.", popularFor: "Middle & High School All Subjects" },
      { name: "Raja Bazar", description: "Central western hub with high tutor availability near Paras and Pillar 60–80.", popularFor: "Science Streams, Biology & Mathematics" },
      { name: "Sheikhpura", description: "Doorstep tutoring for residential communities near IGIMS and surrounding colonies.", popularFor: "English Medium School Curriculum" },
    ],
  },
  {
    zone: "Central Patna (Educational & Commercial Core)",
    areas: [
      { name: "Boring Road", slug: "boring-road-patna", description: "Patna's premier coaching belt. Highest tutor concentration for Class 6–12.", popularFor: "Advanced Board Prep & Competitive Foundation" },
      { name: "Boring Canal Road", description: "Experienced home educators for girls and boys in residential apartments.", popularFor: "Physics, Chemistry & Mathematics" },
      { name: "Patliputra Colony", slug: "patliputra-patna", description: "Serving prestigious families and convent school students across the colony.", popularFor: "St. Michael's, Loyola & Don Bosco Curriculum" },
      { name: "New Patliputra Colony", description: "Dedicated 1-on-1 lady and male tutors for ICSE & CBSE learners.", popularFor: "Nursery to Class 8 All Subjects" },
      { name: "Ashiana Nagar", slug: "ashiana-nagar-patna", description: "Active coverage along Phase 1, Phase 2, and Ashiana-Digha road.", popularFor: "DPS, Loyola & St. Karen's Students" },
      { name: "Shastri Nagar", description: "Reputed home tutors near Rajbanshi Nagar and Energy Park sector.", popularFor: "Mathematics & Science Board Focus" },
      { name: "SK Puri (Sri Krishna Puri)", description: "Premium home tutors providing personalized academic attention.", popularFor: "ICSE & CBSE English Medium Tutors" },
      { name: "SK Nagar (Sri Krishna Nagar)", description: "Experienced school teachers available for evening home study.", popularFor: "Primary All-Rounder & Secondary Tutors" },
      { name: "Kidwaipuri", description: "Central residential locality with prompt tutor matching.", popularFor: "Class 9–12 Science & Commerce" },
      { name: "Anandpuri & West Boring Canal Rd", description: "Flexible morning and evening batches right in your home.", popularFor: "High School Board Preparation" },
      { name: "Indirapuri & Shivpuri", description: "Doorstep mentors for school homework and fundamental clarity.", popularFor: "Foundation Mathematics & Science" },
      { name: "Buddha Colony & Lodipur", description: "Close proximity to central educational centers and convent schools.", popularFor: "Language (English/Hindi) & Social Studies" },
    ],
  },
  {
    zone: "South & South-West Patna",
    areas: [
      { name: "Kankarbagh", slug: "kankarbagh-patna", description: "Patna's largest residential township. Over 50+ verified tutors active.", popularFor: "Hanuman Nagar, PC Colony, Malahi Pakri & Ashok Nagar" },
      { name: "Rajendra Nagar", slug: "rajendra-nagar-patna", description: "Historic academic hub near Moin-ul-Haq Stadium and Bazar Samiti.", popularFor: "Class 10 Board Rankers & Class 12 Science" },
      { name: "Anisabad", description: "Serving Golamber, Police Colony, and Haroon Nagar with verified tutors.", popularFor: "CBSE & Bihar State Board Tutors" },
      { name: "Phulwari Sharif & AIIMS Road", description: "Doorstep guidance for growing residential pockets along AIIMS Patna road.", popularFor: "Middle School Science & Math Foundation" },
      { name: "Gardanibagh", description: "Quiet residential colonies with experienced teachers available.", popularFor: "Class 1–10 All Subjects" },
      { name: "Mithapur & Jakkanpur", description: "Tutors available near bus stand and railway station residential sides.", popularFor: "Flexible Scheduling & Weekend Tutors" },
      { name: "Beur & Sipara", description: "Expanding residential belt with trusted home tutor dispatches.", popularFor: "All Board Syllabus Coverage" },
      { name: "Chitragupta Nagar", description: "Focused home coaching for board examination students.", popularFor: "Regular Weekly Assessment Tutors" },
      { name: "Ramkrishna Nagar & Jaganpura", description: "Accessible tutoring along the bypass residential sectors.", popularFor: "Primary & Middle School Tuition" },
      { name: "Transport Nagar & Zero Mile", description: "Home tutoring options for eastern bypass colonies.", popularFor: "Bihar Board & CBSE Students" },
    ],
  },
  {
    zone: "North & East Patna (Old City, Digha & Ganga Riverfront)",
    areas: [
      { name: "Digha & Digha Ghat", description: "Serving residential sectors near Ganga Pathway and JP Setu approach.", popularFor: "St. Xavier's & St. Michael's Students" },
      { name: "Kurji & Alpana Market", description: "Close to premier convent schools with top-tier English medium tutors.", popularFor: "ICSE English, Science & Mathematics" },
      { name: "Rajiv Nagar & Nepali Nagar", description: "High demand area with multiple daily tutor rounds.", popularFor: "Daily & Alternate Day Home Tutors" },
      { name: "Exhibition Road & Fraser Road", description: "Central commercial & residential apartments with vetted home tutors.", popularFor: "Personalized Commerce & Science Coaching" },
      { name: "Gandhi Maidan & SP Verma Rd", description: "Prime central Patna hub with eminent faculty availability.", popularFor: "Senior Secondary Board & Competitive Base" },
      { name: "Kadam Kuan & Lohanipur", description: "Traditional education neighborhood with veteran subject teachers.", popularFor: "BSEB & CBSE Board Specialization" },
      { name: "Kumhrar & Sandalpur", description: "Doorstep tutors near historical archaeological park and bypass area.", popularFor: "Class 6–10 Comprehensive Tuition" },
      { name: "Bahadurpur & Bazar Samiti", description: "Active student area with affordable, high-quality home instructors.", popularFor: "Maths, Science & Commerce Streams" },
      { name: "Agam Kuan & Bhootnath Road", description: "Doorstep home tutoring along eastern medical hub residential pockets.", popularFor: "Class 6–12 Board Support" },
      { name: "Patna City (Chowk, Marufganj, Jhauganj)", description: "Serving commercial and traditional families in heritage Patna.", popularFor: "Dedicated Home Teachers for All Classes" },
      { name: "Gulzarbagh & Meena Bazar", description: "Experienced home tutors covering state board and CBSE curriculum.", popularFor: "Nursery to Secondary Classes" },
      { name: "Bihta & Greater Patna", description: "Weekend and online tutoring sessions for satellite townships.", popularFor: "IIT/NIT Aspirants & CBSE School Students" },
    ],
  },
];

export default function ServiceAreasPage() {
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
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Service Areas",
        "item": "https://www.cbjhatutorials.in/home-tuition/service-areas",
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
      <div className="bg-background min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(#FAFAF7 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-accent/60" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">Coverage All Over Patna</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Home Tutors Across <br />
              <span className="text-accent">All Patna Localities.</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              From our Dhanaut–Rupaspur coaching campus to your doorstep — we provide background-verified tutors for Nursery to Class 12 across 45+ neighborhoods in Patna.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Highlights */}
      <div className="bg-[#22262B] py-6 border-b border-accent/20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium">40+ Localities Served</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium">200+ Verified Tutors</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium">Free Demo Class at Home</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium">CBSE · ICSE · Bihar Board</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-16 lg:mt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Find Your Local Home Tutor in Patna
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            No matter where you live in Patna, distance is never an obstacle. Our tutors travel directly to your home with verified credentials, customized lesson plans, and consistent weekly progress tracking.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="space-y-16">
          {LOCALITY_ZONES.map((zoneGroup) => (
            <div key={zoneGroup.zone} className="border-t border-border pt-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-accent" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  {zoneGroup.zone}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoneGroup.areas.map((area) => (
                  <div
                    key={area.name}
                    className="bg-card border border-border p-6 hover:border-accent/60 transition-all hover:-translate-y-0.5 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                            {area.name}
                          </h4>
                          <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mt-0.5">
                            Patna, Bihar
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {area.description}
                      </p>

                      <div className="p-3 bg-muted/40 border border-border/50 text-xs mb-4">
                        <span className="font-semibold text-foreground/80 block mb-0.5">Popular For:</span>
                        <span className="text-muted-foreground">{area.popularFor}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                      {area.slug ? (
                        <Link
                          href={`/home-tuition/${area.slug}`}
                          className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
                        >
                          View Area Details <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <Link
                          href="/home-tuition"
                          className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 transition-colors"
                        >
                          Request Tutor Here <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      <a
                        href={`https://wa.me/919470808655?text=Hello%2C%20I%20am%20looking%20for%20a%20home%20tutor%20in%20${encodeURIComponent(area.name)}%2C%20Patna.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-green-700 hover:text-green-800 font-medium"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-primary text-primary-foreground p-8 lg:p-12 border-t-4 border-accent">
          <div className="max-w-2xl">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-white">
              Don&apos;t See Your Exact Street or Colony?
            </h3>
            <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8">
              We dispatch tutors across all wards and pincodes of Patna. Just let us know your location, board, and required subjects, and we will match an educator within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/home-tuition"
                className="inline-flex h-12 items-center justify-center bg-accent text-[#22262B] px-8 text-sm font-heading font-semibold hover:bg-accent/90 transition-colors"
              >
                Request a Free Home Demo
              </Link>
              <a
                href="tel:+919470808655"
                className="inline-flex h-12 items-center justify-center gap-2 border border-white/20 px-6 text-sm font-heading font-medium hover:bg-white/10 transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-accent" />
                Call +91 94708 08655
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
