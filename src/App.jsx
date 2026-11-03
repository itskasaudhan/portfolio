import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import MouseGlow from './components/MouseGlow'
import Marquee from './components/Marquee'

export default function App() {
  return (
    <>
      <Navbar />
      <MouseGlow />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}