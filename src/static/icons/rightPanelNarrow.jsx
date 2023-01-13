import React from 'react'

export const rightPanelNarrow = ({ width = 12, height = 12, fill }) => (
  <svg width={width} height={height} viewBox="0 0 12 12" fill="none">
    <path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 0C0.223858 0 0 0.223858 0 0.5V11.5C0 11.7761 0.223858 12 0.5 12H11.5C11.7761 12 12 11.7761 12 11.5V0.5C12 0.223858 11.7761 0 11.5 0H0.5ZM1.5 1C1.22386 1 1 1.22386 1 1.5V10.5C1 10.7761 1.22386 11 1.5 11H10.5C10.7761 11 11 10.7761 11 10.5V1.5C11 1.22386 10.7761 1 10.5 1H1.5Z"
      fill={fill || 'white'}
    />
    <rect x="8" width="4" height="12" rx="0.5" fill={fill || 'white'} />
  </svg>
)
