import { useI18n, LANGS } from '../i18n/index.jsx'

export default function LangToggle() {
  const { lang, setLang } = useI18n()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGS.map((code) => (
        <button
          key={code}
          className={`lang-btn${code === lang ? ' active' : ''}`}
          aria-pressed={code === lang}
          onClick={() => setLang(code)}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
