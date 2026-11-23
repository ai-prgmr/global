import Image from "next/image"
import { Award, Globe, Building2, Sparkles, GraduationCap } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { StatCard } from "@/components/primitives/StatCard"
import { CTABanner } from "@/components/CTABanner"

export interface StoryItem {
  name: string
  university: string
  country: string
  course: string
  exam?: string
  score?: string
  scholarship?: string
  year: string
  image: string
  quote: string
  variant: "rose" | "sky" | "mint" | "lavender" | "peach" | "amber"
}

const MALE_PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUDvtK-I3Qsx217yJv-_vN-12PVi9hciswCtYjig9nhXq1aSwWwE6r4ih-i5jLq7okmxfW3sal-_iqg7qkNzYI5ED4vb9ht1qYW5FiHTCqFjG9-6wabAVkF_WohdFZqkL0XIPThYRR34_av08pWrm3MBsUpsr9VaLhJspJso0CRTOggxV3BzkWFaOl40trV4d-B1CobWPTFo9Rev-IgZvG59dg6XT_XtivGVyLdfgDtr-5I5OFfziEak7CgLvkwD667wOd_so9oVE"

const FEMALE_PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24"

// 1. Dedicated Alumni Journeys (Graduates & Established Seniors Abroad)
const ALUMNI_JOURNEYS: StoryItem[] = [
  {
    name: "Akash Rathore",
    university: "Kansas State University",
    country: "USA",
    course: "MS Computer Science",
    year: "Alumni",
    image: "/global/alumni-stories/akash-rathore.png",
    quote:
      "Akash’s journey began in the small town of Garoth, Madhya Pradesh. Through unwavering perseverance and a strong work ethic, he pursued his Master’s in Computer Science in the United States. Today, he is a Software Developer at Microsoft, turning his aspirations into reality.",
    variant: "rose",
  },
  {
    name: "Sarthak Parakh",
    university: "Stony Brook University",
    country: "USA",
    course: "MS Computer Science",
    year: "Alumni",
    image: '/global/alumni-stories/sarthak-parakh.jpeg',
    quote:
      "From Indore to Stony Brook University in USA, he has broken barriers and inspired many. Currently working as Software Developer with Amazon Web Services, EC2",
    variant: "sky",
  },
  {
    name: "Urja Joshi",
    university: "Boston University",
    country: "USA",
    course: "B.S - Finance and Data Science Dual Degree",
    year: "Alumni",
    image: '/global/alumni-stories/urja-joshi.jpeg',
    quote:
      "From Emarald Heights Platinum Scholar to Boston Univerisities Dual Degree Candidate, Urja is an inspiration to many. She is currently President of BU Entrepreneurship Club and Founder of TEEMS.",
    variant: "mint",
  },
  {
    name: "Praveka Gupta",
    university: "RPTU Kaiserslautern-Landau",
    country: "Germany",
    course: "MSc, Commercial Vehicle Technology ",
    year: "Alumni",
    image: '/global/alumni-stories/praveka-gupta.jpeg',
    quote:
      "From RJIT B.S.F. Academy Tekanpur to Germany, Praveka has proved that nothing is impossible. Today he is a Technical Project Manager(Validation & Certification) at BMZ Germany GmbH.",
    variant: "sky",
  },
  {
    name: "Samarth Jain",
    university: "University of Pennsylvania",
    country: "USA",
    course: " Jerome Fisher Program in Management and Technology (Dual Degree, Finance and Quantitative Investment & Strategy and Computer Science) ",
    year: "Alumni",
    image: '/global/alumni-stories/samarth-jain.jpeg',
    quote:
      "Indore to UPenn's dual-degree Jerome Fisher Program in Management and Technology, spanning The Wharton School (Finance and Quantitative Investment & Strategy) and Penn Engineering (Computer Science)",
    variant: "sky",
  },
  {
    name: "Sunil Patidar",
    university: "La Trobe University",
    country: "Australia",
    course: "Masters in Project Management",
    year: "Alumni",
    image: '/global/alumni-stories/sunny-patidar.jpeg',
    quote:
      "From the Indore/Dhamnod region in Madhya Pradesh to La Trobe Melbourne, Sunil has proved that nothing is impossible.",
    variant: "sky",
  },
  {
    name: "Riddhi Bhargav",
    university: "University of Waterloo",
    country: "Canada",
    course: "Master of Management Sciences",
    year: "Alumni",
    image: '/global/alumni-stories/riddhi.jpeg',
    quote:
      "Data & Business Intelligence professional with MMSc",
    variant: "sky",
  }


]

