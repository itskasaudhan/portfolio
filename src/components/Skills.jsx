import { motion } from 'framer-motion'

const groups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Google OAuth'] },
  { title: 'Database', items: ['MongoDB', 'Mongoose', 'MongoDB Atlas'] },
  { title: 'AI & Tools', items: ['Groq API', 'Gemini API', 'TensorFlow.js', 'Git & GitHub', 'Vercel', 'Render'] },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-accent font-medium mb-2">Skills</p>
        <h2 className="font-display text-4xl font-bold text-white">
          Tools I work with
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-6">
  {groups.map((g, i) => (
    <motion.div
      key={g.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
      className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50"
    >
      <h3 className="font-display text-lg font-bold text-white mb-4">{g.title}</h3>
      <div className="flex flex-wrap gap-2">
        {g.items.map((s) => (
          <span
            key={s}
            className="text-sm px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:border-accent hover:text-accent transition"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  ))}
</div>
    </section>
  )
}