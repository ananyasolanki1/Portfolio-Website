"use client"

import type React from "react"

import { FadeInWhenVisible } from "./FadeInWhenVisible"
import { motion } from "framer-motion"
import { BookOpen, Code, Globe, Cpu } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      description: "Experience with Python, Java, and C",
      color: "blue",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Familiar with modern web technologies",
      color: "purple",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Emerging Tech",
      description: "Interest in new technologies including Gen AI",
      color: "pink",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning",
      description: "Constantly exploring new technologies",
      color: "blue",
    },
  ]

  return (
    <section
      id="about"
      className="w-full py-8 md:py-16 lg:py-24 bg-background text-foreground relative overflow-hidden bg-mesh"
    >
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#0078ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#a855f7]/20 rounded-full blur-3xl"></div>

      <FadeInWhenVisible>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#00f2fe] mb-8"
          >
            About Me
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-foreground text-lg leading-relaxed text-justify">
                I'm a Computer Engineering graduate with a passion for web development and emerging technologies. My
                journey in tech has exposed me to various programming languages and web technologies, and I'm always
                eager to learn and apply new skills.
              </p>
              <p className="text-foreground text-lg leading-relaxed text-justify">
                I'm also interested in emerging technologies, including Generative AI. This curiosity drives me to
                continuously learn and explore new areas in the field of computer science.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <SkillCard key={item.title} index={index} color={item.color}>
                  <div className="text-[#0078ff] mb-3 relative z-10 group-hover:text-[#00a3ff] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                </SkillCard>
              ))}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  )
}

function SkillCard({ children, index, color }: { children: React.ReactNode; index: number; color: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  let gradientClass = "from-[#0078ff] to-[#00a3ff]"
  let glowClass = ""
  if (color === "purple") {
    gradientClass = "from-[#a855f7] to-[#d946ef]"
    glowClass = "shadow-[0_0_15px_rgba(168,85,247,0.3)]"
  } else if (color === "pink") {
    gradientClass = "from-[#ec4899] to-[#f472b6]"
    glowClass = "shadow-[0_0_15px_rgba(236,72,153,0.3)]"
  } else {
    glowClass = "shadow-[0_0_15px_rgba(0,120,255,0.3)]"
  }

  const hoverGlow = glowClass ? `hover:${glowClass}` : ""

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "group relative card-translucent p-6 rounded-lg shadow-lg transition-all duration-300 overflow-hidden border border-[#0078ff]/20",
        hoverGlow,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300",
          gradientClass,
        )}
      ></div>
      {children}

      <div className="absolute bottom-0 left-0 h-[2px] w-full">
        <div
          className={cn(
            "h-full bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
            gradientClass,
          )}
        ></div>
      </div>
    </motion.div>
  )
}
