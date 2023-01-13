import React from 'react'

export const upload = ({
  fill,
  theme: {
    color: {
      general: { light },
    },
  },
  width,
  height,
}) => (
  <svg width={width || 16} height={height || 16} viewBox="0 0 16 16">
    <path
      d="M7 10.9861C7 11.5384 7.44772 11.9861 8 11.9861C8.55228 11.9861 9 11.5384 9 10.9861V3.82831L12.2428 7.07107L13.657 5.65686L8.00012 0L2.34326 5.65686L3.75748 7.07107L7 3.82855V10.9861Z"
      fill={fill || light}
    />
    <path
      d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z"
      fill={fill || light}
    />
  </svg>
)
