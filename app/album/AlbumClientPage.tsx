"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { albumImages } from "@/lib/album"

export default function AlbumClientPage() {
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
        className="container px-4 md:px-6 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4"
          variants={itemVariants}
        >
          {messages.albumTitle[language]}
        </motion.h1>
        <motion.p
          className="max-w-[700px] mx-auto text-lg text-muted-foreground mb-10"
          variants={itemVariants}
        >
          {messages.albumDescription[language]}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {albumImages.map((image, index) => (
            <motion.div key={index} className="space-y-2" variants={itemVariants}>
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-60 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />
              </a>
              <p className="text-sm text-muted-foreground">{image.description[language]}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
