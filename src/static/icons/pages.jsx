import React from 'react'

export const pages = ({
  backgroundColor,
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
      d="M3.12132 5.29289C3.30886 5.10536 3.56321 5 3.82843 5H13V21H1L1 7.82843C1 7.56321 1.10536 7.30886 1.29289 7.12132L3.12132 5.29289Z"
      stroke={fill || dark}
      strokeWidth="2"
      fill="transparent"
      strokeLinejoin="round"
    />
    <rect x="4" y="9" width="6" height="2" rx="1" fill={fill || dark} />
    <rect x="4" y="12" width="6" height="2" rx="1" fill={fill || dark} />
    <rect x="4" y="15" width="6" height="2" rx="1" fill={fill || dark} />
    <path
      d="M11.1213 1.29289C11.3089 1.10536 11.5632 1 11.8284 1H21V17H9L9 3.82843C9 3.56321 9.10536 3.30886 9.29289 3.12132L11.1213 1.29289Z"
      fill={backgroundColor || 'white'}
      stroke={fill || dark}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect x="12.5" y="5.5" width="5" height="1" rx="0.5" fill={fill || dark} stroke={fill || dark} />
    <rect x="12.5" y="8.5" width="5" height="1" rx="0.5" fill={fill || dark} stroke={fill || dark} />
    <rect x="12.5" y="11.5" width="5" height="1" rx="0.5" fill={fill || dark} stroke={fill || dark} />
  </svg>
)
