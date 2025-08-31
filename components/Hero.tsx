"use client"

import { Button } from "./ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Mail, Linkedin, Github, Eye, Code2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const texts = ["Computer Engineer", "Web Developer", "Tech Enthusiast"]
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)

        if (charIndex >= currentText.length) {
          setIsDeleting(true)
          setTypingSpeed(1500)
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        setTypingSpeed(50)

        if (charIndex <= 0) {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
          setTypingSpeed(100)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed])

  const handleResumeView = () => {
    window.open("https://drive.google.com/file/d/1k1ja-zZUCK5wIRAwU52AxWCvamGpvMo8/view?usp=sharing", "_blank")
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full min-h-[100svh] bg-background text-foreground overflow-hidden bg-mesh">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/12 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative px-4 md:px-6 lg:px-8 z-10 max-w-7xl mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 place-items-center min-h-[calc(100svh-4rem)] py-6 md:py-8">
          {/* Left Column - Content (shifted further left on lg+) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center items-center lg:items-start space-y-6 text-center lg:text-left order-2 lg:order-1 md:-ml-10 lg:-ml-16 xl:-ml-24 2xl:-ml-28 lg:-translate-x-12 xl:-translate-x-16 2xl:-translate-x-20"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground font-medium text-base lg:text-lg">Hello, I'm</span>
              </div>

              <h1 className="text-[11.5vw] sm:text-[8.5vw] lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.2] sm:leading-[1.2] overflow-visible">
                <span className="block mb-0.5 sm:mb-1 pb-[0.16em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  Ananya
                </span>
                <span className="block -mt-[0.05em] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                  Solanki
                </span>
              </h1>
            </motion.div>

            {/* Dynamic role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-lg lg:text-xl">
                <span className="text-muted-foreground">I'm a</span>
                <span className="font-semibold text-purple-500 min-w-[180px] lg:min-w-[220px]">
                  {displayText}
                  <span className="animate-blink text-purple-500">|</span>
                </span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Button
                onClick={handleResumeView}
                className="group bg-blue-600 hover:bg-blue-700 px-6 lg:px-8 py-2.5 text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                {/* Keep the label and icon white in both themes */}
                <span className="relative z-10 flex items-center gap-2 keep-white">
                  <Eye className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce" />
                  View Resume
                </span>
              </Button>

              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="group border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 lg:px-8 py-2.5 text-base font-medium rounded-lg transition-all duration-300 bg-transparent"
              >
                <Code2 className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Explore
                <ArrowDown className="w-3 h-3 lg:w-4 lg:h-4 ml-2 group-hover:animate-bounce" />
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
            >
              <span className="text-sm text-muted-foreground font-medium">Let's connect:</span>
              <div className="flex space-x-3">
                {[
                  {
                    icon: Mail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ananya.solanki10@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ananya-solanki-b56a84245",
                  },
                  { icon: Github, href: "https://github.com/ananyasolanki1" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-full bg-muted hover:border-2 hover:border-blue-400 hover:bg-transparent transition-all duration-300 flex items-center justify-center hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Picture (shifted further right on lg+) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center order-1 lg:order-2 md:-mr-6 lg:-mr-10 xl:-mr-14 lg:translate-x-8 xl:translate-x-12"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 lg:-inset-6 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main container */}
              <div className="relative bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm p-4 lg:p-6 rounded-full border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                {/* Picture container */}
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96 overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic-E5EtIgPdaagZk4ywiAwqFXU1UTB0t0.jpeg"
                    alt="Ananya Solanki"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>

                {/* Code elements (fast theme color transition) */}
                <motion.div
                  className="absolute -top-4 -left-6 lg:-top-6 lg:-left-8 bg-purple-500/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-slate-900 dark:text-white font-mono text-xs lg:text-sm border border-purple-400/30 transition-colors duration-150"
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"<Developer />"}
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-6 lg:-bottom-6 lg:-right-8 bg-blue-500/90 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-slate-900 dark:text-white font-mono text-xs lg:text-sm border border-blue-400/30 transition-colors duration-150"
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"console.log('Hello!')"}
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-8 lg:-right-10 bg-indigo-500/80 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 rounded-md text-slate-900 dark:text-white font-mono text-xs border border-indigo-400/30 transition-colors duration-150"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"{ }"}
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -left-6 lg:-left-8 bg-cyan-500/80 backdrop-blur-sm px-2 py-1 lg:px-3 lg:py-1.5 rounded-md text-slate-900 dark:text-white font-mono text-xs border border-cyan-400/30 transition-colors duration-150"
                  animate={{ x: [2, -2, 2] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  {"</>"}
                </motion.div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 lg:w-4 lg:h-4 border-2 border-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              />

              <motion.div
                className="absolute top-1/3 -left-3 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
