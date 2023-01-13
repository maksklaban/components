import React from 'react'

export const sizeXXL = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.52937 12.07L7.22387 14.5H9.55927L11.2237 12.07L12.9182 14.5H14.7932L12.1762 10.88L14.6227 7.5H12.8681L11.2838 9.77L9.66956 7.5H7.17374L5.58953 9.77L3.97524 7.5H2.13035L4.5969 10.94L2 14.5H3.86495L5.52937 12.07ZM8.37393 8.26604L6.4819 10.88L8.39975 13.5329L10.2912 10.94L8.37393 8.26604Z"
      fill={fill || dark}
    />
    <path d="M14.8564 7.5H16.4807V13.18H20.0001V14.5H14.8564V7.5Z" fill={fill || dark} />
  </svg>
)
