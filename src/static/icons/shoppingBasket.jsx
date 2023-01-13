import React from 'react'

export const shoppingBasket = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general,
      primary: { dark, darker, main, light, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      d="M20.6099 7.01459L18.4254 18.34C18.3491 18.7348 18.0556 19.0146 17.7171 19.0146H4.28319C3.94465 19.0146 3.65116 18.7348 3.57488 18.34L1.39038 7.01459H20.6099Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && `${general.light}66`) ||
        (fill === general.light && general.light) ||
        fill
      }
    />
    <path
      d="M21.0079 7.5858H0.99234C0.59111 7.5858 0.265869 7.26056 0.265869 6.85933V3.71146C0.265869 3.31023 0.59111 2.98499 0.99234 2.98499H21.0079C21.4092 2.98499 21.7344 3.31023 21.7344 3.71146V6.85933C21.7343 7.26056 21.4091 7.5858 21.0079 7.5858Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && general.light) ||
        (fill === general.light && lightest) ||
        fill
      }
    />
    <path
      d="M21.6685 13.6106C21.2263 14.0528 20.5093 14.0528 20.0672 13.6106L12.7284 6.2719C12.2862 5.8297 12.2862 5.11274 12.7284 4.67061C13.1706 4.22841 13.8875 4.22841 14.3297 4.67061L21.6684 12.0093C22.1106 12.4516 22.1106 13.1685 21.6685 13.6106Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === general.light && light) ||
        fill
      }
    />
    <path
      d="M9.27168 4.67061C8.82948 4.22841 8.11252 4.22841 7.67039 4.67061L0.331652 12.0093C-0.110551 12.4516 -0.110551 13.1685 0.331652 13.6106C0.773855 14.0528 1.49074 14.0528 1.93294 13.6106L9.27168 6.2719C9.71388 5.8297 9.71388 5.11281 9.27168 4.67061Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && wrapperColor) ||
        (fill === general.light && light) ||
        fill
      }
    />
    <path
      d="M13.656 5.23297C13.4554 5.23297 13.2927 5.39563 13.2927 5.59621V5.60456C13.2927 5.80514 13.4554 5.9678 13.656 5.9678C13.8565 5.9678 14.0192 5.80514 14.0192 5.60456V5.59621C14.0192 5.39563 13.8565 5.23297 13.656 5.23297Z"
      fill={general.light}
    />
    <path
      d="M8.34395 5.23297C8.14337 5.23297 7.98071 5.39563 7.98071 5.59621V5.60456C7.98071 5.80514 8.14337 5.9678 8.34395 5.9678C8.54453 5.9678 8.70718 5.80514 8.70718 5.60456V5.59621C8.70718 5.39563 8.54453 5.23297 8.34395 5.23297Z"
      fill={general.light}
    />
  </svg>
)
