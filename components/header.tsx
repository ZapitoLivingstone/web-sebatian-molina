"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { LanguageSwitcher } from "./language-switcher"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

type NavLink =
  | { type: "link"; href: string; textKey: string }
  | { type: "dropdown"; textKey: string; items: { href: string; textKey: string; target?: string }[] }

export function Header() {
  const { language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks: NavLink[] = [
    { type: "link", href: "/", textKey: "home" },
    {
      type: "dropdown",
      textKey: "cvOption",
      items: [
        { href: "cv/cv-es.pdf", textKey: "cvSpanish", target: "_blank" },
        { href: "cv/cv-en.pdf", textKey: "cvEnglish", target: "_blank" },
      ],
    },
    { type: "link", href: "/research", textKey: "research" },
    { type: "link", href: "/teaching", textKey: "teaching" },
    { type: "link", href: "/album", textKey: "album" },
    { type: "link", href: "/documents", textKey: "documents" },
  ]

  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" prefetch={false}>
          <span>{messages.fullName[language]}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.type === "link" ? link.href : link.textKey}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              {link.type === "dropdown" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
                      <span>{messages[link.textKey][language]}</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.items?.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} target={item.target || "_self"}>
                          {messages[item.textKey][language]}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  prefetch={false}
                >
                  <span>{messages[link.textKey][language]}</span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={messages.toggleNavigation[language]}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md z-50"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) =>
                link.type === "dropdown" ? (
                  <div key={link.textKey}>
                    <span className="font-semibold">{messages[link.textKey][language]}</span>
                    <div className="ml-4 flex flex-col space-y-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          target={item.target || "_self"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm hover:text-primary"
                        >
                          {messages[item.textKey][language]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {messages[link.textKey][language]}
                  </Link>
                )
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
