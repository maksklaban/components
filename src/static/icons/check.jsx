import React from 'react'

export const check = (props) => (
  <svg width={props.width || 10} height={props.height || 11} viewBox="0 0 10 11">
    <path
      d="M1.81802 5.14633L0.403809 6.56055L2.52513 8.68187L3.93934 10.0961L5.35356 8.68187L9.5962 4.43923L8.18198 3.02501L3.93934 7.26765L1.81802 5.14633Z"
      fill={props.fill || '#black'}
    />
  </svg>
)
