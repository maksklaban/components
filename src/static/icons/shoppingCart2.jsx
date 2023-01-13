import React from 'react'

export const shoppingCart2 = (props) => (
  <svg width={props.width || 22} height={props.height || 20} viewBox="0 0 22 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.79166 0H0V2H3.2184L6.36272 15H19.3627L22 4H5.6552L4.79166 0ZM19.4561 6H6.21094L7.98353 13H17.7605L19.4561 6Z"
      fill={props.fill || 'white'}
    />
    <path
      d="M9.24944 20C10.354 20 11.2494 19.1046 11.2494 18C11.2494 16.8954 10.354 16 9.24944 16C8.14487 16 7.24944 16.8954 7.24944 18C7.24944 19.1046 8.14487 20 9.24944 20Z"
      fill={props.fill || 'white'}
    />
    <path
      d="M18.2494 18C18.2494 19.1046 17.354 20 16.2494 20C15.1449 20 14.2494 19.1046 14.2494 18C14.2494 16.8954 15.1449 16 16.2494 16C17.354 16 18.2494 16.8954 18.2494 18Z"
      fill={props.fill || 'white'}
    />
  </svg>
)
