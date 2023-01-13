import React from 'react'

export const careMachineWashCold = ({
  width,
  height,
  fill,
  theme: {
    color: {
      primary: { main },
    },
  },
}) => (
  <svg width={width || 22} height={height || 22} viewBox="0 0 22 22" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6049 10.5682C8.24342 11.1556 9.16189 14.4586 11.4855 13.9355C13.4342 13.4954 13.0592 9.96956 10.6049 10.5682Z"
      fill={fill || main}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.90933 7.80072C3.08164 6.85785 5.09969 6.48271 6.67058 7.2983C7.78261 7.87776 9.99995 10.1738 13.604 8.43879C14.3442 8.08375 14.6457 7.60143 15.3825 7.26648C16.8898 6.55975 19.0435 6.83273 20.04 7.82585C20.04 8.67326 19.2679 11.0229 19.0351 11.9875C18.8358 12.8249 18.3435 15.5162 17.7858 15.9181H3.9726C3.68287 15.0557 1.92943 8.44047 1.90431 7.80072H1.90933ZM0.015207 4.66563C-0.152266 5.54319 1.11216 9.99127 1.42031 11.0782C1.63802 11.8452 2.70483 16.9397 3.1771 17.1223C3.51205 17.2546 17.2365 17.1759 18.8308 17.1641C19.3868 16.4943 20.2962 12.2455 20.5642 11.0949C20.817 10.0164 21.1336 9.04002 21.3831 7.98494C21.5606 7.23298 22.7731 3.96559 21.2156 4.535C20.9058 4.6472 20.9025 4.81301 20.8154 5.12618C20.6479 5.68889 20.6479 6.00373 20.3682 6.39394C14.4179 4.01583 14.6641 7.73373 11.0651 7.77895C7.92328 7.81412 6.66556 3.93712 1.68658 6.37552C0.953053 5.51806 1.51912 3.99406 0.0302841 4.66563H0.015207Z"
      fill={fill || main}
    />
  </svg>
)