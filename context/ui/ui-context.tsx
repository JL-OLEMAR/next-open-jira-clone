/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

interface ContextProps {
  isSideMenuOpen: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
