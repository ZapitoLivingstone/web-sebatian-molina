"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

export default function HomePage() {
  const { language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-background">
      <motion.div
        className="container px-4 md:px-6 max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8 mx-auto w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary" variants={itemVariants}>
          <Image
            src="foto_de_perfil.jpeg"
            alt={messages.profilePictureAlt[language]}
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4"
          variants={itemVariants}
        >
          {messages.fullName[language]}
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-muted-foreground mb-8" variants={itemVariants}>
          {messages.role[language]}
        </motion.p>

        <motion.p className="max-w-xl mx-auto text-base md:text-lg mb-12 leading-relaxed text-justify" variants={itemVariants}>
          {messages.bio[language]}
        </motion.p>

        <motion.div className="flex justify-center gap-4 mb-10" variants={itemVariants}>
          <Link href="https://github.com/SIMOLINAM" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/sebastianmolina03" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="mailto:sebastian.molina03@alumnos.uach.cl">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Email">
              <Mail className="h-6 w-6" />
            </Button>
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=PFJvBgwAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Google Scholar">
              <BookOpen className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="/about" passHref>
            <Button variant="default" size="lg" className="rounded-xl px-8">
              {language === "es" ? "Sobre mí" : "About Me"}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
