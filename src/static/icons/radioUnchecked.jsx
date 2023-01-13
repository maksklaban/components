import React from 'react'

export const radioUnchecked = ({ width, height, fill, theme: { color } }) => (
  <svg width={width || 16} height={height || 16} viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8" fill={fill || color.general.gray2} />
  </svg>
)
