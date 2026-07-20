"use client"

import { useState } from "react"
import { Search, X, FileText } from "lucide-react"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { BlogCard } from "@/components/primitives/BlogCard"
import { Button } from "@/components/primitives/Button"
import { BLOG_POSTS_DATA } from "@/lib/data/blog-posts"

export function BlogPageClient() {
  const [searchQuery, setSearchQuery] = useState("")

  const postsList = Object.values(BLOG_POSTS_DATA)

  const filteredPosts = postsList.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <Section variant="primary" className="py-20 md:py-28 text-center">
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Insights &amp; Articles
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Study Abroad Blog &amp; Guides
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
            Expert insights on university admissions, GRE/GMAT strategies, visa policies, and scholarship tips.
          </p>

          <div className="mx-auto flex max-w-xl items-center rounded-full border border-white/30 bg-white/10 px-5 shadow-xl backdrop-blur-md transition-all focus-within:border-white focus-within:bg-white/20">
            <Search className="h-5 w-5 text-white/70 shrink-0" />
            <input
              type="text"
              placeholder="Search articles by title or keyword..."
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

      {/* Posts Grid */}
      <Section variant="default">
        <Container>
          <SectionHeader
            eyebrow="Latest Articles"
            title="Educational Articles &amp; Advice"
            description={`Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}.`}
            align="left"
          />

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  category={post.category}
                  excerpt={post.excerpt}
                  author={post.author}
                  views={post.readTime}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-4">
              <FileText className="mx-auto h-16 w-16 text-muted-foreground/40" />
              <h3 className="font-heading text-xl font-bold text-primary">No Articles Found</h3>
              <p className="text-muted-foreground">We couldn&apos;t find any blog post matching &quot;{searchQuery}&quot;.</p>
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
    </div>
  )
}
