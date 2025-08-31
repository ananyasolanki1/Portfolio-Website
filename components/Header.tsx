"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-none px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a className="flex items-center space-x-2" href="/">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Ananya Solanki
              </motion.span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {["about", "projects", "skills", "accomplishments", "contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-muted-foreground hover:text-[#0078ff] transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <span className="capitalize">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0078ff] to-[#00a3ff] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle Theme"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative overflow-hidden rounded-full w-10 h-10 bg-card text-card-foreground hover:bg-card/80 border border-border"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle Theme</span>
                </Button>
              )}
            </motion.div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative overflow-hidden rounded-full w-10 h-10 bg-card text-card-foreground hover:bg-card/80 border border-border"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="w-full px-4 md:px-6 lg:px-8 py-4">
              <nav className="flex flex-col space-y-4">
                {["about", "projects", "skills", "accomplishments", "contact"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-muted-foreground hover:text-[#0078ff] transition-colors py-2 px-4 rounded-md hover:bg-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <span className="capitalize">{item}</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
