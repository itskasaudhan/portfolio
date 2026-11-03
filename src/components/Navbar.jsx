
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

const links = ['Projects', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-white text-lg">
          Pawan Kasaudhan<span className="text-accent">.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden sm:block px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:brightness-110 transition"
        >
          Hire me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-zinc-300"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 border-t border-zinc-800/60 text-zinc-300">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-3 hover:text-white transition"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 rounded-lg bg-accent text-white text-center font-medium"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
      <motion.div
  style={{ scaleX }}
  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
/>
    </header>
  )
}