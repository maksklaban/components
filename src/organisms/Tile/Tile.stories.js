import React from 'react'
import { number, select, text, withKnobs } from '@storybook/addon-knobs'

import Tile from './Tile'
import { LOREM_1 } from '../../constants/propTypes'

export default {
  title: 'Organisms/Tile',
  component: Tile,
}

export const tile = () => (
  <Tile
    description={text('Description', LOREM_1)}
    imageSrc={text('Image URL', 'https://media.nationalgeographic.org/assets/photos/000/284/28417.jpg')}
    imageType={select('Image type', ['square', 'vertical', 'horizontal'], 'square')}
    rating={number('Rating', 4)}
    ratingType={select('Rating type', ['full', 'short'], 'full')}
    title={text('Title', 'Title')}
    width={number('Width', 400)}
  />
)

tile.story = {
  decorators: [withKnobs],
}
