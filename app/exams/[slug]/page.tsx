import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Clock, HelpCircle, BarChart3, Users, Trophy, ArrowRight } from "lucide-react"
import { EXAMS_DATA } from "@/lib/data/exams"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { FeatureCard } from "@/components/primitives/FeatureCard"
import { FAQ } from "@/components/primitives/FAQ"
import { Button } from "@/components/primitives/Button"
import { CTABanner } from "@/components/CTABanner"

interface ExamPageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return Object.keys(EXAMS_DATA).map((slug) => ({
        slug,
    }))
}

export async function generateMetadata({
    params,
}: ExamPageProps): Promise<Metadata> {
    const { slug } = await params
    const exam = EXAMS_DATA[slug]

    if (!exam) {
        return {}
    }

    return {
        title: exam.metaTitle,
        description: exam.metaDescription,
    }
}

export default async function ExamSlugPage({ params }: ExamPageProps) {
    const { slug } = await params
    const exam = EXAMS_DATA[slug]

    if (!exam) {
        notFound()
    }

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `${exam.name} Preparation Course`,
        "description": exam.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "The Globalizers",
            "url": "https://theglobalizers.com"
        }
    }

    const faqSchema = exam.faqs && exam.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": exam.faqs.map(faq => ({
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Hero Section */}
            <Section variant="primary" className="py-20 md:py-28">
                <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
                            Exam Preparation
                        </span>
                        <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                            {exam.title}
                        </h1>
                        <p className="max-w-lg text-lg text-white/80 leading-relaxed">{exam.description}</p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact-us">
                                <Button variant="secondary" size="default">
                                    {exam.counsellingButtonText}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            {exam.slug === "gre" && (
                                <Link href="#">
                                    <Button variant="outline" size="default" className="border-white text-white hover:bg-white/10">
                                        Take a Free Mock Test
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>

                    {exam.heroImage && (
                        <div className="relative hidden aspect-4/3 overflow-hidden rounded-3xl border border-white/20 shadow-xl lg:block">
                            <Image
                                src={exam.heroImage}
                                alt={`${exam.name} Preparation`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </Container>
            </Section>

            {/* Format Breakdown Section */}
            {exam.sections && (
                <Section variant="default">
                    <Container>
                        <SectionHeader
                            eyebrow="Structure"
                            title={`${exam.name} Exam Format`}
                            description="Understand the timing, question count, and scoring system of each section."
                            align="left"
                        />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {exam.sections.map((s) => (
                                <Card key={s.name} padding="default" className="text-center flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-4 font-heading text-xl font-bold text-primary">
                                            {s.name}
                                        </h3>
                                        <div className="space-y-2 text-sm text-muted-foreground border-t border-border pt-3">
                                            <p className="flex items-center justify-center gap-2">
                                                <Clock className="h-4 w-4 text-secondary shrink-0" />
                                                {s.duration}
                                            </p>
                                            <p className="flex items-center justify-center gap-2">
                                                <HelpCircle className="h-4 w-4 text-secondary shrink-0" />
                                                {s.questions}
                                            </p>
                                            <p className="flex items-center justify-center gap-2 font-semibold text-primary">
                                                <BarChart3 className="h-4 w-4 text-secondary shrink-0" />
                                                Score: {s.score}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Why Choose Section */}
            <Section variant="surface">
                <Container>
                    <SectionHeader
                        eyebrow="Advantages"
                        title={`Why Choose The Globalizers for ${exam.name}?`}
                        description="Proven methodology and India's highest score improvements."
                        align="center"
                    />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={Users}
                            title="Expert Mentors"
                            description="Certified faculty led by Prashant Hemnani with 19+ years of coaching excellence."
                        />
                        <FeatureCard
                            icon={Trophy}
                            badgeVariant="secondary"
                            title="Score Improvement Guarantee"
                            description="Our students consistently achieve top percentiles and ivy league admissions."
                        />
                        <FeatureCard
                            icon={Clock}
                            title="Flexible Batches"
                            description="Weekday and weekend online and classroom sessions designed for students."
                        />
                    </div>
                </Container>
            </Section>

            {/* FAQs Section */}
            {exam.faqs && (
                <Section variant="default">
                    <Container>
                        <SectionHeader
                            eyebrow="Answers"
                            title="Frequently Asked Questions"
                            align="center"
                        />
                        <FAQ items={exam.faqs} />
                    </Container>
                </Section>
            )}

            <CTABanner primaryCtaText={exam.ctaBannerText} />
        </>
    )
}
