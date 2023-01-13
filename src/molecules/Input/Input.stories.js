import React from 'react'
import Input from './Input'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/Input',
  component: Input,
}

export const input = () => (
  <div style={{ backgroundColor: `${boolean('Inverted', false) ? 'black' : 'white'}` }}>
    <Input
      variant={select('Input type', ['primary', 'secondary', 'transparent'], 'primary')}
      disabled={boolean('Disabled', false)}
      inverted={boolean('Inverted', false)}
      multiline={boolean('Multiline', false)}
      boldLabel={boolean('Bold label', false)}
      primaryFocusColor={boolean('Primary focused borders', false)}
      withBorder={boolean('With border', false)}
      placeholder="Enter your name"
      label={text('Label', '')}
      labelType={select('Label type', ['top', 'left'], 'top')}
      error={text('Error Label', '')}
    />
  </div>
)

input.story = {
  decorators: [withKnobs],
}
