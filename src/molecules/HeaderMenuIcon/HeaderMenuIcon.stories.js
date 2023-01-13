import React from 'react'
import { withKnobs, color } from '@storybook/addon-knobs'

import HeaderMenuIcon from './HeaderMenuIcon'

export default {
  title: 'Molecules/HeaderMenuIcon',
  component: HeaderMenuIcon,
}

export const main = () => (
  <HeaderMenuIcon
    fill={color('Icon fill', '')}
    style={{ backgroundColor: color('Background color', 'black') }}
  />
)

main.story = {
  decorators: [withKnobs],
}
