import React from 'react'

export const listView = ({ width = 18, height = 18, fill }) => (
  <svg width={width} height={height} viewBox="0 0 18 18">
    <path
      d="M0 0.5C0 0.223858 0.223858 0 0.5 0H17.5C17.7761 0 18 0.223858 18 0.5V4C18 4.27614 17.7761 4.5 17.5 4.5H0.5C0.223858 4.5 0 4.27614 0 4V0.5Z"
      fill={fill || '#E6E6E6'}
    />
    <path
      d="M0 7.25C0 6.97386 0.223858 6.75 0.5 6.75H17.5C17.7761 6.75 18 6.97386 18 7.25V10.75C18 11.0261 17.7761 11.25 17.5 11.25H0.5C0.223858 11.25 0 11.0261 0 10.75V7.25Z"
      fill={fill || '#E6E6E6'}
    />
    <path
      d="M18 14C18 13.7239 17.7761 13.5 17.5 13.5H0.5C0.223858 13.5 0 13.7239 0 14V17.5C0 17.7761 0.223858 18 0.5 18H17.5C17.7761 18 18 17.7761 18 17.5V14Z"
      fill={fill || '#E6E6E6'}
    />
  </svg>
)