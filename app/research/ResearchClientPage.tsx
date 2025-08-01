"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

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
        <motion.h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4" variants={itemVariants}>
          <span>{messages.researchTitle[language]}</span>
        </motion.h1>
        <motion.p className="max-w-[700px] mx-auto text-lg text-muted-foreground mb-10" variants={itemVariants}>
          <span>{messages.researchDescription[language]}</span>
        </motion.p>
        <motion.div variants={itemVariants}>
          <p className="text-xl text-primary">
            <span>¡Contenido de investigación próximamente! / </span>
            <span className="text-muted-foreground">Research content coming soon!</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
