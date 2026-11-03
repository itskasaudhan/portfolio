
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Typing from './Typing'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-3xl text-center">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance work
        </motion.div>

        <motion.p {...fadeUp(0.1)} className="text-accent font-medium mb-4">
          Hi, I'm
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-5xl sm:text-7xl font-bold text-white mb-6"
        >
          Pawan Kasaudhan
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl text-zinc-400">
  I build <Typing /> for startups and businesses.
</motion.p>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:brightness-110 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 transition"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.5)} className="flex justify-center gap-6 mt-10 text-2xl text-zinc-400">
          <a href="https://github.com/itskasaudhan" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pawan-kasaudhan-b0ba09343/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  )
}