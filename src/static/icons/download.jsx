import React from 'react'

export const download = ({
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
      d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z"
      fill={fill || dark}
    />
    <path
      d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z"
      fill={fill || dark}
    />
  </svg>
)
