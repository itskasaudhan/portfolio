const items = [
  'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS',
  'JavaScript', 'Framer Motion', 'Groq API', 'TensorFlow.js', 'Git',
]

export default function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-zinc-800/60 py-5">
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span key={i} className="px-8 text-zinc-500 font-display text-lg whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent" />
    </div>
  )
}