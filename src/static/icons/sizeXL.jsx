import React from 'react'

export const sizeXL = ({
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
      d="M8.02286 12.2229L9.95429 15H12.0914L9.10857 10.8629L11.8971 7H9.89714L8.09143 9.59429L6.25143 7H4.14857L6.96 10.9314L4 15H6.12571L8.02286 12.2229Z"
      fill={fill || dark}
    />
    <path d="M13.9914 7H12.14V15H18.0029V13.4914H13.9914V7Z" fill={fill || dark} />
  </svg>
)
