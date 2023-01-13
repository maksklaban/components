import React from 'react'
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs'

import Switch from './Switch'

export default {
  title: 'Molecules/Switch',
  component: Switch,
}

export const main = () => (
  <Switch
    disabled={boolean('Disabled', false)}
    readOnly={boolean('Read only', false)}
    label={text('Label', 'Switch label')}
  />
)

main.story = {
  decorators: [withKnobs],
}
