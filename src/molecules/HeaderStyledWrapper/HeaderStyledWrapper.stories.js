import React from 'react'
import { withKnobs, color, select } from '@storybook/addon-knobs'

import HeaderStyledWrapper from './HeaderStyledWrapper'
import Logo from '../Logo'
import UiLink from '../../atoms/UiLink'
import { PLACE_CONTENT_GRID_OPTIONS } from '../../constants/propTypes'

export default {
  title: 'Molecules/HeaderStyledWrapper',
  component: HeaderStyledWrapper,
}

export const main = () => (
  <HeaderStyledWrapper
    color={color('Color', 'transparent')}
    justifyContent={select('Justify content', PLACE_CONTENT_GRID_OPTIONS, 'space-between')}
  >
    <Logo name="kozaq" />
    <div>
      <UiLink type="menu" text="Our brands" style={{ marginRight: 24 }} />
      <UiLink type="menu" text="Become brand" />
    </div>
  </HeaderStyledWrapper>
)

main.story = {
  decorators: [withKnobs],
}
