import { create } from 'zustand'

export interface INavigationContext {
  /**
   * Navigation
   */
  isSearchOpen: boolean
  isMobileSearchOpen: boolean
  isNavigationSpacing: boolean
  isNavbarActive: boolean
  isDrawerActive: boolean
  isNavbarVisible: boolean
  isNavbarFlat: boolean
  isNavbardropdownVisible: boolean
  navbarHeight: number | string | any
  navbarDropdownHeight: number | string | any
  isNavbarExpanded: boolean
  /**
   * Share
   */
  isShared: boolean
  urlToShare: string
  /**
   * Footer
   */
  isFooterOpen: boolean
  /**Methods */
  /**
   * Navigation Methods
   */
  changeIsSearchOpen: (isSearchOpen: boolean) => void
  changeIsMobileSearchOpen: (isMobileSearchOpen: boolean) => void
  changeIsNavigationSpacing: (isNavigationSpacing: boolean) => void
  changeIsNavbarActive: (isNavbarActive: boolean) => void
  changeIsDrawerActive: (isDrawerActive: boolean) => void
  changeIsNavbarVisible: (isNavbarVisible: boolean) => void
  changeIsNavbarFlat: (isNavbarFlat: boolean) => void
  changeIsNavbardropdownVisible: (isNavbardropdownVisible: boolean) => void
  changeNavbarHeight: (navbarHeight: boolean) => void
  changeNavbarDropdownHeight: (navbarDropdownHeight: boolean) => void
  changeIsNavbarExpanded: (isNavbarExpanded: boolean) => void
  /**
   * Share Methods
   */
  changeIsShared: (isShared: boolean) => void
  changeUrlToShare: (urlToShare: string) => void
  /**
   * Footer Methods
   */
  changeFooterOpen: (isFooterOpen: boolean) => void
}

export const useNavigationStore = create<INavigationContext>((set) => ({
  // initial state
  /**
   * Navigation
   */
  isSearchOpen: true,
  isMobileSearchOpen: false,
  isNavigationSpacing: false,
  isNavbarActive: false,
  isDrawerActive: false,
  isNavbarVisible: true,
  isNavbarFlat: false,
  isNavbardropdownVisible: false,
  navbarHeight: '84px',
  navbarDropdownHeight: '68px',
  isNavbarExpanded: false,

  /**
   * Share
   */
  isShared: false,
  urlToShare: '',

  /**
   * Footer
   */
  isFooterOpen: true,

  // methods for manipulating state
  /**
   * Navigation
   */
  changeIsSearchOpen: (isSearchOpen: boolean) =>
    set(() => ({
      isSearchOpen: isSearchOpen,
    })),
  changeIsMobileSearchOpen: (isMobileSearchOpen: boolean) =>
    set(() => ({
      isMobileSearchOpen: isMobileSearchOpen,
    })),
  changeIsNavigationSpacing: (isNavigationSpacing: boolean) =>
    set(() => ({
      isNavigationSpacing: isNavigationSpacing,
    })),
  changeIsNavbarActive: (isNavbarActive: boolean) =>
    set(() => ({
      isNavbarActive: isNavbarActive,
    })),
  changeIsDrawerActive: (isDrawerActive: boolean) =>
    set(() => ({
      isDrawerActive: isDrawerActive,
    })),
  changeIsNavbarVisible: (isNavbarVisible: boolean) =>
    set(() => ({
      isNavbarVisible: isNavbarVisible,
    })),
  changeIsNavbarFlat: (isNavbarFlat: boolean) =>
    set(() => ({
      isNavbarFlat: isNavbarFlat,
    })),
  changeIsNavbardropdownVisible: (isNavbardropdownVisible: boolean) =>
    set(() => ({
      isNavbardropdownVisible: isNavbardropdownVisible,
    })),
  changeNavbarHeight: (navbarHeight: number | string | any) =>
    set(() => ({
      navbarHeight: navbarHeight,
    })),
  changeNavbarDropdownHeight: (navbarDropdownHeight: number | string | any) =>
    set(() => ({
      navbarDropdownHeight: navbarDropdownHeight,
    })),
  changeIsNavbarExpanded: (isNavbarExpanded: boolean | any) =>
    set(() => ({
      isNavbarExpanded: isNavbarExpanded,
    })),
  /**
   * Share Methods
   */
  changeIsShared: (isShared: boolean | any) =>
    set(() => ({
      isShared: isShared,
    })),
  changeUrlToShare: (urlToShare: string) =>
    set(() => ({
      urlToShare: urlToShare,
    })),
  /**
   * Footer Methods
   */
  changeFooterOpen: (isFooterOpen: boolean | any) =>
    set(() => ({
      isFooterOpen: isFooterOpen,
    })),
}))
