import React from 'react'
import { motion } from 'framer-motion'
import { highlights } from '@/data/highlights'

export default function Stats() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="rounded-2xl bg-surface/60 border p-4 shadow-soft ui-border"
            >
              <div className="text-2xl font-[Sora]">{h.value}</div>
              <div className="text-muted text-sm">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}