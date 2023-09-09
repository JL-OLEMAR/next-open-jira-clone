/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  startDragging: () => void
  endDragging: () => void
}

export const UiContext = createContext({} as ContextProps)
