import { UiState } from './ui-provider'

type UiActionType =
  | { type: '[UI] - Open Sidebar' }
  | { type: '[UI] - Close Sidebar' }
  | { type: '[UI] - ToggleAddingEntry', payload: boolean }
  | { type: '[UI] - Start Dragging' }
  | { type: '[UI] - End Dragging' }

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

    case '[UI] - ToggleAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      }

    case '[UI] - Start Dragging':
      return {
        ...state,
        isDragging: true
      }

    case '[UI] - End Dragging':
      return {
        ...state,
        isDragging: false
      }

    default:
      return state
  }
}
