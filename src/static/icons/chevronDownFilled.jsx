import React from 'react'

export const chevronDownFilled = (props) => (
  <svg width={props.width || '8'} height={props.height || '4'} viewBox="0 0 8 4">
    <path d="M4 4L0 0H8L4 4Z" fill={props.fill || 'black'} />
  </svg>
)
