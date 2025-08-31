"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useState } from "react"

export function AnimatedCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(79, 172, 254, 0.1), 0 10px 10px -5px rgba(0, 242, 254, 0.1)",
      }}
      animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
