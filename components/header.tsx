"use client"

import type React from "react"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { messages } from "@/lib/messages"
import { LanguageSwitcher } from "./language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function Header() {
  const { language } = useLanguage()

  const navLinks = [
    { type: "link", href: "/", textKey: "home" },
    {
      type: "dropdown",
      textKey: "cvOption",
      items: [
        { href: "/cv", textKey: "cvSpanish" }, // Link to CV page for now
        { href: "/cv", textKey: "cvEnglish" }, // Link to CV page for now
      ],
    },
    { type: "link", href: "/research", textKey: "research" }, // Added Research link
    { type: "link", href: "/teaching", textKey: "teaching" }, // Added Teaching link
    { type: "link", href: "/album", textKey: "album" }, // Added Album link
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  }

  const navItemVariants = {
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
              key={link.href || link.textKey}
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
                    {link.items.map((item) => (
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
                  href={link.href as string}
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
          {/* Mobile navigation (optional, could use a Sheet/Drawer) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">{messages.toggleNavigation[language]}</span>
          </Button>
        </div>
      </div>
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
