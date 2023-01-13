import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const isClient = typeof window !== 'undefined'

  const getWidth = () => (isClient ? document.documentElement.clientWidth : undefined)

  const [width, setWidth] = useState(getWidth)

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        setWidth(getWidth())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return width
}

export default useWindowWidth
