import React from 'react'

export const tags = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      primary: { dark, main, lightest },
    },
  },
  wrapperColor,
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22">
    <path
      d="M19.3333 5.00001H15.1045C14.3082 4.99776 13.5441 5.31418 12.9825 5.87869L5.56832 13.2935C4.81056 14.0521 4.81056 15.2811 5.56832 16.0396L9.95976 20.4317C10.7183 21.1895 11.9473 21.1895 12.7058 20.4317L20.1213 13.0169C20.682 12.453 20.9978 11.6907 21 10.8955V6.66674C21 5.74625 20.2538 5.00001 19.3333 5.00001ZM17.3333 10.3335C16.4128 10.3335 15.6666 9.58727 15.6666 8.66678C15.6666 7.74629 16.4128 7.00006 17.3333 7.00006C18.2538 7.00006 19 7.74626 19 8.66675C19 9.58724 18.2538 10.3335 17.3333 10.3335Z"
      fill={
        (fill === main && dark) ||
        (wrapperColor && wrapperColor !== main && `${light}A8`) ||
        (fill === light && light) ||
        fill
      }
    />
    <path
      d="M15.3333 1.00001H11.1045C10.3082 0.997762 9.54409 1.31418 8.98248 1.87869L1.56832 9.29354C0.810558 10.0521 0.810558 11.2811 1.56832 12.0396L5.95976 16.4317C6.71828 17.1895 7.94731 17.1895 8.70582 16.4317L16.1213 9.01687C16.682 8.45299 16.9978 7.69072 17 6.89548V2.66674C17 1.74625 16.2538 1.00001 15.3333 1.00001ZM13.3333 6.33347C12.4128 6.33347 11.6666 5.58727 11.6666 4.66678C11.6666 3.74629 12.4128 3.00006 13.3333 3.00006C14.2538 3.00006 15 3.74626 15 4.66675C15 5.58724 14.2538 6.33347 13.3333 6.33347Z"
      fill={
        (fill === main && main) ||
        (wrapperColor && wrapperColor !== main && light) ||
        (fill === light && lightest) ||
        fill
      }
    />
  </svg>
)