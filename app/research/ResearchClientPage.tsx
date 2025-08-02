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
      url: "https://scholar.google.com/citations?user=PFJvBgwAAAAJ&hl=en",
      title: {
        es: "Perfil en Google Scholar",
        en: "Google Scholar Profile",
      },
      description: {
        es: "Revisa todas las publicaciones y métricas académicas del autor en Google Scholar.",
        en: "View the author's academic publications and citation metrics on Google Scholar.",
      },
    },
    {
      url: "https://www.economicas.uach.cl/academico-y-exalumno-de-facea-publican-articulo-sobre-viabilidad-del-biodiesel-en-revista-cientifica-internacional/",
      title: {
        es: "Artículo en FACEA - UACh",
        en: "Article in FACEA - UACh",
      },
      description: {
        es: "Publicación sobre la viabilidad del biodiésel en una revista científica internacional.",
        en: "Publication on biodiesel feasibility in an international scientific journal.",
      },
    },
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
    },
    {
      url: "https://orcid.org/0009-0007-7446-5213",
      title: {
        es: "Perfil ORCID",
        en: "ORCID Profile",
      },
      description: {
        es: "Identificador digital único con todas las publicaciones asociadas al autor.",
        en: "Unique digital identifier listing the author's academic contributions.",
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
            <motion.div key={index} className="p-4 border rounded-lg hover:bg-muted transition-colors">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-primary hover:underline"
              >
                {link.title[language]}
              </a>
              <p className="text-muted-foreground mt-1">{link.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
