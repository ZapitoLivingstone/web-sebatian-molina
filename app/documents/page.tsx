import { messages } from "@/lib/messages"
import DocumentsClientPage from "./DocumentsClientPage"

export const metadata = {
  title: `${messages.documentsTitle.es} | ${messages.fullName.es} / ${messages.documentsTitle.en} | ${messages.fullName.en}`,
  description: `${messages.documentsDescription.es} / ${messages.documentsDescription.en}`,
}

export default function DocumentsPage() {
  return <DocumentsClientPage />
}
