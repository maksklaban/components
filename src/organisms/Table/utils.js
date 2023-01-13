import React from 'react'

export function callOrReturn(funcOrValue, ...args) {
  return typeof funcOrValue === 'function' ? funcOrValue(...args) : funcOrValue
}

export function normalizeColumns(elements) {
  const columns = []
  React.Children.forEach(elements, (element) => {
    if (React.isValidElement(element) && element.key) {
      const column = { ...element.props, key: element.key }
      columns.push(column)
    }
  })
  return columns
}

export function cloneArray(array) {
  if (!Array.isArray(array)) return []
  return [].concat(array)
}
