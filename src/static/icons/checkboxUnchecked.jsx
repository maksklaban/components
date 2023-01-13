import React from 'react'

export const checkboxUnchecked = (props) => (
  <svg width={props.width || 16} height={props.height || 16} viewBox="0 0 16 16">
    <rect width={props.width || 16} height={props.height || 16} rx="2" fill={props.fill || '#ECEEF0'} />
  </svg>
)
