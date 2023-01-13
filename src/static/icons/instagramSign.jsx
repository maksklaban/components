import React from 'react'

export const instagramSign = ({
  width,
  height,
  fill,
  theme: {
    color: { general },
  },
}) => (
  <svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none">
    <path
      d="M16.4881 10.0426C16.7984 10.0426 17.0499 9.79108 17.0499 9.4808C17.0499 9.17051 16.7984 8.91897 16.4881 8.91897C16.1778 8.91897 15.9263 9.17051 15.9263 9.4808C15.9263 9.79108 16.1778 10.0426 16.4881 10.0426Z"
      fill={fill || general.light}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.67319 12.9974C9.67319 11.1663 11.1662 9.67327 12.9973 9.67327C14.8285 9.67327 16.3215 11.1663 16.3215 12.9974C16.3215 14.8285 14.8285 16.3215 12.9973 16.3215C11.1662 16.3215 9.67319 14.8285 9.67319 12.9974ZM10.9815 12.9735C10.968 14.0883 11.8607 15.0028 12.9755 15.0163C14.0903 15.0299 15.0048 14.1372 15.0183 13.0224C15.0319 11.9076 14.1392 10.993 13.0244 10.9795C11.9096 10.966 10.995 11.8587 10.9815 12.9735Z"
      fill={fill || general.light}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.484 6.5H10.516C8.29992 6.5 6.5 8.29992 6.5 10.516V15.484C6.5 17.7001 8.29992 19.5 10.516 19.5H15.484C17.7001 19.5 19.5 17.7001 19.5 15.484V10.516C19.5 8.29992 17.7001 6.5 15.484 6.5ZM18.0538 15.484C18.0538 16.9042 16.899 18.0538 15.484 18.0538H10.516C9.09584 18.0538 7.94618 16.899 7.94618 15.484V10.516C7.94618 9.09584 9.10104 7.94618 10.516 7.94618H15.484C16.899 7.94618 18.0486 9.09584 18.0538 10.516V15.484Z"
      fill={fill || general.light}
    />
  </svg>
)