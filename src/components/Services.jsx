

import { Code2, Bot, LayoutDashboard } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Web Apps',
    desc: 'End-to-end apps with React, Node, and MongoDB: auth, APIs, database, and deployment included.',
  },
  {
    icon: Bot,
    title: 'AI Integrations',
    desc: 'Add AI to your product: chat, resume or document analysis, smart recommendations, and interview or test tools.',
  },
  {
    icon: LayoutDashboard,
    title: 'Landing Pages & Dashboards',
    desc: 'Fast, responsive landing pages and clean dashboards that look sharp on every device.',
  },
]
export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-accent font-medium mb-2">Services</p>
        <h2 className="font-display text-4xl font-bold text-white">
          What I can build for you
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
  {services.map((s, i) => (
    <motion.div
      key={s.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-accent/60 hover:-translate-y-1 transition duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
        <s.icon size={24} />
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
      <p className="text-zinc-400 text-sm">{s.desc}</p>
    </motion.div>
  ))}
</div>
    </section>
  )
}