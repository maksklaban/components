import React from 'react'

export const error = (props) => (
  <svg width={props.width || '24'} height={props.height || '24'} viewBox="0 0 24 24">
    <path
      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V9ZM11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15Z"
      fill={props.fill || '#D83737'}
    />
  </svg>
)
