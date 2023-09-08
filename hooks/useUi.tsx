import { useContext } from 'react'
import { UiContext } from '../context'

export function useUi() {
  const { closeSideMenu, isSideMenuOpen, openSideMenu } = useContext(UiContext)

  return {
    closeSideMenu,
    isSideMenuOpen,
    openSideMenu
  }
}
