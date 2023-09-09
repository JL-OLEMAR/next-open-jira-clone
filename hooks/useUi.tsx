import { useContext } from 'react'
import { UiContext } from '../context'

export function useUi() {
  const uiContext = useContext(UiContext)

  if (uiContext == null && uiContext === undefined) {
    throw new Error('useUi must be used within an UiProvider')
  }

  return uiContext
}
