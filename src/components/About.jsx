import { motion } from 'framer-motion'
import Counter from './Counter'

const stats = [
  { to: 4, suffix: '+', label: 'Projects built' },
  { to: 3, suffix: '', label: 'AI-powered apps' },
  { to: 3, suffix: '', label: 'LLM APIs integrated' },
]

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <div className="grid md:grid-cols-[320px_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-64 md:w-full"
        >
          <div className="absolute -inset-3 rounded-3xl bg-accent/20 blur-2xl" />
          <motion.div
            whileHover={{ scale: 1.12, rotate: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden border border-zinc-800 hover:border-accent/70 hover:shadow-2xl hover:shadow-accent/40 bg-gradient-to-br from-accent/30 to-zinc-900 flex items-center justify-center cursor-pointer"
          >
            <span className="font-display text-6xl font-bold text-white/80">P</span>
            <img 
              src="/photo.jpg"
              alt="Pawan"
              onError={(e) => (e.currentTarget.style.display = 'none')}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-medium mb-2">Who I am</p>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            About me
          </h2>

          <div className="space-y-4 text-zinc-400 text-lg">
            <p>
              I'm Pawan, a B.Tech IT graduate and full-stack developer who builds
              AI-powered web apps, from resume analyzers to proctored mock-test platforms.
            </p>
            <p>
              I like turning rough ideas into clean, fast products that actually work.
              I also solve problems on competitive programming platforms, which keeps
              my code logic sharp.
            </p>
            <p>
              Got an idea or a project? Let's talk and build it.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl sm:text-5xl font-bold text-white">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="text-sm text-zinc-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}