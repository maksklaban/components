import React from 'react'

export const list = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, main },
    },
  },
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2C1.44772 2 1 2.44772 1 3V4C1 4.55228 1.44772 5 2 5H20C20.5523 5 21 4.55228 21 4V3C21 2.44772 20.5523 2 20 2H2ZM2 7C1.44772 7 1 7.44772 1 8V9C1 9.55228 1.44772 10 2 10H20C20.5523 10 21 9.55228 21 9V8C21 7.44772 20.5523 7 20 7H2ZM1 13C1 12.4477 1.44772 12 2 12H20C20.5523 12 21 12.4477 21 13V14C21 14.5523 20.5523 15 20 15H2C1.44772 15 1 14.5523 1 14V13ZM2 17C1.44772 17 1 17.4477 1 18V19C1 19.5523 1.44772 20 2 20H20C20.5523 20 21 19.5523 21 19V18C21 17.4477 20.5523 17 20 17H2Z"
      fill={(fill === main && dark) || (fill === light && light) || fill}
    />
  </svg>
)
