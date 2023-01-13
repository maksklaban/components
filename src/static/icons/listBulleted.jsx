import React from 'react'

export const listBulleted = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, main, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <rect
      x="6"
      y="2"
      width="15"
      height="3"
      rx="1"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <rect
      x="6"
      y="7"
      width="15"
      height="3"
      rx="1"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <rect
      x="6"
      y="12"
      width="15"
      height="3"
      rx="1"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <rect
      x="6"
      y="17"
      width="15"
      height="3"
      rx="1"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <circle cx="2.5" cy="3.5" r="1.5" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="2.5" cy="8.5" r="1.5" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="2.5" cy="13.5" r="1.5" fill={(fill === main && main) || (fill === light && light) || fill} />
    <circle cx="2.5" cy="18.5" r="1.5" fill={(fill === main && main) || (fill === light && light) || fill} />
  </svg>
)
