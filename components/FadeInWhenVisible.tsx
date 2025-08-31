"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function FadeInWhenVisible({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            duration: 0.6,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: {
            when: "afterChildren",
            duration: 0.6,
            ease: "easeIn",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
