"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { researchItems } from "@/lib/research"

export default function ResearchClientPage() {
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
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <motion.div
        className="container px-4 md:px-6 text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4"
          variants={itemVariants}
        >
          <span>{messages.researchTitle[language]}</span>
        </motion.h1>
        <motion.p
          className="max-w-[700px] mx-auto text-lg text-muted-foreground mb-10"
          variants={itemVariants}
        >
          <span>{messages.researchDescription[language]}</span>
        </motion.p>
        <motion.div className="space-y-6 text-left" variants={itemVariants}>
          {researchItems.map((link, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-primary hover:underline"
              >
                {link.title[language]}
              </a>
              <p className="text-muted-foreground mt-1">
                {link.description[language]}
              </p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                {link.citation[language]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
