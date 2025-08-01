import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

export async function compileMdx(source: string) {
  const { content, frontmatter } = await compileMDX<{
    title: string
    title_en: string
    date: string
    categories: string[]
    description: string
    description_en: string
    image?: string
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [
            rehypePrettyCode,
            {
              theme: "github-dark", // You can choose other themes like 'github-light', 'dracula', etc.
              onVisitLine(node: any) {
                // Prevent lines from collapsing in `display: grid` mode, and allow empty
                // lines to be copyable
                if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }]
                }
              },
              onVisitHighlightedLine(node: any) {
                node.properties.className.push("line--highlighted")
              },
              onVisitHighlightedWord(node: any) {
                node.properties.className = ["word--highlighted"]
              },
            },
          ],
        ],
      },
    },
  })

  return { content, frontmatter }
}
