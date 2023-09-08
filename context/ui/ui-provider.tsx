import { ReactNode, useReducer } from 'react'
import { UiContext } from './ui-context'
import { uiReducer } from './ui-reducer'

export interface UiState {
  isSideMenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UiState = {
  isSideMenuOpen: false,
  isAddingEntry: false
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
      type: '[UI] - Set isAddingEntry',
      payload: isAdding
    })
  }

  return (
    <UiContext.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}
    >
      {children}
    </UiContext.Provider>
  )
}
