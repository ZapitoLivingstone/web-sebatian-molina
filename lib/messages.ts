interface Messages {
  [key: string]: {
    es: string
    en: string
  }
}

export const messages: Messages = {
  // General
  home: { es: "Inicio", en: "Home" },
  about: { es: "Sobre mí", en: "About" },
  research: { es: "Investigación", en: "Research" },
  teaching: { es: "Docencia", en: "Teaching" },
  album: { es: "Álbum", en: "Album" },
  cvOption: { es: "Mi CV", en: "My CV" }, // This will now link to /about
  cvSpanish: { es: "CV (Español)", en: "CV (Spanish)" }, // These will link to /about
  cvEnglish: { es: "CV (Inglés)", en: "CV (English)" }, // These will link to /about
  viewCV: { es: "Ver CV", en: "View CV" },
  downloadCV: { es: "Descargar CV", en: "Download CV" },
  system: { es: "Sistema", en: "System" },
  light: { es: "Claro", en: "Light" },
  dark: { es: "Oscuro", en: "Dark" },
  toggleTheme: { es: "Alternar tema", en: "Toggle theme" },
  toggleNavigation: { es: "Alternar navegación", en: "Toggle navigation" },
  madeWithLove: { es: "Hecho con cariño", en: "Made with love" },
  allRightsReserved: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  shareArticle: { es: "Comparte este artículo:", en: "Share this article:" }, // Kept for potential future use or if other share buttons exist
  shareOnX: { es: "Compartir en X/Twitter", en: "Share on X/Twitter" }, // Kept
  shareOnLinkedIn: { es: "Compartir en LinkedIn", en: "Share on LinkedIn" }, // Kept
  copyLink: { es: "Copiar enlace", en: "Copy link" }, // Kept
  linkCopied: { es: "Enlace copiado al portapapeles", en: "Link copied to clipboard" }, // Kept
  tableOfContents: { es: "Contenido", en: "Table of Contents" }, // Can be removed if no MDX
  articleNotFound: { es: "Artículo no encontrado", en: "Article not found" }, // Can be removed if no MDX
  publishedOn: { es: "Publicado el", en: "Published on" }, // Can be removed if no MDX

  // Home Page
  fullName: { es: "Sebastián Molina", en: "Sebastián Molina" },
  role: { es: "Ingeniero | Analista | Investigador", en: "Engineer | Analyst | Researcher" },
  bio: {
    es: "Soy un ingeniero apasionado por el análisis de datos, la economía aplicada y las finanzas. Me encanta resolver problemas complejos y construir soluciones que impacten positivamente.",
    en: "I am an engineer passionate about data analysis, applied economics, and finance. I love solving complex problems and building solutions that make a positive impact.",
  },
  profilePictureAlt: { es: "Foto de perfil", en: "Profile Picture" },

  // About Page (Expanded)
  aboutMeTitle: { es: "Sobre mí y Experiencia", en: "About Me & Experience" },
  aboutMeParagraph1: {
    es: "¡Hola! Soy Sebastián Molina, un ingeniero con una sólida formación en economía aplicada y finanzas. Mi trayectoria profesional se ha centrado en el análisis de datos y la consultoría, buscando siempre soluciones innovadoras y eficientes.",
    en: "Hi! I'm Sebastián Molina, an engineer with a strong background in applied economics and finance. My professional journey has focused on data analysis and consulting, always seeking innovative and efficient solutions.",
  },
  aboutMeParagraph2: {
    es: "Fuera del ámbito profesional, disfruto del fútbol universitario y el aprendizaje continuo. Creo firmemente en la mejora constante y en la exploración de nuevas áreas de conocimiento. ¡Gracias por visitar mi portafolio!",
    en: "Outside of my professional life, I enjoy university football and continuous learning. I firmly believe in constant improvement and exploring new areas of knowledge. Thanks for visiting my portfolio!",
  },
  experience: { es: "Experiencia", en: "Experience" },
  education: { es: "Educación", en: "Education" },
  activitiesAndGroups: { es: "Actividades y grupos", en: "Activities and groups" },
  focusedOn: { es: "Enfocado en", en: "Focused on" },
  contactInformation: { es: "Información de contacto", en: "Contact Information" },

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
    en: "A colección of visual moments and projects that reflect my interests and passions.",
  },
}
