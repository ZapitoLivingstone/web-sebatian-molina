"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context" // Added import
import { messages } from "@/lib/messages" // Added import
import { cvData } from "@/lib/cv-data" // Import cvData to use in metadata

export default function AboutClientPage() {
  // No need to pass cvData as a prop if it's imported directly in the client component
  return (
    <section className="md:px-20 px-8 py-10">
      <div className="flex md:flex-row flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 w-full"
        >
          <Image
            src="/images/about-me.png"
            alt="about-me"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
            priority
          />
        </motion.div>

        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            {messages.aboutMeTitle[useLanguage()]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600"
          >
            {messages.aboutMeParagraph1[useLanguage()]}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600"
          >
            {messages.aboutMeParagraph2[useLanguage()]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h2 className="font-bold text-xl">{messages.mySkills[useLanguage()]}</h2>
            <div className="flex flex-wrap gap-3">
              {cvData.skills.map((skill) => (
                <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h2 className="font-bold text-xl">{messages.myHobbies[useLanguage()]}</h2>
            <div className="flex flex-wrap gap-3">
              {cvData.hobbies.map((hobby) => (
                <span key={hobby} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 mt-5"
          >
            <Link href="/contact">
              <Button>{messages.contactMe[useLanguage()]}</Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary">{messages.myProjects[useLanguage()]}</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
