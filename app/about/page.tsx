import { messages } from "@/lib/messages" // Added import
import AboutClientPage from "./AboutClientPage"

export const metadata = {
  title: `${messages.aboutMeTitle.es} | ${messages.fullName.es} / ${messages.aboutMeTitle.en} | ${messages.fullName.en}`,
  description: `${messages.aboutMeParagraph1.es} ${messages.aboutMeParagraph2.es} / ${messages.aboutMeParagraph1.en} ${messages.aboutMeParagraph2.en}`,
}

export default function AboutPage() {
  // No need to pass cvData as a prop if it's imported directly in the client component
  return <AboutClientPage />
}
