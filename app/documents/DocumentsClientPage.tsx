"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { FileText, Download } from "lucide-react"

const documents = [
  {
    title: {
      es: "Carta de Aceptación de Beca",
      en: "Scholarship Acceptance Letter",
    },
    description: {
      es: "Carta oficial que certifica la aceptación de la beca otorgada.",
      en: "Official letter certifying the scholarship award acceptance.",
    },
    url: "/documents/carta.pdf",
    format: "PDF",
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

export default function DocumentsClientPage() {
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
          {messages.documentsTitle[language]}
        </motion.h1>
        <motion.p
          className="max-w-[700px] mx-auto text-lg text-muted-foreground text-center mb-10"
          variants={itemVariants}
        >
          {messages.documentsDescription[language]}
        </motion.p>

        <motion.div className="grid gap-6" variants={containerVariants}>
          {documents.map((doc, idx) => (
            <motion.a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-xl p-5 bg-white dark:bg-background shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              variants={itemVariants}
            >
              <FileText className="text-primary mt-1" size={32} />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{doc.title[language]}</h3>
                <p className="text-sm text-muted-foreground mb-1">{doc.description[language]}</p>
                <span className="text-xs text-primary">{doc.format}</span>
              </div>
              <Download className="text-muted-foreground mt-1" size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
