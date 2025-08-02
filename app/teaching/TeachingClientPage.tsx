"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

const teachingLinks = [
  {
    title: {
      es: "Clase introductoria de Microeconomía",
      en: "Introductory Microeconomics Class",
    },
    description: {
      es: "Ayudantía realizada para estudiantes de primer año, semestre otoño 2023.",
      en: "Teaching session for first-year students, Fall 2023 semester.",
    },
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  },
  {
    title: {
      es: "Taller de Evaluación de Proyectos",
      en: "Project Evaluation Workshop",
    },
    description: {
      es: "Grabación del taller con resolución de casos prácticos.",
      en: "Workshop recording with practical case solutions.",
    },
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ", 
  },
  //aqui puedes agregar más ayudantías o clases grabadas
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
        className="container px-4 md:px-6 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl mb-6" variants={itemVariants}>
          {messages.teachingTitle[language]}
        </motion.h1>
        <motion.p className="max-w-[700px] mx-auto text-lg text-muted-foreground text-center mb-10" variants={itemVariants}>
          {messages.teachingDescription[language]}
        </motion.p>

        <motion.div
          className="grid gap-10 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teachingLinks.map((item, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all bg-white dark:bg-background"
              variants={itemVariants}
            >
              <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-full"
                  src={item.url}
                  title={item.title[language]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title[language]}</h3>
              <p className="text-muted-foreground">{item.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>

        {teachingLinks.length === 0 && (
          <motion.p className="text-xl text-center text-muted-foreground mt-10" variants={itemVariants}>
            {language === "es"
              ? "¡Contenido de docencia próximamente!"
              : "Teaching content coming soon!"}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
