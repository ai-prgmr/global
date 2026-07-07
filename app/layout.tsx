import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingActions } from "@/components/FloatingActions"
import { cn } from "@/lib/utils"

const montserrat = {
  variable: "font-montserrat",
}

const inter = {
  variable: "font-inter",
}

export const metadata: Metadata = {
  title: {
    default: "The Globalizers | Changing Lives, One Student at a Time",
    template: "%s | The Globalizers",
  },
  description:
    "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ students mentored.",
  keywords: [
    "study abroad",
    "GRE preparation",
    "IELTS coaching",
    "GMAT training",
    "TOEFL prep",
    "study in USA",
    "education consultancy India",
    "The Globalizers",
    "Prashant Hemnani",
  ],
  openGraph: {
    title: "The Globalizers | Changing Lives, One Student at a Time",
    description:
      "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation.",
    type: "website",
    locale: "en_IN",
    siteName: "The Globalizers",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased scroll-smooth",
        montserrat.variable,
        inter.variable
      )}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}
