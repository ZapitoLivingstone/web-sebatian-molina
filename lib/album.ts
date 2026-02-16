export type LocalizedText = {
  es: string
  en: string
}

export type AlbumImage = {
  src: string
  alt: string
  description: LocalizedText
}

// Imagenes del album para /album (los archivos viven en public/album)
export const albumImages: AlbumImage[] = [
  {
    src: "/album/esl-class.jpeg",
    alt: "ESL Class Fall 2023",
    description: {
      es: "Última clase de ESL durante mi tiempo como beneficiario de la beca Neale-Silva (otoño 2023)",
      en: "Last ESL class during my time as Neale-Silva scholarship recipient (Fall 2023)",
    },
  },
  {
    src: "/album/first-day-1.jpeg",
    alt: "First Day at UW-M 1",
    description: {
      es: "Primer día en UW-M",
      en: "First day at UW-M",
    },
  },
  {
    src: "/album/first-day-2.jpeg",
    alt: "First Day at UW-M 2",
    description: {
      es: "Primer día en UW-M",
      en: "First day at UW-M",
    },
  },
  {
    src: "/album/farm-visit-1.jpeg",
    alt: "Visiting the farm 1",
    description: {
      es: "Visitando la granja con el departamento AAE",
      en: "Visiting the farm with AAE department!",
    },
  },
  {
    src: "/album/farm-visit-2.jpeg",
    alt: "Visiting the farm 2",
    description: {
      es: "Visitando la granja con el departamento AAE",
      en: "Visiting the farm with AAE department!",
    },
  },
]
