import React from 'react'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'

import { LOREM_HALF } from '../../constants/propTypes'
import getElements from '../../utils/getElemetsForStories'
import Container from './Container'
import Grid from '../../molecules/Grid'
import VideoPlayer from '../../molecules/VideoPlayer'

export default {
  title: 'Atoms/Container',
  component: Container,
}

export const withGrid = () => (
  <Container>
    <Grid
      elements={getElements(number('Number of elements (just for testing)', 12), LOREM_HALF)}
      elementWidth={number('Element width (in columns; grid prop)', 2)}
      rowGap={text('Gap between additional rows (grid prop)', '15px')}
      style={{ wordBreak: 'break-all' }}
    />
  </Container>
)

export const withoutGrid = () => (
  <Container centered={boolean('Centered', false)}>
    <VideoPlayer url="https://www.youtube.com/watch?v=WHeOZLmXxn8&t=48s" height={450} width={900} />
  </Container>
)

withGrid.story = {
  decorators: [withKnobs],
}

withoutGrid.story = {
  decorators: [withKnobs],
}
