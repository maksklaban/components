import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import Button from './Button'

export default {
  title: 'Molecules/Button',
  component: Button,
}

export const primary = () => (
  <Button
    variant="primary"
    disabled={boolean('Disabled', false)}
    size={select('Size', ['small', 'medium', 'large'], 'medium')}
  >
    Primary
  </Button>
)

export const secondary = () => (
  <Button
    variant="secondary"
    disabled={boolean('Disabled', false)}
    size={select('Size', ['small', 'medium', 'large'], 'medium')}
  >
    Secondary
  </Button>
)

export const bordered = () => (
  <Button
    variant="bordered"
    disabled={boolean('Disabled', false)}
    size={select('Size', ['small', 'medium', 'large'], 'medium')}
  >
    Secondary
  </Button>
)

primary.story = {
  decorators: [withKnobs],
}

secondary.story = {
  decorators: [withKnobs],
}
