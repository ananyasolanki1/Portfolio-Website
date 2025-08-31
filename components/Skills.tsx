"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Skills() {
  const skills = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "ReactJS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Web Development",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Power BI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "Adobe Illustrator",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
  ]

  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden bg-mesh"
    >
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-[#0078ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-[#a855f7]/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-none px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          {/* Clean Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Skill Circle */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full card-translucent border border-[#0078ff]/20 dark:border-[#0078ff]/20 light:border-[#a855f7]/30 hover:border-[#a855f7] dark:hover:border-[#00f2fe] light:hover:border-[#a855f7] transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#0078ff]/20">
                    {/* Background glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0078ff]/10 to-[#a855f7]/10 dark:to-[#00f2fe]/10 light:to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Logo */}
                    <div className="relative z-10">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        width={skill.name === "Adobe Illustrator" ? 36 : 32}
                        height={skill.name === "Adobe Illustrator" ? 36 : 32}
                        className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                          skill.name === "Adobe Illustrator"
                            ? "brightness-110 contrast-125 saturate-125 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Hover Ring Effect */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border border-[#a855f7] dark:border-[#00f2fe] light:border-[#a855f7] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-medium text-foreground group-hover:text-[#a855f7] dark:group-hover:text-[#00f2fe] light:group-hover:text-[#a855f7] transition-colors duration-300 text-center">
                  {skill.name}
                </h3>

                {/* Animated underline */}
                <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
