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
        a: "We offer classroom coaching for GRE, GMAT Focus Edition, IELTS Academic, TOEFL iBT, SAT, and PTE, along with full-length mock tests.",
      },
      {
        q: "How can I book an in-person study abroad counselling session in Indore?",
        a: "You can walk into our Vijay Nagar office or call +91 731 4001033 to schedule a free 1-on-1 session with a senior counselor.",
      },
    ],
  },
  noida: {
    slug: "noida",
    city: "Noida",
    region: "Delhi NCR",
    tag: "NCR Regional Center",
    metaTitle: "Best Study Abroad Consultants & GRE Coaching in Noida",
    metaDescription:
      "The Globalizers Noida (Sector 18). Premier overseas education consultancy and GRE, GMAT, IELTS coaching for Delhi NCR students. 98% visa success rate.",
    heroTitle: "Study Abroad Consultancy & Test Prep in Noida",
    heroDescription:
      "Located in Sector 18, Noida, serving students across Noida, Greater Noida, and Delhi NCR with top-tier test prep and Ivy League admissions counseling.",
    address: "B-45, Sector 18, Noida, Uttar Pradesh 201301",
    landmark: "Near Sector 18 Metro Station, Sector 18 Market",
    phone: "+91 120 4001033",
    email: "noida@theglobalizers.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=The+Globalizers+Noida",
    geo: {
      latitude: 28.5708,
      longitude: 77.3261,
    },
    stats: [
      { value: "800+", label: "NCR Students Mentored", description: "Top US & European Admits" },
      { value: "₹12Cr+", label: "Scholarships Secured", description: "Merit & Assistantship Grants" },
      { value: "328+", label: "Avg Top GRE Scores", description: "Proven NCR Track Record" },
      { value: "98%", label: "Visa Success Rate", description: "US F-1 & German Student Visa" },
    ],
    highlights: [
      {
        title: "Delhi NCR Admissions Hub",
        description: "Specialized admissions counseling for STEM, Management, and Public Policy programs abroad.",
      },
      {
        title: "Flexible Hybrid & Offline Batches",
        description: "Weekend and evening batches designed for working professionals and university students in NCR.",
      },
      {
        title: "Germany & Europe Application Desk",
        description: "Expert guidance for tuition-free public universities in Germany, Ireland, and Netherlands.",
      },
      {
        title: "SOP & Essay Workshop",
        description: "1-on-1 document drafting and editing with experienced editorial mentors.",
      },
    ],
    faqs: [
      {
        q: "Where is The Globalizers office in Noida?",
        a: "Our Noida center is located at B-45, Sector 18, Noida, right near the Sector 18 Metro Station.",
      },
      {
        q: "Do you offer weekend GRE and GMAT batches for working professionals in Noida?",
        a: "Yes, we offer flexible weekend and evening offline and live-online batches tailored for working professionals in Delhi NCR.",
      },
      {
        q: "Can I get guidance for German public university admissions in Noida?",
        a: "Absolutely. Our Noida team specializes in European admissions, APS certification, and blocked account setup for Germany.",
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
  },
  "navi-mumbai": {
    slug: "navi-mumbai",
    city: "Navi Mumbai",
    region: "Maharashtra",
    tag: "Mumbai Metropolitan Branch",
    metaTitle: "Best Study Abroad Consultants & GRE Coaching in Navi Mumbai",
    metaDescription:
      "The Globalizers Navi Mumbai (Vashi). Trusted overseas education consultants for GRE, GMAT, IELTS coaching, and US/UK admissions guidance in Mumbai.",
    heroTitle: "Study Abroad Consultancy & Test Prep in Navi Mumbai",
    heroDescription:
      "Situated in Vashi, Navi Mumbai, bringing 19+ years of mentorship excellence, GRE score boosts, and visa guidance to Mumbai students.",
    address: "Plot 12, Sector 17, Vashi, Navi Mumbai, Maharashtra 400703",
    landmark: "Near Vashi Railway Station, Sector 17 Commercial Sector",
    phone: "+91 22 4001033",
    email: "mumbai@theglobalizers.com",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=The+Globalizers+Navi+Mumbai",
    geo: {
      latitude: 19.0771,
      longitude: 72.9986,
    },
    stats: [
      { value: "500+", label: "Mumbai Students Placed", description: "Top 100 Universities" },
      { value: "₹10Cr+", label: "Scholarships Secured", description: "Graduate Assistantships" },
      { value: "330+", label: "Top GRE Achievers", description: "Quant & Verbal Excellence" },
      { value: "98%", label: "Visa Success", description: "Consular Preparation" },
    ],
    highlights: [
      {
        title: "Vashi Hub Accessibility",
        description: "Conveniently located near Vashi station for students from Navi Mumbai, Thane, and Central Mumbai.",
      },
      {
        title: "Ivy League Profile Building",
        description: "Research paper assistance, extra-curricular planning, and SOP refinement for top admissions.",
      },
      {
        title: "Post-Admission & Accommodation Help",
        description: "Housing assistance, flight booking discounts, and pre-departure briefing drives.",
      },
    ],
    faqs: [
      {
        q: "Where is The Globalizers branch in Navi Mumbai?",
        a: "Our center is located at Plot 12, Sector 17, Vashi, Navi Mumbai, close to Vashi Railway Station.",
      },
      {
        q: "Do you offer full study abroad package including test prep and visa guidance in Mumbai?",
        a: "Yes, our complete package covers test preparation (GRE/GMAT/IELTS), university shortlisting, application filing, SOP review, scholarship applications, and visa mock interviews.",
      },
    ],
  },
}
