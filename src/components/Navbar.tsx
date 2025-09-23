import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-base/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-[Sora] text-xl font-semibold tracking-wide">Haoting Shen</a>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 text-sm text-muted">
            <li><a className="hover:text-text" href="#projects">Projects</a></li>
            <li><a className="hover:text-text" href="#about">About</a></li>
            <li><a className="hover:text-text" href="#contact">Contact</a></li>
            {/* Résumé removed per request */}
          </ul>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ui-theme-btn p-2"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}