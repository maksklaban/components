import React from 'react'

export const sizeL_XL = ({
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
      d="M1.59132 0.0799866H0V5.91893H5.03918V4.81787H1.59132V0.0799866ZM14.552 0.08H12.9607V5.91894H17.9999V4.81788H14.552V0.08ZM5.75056 2.6012H7.41834V3.43509H5.75056V2.6012ZM11.2719 5.91893L9.86219 3.89198L8.47753 5.91893H6.92604L9.08645 2.94941L7.03447 0.0799866H8.56928L9.91224 1.97347L11.2302 0.0799866H12.6899L10.6546 2.89936L12.8317 5.91893H11.2719Z"
      fill={fill || dark}
    />
  </svg>
)
