/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean
  isAddingEntry: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
}

export const UiContext = createContext({} as ContextProps)
