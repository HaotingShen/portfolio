import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="font-[Sora] text-3xl font-semibold">About</h2>

        {/* Full-width paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28 }}
          className="mt-4 text-muted md:text-lg leading-relaxed"
        >
          I'm a recent Computer Science graduate from Washington University in St. Louis with a strong focus on backend and full-stack development.
          I have experience designing and implementing scalable, microservices-based backends and building responsive, SEO-friendly web applications for companies.
          I've led the development of FrogHire.ai, a job-search Chrome extension with 40,000+ active users.
          I bring a combination of backend engineering expertise, cloud infrastructure experience, and strong problem-solving skills to every project.
        </motion.p>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.28, delay: 0.05 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <div>
            <h3 className="font-semibold mb-1">Frontend</h3>
            <ul className="space-y-1 text-muted text-sm">
              <li>React, TypeScript, Vite</li>
              <li>Tailwind, React Query</li>
              <li>i18n, Accessibility</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Backend</h3>
            <ul className="space-y-1 text-muted text-sm">
              <li>FastAPI (Python), Node.js</li>
              <li>PostgreSQL, MySQL</li>
              <li>REST APIs, Auth, Caching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Deployment &amp; Infrastructure</h3>
            <ul className="space-y-1 text-muted text-sm">
              <li>Docker, CI/CD (GitHub Actions)</li>
              <li>AWS (S3, EC2, DynamoDB)</li>
              <li>Nginx/CDN</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}