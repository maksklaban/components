import React from 'react'

export const print = ({
  fill,
  theme: {
    color: {
      general: { dark },
    },
  },
  width,
  height,
}) => (
  <svg width={width || 16} height={height || 16} viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.8 1.6H11.2V3.2H4.8V1.6ZM12.8 3.2H16V12.8H12.8V16H3.2V12.8H0V3.2H3.2V0H12.8V3.2ZM14.4 11.2H12.8V9.6H3.2V11.2H1.6V4.8H14.4V11.2ZM4.8 11.2H11.2V14.4H4.8V11.2ZM4.8 6.4H3.2V8H4.8V6.4Z"
      fill={fill || dark}
    />
  </svg>
)
