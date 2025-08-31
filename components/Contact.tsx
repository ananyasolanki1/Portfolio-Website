"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, User, Linkedin } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you for your message! I'll get back to you soon.")
        form.reset()
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.error || "Failed to send email. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setSubmitMessage("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden bg-mesh"
    >
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-[#0078ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-[#00f2fe]/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-translucent p-8 rounded-lg border border-[#0078ff]/20"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] mb-4">
              Contact Me
            </h2>
            <p className="text-lg mb-6 text-foreground">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="group relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <User className="w-5 h-5" />
                </div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="pl-10 bg-background/50 border-[#0078ff]/30 text-foreground placeholder:text-muted-foreground focus:border-[#00f2fe]"
                />
              </div>
              <div className="group relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="pl-10 bg-background/50 border-[#0078ff]/30 text-foreground placeholder:text-muted-foreground focus:border-[#00f2fe]"
                />
              </div>
              <div className="group relative">
                <div className="absolute left-3 top-3 text-muted-foreground">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="pl-10 bg-background/50 border-[#0078ff]/30 text-foreground placeholder:text-muted-foreground focus:border-[#00f2fe]"
                  rows={5}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#0078ff] to-[#00f2fe] px-5 py-2.5 text-white transition-all duration-300 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-[#00f2fe] to-[#0078ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>

                {submitMessage && (
                  <p
                    className={`text-sm ${
                      submitStatus === "success" ? "text-green-400" : submitStatus === "error" ? "text-red-400" : ""
                    }`}
                    aria-live="polite"
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden card-translucent border border-[#0078ff]/20 relative"
          >
            {/* Static gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0078ff]/10 via-transparent to-[#00f2fe]/10"></div>

            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" className="text-[#0078ff]" />
              </svg>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-background/40 backdrop-blur-md p-8 rounded-lg border border-border/20">
                <h3 className="text-2xl font-semibold mb-6 text-[#a855f7] dark:text-[#00f2fe] light:text-[#a855f7]">
                  Connect With Me
                </h3>
                <p className="text-foreground mb-6 text-lg">Looking forward to discussing potential opportunities.</p>
                <div className="flex justify-center space-x-6">
                  <motion.a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ananya.solanki10@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-[#0078ff]/20 flex items-center justify-center border border-[#0078ff]/30 hover:border-[#00f2fe] transition-colors duration-300"
                  >
                    <Mail className="w-8 h-8 text-[#a855f7] dark:text-[#00f2fe] light:text-[#a855f7]" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ananya-solanki-b56a84245"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-[#0078ff]/20 flex items-center justify-center border border-[#0078ff]/30 hover:border-[#00f2fe] transition-colors duration-300"
                  >
                    <Linkedin className="w-8 h-8 text-[#a855f7] dark:text-[#00f2fe] light:text-[#a855f7]" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
