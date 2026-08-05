import { BASE_URL } from "./metadata"
import type { LocationBranch } from "./data/locations"
export { BASE_URL }

export function generateBranchLocalBusinessSchema(location: LocationBranch) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/locations/${location.slug}/#branch`,
        "name": `The Globalizers - ${location.city} Branch`,
        "url": `${BASE_URL}/locations/${location.slug}`,
        "image": `${BASE_URL}/global/globalizers-logo.webp`,
        "telephone": location.phone,
        "email": location.email,
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address,
          "addressLocality": location.city,
          "addressRegion": location.region,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.geo.latitude,
          "longitude": location.geo.longitude,
        },
        "parentOrganization": {
          "@type": "EducationalOrganization",
          "name": "The Globalizers",
          "url": BASE_URL,
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:00",
        },
      },
    ],
  }
}

export interface FAQItem {
  q: string
  a: string
}

// 1. FAQPage Schema Generator
export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }
}

// 2. Organization + LocalBusiness Schema (All physical offices)
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${BASE_URL}/#organization`,
        "name": "The Globalizers",
        "url": BASE_URL,
        "logo": `${BASE_URL}/global/globalizers-logo.webp`,
        "sameAs": [
          "https://www.facebook.com/TheGlobalizersIndore/",
          "https://www.instagram.com/the_globalizers/",
          "https://www.linkedin.com/company/the-globalizers/",
          "https://www.youtube.com/@InspirewithPrashant"
        ],
        "description": "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation.",
        "telephone": "+91 731 4001033",
        "founder": {
          "@type": "Person",
          "name": "Prashant Hemnani",
          "jobTitle": "Founder & Chief Mentor"
        },
        "foundingDate": "2007"
      },
      // Indore HQ
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#office-indore-hq`,
        "name": "The Globalizers - Head Office (Vijay Nagar)",
        "url": BASE_URL,
        "image": `${BASE_URL}/global/globalizers-logo.webp`,
        "telephone": "+91 731 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "301-304, Third Floor, Apollo Premier, Vijay Nagar",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452010",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹"
      },
      // Indore Bhawarkua
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#office-indore-bhawarkua`,
        "name": "The Globalizers - Bhawarkua Branch",
        "url": BASE_URL,
        "telephone": "+91 731 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 MG Road, Scheme No. 54",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "452001",
          "addressCountry": "IN"
        }
      },
      // Noida
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#office-noida`,
        "name": "The Globalizers - Noida Branch",
        "url": BASE_URL,
        "telephone": "+91 120 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B-45, Sector 18",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201301",
          "addressCountry": "IN"
        }
      },
      // Jaipur
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#office-jaipur`,
        "name": "The Globalizers - Jaipur Branch",
        "url": BASE_URL,
        "telephone": "+91 141 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C-15, C-Scheme",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302001",
          "addressCountry": "IN"
        }
      },
      // Navi Mumbai
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#office-mumbai`,
        "name": "The Globalizers - Navi Mumbai Branch",
        "url": BASE_URL,
        "telephone": "+91 22 4001033",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 12, Vashi",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400703",
          "addressCountry": "IN"
        }
      }
    ]
  }
}

// 3. Course Schema Generator
export function generateCourseSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "sameAs": BASE_URL
    },
    "url": `${BASE_URL}${path}`
  }
}

// 4. Service Schema Generator
export function generateServiceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "url": BASE_URL
    },
    "url": `${BASE_URL}${path}`
  }
}

// 5. AggregateRating & Review Schema Generator
export function generateAggregateRatingSchema({
  ratingValue = "4.9",
  reviewCount = "6000",
  itemTitle = "Study Abroad Mentorship & Test Prep",
}: {
  ratingValue?: string
  reviewCount?: string
  itemTitle?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemTitle,
    "description": "Comprehensive Study Abroad Admissions Counselling, GRE, GMAT, and IELTS Coaching.",
    "brand": {
      "@type": "Brand",
      "name": "The Globalizers"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}
