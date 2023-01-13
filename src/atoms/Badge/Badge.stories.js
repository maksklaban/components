import React from 'react'
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs'

import Badge from './Badge'
import Icon from '../Icon'

export default {
  title: 'Atoms/Badge',
  component: Badge,
}

const anchorOriginArray = {
  TopRight: { vertical: 'top', horizontal: 'right' },
  TopLeft: { vertical: 'top', horizontal: 'left' },
  BottomRight: { vertical: 'bottom', horizontal: 'right' },
  BottomLeft: { vertical: 'bottom', horizontal: 'left' },
}

export const badge = () => (
  <Badge
    badgeContent={number('Badge content', 10)}
    anchorOrigin={select('Anchor origin', anchorOriginArray, anchorOriginArray.TopRight)}
    invisible={boolean('Invisible', false)}
  >
    <Icon name="shoppingCart" />
  </Badge>
)

badge.story = {
  decorators: [withKnobs],
}
