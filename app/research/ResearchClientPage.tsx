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

  const links = [
    {
      url: "https://doi.org/10.1016/j.biombioe.2025.108197",
      title: {
        es: "Artículo en Biomass & Bioenergy (Elsevier)",
        en: "Article in Biomass & Bioenergy (Elsevier)",
      },
      description: {
        es: "Investigación científica publicada en la revista Biomass & Bioenergy.",
        en: "Scientific research published in Biomass & Bioenergy journal.",
      },
      citation: {
        es: "Molina, S. y Doussoulin, J.P. (2025). Hacia una bioeconomía circular en países en desarrollo: brecha de rentabilidad en la producción de biodiésel en Chile. *Biomass and Bioenergy*, Vol. 202, 108197.",
        en: "Molina, S., & Doussoulin, J.P. (2025). Moving towards a circular bioeconomy in developing countries: Profitability gap in Chile’s biodiesel production. *Biomass and Bioenergy*, Vol. 202, 108197.",
      },
    },
  ]

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
          {links.map((link, index) => (
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
