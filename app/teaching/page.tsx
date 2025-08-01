import type { Metadata } from "next"
import TeachingClientPage from "./TeachingClientPage"
import { messages } from "@/lib/messages"

export const metadata: Metadata = {
  title: `${messages.teaching.es} | ${messages.fullName.es} / ${messages.teaching.en} | ${messages.fullName.en}`,
  description: `${messages.teachingDescription.es} / ${messages.teachingDescription.en}`,
}

export default function TeachingPage() {
  return <TeachingClientPage />
}
