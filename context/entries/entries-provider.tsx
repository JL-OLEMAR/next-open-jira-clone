import { ReactNode, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EntriesContext } from './entries-context'
import { entriesReducer } from './entries-reducer'
import { type Entry } from '@interfaces/'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export function EntriesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'todo'
    }

    dispatch({
      type: '[ENTRIES] - Add-Entry',
      payload: newEntry
    })
  }

  const updatedEntry = (entry: Entry) => {
    dispatch({
      type: '[ENTRIES] - Entry-Updated',
      payload: entry
    })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      updatedEntry
    }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
