"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import type { JSX } from "react"
import { useRef } from "react"

export default function Accomplishments() {
  const accomplishments = [
    {
      title: "Internship at Adani Electricity",
      description: "Customer Call Forecast Modelling in Power BI",
      date: "June 2024 – July 2024",
      color: "blue",
    },
    {
      title: "ResCon 2024 project competition",
      description: "Plant E-commerce project selected at IIT Bombay",
      date: "Jan 2024",
      color: "purple",
    },
    {
      title: "3rd prize in InnoQuest project competition",
      description: "For Plant E-commerce project",
      date: "Nov 2023",
      color: "pink",
    },
    {
      title: "Conducted Adobe Illustrator workshop",
      date: "Aug 2023",
      color: "blue",
    },
    {
      title: "Design head of ACM-DBIT",
      date: "July 2023 – June 2024",
      color: "purple",
    },
    {
      title: "Second Prize in AR filter making competition",
      date: "March 2023",
      color: "pink",
    },
    {
      title: "Developed a game for Teknack 2023",
      date: "Dec 2022 – Feb 2023",
      color: "blue",
    },
    {
      title: "Assistant design head of ACM",
      date: "Sept 2022 – June 2023",
      color: "purple",
    },
    {
      title: "Passed SC-900 Microsoft exam",
      description: "Score: 832/1000",
      date: "Sept 2022",
      color: "pink",
    },
    {
      title: "3rd prize in Technical Paper presentation",
      date: "April 2022",
      color: "blue",
    },
  ]

  return (
    <section
      id="accomplishments"
      className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden bg-mesh"
    >
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-[#4facfe]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-[#ec4899]/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] mb-8 text-center"
        >
          Accomplishments
        </motion.h2>
        <div className="space-y-12">
          {accomplishments.reduce((acc, accomplishment, index) => {
            if (index % 2 === 0) {
              acc.push(
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                  >
                    <AccomplishmentCard accomplishment={accomplishment} />
                  </motion.div>
                  {accomplishments[index + 1] && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full md:w-1/2"
                    >
                      <AccomplishmentCard accomplishment={accomplishments[index + 1]} />
                    </motion.div>
                  )}
                </div>,
              )
            }
            return acc
          }, [] as JSX.Element[])}
        </div>
      </div>
    </section>
  )
}

function AccomplishmentCard({
  accomplishment,
}: {
  accomplishment: { title: string; description?: string; date: string; color: string }
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    // Create a glowing effect that follows the mouse
    const glowEl = cardRef.current.querySelector(".glow-effect") as HTMLElement
    if (glowEl) {
      const percentX = x / rect.width
      const percentY = y / rect.height

      glowEl.style.background = `radial-gradient(circle at ${percentX * 100}% ${percentY * 100}%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)`
    }
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"

    const glowEl = cardRef.current.querySelector(".glow-effect") as HTMLElement
    if (glowEl) {
      glowEl.style.background = "transparent"
    }
  }

  let iconColor = "text-[#0078ff] group-hover:text-[#00f2fe]"
  let gradientClass = "from-[#0078ff] to-[#00f2fe]"

  if (accomplishment.color === "purple") {
    iconColor = "text-[#a855f7] group-hover:text-[#d946ef]"
    gradientClass = "from-[#a855f7] to-[#d946ef]"
  } else if (accomplishment.color === "pink") {
    iconColor = "text-[#ec4899] group-hover:text-[#f472b6]"
    gradientClass = "from-[#ec4899] to-[#f472b6]"
  }

  return (
    <div
      ref={cardRef}
      className="group card-translucent rounded-lg p-6 shadow-lg hover:shadow-[0_0_15px_rgba(79,172,254,0.3)] transition-all duration-300 h-full relative overflow-hidden border border-[#0078ff]/20 dark:border-[#0078ff]/20 light:border-[#0078ff]/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s ease" }}
    >
      <div className="glow-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div className="flex items-center mb-4 relative z-10">
        <Award className={`w-8 h-8 ${iconColor} transition-colors duration-300 mr-4`} />
        <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-800">{accomplishment.title}</h3>
      </div>
      {accomplishment.description && (
        <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4 relative z-10">
          {accomplishment.description}
        </p>
      )}
      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-500 relative z-10">
        <Calendar className="w-5 h-5 mr-2" />
        <p className="text-sm">{accomplishment.date}</p>
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute top-0 left-0 w-2 h-8 bg-gradient-to-b ${gradientClass}`}></div>
        <div className={`absolute top-0 left-0 w-8 h-2 bg-gradient-to-r ${gradientClass}`}></div>
      </div>
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <div className={`absolute top-0 right-0 w-2 h-8 bg-gradient-to-b ${gradientClass}`}></div>
        <div className={`absolute top-0 right-0 w-8 h-2 bg-gradient-to-r ${gradientClass}`}></div>
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
        <div className={`absolute bottom-0 left-0 w-2 h-8 bg-gradient-to-b ${gradientClass}`}></div>
        <div className={`absolute bottom-0 left-0 w-8 h-2 bg-gradient-to-r ${gradientClass}`}></div>
      </div>
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
        <div className={`absolute bottom-0 right-0 w-2 h-8 bg-gradient-to-b ${gradientClass}`}></div>
        <div className={`absolute bottom-0 right-0 w-8 h-2 bg-gradient-to-r ${gradientClass}`}></div>
      </div>
    </div>
  )
}
