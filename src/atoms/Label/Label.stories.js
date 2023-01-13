import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Label from './Label'

export default {
  title: 'Atoms/Label', // Molecules / Organisms
  component: Label,
}

export const main = () => (
  <Label type={select('Type', ['bigger', 'smaller', 'uppercase'], 'bigger')}>{text('Text', 'Text')}</Label>
)

main.story = {
  decorators: [withKnobs],
}
