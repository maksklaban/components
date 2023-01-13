import React from 'react'

export const star = (props) => (
  <svg width={props.width || '24'} height={props.height || '24'} viewBox="0 0 24 24">
    <path
      d="M12.5 15.2516L17.135 18L15.905 12.82L20 9.33474L14.6075 8.88526L12.5 4L10.3925 8.88526L5 9.33474L9.095 12.82L7.865 18L12.5 15.2516Z"
      fill={props.fill || '#F98939'}
    />
  </svg>
)
