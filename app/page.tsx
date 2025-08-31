import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Accomplishments from "../components/Accomplishments"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BrowserFrame from "@/components/BrowserFrame";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Accomplishments />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
