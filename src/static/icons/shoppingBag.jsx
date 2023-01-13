import React from 'react'

export const shoppingBag = ({
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
      d="M3.3 2.2H18.7C19.3075 2.2 19.8 2.69249 19.8 3.3V18.7C19.8 19.3075 19.3075 19.8 18.7 19.8H3.3C2.69249 19.8 2.2 19.3075 2.2 18.7V3.3C2.2 2.69249 2.69249 2.2 3.3 2.2ZM0 3.3C0 1.47746 1.47746 0 3.3 0H18.7C20.5225 0 22 1.47746 22 3.3V18.7C22 20.5225 20.5225 22 18.7 22H3.3C1.47746 22 0 20.5225 0 18.7V3.3ZM11 11C7.96243 11 5.5 8.04508 5.5 4.4H7.7C7.7 7.22266 9.536 8.8 11 8.8C12.464 8.8 14.3 7.22266 14.3 4.4H16.5C16.5 8.04508 14.0376 11 11 11Z"
      fill={fill || dark}
    />
  </svg>
)
