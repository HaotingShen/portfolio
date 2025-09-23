import React from 'react'
export default function Footer() {
  return (
    <footer className="py-10 border-t bg-base/70 ui-border">
      <div className="mx-auto max-w-6xl px-4 text-sm text-muted">
        © {new Date().getFullYear()} Haoting Shen
      </div>
    </footer>
  )
}