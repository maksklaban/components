import React from 'react'
import { number, select, text, withKnobs } from '@storybook/addon-knobs'

import Grid from './Grid'
import GridItem from '../../atoms/GridItem'
import { LOREM_HALF, PLACE_CONTENT_GRID_OPTIONS, PLACE_ITEMS_GRID_OPTIONS } from '../../constants/propTypes'
import getElements from '../../utils/getElemetsForStories'
import Header from '../HeaderStyledWrapper'
import Logo from '../Logo'

export default {
  title: 'Molecules/Grid',
  component: Grid,
}

export const withElementsArray = () => (
  <Grid
    elements={getElements(number('Number of elements (just for testing)', 12), LOREM_HALF)}
    elementWidth={number('Element width (in columns)', 2)}
    rowGap={text('Gap between additional rows', '15px')}
    alignContent={select('Align content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    justifyContent={select('Justify content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    alignItems={select('Align items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    justifyItems={select('Justify items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    style={{ wordBreak: 'break-all' }}
  />
)

export const withChildrenAndSameGridItemProps = () => (
  <Grid
    alignContent={select('Align content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    justifyContent={select('Justify content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    alignItems={select('Align items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    justifyItems={select('Justify items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    rowGap={text('Gap between additional rows', '15px')}
  >
    {getElements(
      number('Number of items (just for testing)', 3),
      <GridItem
        cols={text('Item width in columns', 3)}
        colStart={number('Number of column to start item from', null)}
        style={{ width: number('Text width (just for testing)', 200) }}
      >
        {LOREM_HALF}
      </GridItem>
    )}
  </Grid>
)

export const withPassedHeaderComponent = () => (
  <Grid
    component={Header}
    alignContent={select('Align content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    justifyContent={select('Justify content', PLACE_CONTENT_GRID_OPTIONS, 'start')}
    alignItems={select('Align items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    justifyItems={select('Justify items', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    rowGap={text('Gap between additional rows', '15px')}
  >
    <GridItem
      cols={text('Logo width in columns', 3)}
      colStart={number('Number of column to start logo from', null)}
      alignSelf={select('Align self for logo', PLACE_ITEMS_GRID_OPTIONS, 'center')}
      justifySelf={select('Justify self for logo', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    >
      <Logo name={'kozaq'} />
    </GridItem>
    <GridItem
      cols={text('Text width in columns', 3)}
      colStart={number('Number of column to start text from', null)}
      alignSelf={select('Align self for text', PLACE_ITEMS_GRID_OPTIONS, 'start')}
      justifySelf={select('Justify self for text', PLACE_ITEMS_GRID_OPTIONS, 'start')}
    >
      {LOREM_HALF}
    </GridItem>
  </Grid>
)

withChildrenAndSameGridItemProps.story = {
  decorators: [withKnobs],
}

withPassedHeaderComponent.story = {
  decorators: [withKnobs],
}

withElementsArray.story = {
  decorators: [withKnobs],
}
