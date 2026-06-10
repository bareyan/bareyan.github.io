import { useRef } from 'react'
import { useI18n } from './i18n/index.jsx'
import LangToggle from './components/LangToggle.jsx'
import Hero from './components/Hero.jsx'
import NeuralMap from './components/NeuralMap.jsx'
import Education from './components/Education.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { lang } = useI18n()
  const flashTimer = useRef(null)

  // Called when a network node is tapped: scroll its readable card into view
  // and briefly flash it so the connection is obvious.
  const reveal = (targetId) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    el.classList.remove('flash')
    // force reflow so the animation re-triggers on repeated taps
    void el.offsetWidth
    el.classList.add('flash')
    clearTimeout(flashTimer.current)
    flashTimer.current = setTimeout(() => el.classList.remove('flash'), 1400)
  }

  const cvHref = `/CV_${lang}.pdf`

  return (
    <>
      <LangToggle />
      <main className="wrap">
        <Hero cvHref={cvHref} />
        <NeuralMap onSelect={reveal} />
        <Education />
        <WhatIDo />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  )
}
