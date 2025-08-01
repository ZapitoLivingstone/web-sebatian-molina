import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Ensure this is your deployment URL in production
  title: "Mi Portafolio / My Portfolio",
  description: "Portafolio personal de un desarrollador de software / Personal portfolio of a software developer",
  openGraph: {
    title: "Mi Portafolio / My Portfolio",
    description: "Portafolio personal de un desarrollador de software / Personal portfolio of a software developer",
    url: "https://your-portfolio-url.com", // Replace with your actual URL
    siteName: "Mi Portafolio / My Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Mi Portafolio / My Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portafolio / My Portfolio",
    description: "Portafolio personal de un desarrollador de software / Personal portfolio of a software developer",
    images: ["/placeholder.svg?height=630&width=1200"], // Replace with your actual image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
