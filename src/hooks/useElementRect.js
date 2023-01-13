import { useCallback, useEffect, useState } from 'react'

const useElementRect = (ref, event = 'scroll') => {
  const getRect = useCallback(() => (ref.current ? ref.current.getBoundingClientRect() : undefined), [ref])

  const [elementRect, setElementRect] = useState(getRect())

  const getRectReturnValues = () => {
    if (elementRect) {
      const { height, width, x, y, top, right, bottom, left } = elementRect
      return { height, width, x, y, top, right, bottom, left }
    }
    return {}
  }

  useEffect(() => {
    if (ref.current) {
      setElementRect(getRect())
    }
  }, [ref && ref.current])

  useEffect(() => {
    if (ref.current) {
      const handleScroll = () => {
        setElementRect(getRect())
      }

      window.addEventListener(event, handleScroll)
      return () => window.removeEventListener(event, handleScroll)
    }
  }, [])

  return getRectReturnValues()
}

export default useElementRect
