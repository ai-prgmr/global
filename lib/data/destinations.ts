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
  heroImage: string
  imageCaption: string

  stats: Array<{ label: string; value: string; icon: string }>
  universities: string[]
  visaSteps: Array<{ step: string; title: string; desc: string }>
  faqs: DestinationFAQ[]
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
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Stanford University Quad & Iconic Ivy League Research Campuses",
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
        desc: "Get your official I-20 form from the university after acceptance.",
      },
      {
        step: "2",
        title: "Pay SEVIS Fee",
        desc: "Pay the I-901 SEVIS fee online and save the payment receipt.",
      },
      {
        step: "3",
        title: "Complete DS-160",
        desc: "Fill out the DS-160 online visa application form accurately.",
      },
      {
        step: "4",
        title: "Schedule Interview",
        desc: "Book your visa interview slots at the US Embassy/Consulate.",
      },
      {
        step: "5",
        title: "Attend Interview",
        desc: "Appear for the F-1 visa interview with complete documentation.",
      },
      {
        step: "6",
        title: "Receive Visa",
        desc: "Get your visa stamped and prepare for your departure!",
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
    heroImage: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Historic University of Oxford Quadrangle & World-Leading Academics",
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
        desc: "Receive your Confirmation of Acceptance for Studies (CAS) from a licensed UK student sponsor.",
      },
      {
        step: "2",
        title: "Prepare Funds",
        desc: "Ensure you have course fees and living funds held for at least 28 consecutive days.",
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
    heroImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "University of Toronto & Top Canadian Higher Education Hubs",
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
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "University of Sydney Quadrangle & Group of Eight Research Institutions",
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
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Heidelberg & TU Munich — Europe's Premier Tuition-Free Engineering Hubs",
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
        desc: "Open a Sperrkonto (Blocked Account) in Germany and deposit required living funds (approx. €11,900).",
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
      "Discover world-class education opportunities in Ireland. Access Trinity College Dublin & Silicon Docks European tech headquarters.",
    counsellingButtonText: "Get Free Ireland Counselling",
    metaTitle: "Study in Ireland",
    metaDescription:
      "Complete guide to studying in Ireland — top universities, costs, visa process, and scholarships.",
    highlights: ["European Tech HQ", "2 Years Post-Study Work", "Friendly English Speaking"],
    averageTuition: "€10K - €25K / Year",
    popularExams: "IELTS, TOEFL, Duolingo",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Trinity College Dublin Long Room Library & Silicon Docks Tech District",
    stats: [
      { label: "Universities", value: "8 Public Universities", icon: "school" },
      { label: "Avg. Tuition/Year", value: "€10K - €25K", icon: "payments" },
      { label: "Post-Study Work", value: "2 Years Graduate Scheme", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Jan", icon: "calendar_month" },
    ],
    universities: [
      "Trinity College Dublin (TCD)",
      "University College Dublin (UCD)",
      "University of Galway",
      "University College Cork (UCC)",
      "Dublin City University (DCU)",
      "University of Limerick",
      "Maynooth University",
      "Technological University Dublin",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Get Acceptance",
        desc: "Obtain an official unconditional offer letter from an accredited Irish university.",
      },
      {
        step: "2",
        title: "AVATS Application",
        desc: "Complete the online AVATS visa application form on the Irish Immigration portal.",
      },
      {
        step: "3",
        title: "Pay Tuition & Fee",
        desc: "Pay at least €6,000 of your tuition fees and obtain Irish medical insurance.",
      },
      {
        step: "4",
        title: "Financial Proof",
        desc: "Demonstrate evidence of at least €10,000 readily accessible funds for living expenses.",
      },
      {
        step: "5",
        title: "Submit Documents",
        desc: "Submit your passport, AVATS summary sheet, transcripts, and financial proof to VFS.",
      },
      {
        step: "6",
        title: "IRP Registration",
        desc: "Register for your Irish Residence Permit (IRP) card upon arriving in Ireland.",
      },
    ],
    faqs: [
      {
        q: "Can international students work part-time in Ireland?",
        a: "Yes, non-EEA students with Stamp 2 permissions can work up to 20 hours per week during term time and up to 40 hours per week during official holiday periods.",
      },
      {
        q: "What is Ireland's Third Level Graduate Scheme?",
        a: "It allows non-EEA students graduating with an Irish Master's or PhD degree to stay and work full-time in Ireland for up to 24 months.",
      },
    ],
  },

  france: {
    slug: "france",
    flag: "🇫🇷",
    name: "France",
    region: "Europe",
    title: "Study in France",
    description:
      "Discover world-class education opportunities in France. Study at world-renowned Grandes Écoles and top Business Schools.",
    counsellingButtonText: "Get Free France Counselling",
    metaTitle: "Study in France",
    metaDescription:
      "Complete guide to studying in France — top universities, costs, visa process, and scholarships.",
    highlights: ["Top Business Schools", "Schengen Visa Access", "Rich Cultural Heritage"],
    averageTuition: "€2.7K - €20K / Year",
    popularExams: "IELTS, TOEFL, GMAT",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Sorbonne University & Elite French Business School Campuses",
    stats: [
      { label: "Universities", value: "3,500+ Institutions", icon: "school" },
      { label: "Avg. Tuition/Year", value: "€2.7K - €20K", icon: "payments" },
      { label: "Post-Study Work", value: "2 Years APS Visa", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Feb", icon: "calendar_month" },
    ],
    universities: [
      "HEC Paris",
      "INSEAD",
      "ESSEC Business School",
      "Sorbonne University",
      "Université Paris-Saclay",
      "École Polytechnique",
      "ESCP Business School",
      "Sciences Po",
      "EMLYON Business School",
      "EDHEC Business School",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Campus France EEF",
        desc: "Register on the Etudes en France (EEF) portal and complete the mandatory interview.",
      },
      {
        step: "2",
        title: "EEF Validation",
        desc: "Receive your Campus France authorization receipt upon completing the interview.",
      },
      {
        step: "3",
        title: "Proof of Funds",
        desc: "Demonstrate minimum living funds of €615/month for the academic year.",
      },
      {
        step: "4",
        title: "France-Visas Portal",
        desc: "Fill out the Long-Stay Student Visa (VLS-TS) application form.",
      },
      {
        step: "5",
        title: "VFS Appointment",
        desc: "Book an appointment at VFS Global to submit biometrics, passport, and file.",
      },
      {
        step: "6",
        title: "OFII Validation",
        desc: "Validate your VLS-TS visa online with OFII within 3 months of entering France.",
      },
    ],
    faqs: [
      {
        q: "Do I need to speak French to study in France?",
        a: "No! Hundreds of Master's and MBA programs at top French universities and Business Schools are taught 100% in English.",
      },
      {
        q: "What is the post-study work visa option in France?",
        a: "Master's graduates can apply for the 2-year APS (Autorisation Provisoire de Séjour) visa, giving them 24 months to find employment relevant to their degree.",
      },
    ],
  },

  "new-zealand": {
    slug: "new-zealand",
    flag: "🇳🇿",
    name: "New Zealand",
    region: "Asia-Pacific",
    title: "Study in New Zealand",
    description:
      "Discover world-class education opportunities in New Zealand. Top research universities set against pristine natural landscapes.",
    counsellingButtonText: "Get Free New Zealand Counselling",
    metaTitle: "Study in New Zealand",
    metaDescription:
      "Complete guide to studying in New Zealand — top universities, costs, visa process, and scholarships.",
    highlights: ["8 World-Class Unis", "Post-Study Work Rights", "Safe & Scenic Environment"],
    averageTuition: "NZD 25K - 40K / Year",
    popularExams: "IELTS, PTE, TOEFL",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "University of Auckland & High-Quality Research Institutions",
    stats: [
      { label: "Universities", value: "8 Public Universities", icon: "school" },
      { label: "Avg. Tuition/Year", value: "NZD 25K - 40K", icon: "payments" },
      { label: "Post-Study Work", value: "Up to 3 Years Open PSW", icon: "work" },
      { label: "Intake Seasons", value: "Feb / July", icon: "calendar_month" },
    ],
    universities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "University of Waikato",
      "Lincoln University",
      "Auckland University of Technology (AUT)",
    ],
    visaSteps: [
      {
        step: "1",
        title: "Offer of Place",
        desc: "Receive an unconditional Offer of Place from an accredited New Zealand institution.",
      },
      {
        step: "2",
        title: "Tuition Payment",
        desc: "Pay the required tuition fees and save the official fee receipt.",
      },
      {
        step: "3",
        title: "Financial Funds",
        desc: "Show evidence of at least NZD 20,000 per year for living expenses.",
      },
      {
        step: "4",
        title: "Medical & Clearance",
        desc: "Undergo chest X-ray / medical exam and obtain police clearance certificate.",
      },
      {
        step: "5",
        title: "Submit Student Visa",
        desc: "Submit your Fee Paying Student Visa application online via Immigration New Zealand (INZ).",
      },
      {
        step: "6",
        title: "Receive E-Visa",
        desc: "Receive your student visa approval electronically and prepare for travel.",
      },
    ],
    faqs: [
      {
        q: "How many years of post-study work visa does New Zealand offer?",
        a: "Graduates of Master's and PhD programs receive up to 3 years of open Post-Study Work Visa rights.",
      },
      {
        q: "Can I bring my family to New Zealand while studying?",
        a: "Yes, students enrolled in eligible Master's or PhD programs can support an open work visa for their spouse and domestic student status for their children.",
      },
    ],
  },

  singapore: {
    slug: "singapore",
    flag: "🇸🇬",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Study in Singapore",
    description:
      "Discover world-class education opportunities in Singapore. Asia's top premier financial hub & NUS / NTU top-ranked global universities.",
    counsellingButtonText: "Get Free Singapore Counselling",
    metaTitle: "Study in Singapore",
    metaDescription:
      "Complete guide to studying in Singapore — top universities, costs, visa process, and scholarships.",
    highlights: ["Global Financial Hub", "NUS & NTU Top Rankings", "Safe & Clean Nation"],
    averageTuition: "SGD 20K - 40K / Year",
    popularExams: "IELTS, TOEFL, SAT",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "National University of Singapore (NUS) & Global Financial District",
    stats: [
      { label: "Universities", value: "6 Autonomous Unis", icon: "school" },
      { label: "Avg. Tuition/Year", value: "SGD 20K - 40K", icon: "payments" },
      { label: "Post-Study Work", value: "1-Year LTVP Pass", icon: "work" },
      { label: "Intake Seasons", value: "Aug / Jan", icon: "calendar_month" },
    ],
    universities: [
      "National University of Singapore (NUS)",
      "Nanyang Technological University (NTU)",
      "Singapore Management University (SMU)",
      "Singapore University of Technology and Design (SUTD)",
      "Singapore Institute of Technology (SIT)",
      "INSEAD Asia Campus",
    ],
    visaSteps: [
      {
        step: "1",
        title: "SOLAR Registration",
        desc: "Your university registers your application on the Student's Pass Online Application & Registration (SOLAR) system.",
      },
      {
        step: "2",
        title: "Submit eForm 16",
        desc: "Log in to SOLAR and submit eForm 16 with personal and financial information.",
      },
      {
        step: "3",
        title: "IPA Approval",
        desc: "Receive your In-Principle Approval (IPA) letter from the ICA.",
      },
      {
        step: "4",
        title: "Enter Singapore",
        desc: "Use the IPA letter as a single-entry visa to enter Singapore.",
      },
      {
        step: "5",
        title: "Collect Pass",
        desc: "Complete medical check-up and collect physical Student's Pass card at ICA Building.",
      },
    ],
    faqs: [
      {
        q: "Why is Singapore considered an ideal destination for Asian students?",
        a: "Singapore hosts two top-15 global universities (NUS & NTU), is the financial capital of Southeast Asia, and has a clean, safe, English-speaking environment.",
      },
      {
        q: "What is the tuition grant scheme in Singapore?",
        a: "The MOE Tuition Grant offers subsidized tuition fees for international students in exchange for a commitment to work in Singapore registered companies for 3 years post-graduation.",
      },
    ],
  },

  dubai: {
    slug: "dubai",
    flag: "🇦🇪",
    name: "Dubai (UAE)",
    region: "Middle East",
    title: "Study in Dubai (UAE)",
    description:
      "Discover world-class education opportunities in Dubai (UAE). Study at international branch campuses in a tax-free job market.",
    counsellingButtonText: "Get Free Dubai Counselling",
    metaTitle: "Study in Dubai (UAE)",
    metaDescription:
      "Complete guide to studying in Dubai (UAE) — top universities, costs, visa process, and scholarships.",
    highlights: ["International Campuses", "Tax-Free Job Options", "Rapidly Growing Economy"],
    averageTuition: "AED 40K - 80K / Year",
    popularExams: "IELTS, TOEFL",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Dubai International Academic City & Modern Global Hub",
    stats: [
      { label: "Universities", value: "60+ Branch Campuses", icon: "school" },
      { label: "Avg. Tuition/Year", value: "AED 40K - 80K", icon: "payments" },
      { label: "Post-Study Work", value: "Green & Golden Visas", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Jan / May", icon: "calendar_month" },
    ],
    universities: [
      "Heriot-Watt University Dubai",
      "University of Wollongong in Dubai (UOWD)",
      "Middlesex University Dubai",
      "Rochester Institute of Technology (RIT) Dubai",
      "Birla Institute of Technology and Science (BITS) Pilani Dubai",
      "Manipal Academy of Higher Education Dubai",
      "SP Jain School of Global Management",
      "Canadian University Dubai",
    ],
    visaSteps: [
      {
        step: "1",
        title: "University Admission",
        desc: "Get admitted into a Dubai International Academic City or Knowledge Park institution.",
      },
      {
        step: "2",
        title: "Visa Sponsorship",
        desc: "The university acts as your visa sponsor and initiates the Student Entry Permit.",
      },
      {
        step: "3",
        title: "Entry Permit",
        desc: "Receive your electronic Student Entry Permit to travel to the UAE.",
      },
      {
        step: "4",
        title: "Medical & Emirates ID",
        desc: "Undergo medical fitness test (blood test & chest X-ray) and apply for Emirates ID.",
      },
      {
        step: "5",
        title: "Visa Stamping",
        desc: "Get the 1-year renewable student residence visa stamped on your passport.",
      },
    ],
    faqs: [
      {
        q: "Can I work while studying in Dubai?",
        a: "Yes! Students can work part-time in free zone corporate offices, events, and university campuses with university permission.",
      },
      {
        q: "Are degrees from branch campuses in Dubai recognized globally?",
        a: "Yes, international branch campuses (e.g. Heriot-Watt, Wollongong, RIT) issue the exact same degree certificate as their home campus in the UK, Australia, or USA.",
      },
    ],
  },

  "hong-kong": {
    slug: "hong-kong",
    flag: "🇭🇰",
    name: "Hong Kong",
    region: "Asia-Pacific",
    title: "Study in Hong Kong",
    description:
      "Discover world-class education opportunities in Hong Kong. The gateway to Asian commerce with world-ranked English-medium universities.",
    counsellingButtonText: "Get Free Hong Kong Counselling",
    metaTitle: "Study in Hong Kong",
    metaDescription:
      "Complete guide to studying in Hong Kong — top universities, costs, visa process, and scholarships.",
    highlights: ["Gateway to Asia", "High-Ranking Universities", "Multicultural Setting"],
    averageTuition: "HKD 120K - 170K / Year",
    popularExams: "IELTS, TOEFL",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "University of Hong Kong (HKU) & Premier Asian Financial Center",
    stats: [
      { label: "Universities", value: "8 Public Universities", icon: "school" },
      { label: "Avg. Tuition/Year", value: "HKD 120K - 170K", icon: "payments" },
      { label: "Post-Study Work", value: "2 Years IANG Visa", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Jan", icon: "calendar_month" },
    ],
    universities: [
      "University of Hong Kong (HKU)",
      "The Hong Kong University of Science and Technology (HKUST)",
      "The Chinese University of Hong Kong (CUHK)",
      "City University of Hong Kong (CityU)",
      "The Hong Kong Polytechnic University (PolyU)",
      "Hong Kong Baptist University (HKBU)",
    ],
    visaSteps: [
      {
        step: "1",
        title: "University Offer",
        desc: "Accept your university offer letter; your institution acts as local sponsor.",
      },
      {
        step: "2",
        title: "Form ID995A",
        desc: "Complete the application form for entry for study in Hong Kong.",
      },
      {
        step: "3",
        title: "Financial Proof",
        desc: "Provide bank statements showing funds for tuition and living expenses.",
      },
      {
        step: "4",
        title: "Receive e-Visa",
        desc: "The HK Immigration Department issues an e-Visa notification slip.",
      },
      {
        step: "5",
        title: "HKID Registration",
        desc: "Apply for a Hong Kong Identity Card (HKID) within 30 days of arrival.",
      },
    ],
    faqs: [
      {
        q: "What is the IANG visa in Hong Kong?",
        a: "Immigration Arrangements for Non-local Graduates (IANG) allows non-local graduates to stay in Hong Kong for 24 months after graduation to seek employment.",
      },
    ],
  },

  europe: {
    slug: "europe",
    flag: "🇪🇺",
    name: "Europe",
    region: "Europe",
    title: "Study in Europe",
    description:
      "Discover world-class education opportunities in Europe. Access cross-border degrees, Erasmus+ mobility, and rich cultural heritage.",
    counsellingButtonText: "Get Free Europe Counselling",
    metaTitle: "Study in Europe",
    metaDescription:
      "Complete guide to studying in Europe — top universities, costs, visa process, and scholarships.",
    highlights: ["Multi-Country Travel", "Erasmus+ Programs", "Diverse Cultures & Langs"],
    averageTuition: "Varies by Country",
    popularExams: "IELTS, TOEFL",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Historic European University Campuses & Cross-Border Academic Mobility",
    stats: [
      { label: "Universities", value: "1,000+ Institutions", icon: "school" },
      { label: "Avg. Tuition/Year", value: "Varies (€0 to €15K)", icon: "payments" },
      { label: "Post-Study Work", value: "Schengen Job Seeker Visas", icon: "work" },
      { label: "Intake Seasons", value: "Sept / Feb", icon: "calendar_month" },
    ],
    universities: [
      "ETH Zurich (Switzerland)",
      "EPFL (Switzerland)",
      "Delft University of Technology (Netherlands)",
      "University of Amsterdam (Netherlands)",
      "KU Leuven (Belgium)",
      "KTH Royal Institute of Technology (Sweden)",
      "Politecnico di Milano (Italy)",
      "University of Copenhagen (Denmark)",
    ],
    visaSteps: [
      {
        step: "1",
        title: "University Admission",
        desc: "Secure an admission offer from a recognized European higher education institution.",
      },
      {
        step: "2",
        title: "Long-Stay Visa",
        desc: "Apply for a National (Type D) Visa at the relevant European embassy.",
      },
      {
        step: "3",
        title: "Schengen Proof",
        desc: "Show proof of accommodation, medical insurance, and living funds.",
      },
      {
        step: "4",
        title: "Consular Biometrics",
        desc: "Attend biometric appointment and document submission.",
      },
      {
        step: "5",
        title: "Residence Permit",
        desc: "Apply for your local Residence Permit card upon arrival in your destination country.",
      },
    ],
    faqs: [
      {
        q: "Can I travel to other countries in Europe with a student visa?",
        a: "Yes! A student visa/residence permit from any Schengen area country allows visa-free travel across all 29 Schengen member states for up to 90 days.",
      },
    ],
  },
}
