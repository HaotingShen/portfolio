import React from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-[Sora] text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (<ProjectCard key={p.title} {...p} />))}
        </div>
      </div>
    </section>
  )
}