import React, { Children, useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'

import { StyledBlackout, StyledScreen, StyledScreensContainer } from './styled'
import { useOnScrollStop } from '../../index'

const ScreensTransition = ({ children, screensHeights, visibleId, setVisibleId }) => {
  const isClient = typeof window !== 'undefined'
  const numberOfPages = screensHeights.length

  const [scrollY, setScrollY] = useState(0)
  useOnScrollStop(() => {
    setScrollY(window.pageYOffset)
  })

  const [blackoutZIndex, setBlackoutZIndex] = useState(numberOfPages + 1)
  const [currentSectionHeight, setCurrentSectionHeight] = useState(null)

  useEffect(() => {
    if (isClient) {
      document.body.style.height = screensHeights?.length
        ? `${screensHeights.reduce((acc, value) => acc + value)}px`
        : '100%'
    }
    return () => {
      document.body.style.height = '100%'
    }
  }, [isClient, screensHeights])

  useEffect(() => setCurrentSectionHeight(screensHeights[visibleId]), [visibleId, screensHeights])

  const getPrevPagesHeight = useCallback(
    (index) =>
      index === 0 || !screensHeights?.length
        ? 0
        : screensHeights.reduce((acc, value, i) => (i < index ? acc + value : acc)),
    [screensHeights]
  )

  useEffect(() => {
    if (isClient && scrollY) {
      if (scrollY < screensHeights[0]) {
        setVisibleId(0)
        setBlackoutZIndex(numberOfPages + 1)
        return
      }
      for (let i = 1; i < numberOfPages; i++) {
        const prevScreensHeightsSum = Math.round(getPrevPagesHeight(numberOfPages - i))
        if (scrollY >= prevScreensHeightsSum) {
          setVisibleId(numberOfPages - i)
          setBlackoutZIndex(i + 1)
          return
        }
      }
    }
  }, [getPrevPagesHeight, isClient, numberOfPages, screensHeights, scrollY, setVisibleId])

  const getScrollClasses = useCallback(
    (pageNumber) => {
      const isVisible = pageNumber === visibleId
      const isPrev = pageNumber < visibleId
      const isNext = pageNumber === visibleId + 1
      return clsx(isPrev && 'prevPage', isVisible && 'visiblePage', isNext && 'nextPage')
    },
    [visibleId]
  )

  const calcTransform = useCallback(
    (pageNumber, prevPagesHeight) =>
      scrollY && pageNumber === visibleId
        ? `translateY(${-(scrollY - prevPagesHeight)}px) translateZ(0)`
        : 'translateZ(0)',
    [scrollY, visibleId]
  )

  const calcOpacity = useCallback(
    (prevPagesHeight) => {
      if (!isClient) return 1
      const scrollYToStartOpacityChange = prevPagesHeight + currentSectionHeight - window.innerHeight
      const startOpacityChange = scrollYToStartOpacityChange <= scrollY
      if (!startOpacityChange) return 1
      return (1 - (window.pageYOffset - scrollYToStartOpacityChange) / window.innerHeight).toFixed(4)
    },
    [currentSectionHeight, isClient, scrollY]
  )

  return (
    <StyledScreensContainer windowHeight={screensHeights[0]}>
      <StyledBlackout
        style={{ opacity: calcOpacity(getPrevPagesHeight(visibleId)), zIndex: blackoutZIndex }}
      />
      {Children.toArray(children)
        .filter((child) => child)
        .map((screen, index) => {
          return (
            <StyledScreen
              key={index}
              zIndex={numberOfPages + 1 - index}
              style={{
                transform: calcTransform(index, getPrevPagesHeight(index)),
              }}
              className={getScrollClasses(index)}
            >
              {screen}
            </StyledScreen>
          )
        })}
    </StyledScreensContainer>
  )
}

export default ScreensTransition
