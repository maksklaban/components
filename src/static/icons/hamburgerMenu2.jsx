import React from 'react'

export const hamburgerMenu2 = ({ width = 26, height = 18, fill = 'white' }) => (
  <svg width={width} height={height} viewBox="0 0 26 18" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1C0 0.447715 0.447715 0 1 0H25C25.5523 0 26 0.447715 26 1C26 1.55228 25.5523 2 25 2H1C0.447716 2 0 1.55228 0 1ZM12 9C12 8.44771 12.4477 8 13 8H25C25.5523 8 26 8.44771 26 9C26 9.55229 25.5523 10 25 10H13C12.4477 10 12 9.55229 12 9ZM1 16C0.447715 16 0 16.4477 0 17C0 17.5523 0.447716 18 1 18H25C25.5523 18 26 17.5523 26 17C26 16.4477 25.5523 16 25 16H1Z"
      fill={fill}
    />
  </svg>
)
