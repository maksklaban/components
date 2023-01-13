import { useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export const useMappedState = (selectorObj) => useSelector(selectorObj, shallowEqual)

export const useUnmount = (cb) => {
  useEffect(() => {
    return cb
    // componentWillUnmount
  }, [])
}

export function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
