import React from 'react'

export const creditCard = (props) => (
  <svg
    enableBackground="new 0 0 512 512"
    viewBox="0 0 512 512"
    width={props.width || 512}
    height={props.height || 512}
    fill={props.fill}
  >
    <path d="m512 163v-27c0-30.928-25.072-56-56-56h-400c-30.928 0-56 25.072-56 56v27c0 2.761 2.239 5 5 5h502c2.761 0 5-2.239 5-5z" />
    <path d="m0 205v171c0 30.928 25.072 56 56 56h400c30.928 0 56-25.072 56-56v-171c0-2.761-2.239-5-5-5h-502c-2.761 0-5 2.239-5 5zm128 131c0 8.836-7.164 16-16 16h-16c-8.836 0-16-7.164-16-16v-16c0-8.836 7.164-16 16-16h16c8.836 0 16 7.164 16 16z" />
  </svg>
)
