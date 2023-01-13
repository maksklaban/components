import React from 'react'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'

import UiLink from './UiLink'

export default {
  title: 'Atoms/UiLink',
  component: UiLink,
}

export const mainWithTextProp = () => (
  <UiLink
    color={select('Color', ['general.gray4', 'primary.main', 'general.dark'], 'general.dark')}
    disabled={boolean('Disabled', false)}
    text={text('Link text', 'Big link')}
  />
)

export const smallerWithATagChild = () => (
  <UiLink
    type="smaller"
    color={select('Color', ['general.gray4', 'primary.main', 'general.dark'], 'general.dark')}
    disabled={boolean('Disabled', false)}
  >
    <a>Small link</a>
  </UiLink>
)

export const menuWithATagChild = () => {
  const inverted = boolean('Inverted', false)
  return (
    <div style={inverted ? { backgroundColor: 'black', height: 25 } : {}}>
      <UiLink
        type="menu"
        themeColor={select('Color', ['general.gray4', 'primary.main', 'general.dark'], 'general.dark')}
        selected={boolean('Selected', false)}
        disabled={boolean('Disabled', false)}
        inverted={inverted}
        hovered={boolean('Hovered (menu opened)', false)}
      >
        <a>Menu link</a>
      </UiLink>
    </div>
  )
}

mainWithTextProp.story = {
  decorators: [withKnobs],
}

smallerWithATagChild.story = {
  decorators: [withKnobs],
}

menuWithATagChild.story = {
  decorators: [withKnobs],
}
