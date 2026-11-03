import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Pawan Kasaudhan. All rights reserved.</p>

        <div className="flex gap-5 text-xl">
          <a href="https://github.com/itskasaudhan" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/pawan-kasaudhan-b0ba09343/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}