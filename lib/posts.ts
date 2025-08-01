import fs from "fs"
import path from "path"
import { compileMdx } from "./mdx"

const postsDirectory = path.join(process.cwd(), "content")

export async function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      const { frontmatter } = await compileMdx(fileContents)

      return {
        slug,
        frontmatter: frontmatter as {
          title: string
          title_en: string
          date: string
          categories: string[]
          description: string
          description_en: string
          image?: string
        },
      }
    }),
  )

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { content, frontmatter } = await compileMdx(fileContents)

    return {
      slug,
      content,
      frontmatter: frontmatter as {
        title: string
        title_en: string
        date: string
        categories: string[]
        description: string
        description_en: string
        image?: string
      },
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
