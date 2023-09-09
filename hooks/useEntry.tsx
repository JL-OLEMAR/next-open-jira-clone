import { useContext } from 'react'
import { EntriesContext } from '../context'

export function useEntry() {
  const entryContext = useContext(EntriesContext)

  if (entryContext == null && entryContext === undefined) {
    throw new Error('useEntry must be used within an EntryProvider')
  }

  return entryContext
}
