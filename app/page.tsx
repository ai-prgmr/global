import { HeroSection } from "@/components/home/HeroSection"
import { TrustBar } from "@/components/TrustBar"
import { ServicesOverview } from "@/components/home/ServicesOverview"
import { DestinationsGrid } from "@/components/home/DestinationsGrid"
import { ExamPrepBento } from "@/components/home/ExamPrepBento"
import { FounderSpotlight } from "@/components/home/FounderSpotlight"
import { UpcomingEventsStrip } from "@/components/home/UpcomingEventsStrip"
import { CTABanner } from "@/components/CTABanner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <DestinationsGrid />
      <ExamPrepBento />
      <FounderSpotlight />
      <UpcomingEventsStrip />
      <CTABanner />
    </>
  )
}