// 2. Dedicated Success Stories (Admission Achievers & Recent Admits)
const SUCCESS_STORIES: StoryItem[] = [
  {
    name: "Neha Trivedi",
    university: "Harvard University",
    country: "USA",
    course: "Master in Public Policy (MPP)",
    exam: "GRE",
    score: "338",
    scholarship: "$60,000",
    year: "2025",
    image: FEMALE_PORTRAIT,
    quote:
      "Scoring 338 on the GRE and securing an admit to Harvard was a dream made reality by The Globalizers' unmatched mentorship.",
    variant: "rose",
  },
  {
    name: "Ananya Gupta",
    university: "MIT",
    country: "USA",
    course: "MS Electrical Engineering",
    exam: "GRE",
    score: "335",
    scholarship: "$50,000",
    year: "2025",
    image: FEMALE_PORTRAIT,
    quote:
      "Securing an admit to MIT with a substantial fellowship seemed daunting until Prashant sir broke down my profile strategy step-by-step.",
    variant: "lavender",
  },
  {
    name: "Karan Patel",
    university: "Columbia University",
    country: "USA",
    course: "MS Finance",
    exam: "GRE",
    score: "328",
    scholarship: "$30,000",
    year: "2024",
    image: MALE_PORTRAIT,
    quote:
      "The Ivy League application mentorship and mock interviews gave me absolute confidence in my candidature.",
    variant: "peach",
  },
  {
    name: "Meera Roy",
    university: "TU Munich",
    country: "Germany",
    course: "MS Mechanical Engineering",
    exam: "IELTS",
    score: "8.0",
    scholarship: "€10,000",
    year: "2025",
    image: FEMALE_PORTRAIT,
    quote:
      "Germany's public university admissions require precise documentation; Globalizers made the entire APS and admit process seamless.",
    variant: "mint",
  },
  {
    name: "Siddharth Joshi",
    university: "University of Melbourne",
    country: "Australia",
    course: "MBA",
    exam: "GMAT",
    score: "720",
    scholarship: "AUD 20,000",
    year: "2024",
    image: MALE_PORTRAIT,
    quote:
      "Secured my admit and merit grant at Australia's #1 business school thanks to rigorous GMAT prep and essay guidance.",
    variant: "amber",
  },
]

const TOP_UNIVERSITIES = [
  { name: "Stanford University", country: "USA", badge: "Ivy Plus" },
  { name: "University of Oxford", country: "UK", badge: "Russell Group" },
  { name: "MIT", country: "USA", badge: "Top 1 Global" },
  { name: "Harvard University", country: "USA", badge: "Ivy League" },
  { name: "Columbia University", country: "USA", badge: "Ivy League" },
  { name: "University of Toronto", country: "Canada", badge: "U15 Group" },
  { name: "TU Munich", country: "Germany", badge: "TU9 Hub" },
  { name: "Univ. of Melbourne", country: "Australia", badge: "Group of Eight" },
]

