import React from 'react'

export const pagesMenu = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, darker, main, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      opacity={fill === light ? '0.5' : undefined}
      d="M11 4H20C20.5523 4 21 4.44772 21 5V20C21 20.5523 20.5523 21 20 21H8C7.44772 21 7 20.5523 7 20V8L11 4Z"
      fill={(fill === main && darker) || (fill === light && light) || fill}
    />
    <path
      opacity={fill === light ? '0.5' : undefined}
      d="M8 2H17C17.5523 2 18 2.44772 18 3V19C18 19.5523 17.5523 20 17 20H5C4.44772 20 4 19.5523 4 19V6L8 2Z"
      fill={(fill === main && dark) || (fill === light && light) || fill}
    />
    <path
      d="M5 1H14C14.5523 1 15 1.44772 15 2V18C15 18.5523 14.5523 19 14 19H2C1.44772 19 1 18.5523 1 18V5L5 1Z"
      fill={(fill === main && main) || (fill === light && light) || fill}
    />
    <path
      d="M5 1L1 5H4C4.55228 5 5 4.55228 5 4V1Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && `${wrapperColor}A8`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H4.5ZM4.5 9C4.22386 9 4 9.22386 4 9.5C4 9.77614 4.22386 10 4.5 10H11.5C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9H4.5ZM10 11.5C10 11.2239 10.2239 11 10.5 11H11.5C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12H10.5C10.2239 12 10 11.7761 10 11.5ZM8.5 13C8.22386 13 8 13.2239 8 13.5C8 13.7761 8.22386 14 8.5 14H11.5C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13H8.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H11.5C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4.5 11C4.22386 11 4 11.2239 4 11.5C4 11.7761 4.22386 12 4.5 12H8.5C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11H4.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H6.5C6.77614 13 7 13.2239 7 13.5C7 13.7761 6.77614 14 6.5 14H4.5C4.22386 14 4 13.7761 4 13.5ZM4.5 15C4.22386 15 4 15.2239 4 15.5C4 15.7761 4.22386 16 4.5 16H11.5C11.7761 16 12 15.7761 12 15.5C12 15.2239 11.7761 15 11.5 15H4.5Z"
      fill={
        (fill === main && light) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === light && main) ||
        fill
      }
    />
  </svg>
)
