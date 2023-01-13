import React from 'react'

export const plus = (props) => (
  <svg width={props.width || '6'} height={props.height || '6'} viewBox="0 0 6 6">
    <path d="M4 0H2V2H0V4H2V6H4V4H6V2H4V0Z" fill={props.fill || '#black'} />
  </svg>
)
