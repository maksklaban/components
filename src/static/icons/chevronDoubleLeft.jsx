import React from 'react'

export const chevronDoubleLeft = ({ width = 18, height = 16, fill }) => (
  <svg width={width} height={height} viewBox="0 0 18 16" fill="none">
    <path d="M18 2L16 3.4969e-07L7.99998 8.00001L16 16L18 14L12 8.00001L18 2Z" fill={fill || 'white'} />
    <path d="M8.00001 0L10 2L4 8.00002L9.99998 14L7.99997 16L0 8.00001L8.00001 0Z" fill={fill || 'white'} />
  </svg>
)
