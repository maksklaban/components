import React from 'react'

export const notificationOn = ({ fill, width, height, circleColor }) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      d="M17.9816 8.48862C17.9938 8.6575 18 8.82803 18 9.00001V16H19V18H3V16H4V9.00001C4 6.14325 5.71129 3.68619 8.16468 2.59802C8.05702 3.04779 8 3.51724 8 4.00001C8 4.32158 8.0253 4.63724 8.07401 4.94511C6.81756 5.85334 6 7.3312 6 9.00001V16H16V9.6586C16.7373 9.39799 17.4085 8.99735 17.9816 8.48862Z"
      fill={fill || 'white'}
    />
    <path d="M13 19V20C13 21.1046 12.1046 22 11 22C9.89543 22 9 21.1046 9 20V19H13Z" fill={fill || 'white'} />
    <circle cx="14" cy="4" r="4" fill={circleColor || '#FBBA00'} />
  </svg>
)
