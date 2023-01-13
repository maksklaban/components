import React from 'react'

export const chevronDown = (props) => (
  <svg width={props.width || '11'} height={props.height || '11'} viewBox="0 0 11 11">
    <path
      d="M1.2574 4.79289L0.550293 5.5L4.79293 9.74264L5.50004 10.4497L6.20715 9.74264L10.4498 5.5L9.74268 4.79289L5.50004 9.03553L1.2574 4.79289Z"
      fill={props.fill || 'black'}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
    />
  </svg>
)
