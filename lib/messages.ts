interface Messages {
  [key: string]: {
    es: string
    en: string
  }
}

export const messages: Messages = {
  // General
  home: { es: "Inicio", en: "Home" },
  about: { es: "Sobre mí", en: "About me" },
  research: { es: "Investigación", en: "Research" },
  teaching: { es: "Docencia", en: "Teaching" },
  album: { es: "Álbum", en: "Album" },
  documents: { es: "Documentos", en: "Documents" },
  cvOption: { es: "Mi CV", en: "My CV" },
  cvSpanish: { es: "CV (Español)", en: "CV (Spanish)" },
  cvEnglish: { es: "CV (Inglés)", en: "CV (English)" },
  viewCV: { es: "Ver CV", en: "View CV" },
  downloadCV: { es: "Descargar CV", en: "Download CV" },
  system: { es: "Sistema", en: "System" },
  light: { es: "Claro", en: "Light" },
  dark: { es: "Oscuro", en: "Dark" },
  toggleTheme: { es: "Alternar tema", en: "Toggle theme" },
  toggleNavigation: { es: "Alternar navegación", en: "Toggle navigation" },
  madeWithLove: { es: "Hecho con cariño", en: "Made with love" },
  allRightsReserved: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  shareArticle: { es: "Comparte este artículo:", en: "Share this article:" },
  shareOnX: { es: "Compartir en X/Twitter", en: "Share on X/Twitter" },
  shareOnLinkedIn: { es: "Compartir en LinkedIn", en: "Share on LinkedIn" },
  copyLink: { es: "Copiar enlace", en: "Copy link" },
  linkCopied: { es: "Enlace copiado al portapapeles", en: "Link copied to clipboard" },
  tableOfContents: { es: "Contenido", en: "Table of Contents" },
  articleNotFound: { es: "Artículo no encontrado", en: "Article not found" },
  publishedOn: { es: "Publicado el", en: "Published on" },

  // Home Page
  fullName: { es: "Sebastián Molina", en: "Sebastián Molina" },
  role: {
    es: "Asistente de Investigación | Economía Aplicada y Finanzas",
    en: "Research Assistant | Applied Economics and Finance",
  },
  bio: {
    es: "Hola, ¡bienvenido a mi portafolio! Actualmente me desempeño como asistente de investigación en proyectos académicos. Mis intereses de investigación se centran en economía aplicada, con foco en energía y bioenergía, economía agrícola y análisis de políticas públicas.",
    en: "Hi, welcome to my portfolio! I currently work as a research assistant on academic projects. My research interests focus on applied economics, with an emphasis on energy and bioenergy, agricultural economics, and public policy analysis.",
  },

  profilePictureAlt: { es: "Foto de perfil", en: "Profile Picture" },

  // About Page 
  aboutMeTitle: { es: "Sobre mí", en: "About Me" },
  aboutMeParagraph1: {
    es: "Soy Ingeniero Comercial de la Universidad Austral de Chile. Durante el pregrado fui ayudante de cátedra en Ingeniería Económica y Matemáticas Financieras, y desarrollé mi tesis sobre la rentabilidad de producir biodiésel a partir de cultivos de raps en Chile, trabajo que posteriormente fue publicado en Biomass & Bioenergy (Q1). Mi examen de título consistió en una consultoría financiera para Clínica Costanera.",
    en: "I hold a Business and Economics degree from Universidad Austral de Chile. During my undergraduate studies, I served as a teaching assistant in Engineering Economics and Financial Mathematics, and I wrote my thesis on the profitability of producing biodiesel from rapeseed crops in Chile. This work was later published in Biomass & Bioenergy (Q1). My graduation exam consisted of a financial consulting project for Clínica Costanera.",
  },
  aboutMeParagraph2: {
    es: "Realicé un intercambio académico en la University of Wisconsin–Madison, en el Department of Agricultural & Applied Economics, experiencia que reforzó mi interés por la economía aplicada y la investigación empírica. En el mediano plazo, busco seguir una trayectoria académica orientada a un PhD y dedicarme a la investigación.",
    en: "I also completed an academic exchange at the University of Wisconsin–Madison in the Department of Agricultural & Applied Economics, which strengthened my interest in applied economics and empirical research. In the medium term, I aim to pursue a PhD-oriented academic path and focus on research.",
  },
  aboutMeParagraph3: {
    es: "Actualmente trabajo en Bci Asset Management como asistente contable y, en paralelo, apoyo como asistente de investigación en un proyecto FONDECYT.",
    en: "I currently work at Bci Asset Management as an accounting assistant and, in parallel, support a FONDECYT project as a research assistant.",
  },

  // Research Page
  researchTitle: { es: "Investigación", en: "Research" },
  researchDescription: {
    es: "Explora mis trabajos de investigación y publicaciones en diversas áreas de la economía y finanzas.",
    en: "Explore my research work and publications in various areas of economics and finance.",
  },

  // Album Page
  albumTitle: { es: "Álbum", en: "Album" },
  albumDescription: {
    es: "Una colección de momentos y proyectos visuales que reflejan mis intereses y pasiones.",
    en: "A collection of visual moments and projects that reflect my interests and passions.",
  },
  // Documents Page
  documentsTitle: {
    es: "Documentos",
    en: "Documents"
  },
  documentsDescription: {
    es: "Aquí puedes revisar y descargar documentos relevantes en distintos formatos.",
    en: "Here you can view and download relevant documents in various formats.",
  },

}
