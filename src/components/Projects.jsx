import { useI18n } from '../i18n/index.jsx'
import { projects } from '../data/content.js'
import Section from './Section.jsx'

export default function Projects() {
  const { t } = useI18n()
  return (
    <Section id="projects" title={t.sections.projects}>
      <div className="proj">
        {projects.map((p) => {
          const copy = t.projects[p.id]
          return (
            <article className="card" id={`n-proj-${p.id}`} key={p.id}>
              <h3><a href={p.url}>{copy.title}</a></h3>
              <p>{copy.desc}</p>
              <div className="meta">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
                <a href={p.url}>{copy.cta}</a>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
