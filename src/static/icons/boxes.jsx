import React from 'react'

export const boxes = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, darker, main, lighter, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      d="M1.59692 4.11291C1.59692 3.83677 1.82078 3.61292 2.09692 3.61292H10.6776C10.9537 3.61292 11.1776 3.83677 11.1776 4.11292V5.74195H1.59692V4.11291Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      opacity="0.75"
      d="M2.30664 5.74194H11.1776V21H2.30664V5.74194Z"
      fill={(fill === main && darker) || (fill === light && light) || light}
    />
    <path
      d="M7.09692 8.37097C7.09692 8.09483 7.32078 7.87097 7.59692 7.87097H20.0808C20.3569 7.87097 20.5808 8.09483 20.5808 8.37097V10H7.09692V8.37097Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      d="M7.80664 10H19.8712V21H7.80664V10Z"
      fill={
        (fill === main && darker) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && light) ||
        light
      }
    />
    <path
      d="M10.2905 14.0484C10.2905 13.7723 10.5144 13.5484 10.7905 13.5484H21.1454C21.4215 13.5484 21.6454 13.7723 21.6454 14.0484V15.6774H10.2905V14.0484Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && 'transparent') ||
        (fill === light && lighter) ||
        fill
      }
    />
    <path
      d="M10.8228 15.6774H21.1131V20C21.1131 20.5523 20.6654 21 20.1131 21H10.8228V15.6774Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && 'transparent') ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      d="M14.9033 11.0645H12.7743C12.5783 11.0645 12.4194 11.2234 12.4194 11.4194C12.4194 11.6153 12.5783 11.7742 12.7743 11.7742H14.9033C15.0993 11.7742 15.2581 11.6153 15.2581 11.4194C15.2581 11.2234 15.0993 11.0645 14.9033 11.0645Z"
      fill={(wrapperColor && wrapperColor !== main && wrapperColor) || main}
    />
    <path
      d="M0.35498 15.1129C0.35498 14.8368 0.578838 14.6129 0.85498 14.6129H7.30659C7.58274 14.6129 7.80659 14.8368 7.80659 15.1129V16.3871H0.35498V15.1129Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && 'transparent') ||
        (fill === light && lighter) ||
        fill
      }
    />
    <path
      d="M0.35498 16.3871H7.80659V21H1.35498C0.802695 21 0.35498 20.5523 0.35498 20V16.3871Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && 'transparent') ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      opacity="0.65"
      d="M11.1775 2.7742H18.2743V7.87097H11.1775V2.7742Z"
      fill={(fill === main && darker) || (fill === light && light) || light}
    />
    <path
      d="M10.6453 1.5C10.6453 1.22386 10.8691 1 11.1453 1H18.3066C18.5827 1 18.8066 1.22386 18.8066 1.5V2.77419H10.6453V1.5Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
    <path
      d="M16.8549 16.7419H15.0807C14.8847 16.7419 14.7258 16.9008 14.7258 17.0968C14.7258 17.2928 14.8847 17.4516 15.0807 17.4516H16.8549C17.0508 17.4516 17.2097 17.2928 17.2097 17.0968C17.2097 16.9008 17.0508 16.7419 16.8549 16.7419Z"
      fill={(fill === main && darker) || (fill === light && light) || light}
    />
  </svg>
)
