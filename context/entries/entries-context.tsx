/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Entry } from '@interfaces/'
import { createContext } from 'react'

interface ContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => Promise<void>
  updatedEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as ContextProps)
