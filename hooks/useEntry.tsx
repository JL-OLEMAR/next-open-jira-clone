import { useContext } from 'react'
import { EntriesContext } from '../context'

export function useEntry() {
  const { entries, addNewEntry } = useContext(EntriesContext)

  return {
    entries,
    addNewEntry
  }
}
