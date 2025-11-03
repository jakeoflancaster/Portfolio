import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import OngoingProjects from '@/components/OngoingProjects'

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <Hero />
      <Projects />
      <OngoingProjects />
      <Education />
      <Experience />
      <Publications />
      <About />
    </main>
  )
}
