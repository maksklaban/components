import React from 'react'
import Image from './Image'
import { withKnobs, select, text, number } from '@storybook/addon-knobs'

export default {
  title: 'Atoms/Image',
  component: Image,
}

export const image = () => (
  <Image
    alt={text('Alt', 'Alternative text')}
    height={number('Height', 176)}
    radius={text('Border radius', '4px')}
    src={text('URL', 'https://media.nationalgeographic.org/assets/photos/000/284/28417.jpg')}
    type={select('Type', ['square', 'vertical', 'horizontal', 'custom'], 'custom')}
    width={number('Width', 240)}
  />
)

image.story = {
  decorators: [withKnobs],
}
