import { EntriesState } from './entries-provider'
import { Entry } from '../../interfaces'

type EntriesActionType =
  | { type: '[ENTRIES] - Add-Entry', payload: Entry }

export function entriesReducer(state: EntriesState, action: EntriesActionType): EntriesState {
  switch (action.type) {
    case '[ENTRIES] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }

    default:
      return state
  }
}
