import React from 'react'

export const statusPaid = ({
  fill,
  width,
  height,
  theme: {
    color: {
      general: { light },
      status: { success },
    },
  },
}) => (
  <svg width={width || 13} height={height || 18} viewBox="0 0 13 18" fill={fill || light}>
    <path
      d="M8.08744 7.4209L6.40873 6.9375H6.88337C7.0259 6.9375 7.16546 6.98076 7.2774 7.05567L7.27739 7.05569L7.28187 7.05865C7.86241 7.44267 8.60521 7.33711 9.06894 6.8903C9.06924 6.89001 9.06954 6.88972 9.06985 6.88942L10.0334 5.96291C10.0338 5.96252 10.0342 5.96213 10.0346 5.96174C10.7064 5.3178 10.5698 4.2884 9.90074 3.77677C9.30969 3.32145 8.61923 3.0066 7.88893 2.85447V2.4375C7.88893 1.6296 7.22606 1 6.44439 1H5.55531C4.77364 1 4.11077 1.6296 4.11077 2.4375V2.85718C2.22362 3.29921 0.827048 5.05462 1.01712 7.11229L1.01714 7.11249C1.1779 8.8491 2.50298 10.1727 4.06427 10.6226L4.06436 10.6226L5.59137 11.0625H5.11632C4.97379 11.0625 4.83423 11.0192 4.72229 10.9443L4.71783 10.9414C4.1372 10.5573 3.39428 10.6629 2.93056 11.1099C2.93033 11.1101 2.93009 11.1103 2.92985 11.1106L1.96627 12.0371C1.96591 12.0374 1.96555 12.0378 1.9652 12.0381C1.29324 12.682 1.42983 13.7116 2.09895 14.2232C2.69001 14.6785 3.38046 14.9934 4.11077 15.1455V15.5625C4.11077 16.3704 4.77364 17 5.55531 17H6.44439C7.22606 17 7.88893 16.3704 7.88893 15.5625V15.1144C9.1644 14.7975 10.2981 13.9156 10.7681 12.591L10.7682 12.5909C11.5702 10.3293 10.2147 8.03234 8.08806 7.42108C8.08801 7.42107 8.08797 7.42105 8.08792 7.42104C8.08776 7.42099 8.0876 7.42095 8.08744 7.4209Z"
      stroke={success}
      strokeWidth="2"
    />
  </svg>
)
