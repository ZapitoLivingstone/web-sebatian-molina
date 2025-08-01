"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

// Define the type for a post
interface Post {
  slug: string
  frontmatter: {
    title: string
    title_en: string
    date: string
    categories: string[]
    description: string
    description_en: string
    image?: string
  }
}

export default function BlogClientPage({ posts }: { posts: Post[] }) {
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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl" variants={itemVariants}>
            <span>{messages.blogTitle[language]}</span>
          </motion.h1>
          <motion.p className="max-w-[900px] text-lg text-muted-foreground" variants={itemVariants}>
            <span>{messages.blogDescription[language]}</span>
          </motion.p>
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group" prefetch={false}>
                <Card className="h-full flex flex-col transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.frontmatter[`title_${language}` as keyof typeof post.frontmatter]}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      <span>
                        {messages.publishedOn[language]}{" "}
                        {format(
                          new Date(post.frontmatter.date),
                          language === "es" ? "dd 'de' MMMM, yyyy" : "MMMM dd, yyyy",
                          { locale: language === "es" ? es : enUS },
                        )}
                      </span>
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.frontmatter.categories.map((category: string) => (
                        <span
                          key={category}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-base">
                      {post.frontmatter[`description_${language}` as keyof typeof post.frontmatter]}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
