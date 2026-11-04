export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishedAt: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: {
    heading: string;
    body: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-things-to-check-before-hiring-home-tutor-patna",
    title: "Top 7 Things Patna Parents Must Verify Before Hiring a Home Tutor in 2026",
    metaDescription: "Looking for a home tutor in Patna? Here is a practical 7-step checklist on background verification, qualifications, demo classes, and safety for your child.",
    publishedAt: "2026-02-15",
    author: "Chandra Bhushan Jha",
    readTime: "6 min read",
    category: "Parenting & Academic Guidance",
    tags: ["Home Tutors Patna", "Tutor Verification", "CBSE Patna", "Child Safety"],
    excerpt: "With hundreds of informal tutors advertising across Patna, ensuring your child's physical safety, conceptual clarity, and consistent academic progress requires a structured verification approach.",
    content: [
      {
        heading: "1. Demand Government ID & Residential Proof",
        body: [
          "Before allowing any individual into your household for regular evening sessions, insist on verifying their Aadhaar card, permanent address, and contact credentials.",
          "At C.B. Jha Tutorials, every tutor in our 200+ network undergoes mandatory government identity cross-checking and residential verification before we recommend them to parents in areas like Boring Road, Kankarbagh, Rupaspur, or Patliputra."
        ]
      },
      {
        heading: "2. Verify Original Degree Certificates (Not Just Word of Mouth)",
        body: [
          "A tutor claiming to teach Senior Secondary Physics or Class 10 Board Mathematics must possess genuine academic qualifications (such as an M.Sc, B.Ed, or relevant university degree).",
          "Ensure that your tutor is not merely an undergraduate student balancing their own heavy college schedule during your child's critical pre-board months."
        ]
      },
      {
        heading: "3. Insist on a Free Demo Trial Class",
        body: [
          "Never pay advance tuition fees without observing a trial lesson. Pay close attention to how the educator interacts with your child: Do they explain underlying concepts, or do they simply solve textbook exercises without checking whether the student truly understands?",
          "A great educator demonstrates patience, clear diction, and the ability to simplify complex formulas."
        ]
      },
      {
        heading: "4. Clarify Familiarity with the Exact Board Curriculum",
        body: [
          "A tutor experienced only in CBSE textbooks may struggle with the intricate literature questions of ICSE Class 10 or the specific objective pattern of the Bihar State Board (BSEB).",
          "Always ensure the educator has coached students from your child's specific board and school (e.g., St. Michael's, DPS Patna, Loyola, DAV, or Kendriya Vidyalaya)."
        ]
      },
      {
        heading: "5. Evaluate Consistency & Punctuality Policies",
        body: [
          "In Patna, common complaints from parents include tutors skipping sessions during festival seasons or arriving irregularly due to transit delays.",
          "Choose an institutional tutor network that provides a clear attendance policy and an immediate, free replacement guarantee if scheduling conflicts arise."
        ]
      },
      {
        heading: "6. Ask for Structured Weekly Assessments",
        body: [
          "Teaching without regular evaluation produces surprises on report card day. Your home tutor must conduct short 30-minute weekly tests after completing each chapter and review mistakes with parents.",
          "Transparent progress reports turn weak areas into strengths months before school term examinations."
        ]
      },
      {
        heading: "7. Direct Institutional Accountability",
        body: [
          "When you hire an independent tutor from online classifieds, you have zero recourse if they abruptly stop teaching weeks before board exams. Partnering with a registered institution with a decades-long legacy ensures direct mentor oversight and uninterrupted learning."
        ]
      }
    ]
  },
  {
    slug: "cbse-vs-icse-vs-bihar-board-guide-for-patna-students",
    title: "CBSE vs ICSE vs Bihar Board (BSEB): Which Board Is Best for Your Child in Patna?",
    metaDescription: "A comprehensive comparison of CBSE, ICSE, and Bihar Board curriculums, grading criteria, and competitive exam advantages for school students in Patna.",
    publishedAt: "2026-01-28",
    author: "Academic Advisory Team",
    readTime: "7 min read",
    category: "Board Curriculum Guide",
    tags: ["CBSE Patna", "ICSE Patna", "Bihar Board BSEB", "School Admission Patna"],
    excerpt: "Choosing between CBSE, ICSE, and the Bihar State Board (BSEB) is one of the most critical decisions Patna parents face. Here is an honest, practical comparison based on 40 years of teaching experience.",
    content: [
      {
        heading: "Understanding the Core Focus of Each Board",
        body: [
          "Each education board in Bihar carries distinct advantages, pedagogical philosophies, and assessment structures.",
          "Understanding these differences helps parents align tuition support with their child's long-term aspirations — whether in engineering, medicine, civil services, commerce, or global higher education."
        ]
      },
      {
        heading: "CBSE (Central Board of Secondary Education)",
        body: [
          "CBSE is the most popular national board in Patna, followed by top schools like DPS Patna, DAV, St. Karen's, and Kendriya Vidyalaya.",
          "Key Strengths: Direct alignment with national competitive exams (JEE Main, NEET-UG, CUET). The curriculum relies strictly on NCERT textbooks.",
          "Ideal For: Students aiming for STEM careers, medical/engineering entrance exams, or families with transferable jobs."
        ]
      },
      {
        heading: "ICSE / ISC (Council for the Indian School Certificate Examinations)",
        body: [
          "ICSE is renowned for its depth, followed by prestigious Patna schools such as St. Michael's High School, Don Bosco Academy, and Mount Carmel.",
          "Key Strengths: Exceptional English language and literature foundation, comprehensive practical science curriculum, and equal weightage across arts, commerce, and sciences.",
          "Ideal For: Students seeking superior linguistic skills, humanities, global university admissions, or early analytical training."
        ]
      },
      {
        heading: "Bihar State Board (BSEB)",
        body: [
          "The Bihar School Examination Board has transformed significantly with modern digital evaluation, standardized NCERT-based syllabus, and a student-friendly objective question pattern.",
          "Key Strengths: High scoring potential in state scholarships, strong foundation for state government entrance exams, and affordable fee structures.",
          "Ideal For: Students targeting state competitive examinations, state medical colleges, or families seeking a balance between rigorous academics and state curriculum."
        ]
      },
      {
        heading: "How C.B. Jha Tutorials Supports All Three Boards",
        body: [
          "Rather than applying a generic one-size-fits-all formula, C.B. Jha Tutorials assigns board-specialist teachers for home and coaching sessions. Our CBSE tutors master NCERT line-by-line; our ICSE educators drill analytical essays and experimental science; and our BSEB tutors focus on maximum scoring accuracy."
        ]
      }
    ]
  },
  {
    slug: "how-to-score-95-percent-class-10-boards-patna",
    title: "How to Score 95%+ in Class 10 Board Exams: Proven Strategies by C.B. Jha Sir",
    metaDescription: "Actionable board exam preparation blueprint by veteran Physics educator Chandra Bhushan Jha. Proven timetable, NCERT revision tactics, and mock test routines.",
    publishedAt: "2026-01-10",
    author: "Chandra Bhushan Jha",
    readTime: "8 min read",
    category: "Board Exam Mastery",
    tags: ["Class 10 Boards", "CBSE 10th", "Board Exam Tips", "Physics Tips"],
    excerpt: "Scoring above 95% in Class 10 board examinations is not about studying 14 hours a day — it is about conceptual clarity, disciplined revision, and mastering the examiner's answer rubric.",
    content: [
      {
        heading: "1. The 3-Month NCERT Reverse Engineering Method",
        body: [
          "Many students in Patna make the mistake of reading four different private reference books simultaneously while ignoring the textbook that the board examiner actually uses.",
          "Every single question in CBSE and state board exams is directly rooted in NCERT concepts, activities, and chapter-end exercises. Underline every formula, solve every in-text example, and memorize standard definitions."
        ]
      },
      {
        heading: "2. Master Science Derivations & Ray Diagrams",
        body: [
          "In Physics and Chemistry, losing marks usually happens in loose derivations, missing units, or unlabeled ray diagrams (optics and electricity).",
          "Practice drawing clean, arrow-marked diagrams with a sharpened pencil. Always state the underlying law (e.g., Ohm's law, Snell's law) before beginning any numerical calculation."
        ]
      },
      {
        heading: "3. Solve 5 Full-Length Timed Sample Papers",
        body: [
          "Knowledge without time management leads to unattempted 5-mark questions in Mathematics and Science. Between December and February, sit down in a quiet room from 10:30 AM to 1:30 PM — the exact board exam slot — and write full answers without looking at reference notes.",
          "Analyze every paper: Did you spend 40 minutes on 1-mark MCQs? Did you leave time for the final 15-minute revision?"
        ]
      },
      {
        heading: "4. The Power of 1-on-1 Personalized Mentoring",
        body: [
          "In a crowded coaching classroom of 80 students, a child often hesitates to raise their hand and ask 'Sir, I didn't understand the magnetic field rule.'",
          "A dedicated home tutor catches that hesitation instantly. In 1-on-1 tutoring, doubt clearing is continuous, personal, and judgment-free."
        ]
      }
    ]
  },
  {
    slug: "why-home-tuition-works-better-than-crowded-coaching",
    title: "Why 1-on-1 Home Tuition Works Better Than Crowded Coaching for Most Patna Students",
    metaDescription: "Compare the pros and cons of crowded commercial coaching centers in Boring Road vs personalized 1-on-1 home tuition for students in Patna.",
    publishedAt: "2025-12-18",
    author: "Academic Advisory Team",
    readTime: "5 min read",
    category: "Education Strategy",
    tags: ["Home Tuition vs Coaching", "Personalized Learning", "Patna Education"],
    excerpt: "Many parents in Patna spend hours navigating traffic on Boring Road or Kankarbagh only for their child to sit in the 15th row of a crowded coaching hall. Here is why personalized home tuition is increasingly preferred.",
    content: [
      {
        heading: "The Reality of Crowded Coaching Batches",
        body: [
          "Commercial coaching institutes in Patna often pack 50 to 100 students into a single lecture hall. While top-ranking students might manage to keep pace, average or introverted students are quickly left behind.",
          "When the lecture ends, faculty rush to their next batch, leaving lengthy queues for brief doubt counters."
        ]
      },
      {
        heading: "1. Zero Commute Fatigue & Safer Home Environment",
        body: [
          "Traveling across Patna's congested corridors during evening rush hours wastes 1 to 2 valuable study hours every day and drains a student's energy.",
          "Home tuition preserves that stamina. Your child studies comfortably in their own study room under your gentle parental supervision."
        ]
      },
      {
        heading: "2. Teaching Paced to the Student's Grasp",
        body: [
          "If your child needs three sessions to master quadratic equations, a home tutor devotes three sessions. If they have already mastered chemical equations, the tutor moves ahead without wasting time.",
          "Personalized pacing prevents the demoralizing feeling of falling behind the class."
        ]
      },
      {
        heading: "3. Direct Parent-Teacher Communication",
        body: [
          "At commercial coaching centers, parents usually receive automated SMS attendance notifications and meet teachers only once a semester.",
          "With a home tutor, you speak directly with the educator after every session, tracking homework completion, test scores, and areas needing attention."
        ]
      }
    ]
  }
];

