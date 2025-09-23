import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Link as LinkIcon } from 'lucide-react'

const GradientText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
    {children}
  </span>
)

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid gap-8 items-center"
        >
          <div>
            <h1 className="font-[Sora] text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Hi, I'm <GradientText>Haoting Shen</GradientText>
              <span className="block mt-1">
                I build{' '}
                <span className="mx-1 inline-flex items-center gap-2 rounded-2xl px-3 py-1 text-base md:text-xl text-current ui-chip-title">
                  <Sparkles className="h-4 w-4 motion-safe:animate-pulse" />
                  real-world, polished apps
                </span>
              </span>
            </h1>

            <p className="text-muted mt-4">
              I build production-ready experiences with React, TypeScript, and Python backends. Accessible, semantic UI, solid infra, and pragmatic shipping.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/in/haoting-shen"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-outline-btn px-4 py-2"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}