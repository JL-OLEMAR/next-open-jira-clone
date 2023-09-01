import { EntriesState } from './entries-provider'

type EntriesActionType =
  | { type: '[ENTRIES] - actionName1' }
  | { type: '[ENTRIES] - actionName2' }

export function entriesReducer(state: EntriesState, action: EntriesActionType): EntriesState {
  switch (action.type) {
    case '[ENTRIES] - actionName1':
      return {
        ...state,
        entries: []
      }

    case '[ENTRIES] - actionName2':
      return {
        ...state,
        entries: []
      }

    default:
      return state
  }
}
