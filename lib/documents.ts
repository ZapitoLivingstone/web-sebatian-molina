export type LocalizedText = {
  es: string
  en: string
}

export type DocumentItem = {
  title: LocalizedText
  description: LocalizedText
  url: string
  format: string
}

// Documentos descargables para /documents
export const documents: DocumentItem[] = [
  {
    title: {
      es: "Carta de Aceptación de Beca",
      en: "Scholarship Acceptance Letter",
    },
    description: {
      es: "Carta oficial que certifica la aceptación de la beca otorgada.",
      en: "Official letter certifying the scholarship award acceptance.",
    },
    url: "/documents/carta.pdf",
    format: "PDF",
  },
  {
    title: {
      es: "Carta de Aceptación de Beca",
      en: "Scholarship Acceptance Letter",
    },
    description: {
      es: "Carta oficial que certifica la aceptación de la beca otorgada.",
      en: "Official letter certifying the scholarship award acceptance.",
    },
    url: "/documents/carta.pdf",
    format: "PDF",
  },
]
