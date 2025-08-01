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
  blog: { es: "Blog", en: "Blog" },
  research: { es: "Investigación", en: "Research" }, // Added
  teaching: { es: "Docencia", en: "Teaching" }, // Added
  album: { es: "Álbum", en: "Album" }, // Added
  cvOption: { es: "Mi CV", en: "My CV" },
  cvSpanish: { es: "CV (Español)", en: "CV (Spanish)" },
  cvEnglish: { es: "CV (Inglés)", en: "CV (English)" },
  viewBlog: { es: "Ver Blog", en: "View Blog" },
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
  role: { es: "Ingeniero | Analista | Investigador", en: "Engineer | Analyst | Researcher" },
  bio: {
    es: "Soy un ingeniero apasionado por el análisis de datos, la economía aplicada y las finanzas. Me encanta resolver problemas complejos y construir soluciones que impacten positivamente.",
    en: "I am an engineer passionate about data analysis, applied economics, and finance. I love solving complex problems and building solutions that make a positive impact.",
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

  // Blog Page
  blogTitle: { es: "Blog", en: "Blog" },
  blogDescription: {
    es: "Aquí comparto mis pensamientos, análisis y experiencias sobre economía, finanzas, tecnología y más.",
    en: "Here I share my thoughts, analyses, and experiences on economics, finance, technology, and more.",
  },

  // CV Page
  cvTitle: { es: "Currículum Vitae", en: "Curriculum Vitae" },
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
    en: "A collection of visual moments and projects that reflect my interests and passions.",
  },
}
