import React from 'react'

export const sizeL_XLsq = ({
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
      d="M3.59132 8.07999H2V13.9189H7.03918V12.8179H3.59132V8.07999ZM16.552 8.08H14.9607V13.9189H19.9999V12.8179H16.552V8.08ZM7.75056 10.6012H9.41834V11.4351H7.75056V10.6012ZM13.2719 13.9189L11.8622 11.892L10.4775 13.9189H8.92604L11.0864 10.9494L9.03447 8.07999H10.5693L11.9122 9.97347L13.2302 8.07999H14.6899L12.6546 10.8994L14.8317 13.9189H13.2719Z"
      fill={fill || dark}
    />
  </svg>
)
