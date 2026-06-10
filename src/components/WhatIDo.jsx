import { useI18n } from '../i18n/index.jsx'
import Section from './Section.jsx'

export default function WhatIDo() {
  const { t } = useI18n()
  return (
    <Section id="skills" title={t.sections.whatido}>
      <div className="ship">
        {t.whatido.map((item) => (
          <div key={item.k}>
            <span className="k">{item.k}</span>
            <span>{item.v}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
