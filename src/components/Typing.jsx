import { useEffect, useState } from 'react'

const words = ['AI-powered web apps', 'full-stack products', 'fast dashboards', 'clean landing pages']

export default function Typing() {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i]
    const speed = deleting ? 40 : 80

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1200)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setI((i + 1) % words.length)
        return
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, i])

  return (
    <span className="text-accent">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}