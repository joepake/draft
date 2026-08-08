import { useEffect, useRef, useState } from 'react'
import { LANGUAGE_META, SUPPORTED_LANGUAGES, setLanguagePreference } from './index.js'
import { useT } from './useT.js'
import Icon from '../components/Icon.jsx'

/**
 * `variant="side"` is the dashboard's sidebar placement, which opens upwards
 * because the footer sits at the bottom of a full-height column.
 */
export default function LanguagePicker({ variant = 'header' }) {
  const { t, language, languagePreference } = useT()
  const [open, setOpen] = useState(false)
  const root = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (!root.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(next) {
    setOpen(false)
    setLanguagePreference(next)
  }

  return (
    <div className={`lang lang-${variant}`} ref={root}>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.change')}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="globe" size={16} />
        <span>{LANGUAGE_META[language].nativeName}</span>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t('language.title')}>
          <li>
            <button
              type="button"
              role="option"
              aria-selected={languagePreference === 'system'}
              className={languagePreference === 'system' ? 'is-active' : ''}
              onClick={() => choose('system')}
            >
              <span>{t('language.system')}</span>
              {languagePreference === 'system' && <Icon name="check" size={14} />}
            </button>
          </li>
          {SUPPORTED_LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={languagePreference === code}
                className={languagePreference === code ? 'is-active' : ''}
                onClick={() => choose(code)}
                lang={code}
              >
                <span>
                  {LANGUAGE_META[code].nativeName}
                  <em>{t(LANGUAGE_META[code].labelKey)}</em>
                </span>
                {languagePreference === code && <Icon name="check" size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
