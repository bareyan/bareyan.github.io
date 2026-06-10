import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import { links } from '../data/content.js'

// Render a tagline like "... at {0}, joining {1} ..." with the {n} slots
// replaced by <strong> elements from taglineStrong.
function Tagline({ template, strong }) {
  const parts = template.split(/(\{\d+\})/g)
  return (
    <p className="tagline">
      {parts.map((part, i) => {
        const m = part.match(/^\{(\d+)\}$/)
        if (m) return <strong key={i}>{strong[Number(m[1])]}</strong>
        return <span key={i}>{part}</span>
      })}
    </p>
  )
}

// Rotating type-on / type-off effect for the role line.
function Typing({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    const word = words[index % words.length]
    let delay = deleting ? 45 : 80
    if (!deleting && text === word) delay = 1400
    if (deleting && text === '') delay = 250

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words])

  return (
    <span className="typing">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  )
}

export default function Hero({ cvHref }) {
  const { t } = useI18n()

  return (
    <header className="hero">
      <p className="eyebrow">{t.hero.eyebrow}</p>
      <h1>{t.hero.name}</h1>
      <p className="role-line">
        <span className="role-prefix">&gt;</span> <Typing words={t.hero.typing} />
      </p>
      <Tagline template={t.hero.tagline} strong={t.hero.taglineStrong} />

      <div className="actions">
        <a className="btn primary" href={`mailto:${links.email}`}>{t.actions.email}</a>
        <a className="btn" href={cvHref} download>{t.actions.cv}</a>
        <a className="btn" href={links.github}>{t.actions.github}</a>
        <a className="btn" href={links.linkedin}>{t.actions.linkedin}</a>
      </div>
    </header>
  )
}
