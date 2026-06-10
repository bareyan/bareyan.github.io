import { useI18n } from '../i18n/index.jsx'
import { education } from '../data/content.js'
import Section from './Section.jsx'

export default function Education() {
  const { t } = useI18n()
  return (
    <Section id="education" title={t.sections.education}>
      <div className="proj">
        {education.map((e) => {
          const copy = t.education[e.id]
          return (
            <article className="card" id={`n-edu-${e.id}`} key={e.id}>
              <h3><a href={e.url}>{copy.title}</a></h3>
              <p>{copy.detail}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
