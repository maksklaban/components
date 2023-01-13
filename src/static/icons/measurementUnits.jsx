import React from 'react'

export const measurementUnits = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, darker, main, lightest, lighter },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 24} height={height || 26} viewBox="0 0 24 26">
    <path
      d="M3 8.06998C3 5.04998 6.47 2.59998 10.75 2.59998C15.02 2.59998 18.49 5.04998 18.5 8.06998C18.5 8.07454 18.5 8.07909 18.5 8.08365L18.52 8.06995V13.7399H10.24L14.8283 10.598C13.8911 9.90991 12.4473 9.40998 10.75 9.40998C7.93 9.40998 5.8 10.79 5.55 12.12C3.99 11.12 3 9.67998 3 8.06998Z"
      fill="url(#paint0_linear_5346_245558)"
    />
    <path
      d="M10.74 13.5399L3 8.06995V13.9299C3 16.9499 6.47 19.3999 10.74 19.3999H20.93V13.5399H10.74Z"
      fill={(fill === main && lighter) || (fill === light && light) || fill}
    />
    <path
      d="M10.75 2.59998C6.47 2.59998 3 5.04998 3 8.06998C3 11.09 6.47 13.54 10.75 13.54C15.03 13.54 18.5 11.09 18.5 8.06998C18.5 5.04998 15.02 2.59998 10.75 2.59998ZM10.75 11.04C7.75 11.04 5.5 9.46998 5.5 8.06998C5.5 6.66998 7.74 5.09998 10.75 5.09998C13.76 5.09998 16 6.66998 16 8.06998C16 9.46998 13.76 11.04 10.75 11.04Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && `${light}D9`) ||
        (fill === light && lighter) ||
        fill
      }
    />
    <g filter="url(#filter0_d_5346_245558)">
      <path
        d="M5.49991 13.4299H5.50991C5.69769 13.4299 5.84991 13.5822 5.84991 13.7699V16.0899C5.84991 16.2777 5.69769 16.4299 5.50991 16.4299H5.49991C5.31214 16.4299 5.15991 16.2777 5.15991 16.0899V13.7699C5.15991 13.5822 5.31214 13.4299 5.49991 13.4299Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M9.64005 14.9299H9.65005C9.83783 14.9299 9.99005 15.0822 9.99005 15.2699V17.5899C9.99005 17.7777 9.83783 17.9299 9.65005 17.9299H9.64005C9.45227 17.9299 9.30005 17.7777 9.30005 17.5899V15.2699C9.30005 15.0822 9.45227 14.9299 9.64005 14.9299Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M13.7799 15.0999H13.7899C13.9777 15.0999 14.1299 15.2522 14.1299 15.4399V17.7599C14.1299 17.9477 13.9777 18.0999 13.7899 18.0999H13.7799C13.5922 18.0999 13.4399 17.9477 13.4399 17.7599V15.4399C13.4399 15.2522 13.5922 15.0999 13.7799 15.0999Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M17.9 15.0999H17.89C17.7023 15.0999 17.55 15.2522 17.55 15.4399V17.7599C17.55 17.9477 17.7023 18.0999 17.89 18.0999H17.9C18.0878 18.0999 18.24 17.9477 18.24 17.7599V15.4399C18.24 15.2522 18.0878 15.0999 17.9 15.0999Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M15.86 15.5999H15.85C15.6622 15.5999 15.51 15.7522 15.51 15.9399V17.2599C15.51 17.4477 15.6622 17.5999 15.85 17.5999H15.86C16.0478 17.5999 16.2 17.4477 16.2 17.2599V15.9399C16.2 15.7522 16.0478 15.5999 15.86 15.5999Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M11.7201 15.5999H11.7101C11.5223 15.5999 11.3701 15.7522 11.3701 15.9399V17.2599C11.3701 17.4477 11.5223 17.5999 11.7101 17.5999H11.7201C11.9079 17.5999 12.0601 17.4477 12.0601 17.2599V15.9399C12.0601 15.7522 11.9079 15.5999 11.7201 15.5999Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
      <path
        d="M7.57998 15.0099H7.56998C7.3822 15.0099 7.22998 15.1622 7.22998 15.3499V16.6699C7.22998 16.8577 7.3822 17.0099 7.56998 17.0099H7.57998C7.76776 17.0099 7.91998 16.8577 7.91998 16.6699V15.3499C7.91998 15.1622 7.76776 15.0099 7.57998 15.0099Z"
        fill={
          (fill === main && light) ||
          (wrapperColor && wrapperColor !== main && wrapperColor) ||
          (fill === light && main) ||
          fill
        }
      />
    </g>
    <path
      d="M19.3899 13.54C19.2795 13.54 19.1899 13.6295 19.1899 13.74V14.9C19.1899 15.0104 19.28 15.0985 19.3894 15.1141C20.0937 15.2146 20.6299 15.8402 20.6299 16.6C20.6299 17.3597 20.0937 17.9854 19.3894 18.0859C19.28 18.1015 19.1899 18.1895 19.1899 18.3V19.2C19.1899 19.3104 19.2795 19.4 19.3899 19.4H22.7999C22.9104 19.4 22.9999 19.3104 22.9999 19.2V13.74C22.9999 13.6295 22.9104 13.54 22.7999 13.54H19.3899ZM22.0399 17.26C22.0399 17.45 21.8899 17.6 21.6899 17.6C21.4899 17.6 21.3499 17.45 21.3499 17.26V15.95C21.3499 15.76 21.4999 15.6 21.6899 15.6C21.8899 15.6 22.0399 15.76 22.0399 15.95V17.26Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && `${wrapperColor}A8`) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <defs>
      <filter
        id="filter0_d_5346_245558"
        x="0.159912"
        y="10.4299"
        width="23.0801"
        height="14.67"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        {/*<feColorMatrix*/}
        {/*  in="SourceAlpha"*/}
        {/*  type="matrix"*/}
        {/*  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"*/}
        {/*  result="hardAlpha"*/}
        {/*/>*/}
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2.5" />
        {/*<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />*/}
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5346_245558" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5346_245558" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear_5346_245558"
        x1="3"
        y1="8.15139"
        x2="18.52"
        y2="8.15139"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          stopColor={
            (fill === main && dark) ||
            (wrapperColor && wrapperColor !== main && `${light}80`) ||
            (fill === light && dark) ||
            fill
          }
        />
        <stop
          offset="1"
          stopColor={
            (fill === main && darker) ||
            (wrapperColor && wrapperColor !== main && `${light}CC`) ||
            (fill === light && darker) ||
            fill
          }
        />
      </linearGradient>
    </defs>
  </svg>
)
