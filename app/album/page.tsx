import type { Metadata } from "next"
import AlbumClientPage from "./AlbumClientPage"
import { messages } from "@/lib/messages"

export const metadata: Metadata = {
  title: `${messages.album.es} | ${messages.fullName.es} / ${messages.album.en} | ${messages.fullName.en}`,
  description: `${messages.albumDescription.es} / ${messages.albumDescription.en}`,
}

export default function AlbumPage() {
  return <AlbumClientPage />
}
