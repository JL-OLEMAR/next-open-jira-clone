import { type ReactNode, useReducer, useEffect } from 'react'
import { useSnackbar } from 'notistack'

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
  const { enqueueSnackbar } = useSnackbar()

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

  const updatedEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status
      })
      dispatch({
        type: '[ENTRIES] - Entry-Updated',
        payload: data
      })

      if (showSnackbar) {
        enqueueSnackbar('Entry updated successfully!', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    } catch (error) {
      console.log({ error })
    }
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
