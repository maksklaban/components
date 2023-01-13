import React from 'react'
import { withKnobs, text, color, number } from '@storybook/addon-knobs'

import ListTableRow from './ListTableRow'

export default {
  title: 'Molecules/ListTableRow', // Molecules / Organisms
  component: ListTableRow,
}

export const main = () => (
  <ListTableRow fontWeight={number('Font-weight', undefined)} color={color('Color', '')}>
    {text('Text', 'Text')}
  </ListTableRow>
)

main.story = {
  decorators: [withKnobs],
}
