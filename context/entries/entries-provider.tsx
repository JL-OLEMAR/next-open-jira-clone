import { type ReactNode, useReducer, useEffect } from 'react'
import { entriesApi } from '../../endpoints'
import { type Entry } from '@interfaces/'
import { EntriesContext } from './entries-context'
import { entriesReducer } from './entries-reducer'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export function EntriesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  useEffect(() => {
    void getEntries()
  }, [])

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', {
      description
    })

    dispatch({
      type: '[ENTRIES] - Add-Entry',
      payload: data
    })
  }

  const getEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({
      type: '[ENTRIES] - Get-Entries',
      payload: data
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
