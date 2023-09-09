import { ReactNode, useReducer } from 'react'
import { UiContext } from './ui-context'
import { uiReducer } from './ui-reducer'

export interface UiState {
  isSideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UiState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

export function UiProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: '[UI] - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: '[UI] - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({
      type: '[UI] - ToggleAddingEntry',
      payload: isAdding
    })
  }

  const startDragging = () => {
    dispatch({ type: '[UI] - Start Dragging' })
  }

  const endDragging = () => {
    dispatch({ type: '[UI] - End Dragging' })
  }

  return (
    <UiContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging
    }}
    >
      {children}
    </UiContext.Provider>
  )
}
