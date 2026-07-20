"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, X, ArrowRight, Users, Trophy, Clock } from "lucide-react"
import { EXAMS_DATA } from "@/lib/data/exams"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { Card } from "@/components/primitives/Card"
import { Button } from "@/components/primitives/Button"
import { FeatureCard } from "@/components/primitives/FeatureCard"

export function ExamsPageClient() {
    const [searchQuery, setSearchQuery] = useState("")

    const examsList = Object.values(EXAMS_DATA)

    const filteredExams = examsList.filter(
        (exam) =>
            exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <Section variant="primary" className="py-20 md:py-28 text-center">
                <Container className="max-w-4xl">
                    <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
                        Coaching &amp; Test Prep
                    </span>
                    <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Ace Your Admission Exams
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
                        Master the GRE, GMAT, IELTS, TOEFL, SAT, and PTE with India&apos;s
                        most trusted mentors. Score improvement guaranteed.
                    </p>

                    {/* Search Bar */}
                    <div className="mx-auto flex max-w-xl items-center rounded-full border border-white/30 bg-white/10 px-5 shadow-xl backdrop-blur-md transition-all focus-within:border-white focus-within:bg-white/20">
                        <Search className="h-5 w-5 text-white/70 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search exams (e.g. GRE, IELTS)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent px-4 py-3.5 text-white placeholder-white/60 outline-none text-base font-medium"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="flex items-center justify-center rounded-full p-1 text-white/70 hover:bg-white/20 hover:text-white"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Grid Content */}
            <Section variant="default">
                <Container>
                    <SectionHeader
                        eyebrow="Courses Offered"
                        title="Our Test Preparation Programs"
                        description="Select an exam to view details, structure, coaching features, and demo booking."
                        align="left"
                    />

                    {filteredExams.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredExams.map((exam) => (
                                <Card
                                    key={exam.slug}
                                    className="group flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="font-heading text-3xl font-black tracking-wider text-primary/20 transition-colors group-hover:text-secondary/20">
                                                {exam.name}
                                            </span>
                                            <span className="rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary uppercase">
                                                Prep Course
                                            </span>
                                        </div>

                                        <h3 className="mb-1 font-heading text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                                            {exam.title}
                                        </h3>
                                        <p className="mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            {exam.fullName}
                                        </p>
                                        <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                            {exam.description}
                                        </p>
                                    </div>

                                    <div className="border-t border-border pt-4">
                                        <Link href={`/exams/${exam.slug}`} className="block w-full">
                                            <Button variant="primary" size="sm" className="w-full justify-center">
                                                Explore Prep Guide
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center space-y-4">
                            <h3 className="font-heading text-xl font-bold text-primary">
                                No Exams Found
                            </h3>
                            <p className="text-muted-foreground">
                                We couldn&apos;t find any exam matching &quot;{searchQuery}&quot;.
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSearchQuery("")}
                            >
                                Reset Search
                            </Button>
                        </div>
                    )}
                </Container>
            </Section>

            {/* Global Highlights Section */}
            <Section variant="surface">
                <Container>
                    <SectionHeader
                        eyebrow="Why Us"
                        title="Why Prepare With The Globalizers?"
                        description="Empowering students with Central India's most comprehensive test prep platform."
                        align="center"
                    />

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard
                            icon={Users}
                            title="Expert Faculty"
                            description="Certified trainers with years of experience under leadership of Prashant Hemnani."
                        />
                        <FeatureCard
                            icon={Trophy}
                            badgeVariant="secondary"
                            title="Proven Track Record"
                            description="Over 6,000+ success stories and a consistent score improvement guarantee."
                        />
                        <FeatureCard
                            icon={Clock}
                            title="Flexible Batches"
                            description="Weekday and weekend live classes tailored for students and working professionals."
                        />
                    </div>
                </Container>
            </Section>
        </div>
    )
}
