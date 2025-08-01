"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es") // Default to Spanish

  useEffect(() => {
    // Attempt to load language from localStorage
    const storedLang = localStorage.getItem("portfolio-language")
    if (storedLang === "es" || storedLang === "en") {
      setLanguage(storedLang)
    }
  }, [])

  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
