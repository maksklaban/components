import React from 'react'

export const statusNew = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      status,
    },
  },
}) => (
  <svg width={width || 18} height={height || 18} viewBox="0 0 18 18" fill={fill || light}>
    <path
      d="M16.5077 7.32887L13.0703 6.84636L14.3771 3.58568C14.5856 3.06567 14.0146 2.58003 13.5462 2.87847L10.6075 4.75007L9.54215 1.40063C9.45747 1.13344 9.22872 1 8.99997 1C8.77122 1 8.54247 1.13344 8.45779 1.40063L7.39248 4.75039L4.45375 2.87879C3.98531 2.58034 3.41469 3.06598 3.62282 3.58599L4.92968 6.84668L1.4922 7.32887C0.944081 7.40575 0.814707 8.14983 1.30377 8.41233L4.37125 10.058L2.04376 12.6687C1.70251 13.0515 1.99001 13.6352 2.45907 13.6352C2.50001 13.6352 2.54251 13.6309 2.58626 13.6212L5.97905 12.8821L5.85061 16.3994C5.83718 16.7634 6.1278 17 6.42592 17C6.58686 17 6.75061 16.9309 6.86967 16.7756L9.00028 13.9974L11.1309 16.7756C11.25 16.9309 11.4134 17 11.5746 17C11.8728 17 12.1634 16.7634 12.15 16.3994L12.0215 12.8821L15.4143 13.6212C15.9568 13.7387 16.3271 13.0837 15.9565 12.6684L13.629 10.0577L16.6965 8.41202C17.1852 8.14983 17.0559 7.40575 16.5077 7.32887Z"
      stroke={status.new}
      strokeWidth="2"
    />
  </svg>
)
