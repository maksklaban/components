import React from 'react'

export const notificationOff = ({ fill, width, height }) => (
  <svg width={width || 16} height={height || 22} viewBox="0 0 16 22">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2V2.28988C12.8915 3.15043 15 5.82898 15 9V16H16V18H0V16H1V9C1 5.82898 3.10851 3.15043 6 2.28988V2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2ZM3 16H13V9C13 6.23858 10.7614 4 8 4C5.23858 4 3 6.23858 3 9V16ZM10 20V19H6V20C6 21.1046 6.89543 22 8 22C9.10457 22 10 21.1046 10 20Z"
      fill={fill || 'white'}
    />
  </svg>
)
