"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context" // Added import
import { messages } from "@/lib/messages" // Added import

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const { language } = useLanguage() // Added useLanguage hook
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const extractedHeadings: Heading[] = []
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")

    doc.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
      const id = heading.id
      const text = heading.textContent || ""
      const level = Number.parseInt(heading.tagName.substring(1)) // h2 -> 2, h3 -> 3 etc.
      if (id && text) {
        extractedHeadings.push({ id, text, level })
      }
    })
    setHeadings(extractedHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -70% 0px" }, // Adjust this margin as needed
    )

    extractedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [content, pathname])

  if (headings.length === 0) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.nav
      className="p-4 border rounded-lg bg-background shadow-sm"
      aria-labelledby="table-of-contents-heading"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 id="table-of-contents-heading" className="text-lg font-semibold mb-4" variants={itemVariants}>
        <span>{messages.tableOfContents[language]}</span> {/* Updated */}
      </motion.h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <motion.li
            key={heading.id}
            className={`text-sm ${heading.level > 2 ? `ml-${(heading.level - 2) * 4}` : ""}`}
            variants={itemVariants}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href={`#${heading.id}`}
              className={`block hover:text-primary transition-colors ${
                activeId === heading.id ? "font-medium text-primary" : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
