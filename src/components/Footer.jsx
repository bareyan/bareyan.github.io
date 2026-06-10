import { useI18n } from '../i18n/index.jsx'
import { links } from '../data/content.js'
import { useReveal } from '../useReveal.js'

export default function Footer() {
  const { t } = useI18n()
  const [ref, shown] = useReveal()
  return (
    <footer id="contact" ref={ref} className={`reveal${shown ? ' shown' : ''}`}>
      <p className="big">{t.sections.contact}</p>
      <div className="flist">
        <span>{t.footer.emailLabel} — <a href={`mailto:${links.email}`}>{links.email}</a></span>
        <span>{t.footer.githubLabel} — <a href={links.github}>{links.githubLabel}</a></span>
        <span>{t.footer.linkedinLabel} — <a href={links.linkedin}>{links.linkedinLabel}</a></span>
      </div>
      <p className="langs">{t.footer.langs}</p>
    </footer>
  )
}
