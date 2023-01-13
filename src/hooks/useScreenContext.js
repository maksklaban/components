import { createContext, useCallback, useEffect, useState } from 'react'

import useWindowWidth from './useWindowWidth'

export const ScreenContext = createContext(undefined)

export const useScreenContext = (theme) => {
  const width = useWindowWidth()
  const {
    breakpoints: { xl, lg, md, sm, xs, xxs },
  } = theme

  const getScreenUp = useCallback(
    (setScreenUp) => {
      if (width && width >= xl) {
        if (setScreenUp) {
          setScreenUp('xl')
        } else {
          return 'xl'
        }
        // isXLarge = true
      } else if (width && width >= lg) {
        if (setScreenUp) {
          setScreenUp('lg')
        } else {
          return 'lg'
        } // isLarge = true
      } else if (width && width >= md) {
        if (setScreenUp) {
          setScreenUp('md')
        } else {
          return 'md'
        } // isTablet = true
      } else if (width && width >= sm) {
        if (setScreenUp) {
          setScreenUp('sm')
        } else {
          return 'sm'
        } // isLandscape = true
      } else if (width && width >= xs) {
        if (setScreenUp) {
          setScreenUp('xs')
        } else {
          return 'xs'
        } // isMobile = true
      } else if (width && width < xs) {
        if (setScreenUp) {
          setScreenUp('xxs')
        } else {
          return 'xxs'
        } // isXMobile = true
      }
    },
    [theme, width]
  )

  const [screenUp, setScreenUp] = useState(getScreenUp)

  useEffect(() => {
    getScreenUp(setScreenUp)
  }, [getScreenUp])

  return { width, screenUp, xl, lg, md, sm, xs, xxs }
}
