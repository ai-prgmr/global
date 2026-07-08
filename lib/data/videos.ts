export interface Video {
  id: number
  title: string
  speaker: string
  duration: string
  durationIso: string // for VideoObject schema (e.g. PT18M24S)
  views: string
  category: string
  youtubeId: string
  bgGradient: string
  description: string
  uploadDate: string // for VideoObject schema (e.g. 2026-01-10T08:00:00Z)
}

export const VIDEOS_CATALOG: Video[] = [
  {
    id: 1,
    title: "GRE Verbal Masterclass: Text Completion Hacks",
    speaker: "Prashant Hemnani (Founder)",
    duration: "18:24",
    durationIso: "PT18M24S",
    views: "12.4K views",
    category: "GRE Verbal",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-purple-600 to-indigo-800",
    description: "Learn exclusive vocabulary shortcuts and context-based guessing techniques developed by Prashant sir over 19+ years of coaching.",
    uploadDate: "2026-01-15T09:00:00Z",
  },
  {
    id: 2,
    title: "GRE Quant Masterclass: Solving Hard Algebra Fast",
    speaker: "Senior Quant Mentor",
    duration: "22:15",
    durationIso: "PT22M15S",
    views: "9.1K views",
    category: "GRE Quant",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-fuchsia-600 to-pink-800",
    description: "Master fast calculations, number properties shortcuts, and strategy for tackling high-difficulty Quantitative Reasoning questions.",
    uploadDate: "2026-01-20T10:00:00Z",
  },
  {
    id: 3,
    title: "Study Abroad Roadmap: Complete Step-by-Step Guide",
    speaker: "Admissions Counselling Team",
    duration: "15:40",
    durationIso: "PT15M40S",
    views: "8.3K views",
    category: "Study Abroad Guide",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-blue-600 to-cyan-800",
    description: "Understand timelines, shortlisting universities, writing a compelling SOP, securing LORs, and sending applications.",
    uploadDate: "2026-02-01T11:00:00Z",
  },
  {
    id: 4,
    title: "GMAT Focus Edition: Critical Reasoning Strategies",
    speaker: "Prashant Hemnani (Founder)",
    duration: "25:10",
    durationIso: "PT25M10S",
    views: "6.2K views",
    category: "GMAT / SAT",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-emerald-600 to-teal-800",
    description: "Deconstruct argument patterns, identify assumptions, and master weakening/strengthening prompts on the GMAT Focus Edition.",
    uploadDate: "2026-02-10T09:30:00Z",
  },
  {
    id: 5,
    title: "IELTS Speaking & Writing: Band 8+ Secret Rules",
    speaker: "Senior English Language Trainer",
    duration: "19:30",
    durationIso: "PT19M30S",
    views: "15.7K views",
    category: "IELTS / TOEFL",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-orange-600 to-red-800",
    description: "Break down IELTS evaluation parameters, perfect your essay structure, and practice cue card strategies for high scores.",
    uploadDate: "2026-02-18T08:00:00Z",
  },
  {
    id: 6,
    title: "SAT Digital Exam: Structure & Tips for 1500+",
    speaker: "Senior SAT Faculty",
    duration: "14:15",
    durationIso: "PT14M15S",
    views: "4.8K views",
    category: "GMAT / SAT",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-violet-600 to-purple-900",
    description: "Learn tips and tricks for the digital SAT adaptive format. Master time management and critical math/reading formulas.",
    uploadDate: "2026-03-01T10:00:00Z",
  },
  {
    id: 7,
    title: "How to Secure ₹50L+ Scholarships for US Universities",
    speaker: "Study Abroad Director",
    duration: "20:05",
    durationIso: "PT20M05S",
    views: "11.2K views",
    category: "Study Abroad Guide",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-sky-600 to-indigo-900",
    description: "Explore merit-based assistantships, financial aid types, and deadline strategies that help secure massive scholarships.",
    uploadDate: "2026-03-12T09:00:00Z",
  },
  {
    id: 8,
    title: "Student Visa Interview Guide: Dos & Don'ts",
    speaker: "Visa Counselling Head",
    duration: "17:50",
    durationIso: "PT17M50S",
    views: "10.1K views",
    category: "Study Abroad Guide",
    youtubeId: "dQw4w9WgXcQ",
    bgGradient: "from-cyan-600 to-blue-900",
    description: "Watch mock student visa interview questions and answers. Learn how to explain financial ties and university choice confidently.",
    uploadDate: "2026-03-25T11:00:00Z",
  },
]

export const CATEGORIES = [
  "All",
  "GRE Verbal",
  "GRE Quant",
  "GMAT / SAT",
  "IELTS / TOEFL",
  "Study Abroad Guide",
]
