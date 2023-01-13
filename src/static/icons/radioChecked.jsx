import React from 'react'

export const radioChecked = ({ width, height, checkboxColor, fill, theme: { color } }) => (
  <svg width={width || 18} height={height || 19} viewBox="0 0 18 19" style={{ margin: '0px -1px -3px -1px' }}>
    <circle cx="9" cy="8" r="8" fill={fill || color.primary.main} />
    <g>
      <circle cx="8.99984" cy="8.00008" r="3.33333" fill={checkboxColor || color.general.light} />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.666504"
        y="1.66675"
        width="16.6665"
        height="16.6667"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.533333 0 0 0 0 0 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

{
  /*<g filter="url(#filter0_d)">*/
}
