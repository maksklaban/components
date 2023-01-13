import React from 'react'

export const menuCloseToLeft = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 22} height={height || 20} viewBox="0 0 22 20">
    <rect width="22" height="2" rx="1" fill={fill || dark} />
    <rect y="6" width="14" height="2" rx="1" fill={fill || dark} />
    <rect y="12" width="14" height="2" rx="1" fill={fill || dark} />
    <rect y="18" width="22" height="2" rx="1" fill={fill || dark} />
    <path
      d="M17.9761 10.7809C17.4757 10.3805 17.4757 9.61946 17.9761 9.21913L20.3753 7.29976C21.0301 6.77595 22 7.24212 22 8.08062L22 11.9194C22 12.7579 21.0301 13.2241 20.3753 12.7002L17.9761 10.7809Z"
      fill={fill || dark}
    />
  </svg>
)
