import React from 'react'

export const careNonChlorineBleach = ({
  width,
  height,
  fill,
  theme: {
    color: {
      primary: { main },
    },
  },
}) => (
  <svg style={{ marginTop: -2 }} width={width || 28} height={height || 24} viewBox="0 0 28 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.364 21.6976C16.3024 21.5681 16.2896 21.4208 16.3279 21.2827L19.4663 16.0971C19.8631 15.4207 20.0953 14.7872 20.8845 14.4896C21.6578 16.5187 24.9179 20.4418 25.0217 21.8035L16.364 21.6976ZM9.6362 21.6976C9.60238 21.1384 10.0691 20.5703 10.3825 20.0923L16.2602 10.7244C16.6413 10.1292 16.6683 9.61062 17.347 9.25664C17.9422 9.58807 17.4755 9.17773 17.9287 9.96008L19.3829 12.3342C19.676 13.1594 18.2443 14.9473 17.8362 15.565C17.1328 16.6225 16.5331 17.7024 15.8995 18.7215C15.2975 19.6887 14.3979 20.913 13.9042 21.8103L9.6362 21.7021V21.6976ZM2.98285 21.7878C3.06401 20.8679 3.7652 20.063 4.22965 19.3776L13.2932 4.85114C13.7261 4.12515 13.6494 4.10711 14.08 3.93576C14.3438 4.1477 14.1657 3.9786 14.3776 4.23337C14.4137 4.27846 14.5851 4.52873 14.6031 4.5648C16.3301 7.36277 16.5173 7.14858 15.5568 8.56899L8.47733 20.0021C7.19221 22.1665 7.4357 21.8734 2.97834 21.7878H2.98285ZM0 23.3502L28 23.3976C27.9865 22.5385 18.8869 8.19247 17.6919 6.38652C16.9186 5.22089 14.7609 1.30012 14.0845 0.75C13.451 1.04535 12.5785 2.707 12.1907 3.37211C9.57758 7.88133 6.02206 13.0669 3.35937 17.5964C2.88816 18.3991 0.051857 22.516 0.00451018 23.3434L0 23.3502Z"
      fill={fill || main}
    />
  </svg>
)
