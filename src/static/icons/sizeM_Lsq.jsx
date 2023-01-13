import React from 'react'

export const sizeM_Lsq = ({
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
      d="M8.44658 14.5L8.43682 10.3L6.42643 13.76H5.71401L3.71338 10.39V14.5H2.22998V7.5H3.53771L6.09462 11.85L8.61249 7.5H9.91046L9.92998 14.5H8.44658ZM13.73 7.5H15.6377V13.18H19.7712V14.5H13.73V7.5ZM12.8033 10.5226H10.8039V11.5223H12.8033V10.5226Z"
      fill={fill || dark}
    />
  </svg>
)
