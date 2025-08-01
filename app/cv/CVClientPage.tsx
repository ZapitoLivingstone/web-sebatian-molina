"use client"

import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { cvData } from "@/lib/cv-data"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CVClientPage() {
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
        className="container px-4 md:px-6 max-w-4xl space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{messages.cvTitle[language]}</h1>
          <p className="text-lg text-muted-foreground mt-2">
            {cvData.name} | {cvData.role[language]}
          </p>
          <p className="text-sm text-muted-foreground">
            {messages.contactInformation[language]}: {cvData.contactInfo[language]}
          </p>
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button variant="outline">{messages.downloadCV[language]}</Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">{messages.experience[language]}</h2>
          <div className="space-y-8">
            {cvData.experience.map((exp, index) => (
              <motion.div key={index} className="grid md:grid-cols-[1fr_auto] gap-2" variants={itemVariants}>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title[language]}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  {exp.description && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                      {exp.description[language].map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{exp.duration[language]}</p>
                  <p>{exp.location[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">{messages.education[language]}</h2>
          <div className="space-y-8">
            {cvData.education.map((edu, index) => (
              <motion.div key={index} className="grid md:grid-cols-[1fr_auto] gap-2" variants={itemVariants}>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree[language]}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  {edu.activities && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {messages.activitiesAndGroups[language]}: {edu.activities[language]}
                    </p>
                  )}
                  {edu.focus && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {messages.focusedOn[language]}: {edu.focus[language]}
                    </p>
                  )}
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{edu.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
