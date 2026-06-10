import { useI18n } from '../i18n/index.jsx'
import { experience } from '../data/content.js'
import Section from './Section.jsx'

export default function Experience() {
  const { t } = useI18n()
  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="xp">
        {experience.map((e) => {
          const copy = t.experience[e.id]
          return (
            <div id={`n-xp-${e.id}`} key={e.id}>
              <span className="yr">{e.year}</span>
              <p>{copy.role} <span>· {copy.org}</span></p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
