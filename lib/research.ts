export type LocalizedText = {
  es: string
  en: string
}

export type ResearchItem = {
  url: string
  title: LocalizedText
  description: LocalizedText
  citation: LocalizedText
}

// Investigaciones/publicaciones para /research
export const researchItems: ResearchItem[] = [
  {
    url: "https://doi.org/10.1016/j.biombioe.2025.108197",
    title: {
      es: "Artículo en Biomass & Bioenergy (Elsevier)",
      en: "Article in Biomass & Bioenergy (Elsevier)",
    },
    description: {
      es: "Investigación científica publicada en la revista Biomass & Bioenergy.",
      en: "Scientific research published in Biomass & Bioenergy journal.",
    },
    citation: {
      es: "Molina, S. y Doussoulin, J.P. (2025). Hacia una bioeconomía circular en países en desarrollo: brecha de rentabilidad en la producción de biodiésel en Chile. *Biomass and Bioenergy*, Vol. 202, 108197.",
      en: "Molina, S., & Doussoulin, J.P. (2025). Moving towards a circular bioeconomy in developing countries: Profitability gap in Chile’s biodiesel production. *Biomass and Bioenergy*, Vol. 202, 108197.",
    },
  },
]
