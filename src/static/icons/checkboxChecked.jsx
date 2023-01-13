import React from 'react'

export const checkboxChecked = ({ width, height, checkboxColor, fill }) => (
  <svg width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none">
    <rect width="16" height="16" fill="#E5E5E5" />
    <rect width="1232" height="1738" transform="translate(-312 -464)" fill="white" />
    <rect width="16" height="16" rx="2" fill={fill || '#FDDA23'} />
    <path
      d="M4.81802 6.14633L3.40381 7.56055L5.52513 9.68187L6.93934 11.0961L8.35356 9.68187L12.5962 5.43923L11.182 4.02501L6.93934 8.26765L4.81802 6.14633Z"
      fill={checkboxColor || 'white'}
    />
  </svg>
)
