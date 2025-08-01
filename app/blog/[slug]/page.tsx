import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import PostPageClient from "./PostPageClient"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) {
    return {
      title: "Artículo no encontrado / Article not found",
    }
  }
  return {
    title: `${post.frontmatter.title} / ${post.frontmatter.title_en} | Mi Portafolio`,
    description: `${post.frontmatter.description} / ${post.frontmatter.description_en}`,
    openGraph: {
      title: `${post.frontmatter.title} / ${post.frontmatter.title_en} | Mi Portafolio`,
      description: `${post.frontmatter.description} / ${post.frontmatter.description_en}`,
      url: `https://your-portfolio-url.com/blog/${post.slug}`, // Replace with your actual URL
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: ["Tu Nombre"], // Replace with your name
      images: [
        {
          url: post.frontmatter.image || "/placeholder.svg?height=630&width=1200", // Optional: add a cover image to frontmatter
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.frontmatter.title} / ${post.frontmatter.title_en} | Mi Portafolio`,
      description: `${post.frontmatter.description} / ${post.frontmatter.description_en}`,
      images: [post.frontmatter.image || "/placeholder.svg?height=630&width=1200"],
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <PostPageClient params={params} post={post} />
}
