import { useState } from 'react'
import { useI18n } from '../i18n/index.jsx'
import { experience } from '../data/content.js'
import Section from './Section.jsx'
import ReportModal from './ReportModal.jsx'

export default function Experience() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)

  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="xp">
        {experience.map((e) => {
          const copy = t.experience[e.id]
          const count = e.reports?.length || 0
          return (
            <div className="row" id={`n-xp-${e.id}`} key={e.id}>
              <span className="yr">{e.year}</span>
              <div className="xp-body">
                <p>{copy.role} <span>· {copy.org}</span></p>
                {count > 0 && (
                  <button type="button" className="xp-open" onClick={() => setActive(e)}>
                    {count} {count === 1 ? t.reportModal.one : t.reportModal.many} →
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {active && <ReportModal entry={active} onClose={() => setActive(null)} />}
    </Section>
  )
}
