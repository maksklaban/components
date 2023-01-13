import React from 'react'

export const dashboard = ({ fill, width, height }) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 8V12.1707C8.83481 12.5825 8 13.6938 8 15C8 16.6569 9.34315 18 11 18C12.6569 18 14 16.6569 14 15C14 13.6938 13.1652 12.5825 12 12.1707V8H10ZM10 15C10 14.4477 10.4477 14 11 14C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15Z"
      fill={fill || 'white'}
    />
    <path
      d="M11 4C14.866 4 18 7.13401 18 11V12H16V11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11V12H4V11C4 7.13401 7.13401 4 11 4Z"
      fill={fill || 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
      fill={fill || 'white'}
    />
  </svg>
)
