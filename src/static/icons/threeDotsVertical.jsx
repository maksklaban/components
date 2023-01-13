import React from 'react'

export const threeDotsVertical = ({ fill, width, height }) => (
  <svg width={width || 4} height={height || 16} viewBox="0 0 4 16">
    <path
      d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z"
      fill={fill || 'white'}
    />
    <path
      d="M4 8C4 9.10457 3.10457 10 2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8Z"
      fill={fill || 'white'}
    />
    <path
      d="M4 14C4 15.1046 3.10457 16 2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14Z"
      fill={fill || 'white'}
    />
  </svg>
)
