import React from 'react'
import { number, withKnobs } from '@storybook/addon-knobs'

import getElements from '../../utils/getElemetsForStories'

import List from './List'
import Grid from '../Grid'
import GridItem from '../../atoms/GridItem'

export default {
  title: 'Molecules/List',
  component: List,
}

export const list = () => (
  <Grid>
    <GridItem cols={number('List width in columns (grid item prop)', 3)} justifySelf="stretch">
      <List items={getElements(5, 'List item')} />
    </GridItem>
  </Grid>
)

list.story = {
  decorators: [withKnobs],
}
