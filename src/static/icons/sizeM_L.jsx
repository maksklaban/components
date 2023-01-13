import React from 'react'

export const sizeM_L = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { dark },
    },
  },
}) => (
  <svg width={width || 18} height={height || 8} viewBox="0 0 18 8">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.44658 7.5L6.43682 3.3L4.42643 6.76H3.71401L1.71338 3.39V7.5H0.22998V0.5H1.53771L4.09462 4.85L6.61249 0.5H7.91046L7.92998 7.5H6.44658ZM11.73 0.5H13.6377V6.18H17.7712V7.5H11.73V0.5ZM10.8033 3.52259H8.80392V4.5223H10.8033V3.52259Z"
      fill={fill || dark}
    />
  </svg>
)
