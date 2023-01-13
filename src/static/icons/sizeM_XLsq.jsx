import React from 'react'

export const sizeM_XLsq = ({
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
      d="M6.80339 10.4569L6.81095 13.7072H7.95893L7.94382 8.29001H6.93934L4.99079 11.6564L3.01204 8.29001H2V13.7072H3.14798V10.5265L4.69624 13.1345H5.24758L6.80339 10.4569ZM16.8012 8.29001H15.3248V13.7072H20V12.6857H16.8012V8.29001ZM8.63521 10.6291H10.1825V11.4028H8.63521V10.6291ZM13.7578 13.7072L12.45 11.8267L11.1653 13.7072H9.72588L11.7302 10.9522L9.82649 8.29001H11.2504L12.4964 10.0467L13.7191 8.29001H15.0734L13.1852 10.9057L15.205 13.7072H13.7578Z"
      fill={fill || dark}
    />
  </svg>
)
