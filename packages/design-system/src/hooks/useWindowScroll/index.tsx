import { useEffect } from 'react'
import { useRafState } from 'react-use'

import { isBrowser, off, on } from '../util'

/**
 * Modified version of useWindowScroll from react-use. Imports helpers from react-use.
 * Modified version adds isTopOfPage and isBottomOfPage to state.
 */

export interface State {
  x: number
  y: number
  isTopOfPage: boolean
  isBottomOfPage: boolean
}

export const useWindowScroll = (): State => {
  const [state, setState] = useRafState<State>(() => ({
    x: isBrowser ? window.pageXOffset : 0,
    y: isBrowser ? window.pageYOffset : 0,
    isTopOfPage: isBrowser ? window.pageYOffset === 0 : false,
    isBottomOfPage: isBrowser
      ? window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      : false,
  }))

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        const { pageXOffset, pageYOffset } = window
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return state.x !== pageXOffset ||
          state.y !== pageYOffset ||
          state.isTopOfPage !== (pageYOffset === 0) ||
          state.isBottomOfPage !==
            window.innerHeight + pageYOffset >= document.body.offsetHeight
          ? {
              x: pageXOffset,
              y: pageYOffset,
              isTopOfPage: pageYOffset === 0,
              isBottomOfPage:
                window.innerHeight + pageYOffset >= document.body.offsetHeight,
            }
          : state
      })
    }

    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler()

    on(window, 'scroll', handler, {
      capture: false,
      passive: true,
    })

    return () => {
      off(window, 'scroll', handler)
    }
  }, [])

  return state
}
