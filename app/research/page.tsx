import type { Metadata } from "next"
import ResearchClientPage from "./ResearchClientPage"
import { messages } from "@/lib/messages"

export const metadata: Metadata = {
  title: `${messages.research.es} | ${messages.fullName.es} / ${messages.research.en} | ${messages.fullName.en}`,
  description: `${messages.researchDescription.es} / ${messages.researchDescription.en}`,
}

export default function ResearchPage() {
  return <ResearchClientPage />
}
