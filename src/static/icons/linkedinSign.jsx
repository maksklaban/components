import React from 'react'

export const linkedinSign = ({
  width,
  height,
  fill,
  theme: {
    color: { general },
  },
}) => (
  <svg svg width={width || 26} height={height || 26} viewBox="0 0 26 26" fill="none">
    <path
      d="M8.07305 8.83359C7.20498 8.83359 6.5 8.12862 6.5 7.26055C6.5 6.39248 7.20498 5.6875 8.07305 5.6875C8.94112 5.6875 9.6461 6.39248 9.6461 7.26055C9.6461 8.12862 8.94112 8.83359 8.07305 8.83359Z"
      fill={fill || general.light}
    />
    <path d="M9.6461 18.8401H6.5V10.0436H9.6461V18.8401Z" fill={fill || general.light} />
    <path
      d="M19.5 18.8401H16.9063C16.9063 18.8401 16.9221 13.7106 16.9326 13.5527C16.9484 13.3949 16.7906 12.1007 15.4648 12.1007C14.139 12.1007 13.7234 13.0477 13.7234 13.7684V18.8401H11.2665V10.0436H13.6971V11.375C13.6971 11.375 14.0706 10.0331 16.3171 10.0331C18.169 10.0331 19.4947 10.7539 19.4947 12.7373C19.5 13.8368 19.5 18.8401 19.5 18.8401Z"
      fill={fill || general.light}
    />
  </svg>
)
