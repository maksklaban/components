import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Tag from './Tag'

export default {
  title: 'Atoms/Tag',
  component: Tag,
}

export const tag = () => (
  <Tag text={text('Text', 'Chosen item')} withCrossIcon={boolean('With cross icon', true)} />
)

tag.story = {
  decorators: [withKnobs],
}
