import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import ListItem from './ListItem'

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
}

export const listItem = () => <ListItem text={text('Text', 'List item')} />

listItem.story = {
  decorators: [withKnobs],
}
