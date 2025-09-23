import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAurora from './components/BackgroundAurora'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundAurora />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-surface text-text px-3 py-2 rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}