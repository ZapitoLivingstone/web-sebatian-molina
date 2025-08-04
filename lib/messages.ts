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
    es: "Asistente de Investigación | Bci Asset Management | Economía Aplicada y Finanzas",
    en: "Research Assistant | Bci Asset Management | Applied Economics and Finance",
  },
  bio: {
  es: "¡Hola! Soy Sebastián, actualmente me desempeño como ayudante de investigación en proyectos vinculados a economía aplicada con foco en sostenibilidad, agroindustria y desarrollo rural. He trabajado en análisis financiero, evaluación de proyectos y consultoría estratégica, combinando metodologías cuantitativas con una perspectiva orientada a políticas públicas.",
  en: "Hello! I’m Sebastián, currently working as a research assistant on projects related to applied economics with a focus on sustainability, agroindustry, and rural development. I have experience in financial analysis, project evaluation, and strategic consulting, combining quantitative methods with a public policy-oriented perspective.",
  },

  profilePictureAlt: { es: "Foto de perfil", en: "Profile Picture" },

  // About Page 
  aboutMeTitle: { es: "Sobre mí", en: "About Me" },
  aboutMeParagraph1: {
    es: "¡Hola! Soy Sebastián Molina, un ingeniero con una sólida formación en economía aplicada y finanzas. Mi trayectoria profesional se ha centrado en el análisis de datos y la consultoría, buscando siempre soluciones innovadoras y eficientes.",
    en: "Hi! I'm Sebastián Molina, an engineer with a strong background in applied economics and finance. My professional journey has focused on data analysis and consulting, always seeking innovative and efficient solutions.",
  },
  aboutMeParagraph2: {
    es: "Fuera del ámbito profesional, disfruto del fútbol universitario y el aprendizaje continuo. Creo firmemente en la mejora constante y en la exploración de nuevas áreas de conocimiento. ¡Gracias por visitar mi portafolio!",
    en: "Outside of my professional life, I enjoy university football and continuous learning. I firmly believe in constant improvement and exploring new areas of knowledge. Thanks for visiting my portfolio!",
  },

  // Research Page
  researchTitle: { es: "Investigación", en: "Research" },
  researchDescription: {
    es: "Explora mis trabajos de investigación y publicaciones en diversas áreas de la economía y finanzas.",
    en: "Explore my research work and publications in various areas of economics and finance.",
  },

  // Teaching Page
  teachingTitle: { es: "Docencia", en: "Teaching" },
  teachingDescription: {
    es: "Materiales y recursos de los cursos en los que he participado como ayudante de cátedra o instructor.",
    en: "Materials and resources from courses where I have participated as a teaching assistant or instructor.",
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
