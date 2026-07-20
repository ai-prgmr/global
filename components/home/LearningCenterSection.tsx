import Link from "next/link"
import { Video } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { BlogCard } from "@/components/primitives/BlogCard"
import { Button } from "@/components/primitives/Button"

const FEATURED_VIDEOS = [
  {
    title: "GRE Verbal Masterclass: Text Completion Hacks",
    author: "Prashant Hemnani (Founder)",
    duration: "18:24",
    views: "12K+ views",
    category: "GRE Prep",
    excerpt: "Learn the core vocabulary shortcuts and sentence elimination techniques to boost your GRE Verbal score.",
    href: "/learning-center",
  },
  {
    title: "How to Choose the Right Study Abroad Destination",
    author: "Admissions Counselling Team",
    duration: "12:40",
    views: "8K+ views",
    category: "Study Abroad Guide",
    excerpt: "Comprehensive evaluation framework covering tuition costs, post-study work visas, and PR opportunities.",
    href: "/learning-center",
  },
  {
    title: "Crack GMAT Focus Edition: Data Insights Strategy",
    author: "Senior Quant Faculty",
    duration: "15:10",
    views: "5K+ views",
    category: "GMAT Prep",
    excerpt: "Step-by-step masterclass on tackling the Data Insights section with speed and high accuracy.",
    href: "/learning-center",
  },
]

export function LearningCenterSection() {
  return (
    <Section variant="default">
      <Container>
        <SectionHeader
          eyebrow="Free Resources"
          title="Learning Center & Video Vault"
          description="Access our exclusive vault of free test-prep masterclasses and study abroad advice videos, hosted by Prashant Hemnani and our senior mentors."
          align="left"
        />

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED_VIDEOS.map((video) => (
            <BlogCard
              key={video.title}
              title={video.title}
              category={video.category}
              excerpt={video.excerpt}
              duration={video.duration}
              author={video.author}
              views={video.views}
              href={video.href}
              isVideo
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/learning-center">
            <Button variant="outline" size="default">
              <Video className="h-5 w-5 mr-2" />
              Explore All Free Videos
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
