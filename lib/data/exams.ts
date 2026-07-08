export interface ExamSection {
  name: string
  duration: string
  questions: string
  score: string
  icon: string
}

export interface ExamFAQ {
  q: string
  a: string
}

export interface ExamCoachingApproach {
  icon: string
  title: string
  desc: string
}

export interface ExamData {
  slug: string
  name: string
  fullName: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  counsellingButtonText: string
  ctaBannerText: string
  heroImage?: string
  sections?: ExamSection[]
  faqs?: ExamFAQ[]
  coaching?: ExamCoachingApproach[]
}

export const EXAMS_DATA: Record<string, ExamData> = {
  gre: {
    slug: "gre",
    name: "GRE",
    fullName: "Graduate Record Examinations",
    title: "GRE Preparation",
    description:
      "Master the GRE with personalized coaching from India's leading GRE Verbal authority. Our students average a 15-point score improvement.",
    metaTitle: "GRE Preparation | The Globalizers",
    metaDescription:
      "Master the GRE with India's leading GRE Verbal authority Prashant Hemnani. Personalized coaching, and score improvement guarantee.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Book a Free Demo Class",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE",
    sections: [
      {
        name: "Verbal Reasoning",
        duration: "~35 min",
        questions: "27 questions",
        score: "130–170",
        icon: "menu_book",
      },
      {
        name: "Quantitative Reasoning",
        duration: "~47 min",
        questions: "27 questions",
        score: "130–170",
        icon: "calculate",
      },
      {
        name: "Analytical Writing",
        duration: "~30 min",
        questions: "1 essay",
        score: "0–6",
        icon: "edit_note",
      },
    ],
    faqs: [
      {
        q: "What is a good GRE score?",
        a: "A score of 320+ (Verbal + Quant) is considered competitive for top universities. For Ivy League schools, aim for 325+.",
      },
      {
        q: "How long should I prepare for the GRE?",
        a: "Most students need 2-3 months of focused preparation. Our intensive batch covers all content in 8 weeks.",
      },
      {
        q: "Is the GRE going away?",
        a: "No. While some programs have made it optional, the GRE remains widely accepted and can strengthen your application significantly.",
      },
      {
        q: "What makes The Globalizers' GRE coaching different?",
        a: "Personalized coaching by Prashant Hemnani — India's leading GRE Verbal authority — combined with AI-powered practice tools and a score improvement guarantee.",
      },
    ],
    coaching: [
      {
        icon: "group",
        title: "Live Batches",
        desc: "Interactive live sessions with Prashant Hemnani and faculty.",
      },
      {
        icon: "person",
        title: "1-on-1 Coaching",
        desc: "Personalized sessions for targeted score improvement.",
      },
      {
        icon: "weekend",
        title: "Weekend Batches",
        desc: "Flexible schedules for working professionals.",
      },
    ],
  },
  gmat: {
    slug: "gmat",
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    title: "GMAT Focus Edition Preparation",
    description:
      "Specialized GMAT Focus Edition coaching focused on data analysis, verbal reasoning, and math strategy for top B-school admissions.",
    metaTitle: "GMAT Preparation | The Globalizers",
    metaDescription:
      "Master the GMAT Focus Edition with The Globalizers. Expert coaching for Verbal, Quant, and Data Insights sections.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your GMAT Journey",
    sections: [
      {
        name: "Quantitative Reasoning",
        duration: "45 min",
        questions: "21 questions",
        score: "60-90",
        icon: "calculate",
      },
      {
        name: "Verbal Reasoning",
        duration: "45 min",
        questions: "23 questions",
        score: "60-90",
        icon: "menu_book",
      },
      {
        name: "Data Insights",
        duration: "45 min",
        questions: "20 questions",
        score: "60-90",
        icon: "hub",
      },
    ],
    faqs: [
      {
        q: "What is the GMAT Focus Edition?",
        a: "The GMAT Focus Edition is the current version of the GMAT. It is shorter, consists of three 45-minute sections (Quant, Verbal, Data Insights), and no longer contains the Analytical Writing assessment.",
      },
      {
        q: "What is a good score on the GMAT Focus Edition?",
        a: "Since the scoring scale ranges from 205 to 805, a score of 645+ is considered excellent, equivalent to a 700+ on the old GMAT scale.",
      },
      {
        q: "How long is GMAT score validity?",
        a: "GMAT scores are valid for 5 years from your test date, allowing you to prepare and take the exam early in your career.",
      },
    ],
    coaching: [
      {
        icon: "calculate",
        title: "Math Shortcut Tricks",
        desc: "Master time-saving strategies and short-cuts for Quant and Data Insights.",
      },
      {
        icon: "psychology",
        title: "Data Insights Prep",
        desc: "Comprehensive training on data sufficiency, table analysis, and multi-source reasoning.",
      },
      {
        icon: "star",
        title: "Mock Test Series",
        desc: "Access to official-style GMAT Focus mock exams with detailed score reporting.",
      },
      {
        icon: "person",
        title: "Personalized Reviews",
        desc: "1-on-1 faculty feedback to address weaknesses and build confidence.",
      },
    ],
  },
  ielts: {
    slug: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    title: "IELTS Coaching",
    description:
      "Comprehensive IELTS coaching for all four modules — Listening, Reading, Writing, and Speaking. Score a band 7.5+ guaranteed.",
    metaTitle: "IELTS Preparation | The Globalizers",
    metaDescription:
      "Get a band 7.5+ in IELTS. Expert training for Academic and General modules, mock tests, and mock speaking feedback.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your IELTS Journey",
    sections: [
      {
        name: "Listening",
        duration: "30 min",
        questions: "40 questions",
        score: "Band 1-9",
        icon: "hearing",
      },
      {
        name: "Reading",
        duration: "60 min",
        questions: "40 questions",
        score: "Band 1-9",
        icon: "menu_book",
      },
      {
        name: "Writing",
        duration: "60 min",
        questions: "2 tasks",
        score: "Band 1-9",
        icon: "edit_note",
      },
      {
        name: "Speaking",
        duration: "11-14 min",
        questions: "3 parts interview",
        score: "Band 1-9",
        icon: "record_voice_over",
      },
    ],
    faqs: [
      {
        q: "What is the difference between IELTS Academic and General?",
        a: "IELTS Academic is for students applying for higher education, while IELTS General Training is for migration, work experience, or secondary education purposes.",
      },
      {
        q: "What is a good IELTS score?",
        a: "Most top universities require an overall band score of 6.5 or 7.0, with no individual section band below 6.0.",
      },
      {
        q: "How long is the IELTS score valid?",
        a: "IELTS scores are valid for 2 years from the date of your test.",
      },
    ],
    coaching: [
      {
        icon: "record_voice_over",
        title: "1-on-1 Speaking Mocks",
        desc: "Practice with native-level speakers and get immediate feedback on fluency and grammar.",
      },
      {
        icon: "edit_document",
        title: "Writing File Assessment",
        desc: "Regular evaluation of Task 1 and Task 2 essays with expert score band mapping.",
      },
      {
        icon: "campaign",
        title: "Listening & Reading Drills",
        desc: "Intensive training on multiple choice, matching, and sentence completion formats.",
      },
      {
        icon: "menu_book",
        title: "Daily Practice Batches",
        desc: "Multiple batches throughout the day to suit your schedule.",
      },
    ],
  },
  pte: {
    slug: "pte",
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    title: "PTE Academic Coaching",
    description:
      "PTE Academic coaching with computer-based practice tests, templates, and AI-driven scoring analysis.",
    metaTitle: "PTE Academic Coaching | The Globalizers",
    metaDescription:
      "Score 79+ in PTE Academic. Comprehensive training, software mock tests, and templates for speaking and writing tasks.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your PTE Journey",
    sections: [
      {
        name: "Speaking & Writing",
        duration: "54-67 min",
        questions: "Several short tasks",
        score: "10-90 points",
        icon: "edit_note",
      },
      {
        name: "Reading",
        duration: "29-30 min",
        questions: "Fill-ups, MCQs",
        score: "10-90 points",
        icon: "menu_book",
      },
      {
        name: "Listening",
        duration: "30-43 min",
        questions: "Dictation, summaries",
        score: "10-90 points",
        icon: "hearing",
      },
    ],
    faqs: [
      {
        q: "How is the PTE Academic scored?",
        a: "PTE is a 100% computer-based test scored by an automated engine on a scale of 10 to 90 points. It grades communicative skills and enabling skills.",
      },
      {
        q: "Is PTE accepted for Canadian student visas?",
        a: "Yes, IRCC accepts PTE Academic for all student visa applications, including the SDS stream (requires a minimum score of 60).",
      },
    ],
    coaching: [
      {
        icon: "laptop_mac",
        title: "PTE Software Simulation",
        desc: "Practice on a software platform that replicates the exact PTE test-day interface and constraints.",
      },
      {
        icon: "description",
        title: "Proven Speaking Templates",
        desc: "Get access to templates for 'Describe Image' and 'Retell Lecture' to secure high scores easily.",
      },
      {
        icon: "speed",
        title: "Fast Scoring Turnaround",
        desc: "Quick evaluation of writing and listening responses to speed up your learning curve.",
      },
    ],
  },
  sat: {
    slug: "sat",
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    title: "Digital SAT Preparation",
    description:
      "Strategic Digital SAT preparation for undergraduate admissions to top US, Canadian, and global universities.",
    metaTitle: "Digital SAT Preparation | The Globalizers",
    metaDescription:
      "Score 1500+ on the Digital SAT. Comprehensive math coaching, reading comprehension strategies, and adaptive testing practice.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your SAT Journey",
    sections: [
      {
        name: "Reading and Writing",
        duration: "64 min",
        questions: "54 questions",
        score: "200-800",
        icon: "menu_book",
      },
      {
        name: "Mathematics",
        duration: "70 min",
        questions: "44 questions",
        score: "200-800",
        icon: "calculate",
      },
    ],
    faqs: [
      {
        q: "What is the format of the Digital SAT?",
        a: "The SAT is now fully digital and adaptive. It is split into two sections: Reading & Writing, and Math. Students can use their own devices and are allowed to use a calculator throughout the Math section.",
      },
      {
        q: "What is a competitive SAT score?",
        a: "A score of 1400+ puts you in the top tier of candidates. For top-20 US universities or Ivy League schools, aim for 1500+.",
      },
    ],
    coaching: [
      {
        icon: "calculate",
        title: "Advanced Math Strategy",
        desc: "Master SAT algebra, geometry, and advanced mathematics with shortcut formulas.",
      },
      {
        icon: "menu_book",
        title: "Reading Speed & Accuracy",
        desc: "Learn structure-based reading methods to answer context-rich vocabulary and grammar questions faster.",
      },
      {
        icon: "ads_click",
        title: "Adaptive Test Prep",
        desc: "Train on adaptive test platforms that mirror the structure of the College Board Bluebook app.",
      },
    ],
  },
  toefl: {
    slug: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    title: "TOEFL iBT Preparation",
    description:
      "Expert TOEFL iBT preparation focusing on integrated tasks, academic writing, and university level listening and reading skills.",
    metaTitle: "TOEFL iBT Preparation | The Globalizers",
    metaDescription:
      "Get 105+ in TOEFL iBT. Certified training, computer lab practice, and guidance for speaking/writing templates.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your TOEFL Journey",
    sections: [
      {
        name: "Reading",
        duration: "35 min",
        questions: "20 questions",
        score: "0-30",
        icon: "menu_book",
      },
      {
        name: "Listening",
        duration: "36 min",
        questions: "28 questions",
        score: "0-30",
        icon: "hearing",
      },
      {
        name: "Speaking",
        duration: "16 min",
        questions: "4 tasks",
        score: "0-30",
        icon: "record_voice_over",
      },
      {
        name: "Writing",
        duration: "29 min",
        questions: "2 tasks",
        score: "0-30",
        icon: "edit_note",
      },
    ],
    faqs: [
      {
        q: "What is TOEFL iBT?",
        a: "TOEFL iBT is the internet-based test version of the TOEFL. It measures your ability to combine listening, reading, speaking, and writing skills in academic settings.",
      },
      {
        q: "What is a good TOEFL score?",
        a: "A score of 90+ is generally acceptable, but competitive graduate programs in the US usually look for 100+.",
      },
    ],
    coaching: [
      {
        icon: "headset",
        title: "Integrated Task Training",
        desc: "Learn to synthesize information from reading passages and listening clips for speaking and writing tasks.",
      },
      {
        icon: "keyboard",
        title: "Typing & Speed Writing Mocks",
        desc: "Prepare under timed conditions to type essays for the 'Academic Discussion' and 'Integrated Writing' modules.",
      },
      {
        icon: "star",
        title: "Lab Simulation Practice",
        desc: "Simulate test-day environments in our computer labs to build concentration under real-world conditions.",
      },
    ],
  },
}
