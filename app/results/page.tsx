import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Admissions Results | The Globalizers",
  description:
    "View verified admission offers and success stories from The Globalizers.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ResultsPage() {
  redirect("/success-stories")
}
