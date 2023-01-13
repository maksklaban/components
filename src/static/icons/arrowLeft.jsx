import React from 'react'

export const arrowLeft = (props) => (
  <svg width={props.width || 13} height={props.height || 10} viewBox="0 0 13 10">
    <path
      d="M0.757812 5L2.17203 3.58578L5.00045 0.757355L6.41467 2.17157L4.58624 4H13.0005V6H4.58624L6.41467 7.82842L5.00045 9.24264L2.17203 6.41421L0.757812 5Z"
      fill={props.fill || '#2237F0'}
    />
  </svg>
)
