import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import { Toaster } from "@/components/ui/sonner"
import Head from "next/head" // ✅ Asegúrate de importar Head

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Sebastián Molina - Mi Portafolio / My Portfolio",
  description: "Portafolio profesional de Sebastián Molina, Ingeniero Comercial con experiencia en estrategia, análisis y gestión.",
  openGraph: {
    title: "Mi Portafolio / My Portfolio",
    description: "Conoce la trayectoria, habilidades y proyectos destacados de Sebastián Molina, Ingeniero Comercial.",
    url: "https://your-portfolio-url.com",
    siteName: "Mi Portafolio / My Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
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
    images: ["/placeholder.svg?height=630&width=1200"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        {/* ✅ Aquí va el favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
