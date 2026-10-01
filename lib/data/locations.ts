export interface LocationBranch {
  slug: string
  city: string
  region: string
  tag: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroDescription: string
  address: string
  landmark: string
  phone: string
  email: string
  hours: string
  googleMapsUrl: string
  geo: {
    latitude: number
    longitude: number
  }
  stats: Array<{ value: string; label: string; description: string }>
  highlights: Array<{ title: string; description: string }>
  faqs: Array<{ q: string; a: string }>
}

export const LOCATIONS_DATA: Record<string, LocationBranch> = {
  indore: {
    slug: "indore",
    city: "Indore",
    region: "Madhya Pradesh",
    tag: "Headquarters & Primary Hub",
    metaTitle: "Best Study Abroad Consultants & GRE Coaching in Indore",
    metaDescription:
      "The Globalizers Indore (Vijay Nagar & Bhawarkua). 19+ years of excellence in Study Abroad Counselling, GRE, GMAT, IELTS, and TOEFL coaching. 6,000+ top admits.",
    heroTitle: "Study Abroad Consultancy & GRE/GMAT Prep in Indore",
    heroDescription:
      "Headquartered in Vijay Nagar and Bhawarkua, Indore, The Globalizers is Central India's premier study abroad mentorship center led by Prashant Hemnani.",
    address: "301-304, 3rd Floor, Apollo Premier, Vijay Nagar & Bhawarkua Branch, Indore, MP 452010",
    landmark: "Above Vijay Nagar Square, opposite Apollo Tower",
    phone: "+91 731 4001033",
    email: "indore@theglobalizers.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=The+Globalizers+Indore",
    geo: {
      latitude: 22.7533,
      longitude: 75.8937,
    },
    stats: [
      { value: "4,500+", label: "Indore Students Placed", description: "In Top Global Universities" },
      { value: "19+", label: "Years in Indore", description: "Headquarters & Flagship Center" },
      { value: "330+", label: "Avg Top GRE Scores", description: "Highest in Central India" },
      { value: "98%", label: "Visa Success Rate", description: "F-1 & Tier 4 Approvals" },
    ],
    highlights: [
      {
        title: "In-Person Classroom Coaching",
        description: "Small batch sizes for GRE, GMAT Focus, IELTS, and TOEFL at Vijay Nagar and Bhawarkua centers.",
      },
      {
        title: "Direct Mentorship by Founder Prashant Hemnani",
        description: "Personalized GRE Verbal classes and profile evaluation sessions by India's top GRE authority.",
      },
      {
        title: "US & UK Visa Mock Drives",
        description: "1-on-1 consular visa interview simulations conducted live at our Indore headquarters.",
      },
      {
        title: "End-to-End Overseas Counselling",
        description: "University shortlisting, SOP editing, LOR guidance, and education loan assistance.",
      },
    ],
    faqs: [
      {
        q: "Where are The Globalizers offices located in Indore?",
        a: "Our primary headquarters is located at 301-304, 3rd Floor, Apollo Premier, Vijay Nagar, Indore. We also have a branch in Bhawarkua to serve students from around DAVV campus.",
      },
      {
        q: "Does Founder Prashant Hemnani take classes at the Indore center?",
        a: "Yes, Prashant Hemnani personally conducts GRE Verbal masterclasses and strategy sessions at our Indore centers.",
      },
      {
        q: "What test preparation courses are offered offline in Indore?",
        a: "We offer classroom coaching for GRE, GMAT Focus Edition, IELTS Academic, TOEFL iBT, SAT, and Duolingo, along with full-length mock tests.",
      },
      {
        q: "How can I book an in-person study abroad counselling session in Indore?",
        a: "You can walk into our Vijay Nagar office or call +91 731 4001033 to schedule a free 1-on-1 session with a senior counselor.",
      },
    ],
  },
  jaipur: {
    slug: "jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    tag: "Rajasthan State Hub",
    metaTitle: "Best Study Abroad Consultants & GRE Coaching in Jaipur",
    metaDescription:
      "The Globalizers Jaipur (C-Scheme). Premier education consultancy & coaching for GRE, GMAT, IELTS, and US/UK study visa applications in Rajasthan.",
    heroTitle: "Study Abroad Consultancy & GRE Prep in Jaipur",
    heroDescription:
      "Located in C-Scheme, Jaipur, providing Rajasthan's ambitious students with world-class test preparation, university shortlisting, and scholarship assistance.",
    address: "C-15, C-Scheme, Jaipur, Rajasthan 302001",
    landmark: "Near Ashok Nagar, C-Scheme Commercial Hub",
    phone: "+91 141 4001033",
    email: "jaipur@theglobalizers.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=The+Globalizers+Jaipur",
    geo: {
      latitude: 26.9124,
      longitude: 75.7873,
    },
    stats: [
      { value: "650+", label: "Rajasthan Admits", description: "USA, UK, Canada & Europe" },
      { value: "₹8Cr+", label: "Scholarships Won", description: "Merit-Based Awards" },
      { value: "7.5+", label: "Avg IELTS Band", description: "First-Attempt Pass Rate" },
      { value: "98%", label: "Visa Approval Rate", description: "Flawless Mock Preparation" },
    ],
    highlights: [
      {
        title: "C-Scheme Center Facilities",
        description: "State-of-the-art computer labs for GRE/GMAT adaptive mock tests and IELTS speaking practice.",
      },
      {
        title: "Undergraduate & Postgraduate Counselling",
        description: "Tailored roadmaps for school students (SAT prep) and engineering/degree graduates.",
      },
      {
        title: "Financial Aid & Loan Assistance",
        description: "Direct tie-ups with top national banks and NBFCs for non-collateral education loans.",
      },
    ],
    faqs: [
      {
        q: "Where is The Globalizers office situated in Jaipur?",
        a: "Our Jaipur office is located at C-15, C-Scheme, Jaipur, easily accessible from all major parts of the city.",
      },
      {
        q: "Do you provide SAT coaching for high school students in Jaipur?",
        a: "Yes, we provide specialized Digital SAT prep for high school students targeting top US undergraduate universities.",
      },
      {
        q: "What is the phone number for Jaipur branch counseling?",
        a: "You can reach our Jaipur counseling desk directly at +91 141 4001033.",
      },
    ],
  }
}
