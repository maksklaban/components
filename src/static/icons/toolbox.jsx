import React from 'react'

export const toolbox = ({ fill, width, height }) => (
  <svg width={width || 22} height={height || 19} viewBox="0 0 22 19">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3H20C21.1046 3 22 3.89543 22 5V17C22 18.1046 21.1046 19 20 19H2C0.895431 19 0 18.1046 0 17V5C0 3.89543 0.895431 3 2 3H6C6 1.34315 7.34315 0 9 0H13C14.6569 0 16 1.34315 16 3ZM13 2H9C8.44772 2 8 2.44772 8 3H14C14 2.44772 13.5523 2 13 2ZM20 5H2V7H20V5ZM2 17V9H6V11H10V9H12V11H16V9H20V17H2Z"
      fill={fill || 'white'}
    />
  </svg>
)
