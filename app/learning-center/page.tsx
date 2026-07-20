import type { Metadata } from "next"
import { LearningCenterClient } from "./LearningCenterClient"
import { VIDEOS_CATALOG } from "@/lib/data/videos"

export const metadata: Metadata = {
  title: "Learning Center - Free Masterclasses & Video Guides",
  description: "Access our collection of free GRE/GMAT lectures, IELTS preparation masterclasses, and study abroad counselling videos by Founder Prashant Hemnani and team.",
  keywords: [
    "free study abroad videos",
    "GRE Verbal masterclass",
    "GMAT Focus critical reasoning tips",
    "IELTS speaking guide",
    "Prashant Hemnani lectures",
    "The Globalizers video library",
    "student visa interview guidelines",
  ],
  openGraph: {
    title: "Learning Center - Free Masterclasses & Video Guides",
    description: "Access our collection of free GRE/GMAT lectures, IELTS preparation masterclasses, and study abroad counselling videos by Founder Prashant Hemnani and team.",
    type: "website",
    url: "https://theglobalizers.com/global/learning-center",
  },
}

const LEARNING_CENTER_FAQS = [
  {
    q: "How can I access the free study abroad masterclasses?",
    a: "All masterclasses in our Learning Center are completely free to watch. Simply click on any video card to launch the video player instantly.",
  },
  {
    q: "Do these videos cover GMAT Focus Edition and GRE Verbal?",
    a: "Yes, the catalog includes GMAT Focus Edition Critical Reasoning guides and GRE Verbal Text Completion sessions directly taught by Founder & Chief Mentor Prashant Hemnani.",
  },
  {
    q: "Are there guides for student visa interviews?",
    a: "Yes, we have specialized visa mock session videos covering common questions, F-1 visa dos and don'ts, and strategies to explain financial sponsorship and university choice.",
  },
]

export default function LearningCenterPage() {
  // 1. Generate VideoObject schemas dynamically
  const videoSchemas = VIDEOS_CATALOG.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    "uploadDate": video.uploadDate,
    "duration": video.durationIso,
    "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "The Globalizers",
      "logo": "https://theglobalizers.com/logo.png",
    },
  }))

  // 2. Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LEARNING_CENTER_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  }

  return (
    <>
      {videoSchemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LearningCenterClient />
    </>
  )
}
