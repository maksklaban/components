import React from 'react'

export const trashBin = (props) => (
  <svg width={props.width || 13} height={props.height || 16} viewBox="0 0 13 16">
    <path
      d="M4 0H9V2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H4V0ZM3 6C2.44772 6 2 6.44771 2 7V16C2 16.5523 2.44772 17 3 17H10C10.5523 17 11 16.5523 11 16V7C11 6.44772 10.5523 6 10 6H3Z"
      fill={props.fill || 'black'}
    />
  </svg>
)
