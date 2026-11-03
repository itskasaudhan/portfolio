import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import TiltCard from './TiltCards'

const projects = [
  {
    title: 'Resumate',
    desc: 'AI resume analyzer that scores resumes and gives actionable feedback using multiple LLMs. Auth, PDF parsing, and saved history.',
    tags: ['React', 'Node', 'MongoDB', 'JWT', 'Groq', 'Gemini'],
    image: '/resume.png',
    live: 'https://ai-resume-analyzer-iota-blue.vercel.app',
    repo: 'https://github.com/itskasaudhan/ai_resume_analyzer',
  },
  {
    title: 'PrepAI',
    desc: 'AI mock-test platform with timed tests, a performance dashboard, and camera proctoring that detects phones, multiple people, and tab switching.',
    tags: ['React', 'Express', 'MongoDB', 'Groq', 'TensorFlow.js', 'OAuth'],
    image: '/mock.png',
    live: 'https://ai-mock-test-beta.vercel.app/',
    repo: 'https://github.com/itskasaudhan/ai_mock_test',
  },
  {
    title: 'AstroSphere',
     desc: 'Responsive astrology prediction website built with HTML, CSS and JavaScript, live on Vercel.',
  tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/astro.png',
    live: 'https://astrology-prediction-nu.vercel.app/',
    repo: 'https://github.com/itskasaudhan/astrology_prediction',
  },
  {
    title: 'Expense Tracker',
    desc: 'Clean income and expense tracker with category-wise charts and a dark UI.',
    tags: ['React', 'Vite', 'Chart.js', 'Context API'],
    image: '/expense1.png',
    live: 'https://expense-tracker-mu-three-86.vercel.app/',
    repo: 'https://github.com/itskasaudhan/expense_tracker',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-accent font-medium mb-2">Work</p>
        <h2 className="font-display text-4xl font-bold text-white">
          Things I've built
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <TiltCard key={p.title}>
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-accent/60 hover:-translate-y-1 transition duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className="relative z-10 aspect-video overflow-hidden rounded-t-2xl bg-gradient-to-br from-accent/30 to-zinc-900 hover:shadow-2xl hover:shadow-accent/30"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white hover:text-accent transition">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                  {p.repo !== '#' && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition">
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}