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
  },
  uk: {
    slug: "uk",
    flag: "🇬🇧",
    name: "United Kingdom",
    region: "Europe",
    title: "Study in United Kingdom",
    description:
      "Discover world-class education opportunities in United Kingdom. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free UK Counselling",
    metaTitle: "Study in United Kingdom",
    metaDescription:
      "Complete guide to studying in United Kingdom — top universities, costs, visa process, and scholarships.",
    highlights: ["1-Year Master's", "2 Years Post-Study Work", "Oxford & Cambridge"],
    averageTuition: "£15K - £35K / Year",
    popularExams: "IELTS, PTE, TOEFL",
  },
  canada: {
    slug: "canada",
    flag: "🇨🇦",
    name: "Canada",
    region: "North America",
    title: "Study in Canada",
    description:
      "Discover world-class education opportunities in Canada. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Canada Counselling",
    metaTitle: "Study in Canada",
    metaDescription:
      "Complete guide to studying in Canada — top universities, costs, visa process, and scholarships.",
    highlights: ["PGWP (Post-Grad Work Permit)", "PR / Express Entry Path", "High Quality of Life"],
    averageTuition: "CAD 20K - 45K / Year",
    popularExams: "IELTS, PTE, TOEFL",
  },
  australia: {
    slug: "australia",
    flag: "🇦🇺",
    name: "Australia",
    region: "Asia-Pacific",
    title: "Study in Australia",
    description:
      "Discover world-class education opportunities in Australia. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Australia Counselling",
    metaTitle: "Study in Australia",
    metaDescription:
      "Complete guide to studying in Australia — top universities, costs, visa process, and scholarships.",
    highlights: ["Up to 4 Years PSW", "CRICOS Registered Courses", "Stunning Cities"],
    averageTuition: "AUD 25K - 50K / Year",
    popularExams: "IELTS, PTE, TOEFL",
  },
  germany: {
    slug: "germany",
    flag: "🇩🇪",
    name: "Germany",
    region: "Europe",
    title: "Study in Germany",
    description:
      "Discover world-class education opportunities in Germany. Expert guidance from profile evaluation to post-landing support.",
    counsellingButtonText: "Get Free Germany Counselling",
    metaTitle: "Study in Germany",
    metaDescription:
      "Complete guide to studying in Germany — top universities, costs, visa process, and scholarships.",
    highlights: ["Zero Tuition (Public Unis)", "18-Month Job Seeking Visa", "Engineering & Tech Hub"],
    averageTuition: "€0 - €3,000 / Year",
    popularExams: "IELTS, TOEFL, TestDaF",
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
