import React from 'react'

export const letter = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
    },
  },
}) => (
  <svg width={width || 32} height={height || 22} viewBox="0 0 32 22">
    <path
      opacity="0.6"
      d="M29.3634 21.5H2.63614C1.58232 21.5 0.727051 20.6447 0.727051 19.5909V2.40909C0.727051 1.35527 1.58232 0.5 2.63614 0.5H29.3634C30.4172 0.5 31.2725 1.35527 31.2725 2.40909V19.5909C31.2725 20.6447 30.4172 21.5 29.3634 21.5Z"
      fill={light}
    />
    <path
      opacity="0.5"
      d="M29.3634 21.4999H2.63614C1.56514 21.4999 0.727051 20.6618 0.727051 19.5908C0.727051 19.2873 0.872142 19.0009 1.11651 18.8215L15.4347 9.276C15.6027 9.15191 15.8012 9.09082 15.9998 9.09082C16.1983 9.09082 16.3969 9.15191 16.5649 9.276L30.8831 18.8215C31.1274 19.0009 31.2725 19.2873 31.2725 19.5908C31.2725 20.6618 30.4344 21.4999 29.3634 21.4999Z"
      fill={light}
    />
    <path
      d="M29.3634 0.5H2.63614C1.56514 0.5 0.727051 1.33809 0.727051 2.40909C0.727051 2.71264 0.872142 2.999 1.11651 3.17845L15.4423 13.4627C15.7745 13.7014 16.2231 13.7014 16.5553 13.4627L30.8811 3.17845C31.1274 2.999 31.2725 2.71264 31.2725 2.40909C31.2725 1.33809 30.4344 0.5 29.3634 0.5Z"
      fill={light}
    />
  </svg>
)