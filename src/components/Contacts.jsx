

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pawank273212@gmail.com',
    href: 'mailto:pawank273212@gmail.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Message me',
    href: 'https://wa.me/918447957993',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Pawan Kasaudhan',
    href: 'https://www.linkedin.com/in/pawan-kasaudhan-b0ba09343/',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch('https://formspree.io/f/xeaarbwp', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-12"
      >
        <p className="text-accent font-medium mb-2">Contact</p>
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          Let's build something together
        </h2>
        <p className="text-zinc-400 text-lg">
          Have a project in mind? Reach out and I'll get back to you quickly.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-accent/60 hover:-translate-y-1 transition duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              <l.icon size={24} />
            </div>
            <p className="text-sm text-zinc-500">{l.label}</p>
            <p className="text-white font-medium break-all">{l.value}</p>
          </motion.a>
        ))}
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 max-w-2xl space-y-4"
      >
        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-accent outline-none transition"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-accent outline-none transition"
        />
        <textarea
          name="message"
          required
          rows="5"
          placeholder="Tell me about your project"
          className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-accent outline-none transition resize-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:brightness-110 transition disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>

        {status === 'success' && (
          <p className="text-emerald-400">Message sent! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400">Something went wrong. Try again or email me directly.</p>
        )}
      </motion.form>
    </section>
  )
}