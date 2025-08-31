"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-background text-foreground border-t border-[#1e293b] dark:border-[#1e293b] light:border-[#a855f7]/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center max-w-md">
            <p className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 text-center">
              © {currentYear} Developed by{" "}
              <a
                href="https://www.linkedin.com/in/ananya-solanki-b56a84245/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078ff] dark:text-[#0078ff] light:text-[#a855f7] hover:text-[#a855f7] dark:hover:text-[#00a3ff] light:hover:text-[#0078ff] transition-colors duration-300"
              >
                Ananya Solanki
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
