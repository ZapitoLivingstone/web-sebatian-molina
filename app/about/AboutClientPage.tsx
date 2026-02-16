"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

export default function AboutClientPage() {
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
        className="container px-4 md:px-6 max-w-4xl grid gap-8 md:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center md:justify-end" variants={itemVariants}>
          <Image
            src="foto_de_perfil.jpeg"
            alt={messages.profilePictureAlt[language]}
            width={300}
            height={300}
            className="rounded-lg object-cover border-2 border-primary shadow-lg"
          />
        </motion.div>
        <motion.div className="space-y-6 text-center md:text-left" variants={itemVariants}>
          <motion.h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
            <span>{messages.aboutMeTitle[language]}</span>
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
            <span>{messages.aboutMeParagraph1[language]}</span>
          </motion.p>
          <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
            <span>{messages.aboutMeParagraph2[language]}</span>
          </motion.p>
          <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
            <span>{messages.aboutMeParagraph3[language]}</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
