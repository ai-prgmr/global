import type { MetadataRoute } from "next"
import { EXAMS_DATA } from "@/lib/data/exams"
import { DESTINATIONS_DATA } from "@/lib/data/destinations"
import { SERVICES_DATA } from "@/lib/data/services"
import { LOCATIONS_DATA } from "@/lib/data/locations"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theglobalizers.com"

  // 1. Static routes
  const staticRoutes = [
    "",
    "/about-globalizers",
    "/prashant-hemnani",
    "/success-stories",
    "/team",
    "/testimonials",
    "/results",
    "/services",
    "/exams",
    "/destinations",
    "/locations",
    "/franchise",
    "/contact-us",
    "/blog",
    "/learning-center",
    "/events-updates",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // 2. Dynamic services routes
  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // 3. Dynamic exams routes
  const examRoutes = Object.keys(EXAMS_DATA).map((slug) => ({
    url: `${baseUrl}/exams/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // 4. Dynamic destinations routes
  const destinationRoutes = Object.keys(DESTINATIONS_DATA).map((slug) => ({
    url: `${baseUrl}/destinations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // 5. Dynamic locations routes
  const locationRoutes = Object.keys(LOCATIONS_DATA).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...examRoutes,
    ...destinationRoutes,
    ...locationRoutes,
  ]
}
