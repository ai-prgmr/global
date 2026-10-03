import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { GraduationCap, Briefcase, Globe2, ArrowRight, Landmark, Sparkles } from "lucide-react"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { UniversityCard } from "@/components/primitives/UniversityCard"
import { ProcessCard } from "@/components/primitives/ProcessCard"
import { StatCard } from "@/components/primitives/StatCard"
import { FAQ } from "@/components/primitives/FAQ"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"
import Reveal from "@/components/Reveal"

import { constructMetadata } from "@/lib/metadata"
import { generateFAQSchema, BASE_URL } from "@/lib/schema"

const UNIVERSITY_CARD_VARIANTS = ["mint", "sky", "lavender", "peach", "amber", "rose"] as const
const PROCESS_CARD_VARIANTS = ["lavender", "sky", "mint", "peach", "rose", "amber"] as const
const STAT_CARD_VARIANTS = ["white", "sky", "mint", "peach", "lavender", "amber"] as const

interface DestinationPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return Object.keys(DESTINATIONS_DATA).map((slug) => ({
        slug,
    }))
}

export async function generateMetadata({
    params,
}: DestinationPageProps): Promise<Metadata> {
    const { slug } = await params
    const dest = DESTINATIONS_DATA[slug]

    if (!dest) {
        return {}
    }

    return constructMetadata({
        title: dest.metaTitle,
        description: dest.metaDescription,
        path: `/destinations/${slug}`,
        image: dest.heroImage,
    })
}

export default async function DestinationSlugPage({
    params,
}: DestinationPageProps) {
    const { slug } = await params
    const dest = DESTINATIONS_DATA[slug]

    if (!dest) {
        notFound()
    }

    const guideSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": dest.title,
        "description": dest.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "The Globalizers",
            "url": BASE_URL,
        },
        "url": `${BASE_URL}/destinations/${slug}`,
    }

    const faqSchema = generateFAQSchema(dest.faqs || [])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Hero Section with Immersive Landmark Showcase */}
            <Section variant="primary" className="py-16 md:py-24 lg:py-28">
                <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left: Content & Highlights */}
                    <Reveal direction="up" delay={50} className="space-y-6 order-2 lg:order-1">
                        <div className="flex items-center gap-3">
                            <span className="text-4xl md:text-5xl">{dest.flag}</span>
                            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                {dest.region}
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight">
                            {dest.title}
                        </h1>

                        <p className="max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
                            {dest.description}
                        </p>

                        {/* Highlights Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {dest.highlights.map((h) => (
                                <span
                                    key={h}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs backdrop-blur-xs"
                                >
                                    <Sparkles className="h-3.5 w-3.5 text-secondary-foreground" />
                                    {h}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link href="/contact-us">
                                <Button variant="secondary" size="default">
                                    {dest.counsellingButtonText}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </Reveal>

                    {/* Right: Immersive Responsive Image Card Showcase */}
                    <Reveal direction="up" delay={150} className="relative order-1 lg:order-2">
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                            <Image
                                src={dest.heroImage}
                                alt={`${dest.name} Higher Education Landmark Showcase`}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                            {/* Gradient Overlay & Caption */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                                <div className="flex items-start gap-3 text-white">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary/90 text-white shadow-md">
                                        <Landmark className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                                            Why {dest.name} Is Renowned
                                        </span>
                                        <p className="font-heading text-sm md:text-base font-bold text-white leading-snug">
                                            {dest.imageCaption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* Key Quick Stats Bar */}
            {dest.stats && (
                <Section variant="sky" className="py-12">
                    <Container>
                        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
                            {dest.stats.map((stat, i) => (
                                <Reveal key={stat.label} direction="up" delay={50 + i * 60}>
                                    <StatCard
                                        variant="default"
                                        cardVariant={STAT_CARD_VARIANTS[i % STAT_CARD_VARIANTS.length]}
                                        value={stat.value}
                                        label={stat.label}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Overview & Key Strengths */}
            <Section variant="default">
                <Container>
                    <Reveal direction="up" delay={50}>
                        <SectionHeader
                            eyebrow="Overview"
                            title={`Why Study in ${dest.name}?`}
                            description="Explore key academic, career, and cultural advantages that make this destination top-ranked for international students."
                            align="left"
                        />
                    </Reveal>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <Reveal direction="up" delay={100}>
                            <FeatureCard
                                icon={GraduationCap}
                                cardVariant="lavender"
                                badgeVariant="primary"
                                title="World-Class Universities"
                                description="Home to globally ranked institutions known for academic rigor, cutting-edge labs, and Nobel laureate faculty."
                            />
                        </Reveal>
                        <Reveal direction="up" delay={180}>
                            <FeatureCard
                                icon={Briefcase}
                                cardVariant="peach"
                                badgeVariant="secondary"
                                title="Career & Work Rights"
                                description="Enjoy generous post-study work visas, internship opportunities, and access to leading global corporations."
                            />
                        </Reveal>
                        <Reveal direction="up" delay={260}>
                            <FeatureCard
                                icon={Globe2}
                                cardVariant="mint"
                                badgeVariant="emerald"
                                title="Global Culture & Safety"
                                description="Experience multicultural student life, safe communities, and vibrant career networking events."
                            />
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* Top Universities Section */}
            {dest.universities && dest.universities.length > 0 && (
                <Section variant="surface">
                    <Container>
                        <Reveal direction="up" delay={50}>
                            <SectionHeader
                                eyebrow="Institutions"
                                title={`Top Universities in ${dest.name}`}
                                description="Our students have secured admits to these prestigious institutions."
                                align="left"
                            />
                        </Reveal>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {dest.universities.map((uni, i) => (
                                <Reveal key={uni} direction="up" delay={40 + (i % 6) * 40}>
                                    <UniversityCard
                                        name={uni}
                                        country={dest.name}
                                        cardVariant={UNIVERSITY_CARD_VARIANTS[i % UNIVERSITY_CARD_VARIANTS.length]}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Visa Process Section */}
            {dest.visaSteps && dest.visaSteps.length > 0 && (
                <Section variant="sky">
                    <Container>
                        <Reveal direction="up" delay={50}>
                            <SectionHeader
                                eyebrow="Visa Guide"
                                title={`${dest.name} Student Visa Process`}
                                description="Our visa experts guide you through every step of documentation, financial proof, and interview prep."
                                align="center"
                            />
                        </Reveal>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {dest.visaSteps.map((step, i) => (
                                <Reveal key={step.step} direction="up" delay={80 + (i % 3) * 80}>
                                    <ProcessCard
                                        stepNumber={parseInt(step.step) || i + 1}
                                        title={step.title}
                                        description={step.desc}
                                        cardVariant={PROCESS_CARD_VARIANTS[i % PROCESS_CARD_VARIANTS.length]}
                                        isLast={i === dest.visaSteps.length - 1}
                                    />
                                </Reveal>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* FAQs Section */}
            {dest.faqs && dest.faqs.length > 0 && (
                <Section variant="surface">
                    <Container>
                        <Reveal direction="up" delay={50}>
                            <SectionHeader
                                eyebrow="Answers"
                                title="Frequently Asked Questions"
                                align="center"
                            />
                            <FAQ items={dest.faqs} />
                        </Reveal>
                    </Container>
                </Section>
            )}

            <Reveal direction="up" delay={50}>
                <CTABanner
                    title={`Ready to Study in ${dest.name}?`}
                    primaryCtaText={dest.counsellingButtonText}
                />
            </Reveal>
        </>
    )
}
