import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import en from './en.js'
import fr from './fr.js'

const dictionaries = { en, fr }
export const LANGS = ['en', 'fr']

const I18nContext = createContext(null)

function detectInitial() {
  const saved = localStorage.getItem('lang')
  if (saved && LANGS.includes(saved)) return saved
  return 'en'
}

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial)

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return
    setLangState(next)
    localStorage.setItem('lang', next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = dictionaries[lang]
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
