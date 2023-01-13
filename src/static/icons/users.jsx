import React from 'react'

export const users = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { main, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <circle
      cx="11"
      cy="11"
      r="7.5"
      stroke={(wrapperColor && wrapperColor !== main && `${light}D9`) || lightest || fill}
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
    <circle cx="11" cy="11" r="2" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="11" cy="18" r="4" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="18" cy="11" r="4" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="11" cy="4" r="4" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="4" cy="11" r="4" fill={(fill === main && main) || (fill === light && light) || fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 18C11.7364 18 12.3333 17.4031 12.3333 16.6667C12.3333 15.9303 11.7364 15.3333 11 15.3333C10.2636 15.3333 9.66667 15.9303 9.66667 16.6667C9.66667 17.4031 10.2636 18 11 18ZM10 18.6667C9.44772 18.6667 9 19.1144 9 19.6667V20.1667C9 20.4428 9.22386 20.6667 9.5 20.6667H12.5C12.7761 20.6667 13 20.4428 13 20.1667V19.6667C13 19.1144 12.5523 18.6667 12 18.6667H10Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 11C18.7364 11 19.3333 10.4031 19.3333 9.66668C19.3333 8.9303 18.7364 8.33334 18 8.33334C17.2636 8.33334 16.6667 8.9303 16.6667 9.66668C16.6667 10.4031 17.2636 11 18 11ZM17 11.6667C16.4477 11.6667 16 12.1144 16 12.6667V13.1667C16 13.4428 16.2239 13.6667 16.5 13.6667H19.5C19.7761 13.6667 20 13.4428 20 13.1667V12.6667C20 12.1144 19.5523 11.6667 19 11.6667H17Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4.00001C11.7364 4.00001 12.3333 3.40306 12.3333 2.66668C12.3333 1.9303 11.7364 1.33334 11 1.33334C10.2636 1.33334 9.66667 1.9303 9.66667 2.66668C9.66667 3.40306 10.2636 4.00001 11 4.00001ZM10 4.66668C9.44772 4.66668 9 5.11439 9 5.66668V6.16668C9 6.44282 9.22386 6.66668 9.5 6.66668H12.5C12.7761 6.66668 13 6.44282 13 6.16668V5.66668C13 5.11439 12.5523 4.66668 12 4.66668H10Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11C4.73638 11 5.33333 10.4031 5.33333 9.66668C5.33333 8.9303 4.73638 8.33334 4 8.33334C3.26362 8.33334 2.66667 8.9303 2.66667 9.66668C2.66667 10.4031 3.26362 11 4 11ZM3 11.6667C2.44772 11.6667 2 12.1144 2 12.6667V13.1667C2 13.4428 2.22386 13.6667 2.5 13.6667H5.5C5.77614 13.6667 6 13.4428 6 13.1667V12.6667C6 12.1144 5.55228 11.6667 5 11.6667H3Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
  </svg>
)
