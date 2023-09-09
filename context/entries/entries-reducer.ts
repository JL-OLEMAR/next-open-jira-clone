import { EntriesState } from './entries-provider'
import { Entry } from '../../interfaces'

type EntriesActionType =
  | { type: '[ENTRIES] - Add-Entry', payload: Entry }
  | { type: '[ENTRIES] - Entry-Updated', payload: Entry }

export function entriesReducer(state: EntriesState, action: EntriesActionType): EntriesState {
  switch (action.type) {
    case '[ENTRIES] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }

    case '[ENTRIES] - Entry-Updated':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry
        })
      }

    default:
      return state
  }
}
