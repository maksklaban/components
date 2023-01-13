import React from 'react'
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'

import Menu from './Menu'
import Grid from '../../molecules/Grid'
import GridItem from '../../atoms/GridItem'
import { MENU_ALIGN_OPTIONS } from '../../constants/propTypes'

export default {
  title: 'Organisms/Menu',
  component: Menu,
}

export const menu = () => {
  const inverted = boolean('Inverted', false)
  return (
    <Grid>
      <GridItem
        cols={text("Item width in columns or 'end' (span item to the end)", 3)}
        colStart={number('Number of column to start item from', undefined)}
        justifySelf="stretch"
        style={inverted ? { backgroundColor: 'black', height: 22 } : {}}
      >
        <Menu
          withGrid
          menuAlign={select('Menu align', MENU_ALIGN_OPTIONS, 'left')}
          inverted={inverted}
          link={text('Link text', '')}
          items={[
            { id: '1', name: 'One' },
            { id: '2', name: 'Two' },
            { id: '3', name: 'Three' },
            { id: '4', name: 'Four' },
          ]}
        />
      </GridItem>
    </Grid>
  )
}

menu.story = {
  decorators: [withKnobs],
}
