import React from 'react'

export const merchantsTent = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, darker, main, light: primaryLight, lighter, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      d="M1.28906 8.54584V19.7119C1.28906 20.2642 1.73678 20.7119 2.28906 20.7119H19.7109C20.2632 20.7119 20.7109 20.2642 20.7109 19.7119V8.54584H1.28906Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && `${light}B3`) ||
        (fill === light && light) ||
        fill
      }
    />
    <path
      d="M8.25 6.7363L11 10.4424C11 11.9611 12.2312 13.1924 13.75 13.1924C15.2688 13.1924 16.5 11.9611 16.5 10.4424L19.25 6.7363H8.25Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && dark) ||
        fill
      }
    />
    <path
      d="M16.5 6.7363V10.4424C16.5 11.9611 17.7312 13.1924 19.25 13.1924C20.7688 13.1924 22 11.9611 22 10.4424V9.31442L16.5 6.7363Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lighter) ||
        fill
      }
    />
    <path
      d="M2.75 6.7363L5.5 10.4424C5.5 11.9611 6.73123 13.1924 8.25 13.1924C9.76877 13.1924 11 11.9611 11 10.4424V6.7363H2.75Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lighter) ||
        fill
      }
    />
    <path
      d="M0 9.31442V10.4424C0 11.9611 1.23123 13.1924 2.75 13.1924C4.26877 13.1924 5.5 11.9611 5.5 10.4424V6.7363L0 9.31442Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && dark) ||
        fill
      }
    />
    <path
      d="M3.5132 1.29001C3.08804 1.29001 2.70937 1.55884 2.56915 1.96021L0 9.31442H5.5L8.25 5.30222L6.90164 1.29001H3.5132Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && primaryLight) ||
        fill
      }
    />
    <path
      d="M22 9.31442L19.4309 1.96021C19.2906 1.55884 18.912 1.29001 18.4868 1.29001H15.0984L13.75 5.30222L16.5 9.31442H22Z"
      fill={
        (fill === main && lighter) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      d="M15.0984 1.29001H11L8.25 5.30222L11 9.31442H16.5L15.0984 1.29001Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && primaryLight) ||
        fill
      }
    />
    <path
      d="M6.90164 1.29001L5.5 9.31442H11V1.29001H6.90164Z"
      fill={
        (fill === main && lighter) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
  </svg>
)
