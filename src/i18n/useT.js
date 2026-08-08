import { useCallback, useSyncExternalStore } from 'react'
import {
  getLanguage,
  getLanguagePreference,
  subscribeLanguage,
  t as translate,
} from './index.js'

export function useT() {
  const language = useSyncExternalStore(
    subscribeLanguage,
    getLanguage,
    getLanguage,
  )
  const languagePreference = useSyncExternalStore(
    subscribeLanguage,
    getLanguagePreference,
    getLanguagePreference,
  )

  const t = useCallback(
    (key, params) => translate(key, params),
    // `language` is not read inside the callback on purpose: translate() reads
    // the module-level language. The dep exists to hand consumers a new `t`
    // identity when the language flips, so their memos recompute.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  )

  return { t, language, languagePreference }
}
