"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

const teachingExperiences = [
  {
    title: {
      es: "Ayudante de Cátedra",
      en: "Teaching Assistant",
    },
    institution: "Universidad Austral de Chile",
    type: "Part-time",
    date: {
      es: "Jul 2021 - Jul 2023 · 2 años 1 mes",
      en: "Jul 2021 - Jul 2023 · 2 years 1 month",
    },
    location: "Valdivia, Chile",
    description: {
      es: "Ayudantía en Ingeniería Económica y Matemáticas Financieras para Ingeniería Comercial y Auditoría. Preparación de ejercicios, tutorías, y resolución de dudas sobre temas como valor del dinero en el tiempo, anualidades y amortización.",
      en: "Assisted in Engineering Economics and Financial Math for Business and Accounting majors. Prepared exercises, led tutorials, and answered questions on topics such as time value of money, annuities, and amortization.",
    },
  },
  {
    title: {
      es: "Ayudante de Investigación",
      en: "Research Assistant",
    },
    institution: "Universidad Austral de Chile",
    type: "Freelance",
    date: {
      es: "Mar 2023 - Jul 2024 · 1 año 5 meses",
      en: "Mar 2023 - Jul 2024 · 1 year 5 months",
    },
    location: "Valdivia, Chile · Híbrido",
    description: {
      es: "Investigación sobre la viabilidad económica del biodiésel de raps. El estudio fue aceptado en *Biomass and Bioenergy* y se enfocó en sostenibilidad, VAN y TIR.",
      en: "Research on the economic feasibility of rapeseed biodiesel. The study was accepted in *Biomass and Bioenergy* and focused on sustainability, NPV, and IRR.",
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function TeachingClientPage() {
  const { language } = useLanguage()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <motion.div
        className="container px-4 md:px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl mb-6"
          variants={itemVariants}
        >
          {messages.teachingTitle[language]}
        </motion.h1>

        <motion.p
          className="max-w-[700px] mx-auto text-lg text-muted-foreground text-center mb-10"
          variants={itemVariants}
        >
          {messages.teachingDescription[language]}
        </motion.p>

        <motion.div className="grid gap-6" variants={containerVariants}>
          {teachingExperiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-xl p-5 bg-white dark:bg-background shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold">
                {exp.title[language]}{" "}
                <span className="text-muted-foreground">· {exp.type}</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {exp.institution} · {exp.location}
              </p>
              <p className="text-sm text-muted-foreground mb-3">{exp.date[language]}</p>
              <p className="text-base whitespace-pre-line">{exp.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
