import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import CardTableItem from './CardTableItem'

export default {
  title: 'Molecules/CardTableItem', // Molecules / Organisms
  component: CardTableItem,
}

export const main = ({ data = {}, columns = [] }) => <CardTableItem data={data} columns={columns} />

main.story = {
  decorators: [withKnobs],
}
