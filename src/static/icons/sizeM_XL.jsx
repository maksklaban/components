import React from 'react'

export const sizeM_XL = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 18} height={height || 6} viewBox="0 0 18 6">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.80339 2.45689L4.81095 5.70721H5.95893L5.94382 0.290009H4.93934L2.99079 3.65641L1.01204 0.290009H0V5.70721H1.14798V2.52654L2.69624 5.13454H3.24758L4.80339 2.45689ZM14.8012 0.290009H13.3248V5.70721H18V4.68568H14.8012V0.290009ZM6.63521 2.62915H8.18254V3.40281H6.63521V2.62915ZM11.7578 5.70721L10.45 3.82667L9.16531 5.70721H7.72588L9.73025 2.95218L7.82649 0.290009H9.25044L10.4964 2.04673L11.7191 0.290009H13.0734L11.1852 2.90575L13.205 5.70721H11.7578Z"
      fill={fill || dark}
    />
  </svg>
)