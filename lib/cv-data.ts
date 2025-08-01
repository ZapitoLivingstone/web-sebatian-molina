interface Experience {
  title: { es: string; en: string }
  company: string
  duration: { es: string; en: string }
  location: { es: string; en: string }
  description?: { es: string; en: string }[]
}

interface Education {
  degree: { es: string; en: string }
  institution: string
  years: string
  activities?: { es: string; en: string }
  focus?: { es: string; en: string }
}

interface CVData {
  name: string
  role: { es: string; en: string }
  contactInfo: { es: string; en: string }
  experience: Experience[]
  education: Education[]
}

export const cvData: CVData = {
  name: "Sebastián Molina",
  role: { es: "Ingeniero", en: "Engineer" },
  contactInfo: {
    es: "Gran Santiago, Región Metropolitana de Santiago, Chile",
    en: "Greater Santiago, Santiago Metropolitan Region, Chile",
  },
  experience: [
    {
      title: { es: "Analista Contable", en: "Accounting Analyst" },
      company: "Banco Bci",
      duration: { es: "jun 2025 - actualidad · 3 meses", en: "Jun 2025 - Present · 3 months" },
      location: {
        es: "Las Condes, Región Metropolitana de Santiago, Chile",
        en: "Las Condes, Santiago Metropolitan Region, Chile",
      },
    },
    {
      title: { es: "Consultor", en: "Consultant" },
      company: "Clínica Costanera Valdivia",
      duration: { es: "mar 2025 - jul 2025 · 5 meses", en: "Mar 2025 - Jul 2025 · 5 months" },
      location: { es: "Valdivia, Región de Los Ríos, Chile", en: "Valdivia, Los Ríos Region, Chile" },
    },
    {
      title: { es: "Analista Contable", en: "Accounting Analyst" },
      company: "Banco Bci",
      duration: { es: "ene 2025 - mar 2025 · 3 meses", en: "Jan 2025 - Mar 2025 · 3 months" },
      location: {
        es: "Las Condes, Región Metropolitana de Santiago, Chile",
        en: "Las Condes, Santiago Metropolitan Region, Chile",
      },
    },
    {
      title: { es: "Investigador de Pregrado", en: "Undergraduate Researcher" },
      company: "Universidad Austral de Chile",
      duration: { es: "mar 2023 - jul 2024 · 1 año 5 meses", en: "Mar 2023 - Jul 2024 · 1 year 5 months" },
      location: { es: "Valdivia, Región de Los Ríos, Chile", en: "Valdivia, Los Ríos Region, Chile" },
    },
    {
      title: { es: "Ayudante de Cátedra", en: "Teaching Assistant" },
      company: "Universidad Austral de Chile",
      duration: { es: "jul 2021 - jul 2023 · 2 años 1 mes", en: "Jul 2021 - Jul 2023 · 2 years 1 month" },
      location: { es: "Valdivia, Región de Los Ríos, Chile", en: "Valdivia, Los Ríos Region, Chile" },
    },
  ],
  education: [
    {
      degree: { es: "Agricultural & Applied Economics", en: "Agricultural & Applied Economics" },
      institution: "University of Wisconsin-Madison",
      years: "2023 - 2024",
      activities: {
        es: "Actividades y grupos: Visiting International Student Program (VISP)",
        en: "Activities and groups: Visiting International Student Program (VISP)",
      },
      focus: {
        es: "Enfocado en econometría aplicada, microeconomía y análisis de datos.",
        en: "Focused on applied econometrics, microeconomics, and data analysis.",
      },
    },
    {
      degree: { es: "Ingeniería Comercial", en: "Commercial Engineering" },
      institution: "Universidad Austral de Chile",
      years: "2019 - 2025",
      activities: {
        es: "Actividades y grupos: Selección Universitaria de Fútbol",
        en: "Activities and groups: University Football Team",
      },
    },
  ],
}
