import { useState, useEffect } from 'react'

const useWindowHeight = () => {
  const isClient = typeof window !== 'undefined'

  const [height, setHeight] = useState(isClient && window.innerHeight)

  useEffect(() => {
    if (isClient) {
      const cb = () => setHeight(window.innerHeight)

      window.addEventListener('resize', cb)

      return () => window.removeEventListener('resize', cb)
    }
  }, [])

  return height
}

export default useWindowHeight
