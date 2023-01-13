import React from 'react'
import { withKnobs, select, number } from '@storybook/addon-knobs'

import TilesGrid from './TilesGrid'
import { LOREM_HALF, PLACE_CONTENT_GRID_OPTIONS, PLACE_ITEMS_GRID_OPTIONS } from '../../constants/propTypes'
import getElements from '../../utils/getElemetsForStories'
import Tile from '../Tile'
import { ScreenContext } from '../../../.storybook/preview'

export default {
  title: 'Organisms/TilesGrid',
  component: TilesGrid,
}

export const tilesGrid = () => (
  <TilesGrid
    screenContext={ScreenContext}
    itemsInRow={select('Items in a row', [1, 2, 3, 4], 3)}
    tiles={getElements(
      number('Number of tiles (just for testing)', 12),
      <Tile
        description={LOREM_HALF}
        title="Grid tile"
        imageSrc="https://media.nationalgeographic.org/assets/photos/000/284/28417.jpg"
      />
    )}
    alignContent={select('Align content', PLACE_CONTENT_GRID_OPTIONS, 'center')}
    justifyContent={select('Justify content', PLACE_CONTENT_GRID_OPTIONS, 'center')}
    alignItems={select('Align items', PLACE_ITEMS_GRID_OPTIONS, 'center')}
    justifyItems={select('Justify items', PLACE_ITEMS_GRID_OPTIONS, 'center')}
  />
)

tilesGrid.story = {
  decorators: [withKnobs],
}
