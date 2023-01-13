import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Conveyor from './Conveyor'
import { LOREM_HALF } from '../../constants/propTypes'
import getElements from '../../utils/getElemetsForStories'
import Tile from '../Tile'

export default {
  title: 'Organisms/Conveyor',
  component: Conveyor,
}

export const conveyor = () => (
  <Conveyor
    style={{ marginTop: 20 }}
    items={getElements(
      number('Number of items (just for testing)', 16),
      <Tile
        style={{ marginLeft: 20 }}
        width={number('Item width (just for testing)', 200)}
        description={LOREM_HALF}
        title="Conveyor tile"
        imageSrc="https://media.nationalgeographic.org/assets/photos/000/284/28417.jpg"
      />
    )}
  />
)

conveyor.story = {
  decorators: [withKnobs],
}
