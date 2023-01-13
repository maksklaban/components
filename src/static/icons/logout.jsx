import React from 'react'

export const logout = ({ fill, width, height }) => (
  <svg width={width || 22} height={height || 16} viewBox="0 0 22 16">
    <path
      d="M7 16H2C0.895431 16 0 15.1046 0 14V2C0 0.895431 0.895431 0 2 0H7V2H2V14H7V16Z"
      fill={fill || 'white'}
    />
    <path
      d="M12.3561 14.2278L13.7763 12.8196L9.8571 8.86702L21 8.86697C21.5523 8.86697 22 8.41925 22 7.86697C22 7.31468 21.5523 6.86697 21 6.86697L9.83783 6.86702L13.8183 2.9202L12.4101 1.5L6.01918 7.83689L12.3561 14.2278Z"
      fill={fill || 'white'}
    />
  </svg>
)
