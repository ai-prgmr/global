"use client"

import { useState } from "react"
import Image from "next/image"
import { POSTS, CATEGORIES } from "@/lib/data/blog"

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts
  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="mb-4 font-[Montserrat] text-4xl font-bold md:text-5xl">
            Blog &amp; Resources
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
            Expert insights, exam tips, country guides, and career advice for your
            global education journey.
          </p>
          
          {/* Search */}
          <div className="mx-auto flex max-w-xl items-center rounded-xl bg-white/10 px-4">
            <span className="material-symbols-outlined text-white/60">search</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="material-symbols-outlined text-white/60 hover:text-white"
              >
                close
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-surface-border bg-white py-4">
        <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto px-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white scale-105"
                  : "bg-surface-container text-on-surface-variant hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-[1280px] px-6 py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-surface-border bg-white transition-all hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-3 text-xs text-on-surface-variant">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="mb-2 font-[Montserrat] text-lg font-semibold text-primary group-hover:text-secondary">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-on-surface-variant line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary">
                    Read More{" "}
                    <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/40">
              search_off
            </span>
            <h3 className="mt-4 font-[Montserrat] text-xl font-bold text-primary">
              No Articles Found
            </h3>
            <p className="mt-2 text-on-surface-variant">
              We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in the selected category.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-tertiary py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="mb-4 font-[Montserrat] text-2xl font-bold">
            Stay Updated
          </h2>
          <p className="mb-6 text-white/60">
            Get the latest study abroad tips and resources delivered to your inbox.
          </p>
          <div className="mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/40 outline-none"
            />
            <button className="rounded-lg bg-secondary px-6 py-3 font-[Montserrat] font-bold text-white transition-all hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
