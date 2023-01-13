import React from 'react'

export const sizeM = ({
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
    <path
      d="M14.3809 16L14.3669 10L11.4949 14.9429H10.4772L7.61914 10.1286V16H5.5V6H7.36819L11.0209 12.2143L14.6179 6H16.4721L16.5 16H14.3809Z"
      fill={fill || dark}
    />
  </svg>
)
