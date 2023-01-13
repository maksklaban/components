import React from 'react'

export const pin = (props) => (
  <svg width={props.width || '68'} height={props.height || '84'} viewBox="0 0 68 84">
    <circle cx="34" cy="34" r="33" fill="white" stroke="#F9FAFC" strokeWidth="2" />
    <rect opacity="0.5" x="29" y="72" width="12" height="12" rx="6" fill="#F1CF1C" />
    <rect x="31" y="74" width="8" height="8" rx="4" fill="#FFF4BC" />
  </svg>
)
