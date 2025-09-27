import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

type Links = { demo?: string; github?: string; website?: string }
export type Project = {
  title: string
  year?: string
  timeframe?: string
  stack: string[]
  impact: string
  bullets: string[]
  links: Links
  tags?: string[]
  cover?: string
}

export default function ProjectCard(p: Project){
  return (
    <motion.article
      initial={{opacity:0, y:10}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.28}}
      className="group rounded-2xl bg-surface/60 border border-white/10 p-0 shadow-soft hover:shadow-lg hover:shadow-black/40 transition overflow-hidden"
    >
      {p.cover && (
        <div className="relative h-80 w-full overflow-hidden">
          <img
            src={p.cover}
            alt={p.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-5">
        <header className="flex items-baseline justify-between gap-3">
          <h3 className="font-[Sora] text-xl">{p.title}</h3>
        </header>

        {(p.timeframe || p.year) && (
          <div className="mt-0.5 text-xs text-muted">
            {p.timeframe ?? p.year}
          </div>
        )}

        <p className="mt-2 text-sm text-muted">{p.impact}</p>

        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {p.bullets.map((b,i)=> (
            <li key={i} className="flex items-center gap-2 text-text/90">
              <span className="mr-1">&gt;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {p.stack.map(s => (
            <span key={s} className="ui-badge">{s}</span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {/* Website button */}
          {p.links.website && (
            <a
              className="ui-btn-card ui-btn-accA"
              href={p.links.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </a>
          )}

          {/* Source button */}
          {p.links.github && (
            <a
              className="ui-btn-card ui-btn-accB"
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}