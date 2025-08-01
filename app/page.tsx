"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

export default function HomePage() {
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
        <motion.div className="mb-8" variants={itemVariants}>
          <Image
            src="/placeholder.svg?height=160&width=160"
            alt={messages.profilePictureAlt[language]}
            width={160}
            height={160}
            className="rounded-full mx-auto object-cover border-2 border-primary"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4"
          variants={itemVariants}
        >
          <span>{messages.fullName[language]}</span>
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-muted-foreground mb-8" variants={itemVariants}>
          <span>{messages.role[language]}</span>
        </motion.p>
        <motion.p className="max-w-[700px] mx-auto text-base md:text-lg mb-10" variants={itemVariants}>
          <span>{messages.bio[language]}</span>
        </motion.p>
        <motion.div className="flex justify-center gap-4 mb-10" variants={itemVariants}>
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/sebastianmolina03" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Button>
          </Link>
          <Link href="mailto:youremail@example.com">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
        {/* Removed the "View Blog" button as the blog functionality has been removed */}
        {/* <motion.div variants={itemVariants}>
          <Link href="/blog">
            <Button size="lg" className="px-8 py-3 text-lg">
              <span>{messages.viewBlog[language]}</span>
            </Button>
          </Link>
        </motion.div> */}
      </motion.div>
    </section>
  )
}
