import { useContext } from 'react'
import { UiContext } from '../context'

export function useUi() {
  const {
    isSideMenuOpen,
    isAddingEntry,
    closeSideMenu,
    openSideMenu,
    setIsAddingEntry
  } = useContext(UiContext)

  return {
    isSideMenuOpen,
    isAddingEntry,
    closeSideMenu,
    openSideMenu,
    setIsAddingEntry
  }
}
