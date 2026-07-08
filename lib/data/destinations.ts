export interface DestinationFAQ {
  q: string
  a: string
}

export interface DestinationData {
  slug: string
  flag: string
  name: string
  region: "North America" | "Europe" | "Asia-Pacific" | "Middle East"
  title: string
  description: string
  counsellingButtonText: string
  metaTitle: string
  metaDescription: string
  highlights: string[]
  averageTuition: string
  popularExams: string

  // USA-specific or optional rich content fields
  stats?: Array<{ label: string; value: string; icon: string }>
  universities?: string[]
  visaSteps?: Array<{ step: string; title: string; desc: string }>
  faqs?: DestinationFAQ[]
}

export const DESTINATIONS_DATA: Record<string, DestinationData> = {
  usa: {
    slug: "usa",
    flag: "🇺🇸",
    name: "USA",
    region: "North America",
    title: "Study in the USA",
    description:
      "Home to the world's top-ranked universities, the USA offers unparalleled academic excellence, cutting-edge research, and global career opportunities.",
    counsellingButtonText: "Get Free USA Counselling",
    metaTitle: "Study in USA",
    metaDescription:
      "Complete guide to studying in the USA — top universities, costs, visa process, and scholarships. Get expert guidance from The Globalizers.",
    highlights: ["4,000+ Universities", "3 Years OPT (STEM)", "Top Tier Research"],
    averageTuition: "$20K - $50K / Year",
    popularExams: "GRE, GMAT, SAT, TOEFL, IELTS",
    stats: [
      { label: "Universities", value: "4,000+", icon: "school" },
      { label: "Avg. Tuition/Year", value: "$20-50K", icon: "payments" },
      { label: "Post-Study Work", value: "3 Years OPT", icon: "work" },
      { label: "Intake Seasons", value: "Fall / Spring", icon: "calendar_month" },
    ],
    universities: [
      "Harvard University",
      "Stanford University",
      "MIT",
      "Columbia University",
      "University of Chicago",
      "UC Berkeley",
      "UCLA",
      "University of Michigan",
      "Carnegie Mellon",
      "Georgia Tech",
      "NYU",
      "Purdue University",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Receive I-20",
        desc: "Get your I-20 form from the university after acceptance.",
      },
      {
        step: "2",
        title: "Pay SEVIS Fee",
        desc: "Pay the I-901 SEVIS fee and save the receipt.",
      },
      {
        step: "3",
        title: "Complete DS-160",
        desc: "Fill out the DS-160 online visa application form.",
      },
      {
        step: "4",
        title: "Schedule Interview",
        desc: "Book your visa interview at the US Embassy/Consulate.",
      },
      {
        step: "5",
        title: "Attend Interview",
        desc: "Appear for the F-1 visa interview with all documents.",
      },
      {
        step: "6",
        title: "Receive Visa",
        desc: "Get your visa stamped and prepare for departure!",
      },
    ],
    faqs: [
      {
        q: "What is F-1 OPT in the USA?",
        a: "Optional Practical Training (OPT) allows F-1 students to work in the USA for up to 12 months after graduation. STEM graduates qualify for a 24-month extension, totaling 3 years.",
      },
      {
        q: "Are scholarships available for international students in the US?",
        a: "Yes, US universities offer merit-based and need-based scholarships, as well as Graduate Assistantships (TA/RA) that cover tuition and provide living stipends.",
      },
      {
        q: "What are the primary intake seasons for USA?",
        a: "The main intake is Fall (August/September), which offers the most courses and funding opportunities, followed by Spring (January).",
      },
    ],
  },
  uk: {
    slug: "uk",
    flag: "🇬🇧",
    name: "United Kingdom",
    region: "Europe",
    title: "Study in United Kingdom",
    description:
      "Discover world-class education opportunities in United Kingdom. Access top historic universities with flexible master's programs and a post-study work visa.",
    counsellingButtonText: "Get Free UK Counselling",
    metaTitle: "Study in United Kingdom",
    metaDescription:
      "Complete guide to studying in United Kingdom — top universities, costs, visa process, and scholarships. Expert guidance from The Globalizers.",
    highlights: ["1-Year Master's", "2 Years Post-Study Work", "Oxford & Cambridge"],
    averageTuition: "£15K - £35K / Year",
    popularExams: "IELTS, PTE, TOEFL",
    stats: [
      { label: "Universities", value: "150+", icon: "school" },
      { label: "Avg. Tuition/Year", value: "£15K - £35K", icon: "payments" },
      { label: "Post-Study Work", value: "2 Years Graduate Route", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Jan", icon: "calendar_month" },
    ],
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "UCL (University College London)",
      "London School of Economics (LSE)",
      "University of Edinburgh",
      "King's College London",
      "Manchester University",
      "University of Warwick",
      "Bristol University",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Obtain CAS Letter",
        desc: "Receive your Confirmation of Acceptance for Studies (CAS) from a licensed student sponsor.",
      },
      {
        step: "2",
        title: "Prepare Funds",
        desc: "Ensure you have enough money to pay for your course and support yourself (held for at least 28 days).",
      },
      {
        step: "3",
        title: "Online Application",
        desc: "Fill out the Student Visa application online on the UK government portal.",
      },
      {
        step: "4",
        title: "Book Biometrics",
        desc: "Schedule an appointment at a visa application centre to submit biometrics.",
      },
      {
        step: "5",
        title: "Receive Decision",
        desc: "Wait for processing (typically 3 weeks) to receive your passport with the entry vignette.",
      },
    ],
    faqs: [
      {
        q: "What is the UK Graduate Route visa?",
        a: "The Graduate Route allows international students who have completed an undergraduate or postgraduate degree in the UK to stay and work for up to 2 years (3 years for PhD graduates).",
      },
      {
        q: "How long does a master's degree take in the UK?",
        a: "Most master's programs in the UK are full-time and last for 12 months, which saves on tuition and living costs compared to 2-year programs elsewhere.",
      },
      {
        q: "Do I need IELTS to study in the UK?",
        a: "While IELTS is widely accepted, many UK universities accept PTE or TOEFL, and some may waive the requirement if you met specific English scores in high school.",
      },
    ],
  },
  canada: {
    slug: "canada",
    flag: "🇨🇦",
    name: "Canada",
    region: "North America",
    title: "Study in Canada",
    description:
      "Discover world-class education opportunities in Canada. Benefit from high-quality academic systems, safe communities, and direct pathways to permanent residency.",
    counsellingButtonText: "Get Free Canada Counselling",
    metaTitle: "Study in Canada",
    metaDescription:
      "Complete guide to studying in Canada — top universities, costs, visa process, and scholarships. Get expert guidance from The Globalizers.",
    highlights: ["PGWP (Post-Grad Work Permit)", "PR / Express Entry Path", "High Quality of Life"],
    averageTuition: "CAD 20K - 45K / Year",
    popularExams: "IELTS, PTE, TOEFL",
    stats: [
      { label: "Universities", value: "100+", icon: "school" },
      { label: "Avg. Tuition/Year", value: "CAD 20K - 45K", icon: "payments" },
      { label: "Post-Study Work", value: "Up to 3 Years PGWP", icon: "work" },
      { label: "Intake Seasons", value: "Fall / Winter / Spring", icon: "calendar_month" },
    ],
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Waterloo",
      "McMaster University",
      "University of Alberta",
      "Western University",
      "York University",
      "Concordia University",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Get LOA",
        desc: "Receive your official Letter of Acceptance (LOA) from a Designated Learning Institution (DLI).",
      },
      {
        step: "2",
        title: "Purchase GIC",
        desc: "Buy a Guaranteed Investment Certificate (GIC) from a participating Canadian bank for proof of living expenses.",
      },
      {
        step: "3",
        title: "Pass Medical Exam",
        desc: "Undergo a medical exam with a panel physician approved by IRCC.",
      },
      {
        step: "4",
        title: "Submit Study Permit",
        desc: "Apply online for your study permit through the SDS (Student Direct Stream) or regular stream.",
      },
      {
        step: "5",
        title: "Biometrics & Decision",
        desc: "Submit biometrics at a VFS Global center and wait for your passport request letter.",
      },
    ],
    faqs: [
      {
        q: "What is PGWP in Canada?",
        a: "The Post-Graduation Work Permit (PGWP) allows students who graduated from eligible DLIs to work in Canada for up to 3 years, which helps accumulate points for Express Entry PR.",
      },
      {
        q: "What is the Student Direct Stream (SDS) in Canada?",
        a: "SDS is an expedited study permit processing program for residents of select countries, including India, which typically processes permits within 20 calendar days.",
      },
    ],
  },
  australia: {
    slug: "australia",
    flag: "🇦🇺",
    name: "Australia",
    region: "Asia-Pacific",
    title: "Study in Australia",
    description:
      "Discover world-class education opportunities in Australia. Experience top historic Group of Eight universities, exceptional lifestyle, and extended post-study work rights.",
    counsellingButtonText: "Get Free Australia Counselling",
    metaTitle: "Study in Australia",
    metaDescription:
      "Complete guide to studying in Australia — top universities, costs, visa process, and scholarships. Get expert guidance from The Globalizers.",
    highlights: ["Up to 4 Years PSW", "CRICOS Registered Courses", "Stunning Cities"],
    averageTuition: "AUD 25K - 50K / Year",
    popularExams: "IELTS, PTE, TOEFL",
    stats: [
      { label: "Universities", value: "40+", icon: "school" },
      { label: "Avg. Tuition/Year", value: "AUD 25K - 50K", icon: "payments" },
      { label: "Post-Study Work", value: "2 to 4 Years PSW", icon: "work" },
      { label: "Intake Seasons", value: "Feb / July", icon: "calendar_month" },
    ],
    universities: [
      "University of Melbourne",
      "University of Sydney",
      "Australian National University",
      "University of Queensland",
      "UNSW Sydney",
      "Monash University",
      "University of Western Australia",
      "University of Adelaide",
      "UTS (University of Technology Sydney)",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Secure CoE",
        desc: "Obtain a Confirmation of Enrolment (CoE) from your chosen Australian university.",
      },
      {
        step: "2",
        title: "Purchase OSHC",
        desc: "Acquire Overseas Student Health Cover (OSHC) for the entire duration of your studies.",
      },
      {
        step: "3",
        title: "Prepare GTE Statement",
        desc: "Draft a Genuine Temporary Entrant (GTE) statement showing your intention to study and return.",
      },
      {
        step: "4",
        title: "Submit Subclass 500",
        desc: "Submit your student visa application online via the ImmiAccount portal.",
      },
      {
        step: "5",
        title: "Biometrics & Medical",
        desc: "Complete biometric collection and health checks, and await the visa outcome.",
      },
    ],
    faqs: [
      {
        q: "What is CRICOS in Australia?",
        a: "CRICOS is the Commonwealth Register of Institutions and Courses for Overseas Students. International students must study a course registered on CRICOS to maintain visa validity.",
      },
      {
        q: "How long can I work post-study in Australia?",
        a: "Depending on your degree and location, you can get between 2 to 4 years of Temporary Graduate visa (Subclass 485) work rights.",
      },
    ],
  },
  germany: {
    slug: "germany",
    flag: "🇩🇪",
    name: "Germany",
    region: "Europe",
    title: "Study in Germany",
    description:
      "Discover world-class education opportunities in Germany. Learn at world-renowned public universities with zero tuition fees and rich industrial connections.",
    counsellingButtonText: "Get Free Germany Counselling",
    metaTitle: "Study in Germany",
    metaDescription:
      "Complete guide to studying in Germany — top universities, costs, visa process, and scholarships. Get expert guidance from The Globalizers.",
    highlights: ["Zero Tuition (Public Unis)", "18-Month Job Seeking Visa", "Engineering & Tech Hub"],
    averageTuition: "€0 - €3,000 / Year",
    popularExams: "IELTS, TOEFL, TestDaF",
    stats: [
      { label: "Universities", value: "380+", icon: "school" },
      { label: "Avg. Tuition/Year", value: "€0 (Public Universities)", icon: "payments" },
      { label: "Post-Study Work", value: "18 Months Job Seeking", icon: "work" },
      { label: "Intake Seasons", value: "Winter (Oct) / Summer (April)", icon: "calendar_month" },
    ],
    universities: [
      "Technical University of Munich (TUM)",
      "Ludwig Maximilian University of Munich",
      "Heidelberg University",
      "RWTH Aachen University",
      "Karlsruhe Institute of Technology (KIT)",
      "Humboldt University of Berlin",
      "Technical University of Berlin",
      "University of Stuttgart",
    ],
    visaSteps: [
      {
        step: "1",
        title: "APS Certification",
        desc: "Get your academic credentials verified by the Academic Evaluation Centre (APS) India.",
      },
      {
        step: "2",
        title: "Open Blocked Account",
        desc: "Open a Sperrkonto (Blocked Account) in Germany and deposit the required amount (approx. €11,900) to prove living funds.",
      },
      {
        step: "3",
        title: "Book Visa Slot",
        desc: "Book a student visa interview appointment at the German Embassy or VFS.",
      },
      {
        step: "4",
        title: "Submit File",
        desc: "Submit your university admission letter, APS certificate, blocked account proof, and health insurance.",
      },
      {
        step: "5",
        title: "Receive Passport",
        desc: "Your visa will be approved, allowing you to enter Germany to register as a student.",
      },
    ],
    faqs: [
      {
        q: "Is education really free in Germany?",
        a: "Yes, public universities in Germany do not charge tuition fees for both domestic and international students. Students only pay a small semester contribution (approx. €150-€400) which usually includes a public transit ticket.",
      },
      {
        q: "What is an APS certificate for Germany?",
        a: "APS is a mandatory verification of Indian academic records required by the German Embassy before applying for a student visa.",
      },
    ],
  },
  ireland: {
    slug: "ireland",
    flag: "🇮🇪",
    name: "Ireland",
    region: "Europe",
    title: "Study in Ireland",
    description:
      "Discover world-class education opportunities in Ireland. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Ireland Counselling",
    metaTitle: "Study in Ireland",
    metaDescription:
      "Complete guide to studying in Ireland — top universities, costs, visa process, and scholarships.",
    highlights: ["European Tech HQ", "2 Years Post-Study Work", "Friendly English Speaking"],
    averageTuition: "€10K - €25K / Year",
    popularExams: "IELTS, TOEFL, Duolingo",
  },
  france: {
    slug: "france",
    flag: "🇫🇷",
    name: "France",
    region: "Europe",
    title: "Study in France",
    description:
      "Discover world-class education opportunities in France. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free France Counselling",
    metaTitle: "Study in France",
    metaDescription:
      "Complete guide to studying in France — top universities, costs, visa process, and scholarships.",
    highlights: ["Top Business Schools", "Schengen Visa Access", "Rich Cultural Heritage"],
    averageTuition: "€5K - €25K / Year",
    popularExams: "IELTS, TOEFL, GMAT",
  },
  "new-zealand": {
    slug: "new-zealand",
    flag: "🇳🇿",
    name: "New Zealand",
    region: "Asia-Pacific",
    title: "Study in New Zealand",
    description:
      "Discover world-class education opportunities in New Zealand. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free New Zealand Counselling",
    metaTitle: "Study in New Zealand",
    metaDescription:
      "Complete guide to studying in New Zealand — top universities, costs, visa process, and scholarships.",
    highlights: ["8 World-Class Unis", "Post-Study Work Rights", "Safe & Scenic Environment"],
    averageTuition: "NZD 25K - 40K / Year",
    popularExams: "IELTS, PTE, TOEFL",
  },
  singapore: {
    slug: "singapore",
    flag: "🇸🇬",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Study in Singapore",
    description:
      "Discover world-class education opportunities in Singapore. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Singapore Counselling",
    metaTitle: "Study in Singapore",
    metaDescription:
      "Complete guide to studying in Singapore — top universities, costs, visa process, and scholarships.",
    highlights: ["Global Financial Hub", "NUS & NTU Top Rankings", "Safe & Clean Nation"],
    averageTuition: "SGD 20K - 40K / Year",
    popularExams: "IELTS, TOEFL, SAT",
  },
  dubai: {
    slug: "dubai",
    flag: "🇦🇪",
    name: "Dubai (UAE)",
    region: "Middle East",
    title: "Study in Dubai (UAE)",
    description:
      "Discover world-class education opportunities in Dubai (UAE). Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Dubai Counselling",
    metaTitle: "Study in Dubai (UAE)",
    metaDescription:
      "Complete guide to studying in Dubai (UAE) — top universities, costs, visa process, and scholarships.",
    highlights: ["International Campuses", "Tax-Free Job Options", "Rapidly Growing Economy"],
    averageTuition: "AED 40K - 80K / Year",
    popularExams: "IELTS, TOEFL",
  },
  "hong-kong": {
    slug: "hong-kong",
    flag: "🇭🇰",
    name: "Hong Kong",
    region: "Asia-Pacific",
    title: "Study in Hong Kong",
    description:
      "Discover world-class education opportunities in Hong Kong. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Hong Kong Counselling",
    metaTitle: "Study in Hong Kong",
    metaDescription:
      "Complete guide to studying in Hong Kong — top universities, costs, visa process, and scholarships.",
    highlights: ["Gateway to Asia", "High-Ranking Universities", "Multicultural Setting"],
    averageTuition: "HKD 120K - 170K / Year",
    popularExams: "IELTS, TOEFL",
  },
  europe: {
    slug: "europe",
    flag: "🇪🇺",
    name: "Europe",
    region: "Europe",
    title: "Study in Europe",
    description:
      "Discover world-class education opportunities in Europe. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Europe Counselling",
    metaTitle: "Study in Europe",
    metaDescription:
      "Complete guide to studying in Europe — top universities, costs, visa process, and scholarships.",
    highlights: ["Multi-Country Travel", "Erasmus+ Programs", "Diverse Cultures & Langs"],
    averageTuition: "Varies by Country",
    popularExams: "IELTS, TOEFL",
  },
}
