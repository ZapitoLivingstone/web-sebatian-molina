"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

export function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer
      className="border-t py-8 md:py-12 bg-background"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            <span>{messages.madeWithLove[language]}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {messages.fullName[language]}. {messages.allRightsReserved[language]}
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/SIMOLINAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sebastianmolina03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:sebastian.molina03@alumnos.uach.cl"
          >
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=PFJvBgwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="sr-only">Google Scholar</span>
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
