import React from 'react'

export const sizeL = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path d="M7 6H9.31429V14.01H15V16H7V6Z" fill={fill || dark} />
  </svg>
)
