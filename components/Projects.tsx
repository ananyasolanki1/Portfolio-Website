"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { FadeInWhenVisible } from "./FadeInWhenVisible"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Legalis: An AI Based Legal Assistant for Maharashtra Real Estate Laws",
      description: "An AI assistant providing guidance on Maharashtra state laws and helping users with legal queries.",
      year: "Final Year",
      link: "https://shorturl.at/MlkGg",
      color: "blue",
    },
    {
      title: "Interpretation of learning levels using Bloom's Taxonomy",
      description: "2nd year project focused on educational assessment.",
      year: "2nd Year",
      color: "blue",
    },
    {
      title: "E-commerce platform for plant nursery with virtual green space customizer",
      description: "3rd year project combining e-commerce with virtual design.",
      year: "3rd Year",
      color: "blue",
    },
    {
      title: "Blocky Build",
      description: "2nd year project: A Unity Engine game published by Teknack Gaming Studio of ACM-DBIT club.",
      year: "2nd Year",
      link: "https://play.google.com/store/apps/details?id=com.com.Teknack.BlockyBuild.BlockyBuild",
      color: "blue",
    },
  ]

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground relative overflow-hidden bg-mesh"
    >
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-[#0078ff]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-[#00f2fe]/20 rounded-full blur-3xl"></div>

      <FadeInWhenVisible>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#00f2fe] mb-8"
          >
            Projects
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative card-translucent h-full flex flex-col rounded-lg shadow-lg transition-all duration-300 overflow-hidden border border-[#0078ff]/20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0078ff]/5 to-[#00f2fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] leading-[1.15] pb-[0.18em] overflow-visible">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">{project.year}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{project.description}</p>
          {project.link && (
            <div className="mt-4">
              <a
                href={project.link}
                className="inline-flex items-center gap-1 text-[#a855f7] dark:text-[#00f2fe] light:text-[#a855f7] hover:opacity-80 text-sm transition-opacity duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </CardContent>
      </div>

      <div className="absolute bottom-0 left-0 h-[1px] w-full">
        <div className="h-full bg-gradient-to-r from-[#0078ff] to-[#a855f7] dark:to-[#00f2fe] light:to-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  )
}
