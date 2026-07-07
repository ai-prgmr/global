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
    metaTitle: "GRE Preparation",
    metaDescription:
      "Master the GRE with India's leading GRE Verbal authority Prashant Hemnani. Personalized coaching, AI practice tools, and score improvement guarantee.",
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
        icon: "smart_toy",
        title: "AI Practice",
        desc: "AI-powered adaptive mock tests and analytics.",
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
    title: "GMAT Preparation",
    description:
      "Specialized GMAT Focus Edition coaching focused on data analysis, verbal reasoning, and math strategy for top B-school admissions.",
    metaTitle: "GMAT Preparation",
    metaDescription:
      "Master the GMAT with The Globalizers. Expert coaching for Verbal, Quant, Data Insights, and analytical sections.",
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
  },
  ielts: {
    slug: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    title: "IELTS Preparation",
    description:
      "Comprehensive IELTS coaching for all four modules — Listening, Reading, Writing, and Speaking.",
    metaTitle: "IELTS Preparation",
    metaDescription:
      "Comprehensive IELTS coaching for all four modules — Listening, Reading, Writing, and Speaking.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your IELTS Journey",
  },
  pte: {
    slug: "pte",
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    title: "PTE Preparation",
    description:
      "PTE Academic coaching with computer-based practice tests and AI scoring analysis.",
    metaTitle: "PTE Preparation",
    metaDescription:
      "PTE Academic coaching with computer-based practice tests and AI scoring analysis.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your PTE Journey",
  },
  sat: {
    slug: "sat",
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    title: "SAT Preparation",
    description:
      "Strategic SAT preparation for undergraduate admissions to top US universities.",
    metaTitle: "SAT Preparation",
    metaDescription:
      "Strategic SAT preparation for undergraduate admissions to top US universities.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your SAT Journey",
  },
  toefl: {
    slug: "toefl",
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    title: "TOEFL Preparation",
    description:
      "Expert TOEFL iBT preparation with focus on integrated tasks and academic English skills.",
    metaTitle: "TOEFL Preparation",
    metaDescription:
      "Expert TOEFL iBT preparation with focus on integrated tasks and academic English skills.",
    counsellingButtonText: "Book a Free Demo Class",
    ctaBannerText: "Start Your TOEFL Journey",
  },
}
