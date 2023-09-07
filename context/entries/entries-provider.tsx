import { ReactNode, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EntriesContext } from './entries-context'
import { entriesReducer } from './entries-reducer'
import { Entry } from '@interfaces/'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: de pago 1',
      status: 'todo',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'In progress: de pago 2',
      status: 'in-progress',
      createdAt: Date.now() - 1_000_000
    },
    {
      _id: uuidv4(),
      description: 'To do: de pago 3',
      status: 'done',
      createdAt: Date.now() - 100_000
    }
  ]
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

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry
    }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
