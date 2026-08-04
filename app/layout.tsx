import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingActions } from "@/components/FloatingActions"
import { cn } from "@/lib/utils"
import { generateOrganizationSchema } from "@/lib/schema"

const montserrat = {
  variable: "font-montserrat",
}

const inter = {
  variable: "font-inter",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://theglobalizers.com"),
  title: {
    default: "The Globalizers | Changing Lives, One Student at a Time",
    template: "%s | The Globalizers",
  },
  description:
    "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ students mentored.",
  openGraph: {
    title: "The Globalizers | Changing Lives, One Student at a Time",
    description:
      "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ students mentored.",
    url: "https://theglobalizers.com",
    type: "website",
    locale: "en_IN",
    siteName: "The Globalizers",
    images: [
      {
        url: "https://theglobalizers.com/global/globalizers-logo.webp",
        width: 1200,
        height: 630,
        alt: "The Globalizers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Globalizers | Changing Lives, One Student at a Time",
    description:
      "India's leading consultancy for Study Abroad, GRE, GMAT, IELTS, and TOEFL preparation. 19+ years of excellence, 6,000+ students mentored.",
    images: ["https://theglobalizers.com/global/globalizers-logo.webp"],
    creator: "@theglobalizers",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const globalSchema = generateOrganizationSchema()

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
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
