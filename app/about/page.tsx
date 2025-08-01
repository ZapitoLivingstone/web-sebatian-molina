import { messages } from "@/lib/messages"
import AboutClientPage from "./AboutClientPage"

export const metadata = {
  title: `${messages.aboutMeTitle.es} | ${messages.fullName.es} / ${messages.aboutMeTitle.en} | ${messages.fullName.en}`,
  description: `${messages.aboutMeParagraph1.es} ${messages.aboutMeParagraph2.es} / ${messages.aboutMeParagraph1.en} ${messages.aboutMeParagraph2.en}`,
}

export default function AboutPage() {
  return <AboutClientPage />
}
