import React from 'react'

export const flowchart = ({
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
    <mask id="path-1-inside-1-flowchart" fill="white">
      <rect y="14" width="8" height="8" rx="1" />
    </mask>
    <rect
      y="14"
      width="8"
      height="8"
      rx="1"
      stroke={fill || dark}
      strokeWidth="4"
      fill="transparent"
      mask="url(#path-1-inside-1-flowchart)"
    />
    <mask id="path-2-inside-2-flowchart" fill="white">
      <rect x="14" y="14" width="8" height="8" rx="1" />
    </mask>
    <rect
      x="14"
      y="14"
      width="8"
      height="8"
      rx="1"
      stroke={fill || dark}
      strokeWidth="4"
      fill="transparent"
      mask="url(#path-2-inside-2-flowchart)"
    />
    <mask id="path-3-inside-3-flowchart" fill="white">
      <rect x="7" width="8" height="8" rx="1" />
    </mask>
    <rect
      x="7"
      width="8"
      height="8"
      rx="1"
      stroke={fill || dark}
      strokeWidth="4"
      fill="transparent"
      mask="url(#path-3-inside-3-flowchart)"
    />
    <path
      d="M11 11.5V7M18 15V12.5C18 11.9477 17.5523 11.5 17 11.5H5C4.44772 11.5 4 11.9477 4 12.5V15"
      stroke={fill || dark}
      strokeWidth="2"
      strokeLinecap="round"
      fill="transparent"
    />
  </svg>
)
