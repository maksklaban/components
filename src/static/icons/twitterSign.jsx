import React from 'react'

export const twitterSign = ({
  width,
  height,
  fill,
  theme: {
    color: { general },
  },
}) => (
  <svg width={width || 16} height={height || 13} viewBox="0 0 16 13">
    <path
      d="M14.3554 3.23983C14.3655 3.38201 14.3655 3.52422 14.3655 3.6664C14.3655 8.0031 11.066 13 5.03555 13C3.17767 13 1.45179 12.4617 0 11.5274C0.26397 11.5578 0.517752 11.568 0.791878 11.568C2.32485 11.568 3.73605 11.05 4.86296 10.1664C3.42133 10.1359 2.2132 9.19141 1.79694 7.8914C2.00001 7.92185 2.20304 7.94217 2.41626 7.94217C2.71067 7.94217 3.00511 7.90153 3.2792 7.83047C1.77666 7.52576 0.649721 6.20546 0.649721 4.61093V4.57032C1.08625 4.81407 1.59391 4.96641 2.13195 4.9867C1.24869 4.39763 0.670034 3.39217 0.670034 2.25466C0.670034 1.6453 0.832441 1.08671 1.11672 0.599203C2.73095 2.58983 5.15736 3.88981 7.87816 4.03202C7.82741 3.78827 7.79694 3.53438 7.79694 3.28047C7.79694 1.47264 9.25888 0 11.0761 0C12.0203 0 12.8731 0.396093 13.4721 1.03594C14.2132 0.893756 14.9238 0.619524 15.5533 0.243752C15.3096 1.00549 14.7919 1.64533 14.1117 2.05155C14.7716 1.98049 15.4112 1.79764 16 1.54376C15.5534 2.19373 14.995 2.77262 14.3554 3.23983Z"
      fill={fill || general.light}
    />
  </svg>
)