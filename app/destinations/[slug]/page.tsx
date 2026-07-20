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

    return {
        title: dest.metaTitle,
        description: dest.metaDescription,
    }
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
        "@type": "WebPage",
        "name": dest.title,
        "description": dest.description,
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "The Globalizers",
            "url": "https://theglobalizers.com"
        }
    }

    const faqSchema = dest.faqs && dest.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": dest.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null

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
                    <div className="space-y-6 order-2 lg:order-1">
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
                    </div>

                    {/* Right: Immersive Responsive Image Card Showcase */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                            <Image
                                src={dest.heroImage}
                                alt={`${dest.name} Higher Education Landmark Showcase`}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                            {/* Gradient Overlay & Caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
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
                    </div>
                </Container>
            </Section>

            {/* Key Quick Stats Bar */}
            {dest.stats && (
                <Section variant="dark" className="py-12">
                    <Container>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {dest.stats.map((stat) => (
                                <StatCard
                                    key={stat.label}
                                    variant="dark"
                                    value={stat.value}
                                    label={stat.label}
                                />
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Overview & Key Strengths */}
            <Section variant="default">
                <Container>
                    <SectionHeader
                        eyebrow="Overview"
                        title={`Why Study in ${dest.name}?`}
                        description="Explore key academic, career, and cultural advantages that make this destination top-ranked for international students."
                        align="left"
                    />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <FeatureCard
                            icon={GraduationCap}
                            title="World-Class Universities"
                            description="Home to globally ranked institutions known for academic rigor, cutting-edge labs, and Nobel laureate faculty."
                        />
                        <FeatureCard
                            icon={Briefcase}
                            badgeVariant="secondary"
                            title="Career & Work Rights"
                            description="Enjoy generous post-study work visas, internship opportunities, and access to leading global corporations."
                        />
                        <FeatureCard
                            icon={Globe2}
                            title="Global Culture & Safety"
                            description="Experience multicultural student life, safe communities, and vibrant career networking events."
                        />
                    </div>
                </Container>
            </Section>

            {/* Top Universities Section */}
            {dest.universities && dest.universities.length > 0 && (
                <Section variant="surface">
                    <Container>
                        <SectionHeader
                            eyebrow="Institutions"
                            title={`Top Universities in ${dest.name}`}
                            description="Our students have secured admits to these prestigious institutions."
                            align="left"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {dest.universities.map((uni) => (
                                <UniversityCard
                                    key={uni}
                                    name={uni}
                                    country={dest.name}
                                    ranking="Partner University"
                                />
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Visa Process Section */}
            {dest.visaSteps && dest.visaSteps.length > 0 && (
                <Section variant="default">
                    <Container>
                        <SectionHeader
                            eyebrow="Visa Guide"
                            title={`${dest.name} Student Visa Process`}
                            description="Our visa experts guide you through every step of documentation, financial proof, and interview prep."
                            align="center"
                        />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {dest.visaSteps.map((step, i) => (
                                <ProcessCard
                                    key={step.step}
                                    stepNumber={parseInt(step.step) || i + 1}
                                    title={step.title}
                                    description={step.desc}
                                    isLast={i === dest.visaSteps.length - 1}
                                />
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* FAQs Section */}
            {dest.faqs && dest.faqs.length > 0 && (
                <Section variant="surface">
                    <Container>
                        <SectionHeader
                            eyebrow="Answers"
                            title="Frequently Asked Questions"
                            align="center"
                        />
                        <FAQ items={dest.faqs} />
                    </Container>
                </Section>
            )}

            <CTABanner
                title={`Ready to Study in ${dest.name}?`}
                primaryCtaText={dest.counsellingButtonText}
            />
        </>
    )
}
