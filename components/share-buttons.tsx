"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, LinkIcon } from "lucide-react"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context" // Added import
import { messages } from "@/lib/messages" // Added import

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const { language } = useLanguage() // Added useLanguage hook

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${title} #SoftwareDevelopment #Portfolio`)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "_blank")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    toast.success(messages.linkCopied[language]) // Updated
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  }

  return (
    <div className="flex gap-2">
      <motion.div variants={buttonVariants}>
        <Button variant="outline" size="icon" onClick={shareOnTwitter}>
          <Twitter className="h-4 w-4" />
          <span className="sr-only">{messages.shareOnX[language]}</span> {/* Updated */}
        </Button>
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Button variant="outline" size="icon" onClick={shareOnLinkedIn}>
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">{messages.shareOnLinkedIn[language]}</span> {/* Updated */}
        </Button>
      </motion.div>
      <motion.div variants={buttonVariants}>
        <Button variant="outline" size="icon" onClick={copyToClipboard}>
          <LinkIcon className="h-4 w-4" />
          <span className="sr-only">{messages.copyLink[language]}</span> {/* Updated */}
        </Button>
      </motion.div>
    </div>
  )
}
