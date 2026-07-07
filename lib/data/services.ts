export interface CounsellingStep {
  num: string
  title: string
  desc: string
}

export interface ServiceMetric {
  value: string
  label: string
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceData {
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  icon: string
  color: string
  heroTitle: string
  heroDescription: string
  counsellingButtonText: string
  ctaBannerTitle: string
  ctaBannerButtonText: string

  // Counselling specific
  studentsParents?: {
    students: { title: string; desc: string; points: Array<{ title: string; desc: string }> }
    parents: { title: string; desc: string; points: Array<{ title: string; desc: string }> }
  }
  counsellingSteps?: CounsellingStep[]
  metrics?: ServiceMetric[]

  // Test prep specific
  whyPrepMatters?: {
    title: string
    desc1: string
    desc2: string
    cards: Array<{ icon: string; title: string; desc: string }>
  }
  exams?: Array<{ slug: string; name: string; description: string; href: string }>

  // Visa guidance specific
  visaSections?: {
    left: {
      title: string
      desc: string
      items: Array<{ icon: string; title: string; desc: string }>
    }
    right: {
      title: string
      desc: string
      items: Array<{ icon: string; title: string; desc: string }>
    }
  }
  faqs?: ServiceFAQ[]

  // Scholarships specific
  scholarshipsInfo?: {
    left: { title: string; desc1: string; desc2: string }
    right: { title: string; stats: ServiceMetric[] }
  }
  scholarshipTypes?: Array<{ type: string; desc: string }>
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  counselling: {
    slug: "counselling",
    title: "Study Abroad Counselling",
    description:
      "Personalized profile evaluation, university shortlisting, SOP crafting, and end-to-end application support for 500+ universities worldwide.",
    metaTitle: "Study Abroad Counselling Services",
    metaDescription:
      "End-to-end career guidance and university admission counselling. Helping students choose the right courses and secure top global admits.",
    icon: "school",
    color: "bg-primary",
    heroTitle: "Personalized Study Abroad Admissions Counselling",
    heroDescription:
      "We don't just guide applications; we shape careers. Get expert guidance from profile assessment to university selection, statement writing, and final enrollment.",
    counsellingButtonText: "Book a Free Counselling Session",
    ctaBannerTitle: "Ready to Find Your Dream University?",
    ctaBannerButtonText: "Book a Free Session",
    studentsParents: {
      students: {
        title: "For Students: Finding Your Dream Path",
        desc: "Choosing where and what to study is one of the most critical decisions of your life. Our counselling process is designed to find the perfect intersection of your academic strengths, career ambitions, and personal interests.",
        points: [
          {
            title: "Aptitude & Profile Mapping",
            desc: "Aligning your background with cutting-edge global courses.",
          },
          {
            title: "Target Selection",
            desc: "Categorizing universities into Ambitious, Target, and Safe schools.",
          },
          {
            title: "Resume & Portfolio Building",
            desc: "Showcasing projects, internships, and extracurriculars.",
          },
        ],
      },
      parents: {
        title: "For Parents: Trust, Safety & Financial Planning",
        desc: "We understand that sending your child abroad is a significant emotional and financial commitment. We serve as your trusted advisors, providing absolute transparency regarding costs, safety, and return on investment.",
        points: [
          {
            title: "ROI Analysis",
            desc: "Recommending destinations with post-study work permits and high job prospects.",
          },
          {
            title: "Budget Planning",
            desc: "Guidance on tuition fees, cost of living, education loans, and scholarship availability.",
          },
          {
            title: "Safety & Support",
            desc: "Prioritizing safe campus environments and post-arrival assistance.",
          },
        ],
      },
    },
    counsellingSteps: [
      {
        num: "01",
        title: "Initial Consultation & Goal Setting",
        desc: "We discuss your academic history, budget parameters, exam scores, and preferred countries. This forms the blueprint for the entire process.",
      },
      {
        num: "02",
        title: "Strategic University Shortlisting",
        desc: "We carefully select 6-8 universities matching your requirements, categorizing them dynamically based on admit chances.",
      },
      {
        num: "03",
        title: "SOP & Essay Mentorship",
        desc: "Our writing experts help you draft highly compelling Statements of Purpose (SOPs), Letters of Recommendation (LORs), and resumes that highlight your unique voice.",
      },
      {
        num: "04",
        title: "Application Submission & Follow-up",
        desc: "We handle the complete application filing process with high accuracy, ensuring all transcripts, scores, and fee waivers are managed on time.",
      },
      {
        num: "05",
        title: "Admit Evaluation & Decision Support",
        desc: "Once admits arrive, we help you evaluate offers, scholarships, campus assistantships, and make the optimal choice.",
      },
    ],
    metrics: [
      { value: "6,000+", label: "Successful Admits" },
      { value: "98%", label: "Admit Success Rate" },
      { value: "₹50Cr+", label: "Scholarships Secured" },
      { value: "19+", label: "Years of Expert Mentorship" },
    ],
  },
  "test-preparation": {
    slug: "test-preparation",
    title: "Test Preparation",
    description:
      "Expert coaching for GRE, GMAT, IELTS, TOEFL, SAT, and PTE with Central India's best faculty and AI-powered practice tools.",
    metaTitle: "Test Preparation Coaching — GRE, GMAT, IELTS, TOEFL, SAT, PTE",
    metaDescription:
      "Score-oriented coaching for international entrance exams. Achieve top scores with expert guidance and state-of-the-art practice resources.",
    icon: "edit_note",
    color: "bg-secondary",
    heroTitle: "High-Score Oriented Test Preparation",
    heroDescription:
      "A higher score opens doors to better universities and larger scholarships. Prepare with Central India's most experienced mentors and advanced prep platforms.",
    counsellingButtonText: "Register for a Free Demo Class",
    ctaBannerTitle: "Ace Your Exams with The Globalizers",
    ctaBannerButtonText: "Book a Free Class Slot",
    whyPrepMatters: {
      title: "Why Proper Test Prep Matters",
      desc1:
        "Standardized exams are not just memory tests; they assess logical reasoning, time management, and test-taking strategies under pressure. Self-preparation often misses the subtle short-cuts and pattern recognition that experienced faculty provide.",
      desc2:
        "For parents, investing in quality test coaching is a smart financial strategy. An excellent GRE/GMAT score frequently translates into substantial tuition merit-scholarships (often saving $10,000 to $30,000 annually) or fully funded teaching assistantships.",
      cards: [
        {
          icon: "star",
          title: "Central India's Best Faculty",
          desc: "Learn directly from mentors who have set score benchmarks over 19 years.",
        },
        {
          icon: "psychology",
          title: "AI-Driven Mock Platform",
          desc: "Simulate actual test environments with accurate adaptive questioning and review metrics.",
        },
        {
          icon: "menu_book",
          title: "Exhaustive Materials",
          desc: "Access original mock series, detailed diagnostic breakdowns, and section-wise booklets.",
        },
        {
          icon: "schedule",
          title: "Flexible Batch Schedules",
          desc: "Morning, evening, and weekend batches tailored for university students and working professionals.",
        },
      ],
    },
    exams: [
      {
        slug: "gre",
        name: "GRE (Graduate Record Exam)",
        description:
          "Widely accepted for MS, MBA, and PhD programs. Our prep highlights Verbal strategies from Prashant Hemnani and complete Quant support.",
        href: "/exams/gre",
      },
      {
        slug: "gmat",
        name: "GMAT (Graduate Management Admission Test)",
        description:
          "Targeted Focus Edition coaching. Essential for top global business school MBA and Master in Finance admits.",
        href: "/exams/gmat",
      },
      {
        slug: "ielts",
        name: "IELTS (International English Language Testing System)",
        description:
          "Required for university entry in UK, Canada, Australia, and USA. Master Academic Listening, Writing, Reading, and Speaking.",
        href: "/exams/ielts",
      },
      {
        slug: "toefl",
        name: "TOEFL (Test of English as a Foreign Language)",
        description:
          "Computer-based internet test training. Ideal for US universities requiring academic English proficiency.",
        href: "/exams/toefl",
      },
      {
        slug: "sat",
        name: "SAT (Scholastic Assessment Test)",
        description:
          "Required for undergraduate programs in the USA and Canada. Master critical reading, grammar, and high school mathematics.",
        href: "/exams/sat",
      },
      {
        slug: "pte",
        name: "PTE (Pearson Test of English)",
        description:
          "Fast, computer-based English proficiency test training. Extremely popular for Australian and UK visa routes.",
        href: "/exams/pte",
      },
    ],
  },
  "visa-guidance": {
    slug: "visa-guidance",
    title: "Visa Guidance",
    description:
      "98% visa success rate. Complete documentation support, mock visa interviews, and country-specific process guidance.",
    metaTitle: "Student Visa Guidance & Interview Prep",
    metaDescription:
      "Secure your student visa with India's top experts. 98% success rate, meticulous documentation check, and detailed mock interview sessions.",
    icon: "verified_user",
    color: "bg-tertiary",
    heroTitle: "Stress-Free Student Visa Guidance",
    heroDescription:
      "A visa rejection can derail years of planning. Trust our dedicated visa specialists to organize your documentation, verify finances, and prepare you to face the interview with absolute confidence.",
    counsellingButtonText: "Request a Visa File Review",
    ctaBannerTitle: "Get Your Visa File Evaluated by Experts",
    ctaBannerButtonText: "Schedule Visa Audit",
    metrics: [
      { value: "98%", label: "Visa Success Rate" },
      { value: "5,500+", label: "Visas Stamped" },
      { value: "12+", label: "Countries Supported" },
    ],
    visaSections: {
      left: {
        title: "Meticulous Documentation & Audit",
        desc: "Most visa rejections occur due to incomplete documents, mismatched financial details, or poorly explained academic gaps. Our operations team conducts a thorough 3-step audit of your visa packet before submission.",
        items: [
          {
            icon: "edit_document",
            title: "Academic File Audit",
            desc: "Verification of transcripts, degree certificates, gap explanations, and test reports.",
          },
          {
            icon: "payments",
            title: "Financial Proof Structuring",
            desc: "Structuring bank certificates, loan approval letters, sponsor affidavits, and source of funds declarations.",
          },
        ],
      },
      right: {
        title: "Intensive Mock Interview Prep",
        desc: "Facing the visa officer can be intimidating for students and parents alike. Our team, led by experienced mentors, simulates actual consular interview conditions. We prep you to speak with clarity, confidence, and absolute honesty.",
        items: [
          {
            icon: "forum",
            title: "Simulated Mock Panels",
            desc: "Mock rounds tailored specifically for US F-1, German MS routes, and Canada SDS guidelines.",
          },
          {
            icon: "campaign",
            title: "Feedback & Body Language Review",
            desc: "Focusing on tone, body language, maintaining eye contact, and resolving stress factors during interviews.",
          },
        ],
      },
    },
    faqs: [
      {
        q: "What is the typical visa processing timeline?",
        a: "Timeline varies by country. While US F-1 visas can take 3-5 days after the interview, UK/Canada routes can take 2-4 weeks post-filing. We advise starting documentation at least 3 months prior to intake.",
      },
      {
        q: "How do we prove financial capability to the visa officer?",
        a: "Visa officers look for liquid funds covering at least the first year's tuition and living expenses, along with a source of income. We help structure your financial file including savings, education loans, and fixed deposits.",
      },
      {
        q: "What happens during a mock interview session?",
        a: "Our experts simulate the exact embassy atmosphere. We ask standard questions about your university choice, career goals, and financials, helping you construct concise and authentic answers.",
      },
    ],
  },
  scholarships: {
    slug: "scholarships",
    title: "Scholarship Assistance",
    description:
      "Identify and apply for merit-based, need-based, and university-specific scholarships. Over ₹50Cr+ in scholarships secured.",
    metaTitle: "Study Abroad Scholarships & Financial Assistance",
    metaDescription:
      "Secure merit-based and need-based scholarships. Expert assistance in building winning scholarship essays and application profiles.",
    icon: "payments",
    color: "bg-success-gold",
    heroTitle: "Scholarships & Financial Support",
    heroDescription:
      "Higher education abroad doesn't have to mean financial distress. We help you identify, apply for, and win competitive scholarships that significantly reduce your education cost.",
    counsellingButtonText: "Check Scholarship Eligibility",
    ctaBannerTitle: "Check Which Scholarships You Qualify For",
    ctaBannerButtonText: "Schedule Free Eligibility Check",
    scholarshipsInfo: {
      left: {
        title: "How We Help You Win Scholarships",
        desc1:
          "Winning a scholarship is not just about having high marks. Universities receive thousands of applications from high-scoring students. What distinguishes a winner is their story — expressed via statement essays, recommendation letters, and a structured application file.",
        desc2:
          "Our mentorship team reviews your writing line-by-line. We help you frame your personal struggles, academic accomplishments, and future research goals into a persuasive narrative that demonstrates high value to scholarship panels.",
      },
      right: {
        title: "Our Track Record",
        stats: [
          { value: "₹50Cr+", label: "Total Scholarships Won" },
          { value: "150+", label: "Fully Funded admits" },
          { value: "40%", label: "Avg. Tuition Fee Reduction" },
          { value: "200+", label: "TA/RA Positions Secured" },
        ],
      },
    },
    scholarshipTypes: [
      {
        type: "Merit-Based Scholarships",
        desc: "Awarded by universities based on outstanding academic results, high GRE/GMAT scores, or exceptional extra-curricular portfolios. These can range from 10% to 100% tuition coverage.",
      },
      {
        type: "Graduate Assistantships (TA/RA)",
        desc: "Mainly in the US and Canada. By working 10-20 hours a week as a Teaching Assistant (TA) or Research Assistant (RA), students get tuition fee waivers and a monthly living stipend.",
      },
      {
        type: "Country-Specific Grants",
        desc: "Government-funded scholarships such as Chevening (UK), Fulbright-Nehru (USA), DAAD (Germany), and Australia Awards, covering tuition, flight tickets, and health insurance.",
      },
    ],
  },
}
