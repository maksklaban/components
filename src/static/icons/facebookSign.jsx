import React from 'react'

export const facebookSign = ({
  width,
  height,
  fill,
  theme: {
    color: { general },
  },
}) => (
  <svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none">
    <path
      d="M16.3519 8.64154C16.3519 8.64154 15.1148 8.63115 14.803 8.63115C14.3352 8.63115 14.0233 9.03659 14.0233 9.44722V11.1677H16.3519L16.0868 13.512H13.9973V19.5H11.6322V13.5432H9.63623V11.1417H11.6634V8.87545C11.6634 7.61236 13.0669 6.5 14.0441 6.5C14.1896 6.5 16.3519 6.52079 16.3519 6.52079V8.64154Z"
      fill={fill || general.light}
    />
  </svg>
)
