import CVClientPage from "./CVClientPage"
import type { Metadata } from "next" // Added import

// Metadata for the CV page (Server Component)
export const metadata: Metadata = {
  title: "Currículum Vitae | Sebastián Molina / Curriculum Vitae | Sebastián Molina",
  description:
    "Currículum Vitae de Sebastián Molina, Ingeniero y Analista / Sebastián Molina's Curriculum Vitae, Engineer and Analyst.",
}

export default function CVPage() {
  return <CVClientPage />
}
