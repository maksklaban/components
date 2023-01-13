import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import TagsPanel from './TagsPanel'

export default {
  title: 'Organisms/TagsPanel',
  component: TagsPanel,
}

const tags = ['price', 'brand', 'size']

export const tagsPanel = () => <TagsPanel tags={tags} withButton={boolean('With button', true)} />

tagsPanel.story = {
  decorators: [withKnobs],
}
