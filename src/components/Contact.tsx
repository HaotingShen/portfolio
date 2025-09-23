import React from 'react'
import { Mail } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Contact() {
  const gmailComposeHref =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=shenhaoting@gmail.com' +
    '&su=' + encodeURIComponent('Hello from your portfolio') +
    '&body=' + encodeURIComponent(
      `Hi Haoting,`
    )

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-[Sora] text-3xl font-semibold mb-3">Contact</h2>
        <p className="text-muted">Seeking backend and full-stack roles. Eager to collaborate!</p>

        <div className="mt-4 flex flex-wrap gap-4">
          {/* Email via Gmail (outline pill) */}
          <a
            className="ui-outline-btn px-4 py-2"
            href={gmailComposeHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-4 w-4" />
            Email via Gmail
          </a>

          {/* GitHub */}
          <a
            className="ui-outline-btn px-4 py-2"
            href="https://github.com/HaotingShen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-4 w-4" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            className="ui-outline-btn px-4 py-2"
            href="https://www.linkedin.com/in/haoting-shen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}