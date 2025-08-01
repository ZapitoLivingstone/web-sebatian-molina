import { getAllPosts } from "@/lib/posts" // Added import
import BlogClientPage from "./BlogClientPage"
import { messages } from "@/lib/messages"

export const metadata = {
  title: `${messages.blog.es} | ${messages.fullName.es} / ${messages.blog.en} | ${messages.fullName.en}`,
  description: `${messages.blogDescription.es} / ${messages.blogDescription.en}`,
}

export default async function BlogPage() {
  const posts = await getAllPosts() // Fetch data on the server
  return <BlogClientPage posts={posts} /> // Pass data as prop
}
