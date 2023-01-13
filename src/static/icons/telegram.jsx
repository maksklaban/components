import React from 'react'

export const telegram = (props) => (
  <svg width={props.width || 16} height={props.height || 16} viewBox="0 0 16 16">
    <path
      d="M14.8763 0.10094L0.390353 8.45551C-0.175333 8.78045 -0.10345 9.56779 0.45911 9.80524L3.78134 11.1987L12.7604 3.2878C12.9323 3.13471 13.1761 3.36903 13.0292 3.54712L5.50028 12.7172V15.2323C5.50028 15.9696 6.391 16.2602 6.82854 15.7259L8.81313 13.3108L12.7073 14.9417C13.1511 15.1292 13.6574 14.8511 13.7387 14.3731L15.9889 0.875784C16.0952 0.244661 15.417 -0.211497 14.8763 0.10094Z"
      fill={props.fill || '#040304'}
    />
  </svg>
)