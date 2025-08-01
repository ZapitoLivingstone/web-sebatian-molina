"use client"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { MDXComponents } from "@/components/mdx-components"
import { TableOfContents } from "@/components/table-of-contents"
import { ShareButtons } from "@/components/share-buttons"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"

// Define the type for a post
interface Post {
  slug: string
  content: string
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

export default function PostPageClient({ params, post }: { params: { slug: string }; post: Post }) {
  const { language } = useLanguage()
  const postUrl = Array.isArray(post.slug)
    ? `https://your-portfolio-url.com/blog/${post.slug[0]}`
    : `https://your-portfolio-url.com/blog/${post.slug}` // Replace with your actual URL

  const rawTitle = post.frontmatter[`title_${language}` as keyof typeof post.frontmatter] || post.frontmatter.title || ""
  const postTitle = Array.isArray(rawTitle) ? rawTitle[0] : rawTitle

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
    <motion.article
      className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 grid lg:grid-cols-[1fr_200px] gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="prose prose-neutral dark:prose-invert mx-auto w-full max-w-3xl">
        <motion.header className="mb-8 text-center" variants={itemVariants}>
          <motion.h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4" variants={itemVariants}>
            {post.frontmatter[`title_${language}` as keyof typeof post.frontmatter]}
          </motion.h1>
          <motion.p className="text-muted-foreground text-sm mb-2" variants={itemVariants}>
            <span>
              {messages.publishedOn[language]}{" "}
              {format(new Date(post.frontmatter.date), language === "es" ? "dd 'de' MMMM, yyyy" : "MMMM dd, yyyy", {
                locale: language === "es" ? es : enUS,
              })}
            </span>
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-2" variants={itemVariants}>
            {post.frontmatter.categories.map((category: string) => (
              <span
                key={category}
                className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </motion.header>
        <motion.div variants={itemVariants}>
          <MDXRemote source={post.content} components={MDXComponents} />
        </motion.div>
        <motion.div
          className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <p className="text-sm text-muted-foreground">
            <span>{messages.shareArticle[language]}</span>
          </p>
          <ShareButtons url={postUrl} title={postTitle} />
        </motion.div>
      </div>
      <motion.div className="hidden lg:block sticky top-20 h-fit" variants={itemVariants}>
        <TableOfContents content={post.content} />
      </motion.div>
    </motion.article>
  )
}
