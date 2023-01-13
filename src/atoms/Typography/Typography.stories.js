import React from 'react'
import { withKnobs, select, text, color, number } from '@storybook/addon-knobs'

import Typography from './Typography'
import { LOREM_1 } from '../../constants/propTypes'

export default {
  title: 'Atoms/Typography',
  component: Typography,
}

export const main = () => (
  <Typography
    fontWeight={number('Font-weight', undefined)}
    margin={text('Margin', '10px')}
    type={select('Type (font-size, HTML tag)', ['h1', 'h2', 'h3', 'caption1', 'body1', 'body2'], 'body1')}
    component={select('Component (HTML tag)', ['', 'h5', 'p', 'div', 'article'], '')}
    color={color('Color', '')}
    align={select('Text align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit')}
  >
    {text('Text', LOREM_1)}
  </Typography>
)

main.story = {
  decorators: [withKnobs],
}
