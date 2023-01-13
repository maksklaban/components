import React from 'react'

export const profile = ({ fill, width, height, theme: { color } }) => (
  <svg width={width || 56} height={height || 56} viewBox="0 0 56 56">
    <path
      d="M53 9C53 12.3137 50.3137 15 47 15C43.6863 15 41 12.3137 41 9C41 5.68629 43.6863 3 47 3C50.3137 3 53 5.68629 53 9Z"
      fill={fill || '#8ED63B'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C32.8221 0 37.3595 1.21896 41.3208 3.36555C39.8862 4.81146 39 6.80223 39 9C39 13.4183 42.5817 17 47 17C49.1978 17 51.1885 16.1138 52.6345 14.6792C54.781 18.6405 56 23.1779 56 28Z"
      fill={color.primary.main}
    />
    <g filter="url(#filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8182 19.2727C33.8182 22.486 31.2133 25.0909 28 25.0909C24.7867 25.0909 22.1818 22.486 22.1818 19.2727C22.1818 16.0594 24.7867 13.4545 28 13.4545C31.2133 13.4545 33.8182 16.0594 33.8182 19.2727ZM30.9091 19.2727C30.9091 20.8794 29.6066 22.1818 28 22.1818C26.3933 22.1818 25.0909 20.8794 25.0909 19.2727C25.0909 17.6661 26.3933 16.3636 28 16.3636C29.6066 16.3636 30.9091 17.6661 30.9091 19.2727Z"
        fill="white"
      />
      <path
        d="M33.8182 30.9091C33.8182 30.1058 33.1669 29.4545 32.3636 29.4545H23.6363C22.833 29.4545 22.1818 30.1058 22.1818 30.9091V42.5454H19.2727V30.9091C19.2727 28.4991 21.2264 26.5454 23.6363 26.5454H32.3636C34.7736 26.5454 36.7272 28.4991 36.7272 30.9091V42.5454H33.8182V30.9091Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="7"
        y="9"
        width="42"
        height="42"
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
        {/*<feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.533333 0 0 0 0 0 0 0 0 1 0" />*/}
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)
