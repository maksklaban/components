import React from 'react'

export const banners = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { main },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <rect
      x="1"
      y="3"
      width="20"
      height="16"
      rx="1"
      fill={(fill === main && main) || (fill === light && light) || fill}
    />
    <path
      d="M9.24 12.7143H6.45429L5.92286 14H4.5L7.17429 8H8.54571L11.2286 14H9.77143L9.24 12.7143ZM8.80286 11.66L7.85143 9.36286L6.9 11.66H8.80286Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
    <path
      d="M11.4626 8H14.1884C14.8398 8 15.4141 8.12571 15.9112 8.37714C16.4141 8.62286 16.8026 8.97143 17.0769 9.42286C17.3569 9.87429 17.4969 10.4 17.4969 11C17.4969 11.6 17.3569 12.1257 17.0769 12.5771C16.8026 13.0286 16.4141 13.38 15.9112 13.6314C15.4141 13.8771 14.8398 14 14.1884 14H11.4626V8ZM14.1198 12.86C14.7198 12.86 15.1969 12.6943 15.5512 12.3629C15.9112 12.0257 16.0912 11.5714 16.0912 11C16.0912 10.4286 15.9112 9.97714 15.5512 9.64571C15.1969 9.30857 14.7198 9.14 14.1198 9.14H12.8512V12.86H14.1198Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
  </svg>
)
