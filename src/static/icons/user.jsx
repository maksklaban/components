import React from 'react'

export const user = ({ fill, width, height }) => (
  <svg width={width || 12} height={height || 20} viewBox="0 0 12 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4Z"
      fill={fill || 'white'}
    />
    <path
      d="M10 12C10 11.4477 9.55228 11 9 11H3C2.44772 11 2 11.4477 2 12V20H0V12C0 10.3431 1.34315 9 3 9H9C10.6569 9 12 10.3431 12 12V20H10V12Z"
      fill={fill || 'white'}
    />
  </svg>
)
