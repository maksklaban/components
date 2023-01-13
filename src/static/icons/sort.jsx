import React from 'react'

export const sort = ({ width, height, fill }) => (
  <svg viewBox="0 0 384 384" width={width || 16} height={height || 16} fill={fill || 'black'}>
    <polygon points="128,0 42.667,85.12 106.667,85.12 106.667,234.667 149.333,234.667 149.333,85.12 213.333,85.12 			" />
    <polygon points="277.333,298.88 277.333,149.333 234.667,149.333 234.667,298.88 170.667,298.88 256,384 341.333,298.88 			" />
  </svg>
)
