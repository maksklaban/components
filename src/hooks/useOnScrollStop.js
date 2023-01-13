import { useEffect } from 'react'

const useOnScrollStop = (callback, deps = [], timeout = 5) => {
  const isClient = typeof window !== 'undefined'

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        setTimeout(callback, timeout)
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, deps) // Empty array ensures that effect is only run on mount and unmount
}

export default useOnScrollStop