function StoryCard({ story }: { story: StoryItem }) {
  return (
    <Card
      key={`${story.name}-${story.university}`}
      padding="none"
      variant={story.variant}
      className="group flex h-full flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div>
        <div className="relative aspect-4/3 w-full overflow-hidden bg-surface">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white shadow-xs">
            {story.exam} {story.score}
          </div>
          {story.scholarship && (
            <div className="absolute bottom-3 left-3 rounded-lg bg-primary/90 px-2.5 py-1 text-xs font-bold text-white shadow-xs backdrop-blur-xs">
              Scholarship: {story.scholarship}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="line-clamp-1 font-bold tracking-wider text-secondary uppercase">
              {story.course}
            </span>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-bold text-primary">
                {story.country}
              </span>
              <span className="rounded-full border border-border/60 bg-surface px-2 py-0.5 font-semibold text-muted-foreground">
                {story.year}
              </span>
            </div>
          </div>
          <h3 className="font-heading text-xl font-bold text-primary">
            {story.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
            <Building2 className="h-3.5 w-3.5 shrink-0 text-secondary" />
            <span>{story.university}</span>
          </p>
          <p className="mt-4 border-l-2 border-secondary pl-3 text-sm leading-relaxed text-muted-foreground italic">
            &ldquo;{story.quote}&rdquo;
          </p>
        </div>
      </div>
    </Card>
  )
}

export function SuccessStoriesClient() {
  return (
    <>
      {/* 1. Hero Section */}
      <Section
        variant="default"
        className="relative overflow-hidden py-20 text-center md:py-28"
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-80 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-sky-200/50 via-violet-200/40 to-pink-200/50 opacity-70 blur-3xl" />
        <Container className="max-w-4xl space-y-8">
          <div>
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold tracking-wider text-primary uppercase">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Alumni Networks &amp; Success Stories
            </span>
            <h1 className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
              From Indore to the World
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Discover inspiring alumni pathways and verified admission success
              stories of 20,000+ students who achieved their global study dreams
              with The Globalizers.
            </p>
          </div>

          {/* Unified Stat Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard
              cardVariant="sky"
              value="20,000+"
              label="Total Admits"
              description="500+ Global Universities"
            />
            <StatCard
              cardVariant="peach"
              value="50+"
              label="Ivy League &amp; Top Tier"
              description="Stanford, Oxford, MIT, Harvard"
            />
            <StatCard
              cardVariant="mint"
              value="₹50Cr+"
              label="Scholarships Won"
              description="Merit Grants &amp; Fellowships"
            />
            <StatCard
              cardVariant="lavender"
              value="12+"
              label="Countries"
              description="USA, UK, Canada, Germany &amp; more"
            />
          </div>
        </Container>
      </Section>

      {/* 2. SECTION A: Dedicated Alumni Journeys */}
      <Section variant="mint" className="py-16 md:py-24" id="alumni-journeys">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Global Alumni Network"
              title="Featured Alumni Journeys"
              description="Follow the transformative paths of our alumni who completed their degrees and are now thriving across the globe."
              align="left"
              className="mb-0"
            />
            <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs md:self-auto dark:bg-card">
              <GraduationCap className="h-4 w-4 text-secondary" />
              <span>{ALUMNI_JOURNEYS.length} Spotlight Alumni</span>
            </div>
          </div>

          {/* Alumni Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ALUMNI_JOURNEYS.map((story) => (
              <StoryCard key={story.name} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. SECTION B: Dedicated Success Stories (Admission Achievers) */}
      <Section
        variant="lavender"
        className="border-t border-border/40 py-16 md:py-24"
        id="success-stories"
      >
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Admission Achievers"
              title="Student Success Stories"
              description="Explore verified admits, merit scholarships, and top test scores achieved by our recent student applicants."
              align="left"
              className="mb-0"
            />
            <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-xs md:self-auto dark:bg-card">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span>{SUCCESS_STORIES.length} Verified Achievers</span>
            </div>
          </div>

          {/* Success Stories Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SUCCESS_STORIES.map((story) => (
              <StoryCard key={story.name} story={story} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Global Footprint & Top Universities Strip */}
      <Section
        variant="surface"
        className="border-t border-border/40 py-16 md:py-20"
      >
        <Container>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3.5 py-1 font-sans text-xs font-bold tracking-wider text-secondary uppercase">
              <Globe className="h-3.5 w-3.5" />
              World Class Institutions
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
              Where Our Students Study
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              From Ivy League campuses in the US to historic universities in the
              UK, Europe, Canada, and Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {TOP_UNIVERSITIES.map((u) => (
              <div
                key={u.name}
                className="rounded-2xl border border-border bg-card p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-md"
              >
                <span className="inline-block text-[10px] font-bold tracking-wider text-secondary uppercase">
                  {u.badge}
                </span>
                <h4 className="mt-1 font-heading text-sm font-bold text-primary">
                  {u.name}
                </h4>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {u.country}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
              <Award className="mx-auto mb-2 h-5 w-5 text-primary" />
              <h5 className="font-heading text-sm font-bold text-primary">
                95%+ Admit Rate
              </h5>
              <p className="mt-1 text-xs text-muted-foreground">
                For students who complete our profile mentoring roadmap.
              </p>
            </div>
            <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-4">
              <Sparkles className="mx-auto mb-2 h-5 w-5 text-secondary" />
              <h5 className="font-heading text-sm font-bold text-primary">
                100% Visa Support
              </h5>
              <p className="mt-1 text-xs text-muted-foreground">
                Mock interviews, financial documentation &amp; embassy prep.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-4">
              <Sparkles className="mx-auto mb-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h5 className="font-heading text-sm font-bold text-primary">
                ₹50Cr+ Financial Aid
              </h5>
              <p className="mt-1 text-xs text-muted-foreground">
                Scholarship guidance maximizing institutional grants.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. CTA Banner */}
      <CTABanner
        title="Write Your Own Success Story"
        subtitle="Book a 1-on-1 profile evaluation with Prashant Hemnani and our senior admissions panel today."
        primaryCtaText="Book Free Profile Evaluation"
        primaryCtaHref="/contact-us"
      />
    </>
  )
}
