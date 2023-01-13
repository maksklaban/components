import React from 'react'

export const youtubeSign = ({
  width,
  height,
  fill,
  theme: {
    color: { general },
  },
}) => (
  <svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none">
    <path
      fill-rule="evenodd"
      clipRule="evenodd"
      d="M18.0864 8.7286C18.6432 8.87856 19.0823 9.31754 19.2322 9.87444C19.5107 10.8917 19.4999 13.012 19.4999 13.012C19.4999 13.012 19.4999 15.1215 19.2323 16.1388C19.0823 16.6956 18.6433 17.1346 18.0864 17.2845C17.0691 17.5523 13 17.5523 13 17.5523C13 17.5523 8.94146 17.5523 7.91354 17.2739C7.35663 17.1239 6.91765 16.6849 6.76769 16.128C6.5 15.1215 6.5 13.0012 6.5 13.0012C6.5 13.0012 6.5 10.8917 6.76769 9.87444C6.91755 9.31764 7.36734 8.86785 7.91344 8.71799C8.93074 8.4502 12.9999 8.4502 12.9999 8.4502C12.9999 8.4502 17.0691 8.4502 18.0864 8.7286ZM15.0881 13.0013L11.7043 14.9502V11.0523L15.0881 13.0013Z"
      fill={fill || general.light}
    />
  </svg>
)
