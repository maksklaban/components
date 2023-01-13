import React from 'react'

export const menuWithDots = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 22} height={height || 14} viewBox="0 0 22 14">
    <circle cx="2" cy="2" r="2" fill={fill || dark} />
    <circle cx="2" cy="12" r="2" fill={fill || dark} />
    <circle cx="2" cy="7" r="2" fill={fill || dark} />
    <rect x="6" y="1" width="16" height="2" rx="1" fill={fill || dark} />
    <rect x="6" y="6" width="16" height="2" rx="1" fill={fill || dark} />
    <rect x="6" y="11" width="16" height="2" rx="1" fill={fill || dark} />
  </svg>
)
