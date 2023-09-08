import { UiState } from './ui-provider'

type UiActionType =
  | { type: '[UI] - Open Sidebar' }
  | { type: '[UI] - Close Sidebar' }
  | { type: '[UI] - Set isAddingEntry', payload: boolean }

export function uiReducer(state: UiState, action: UiActionType): UiState {
  switch (action.type) {
    case '[UI] - Open Sidebar':
      return {
        ...state,
        isSideMenuOpen: true
      }

    case '[UI] - Close Sidebar':
      return {
        ...state,
        isSideMenuOpen: false
      }

    case '[UI] - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }

    default:
      return state
  }
}
