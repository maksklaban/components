import React from 'react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import TextPanel from './TextPanel'
import { LOREM_1, LOREM_HALF } from '../../constants/propTypes'
import { TEXT_ALIGN_TYPES } from '../../types'
import Typography from '../../atoms/Typography'

export default {
  title: 'Molecules/TextPanel',
  component: TextPanel,
}

export const textPanelColored = () => (
  <TextPanel
    bordered={boolean('Bordered', false)}
    color={select('Color', ['success', 'error', 'warning', 'gray1', 'primary', 'secondary'], 'primary')}
    textAlign={select('Text align', TEXT_ALIGN_TYPES, 'inherit')}
    arrowPosition={select('Arrow position', [undefined, 'left', 'right'], 'left')}
  >
    <Typography type="h3" text={LOREM_1} />
  </TextPanel>
)

export const textPanelBordered = () => (
  <TextPanel
    bordered={boolean('Bordered', true)}
    color={select('Color', ['success', 'error', 'warning', 'gray1', 'primary', 'secondary'], 'gray1')}
    textAlign={select('Text align', TEXT_ALIGN_TYPES, 'inherit')}
    arrowPosition={select('Arrow position', [undefined, 'left', 'right'], undefined)}
    title={text('Title', 'Title')}
    content={text('Content', LOREM_HALF)}
  />
)

textPanelColored.story = {
  decorators: [withKnobs],
}
textPanelBordered.story = {
  decorators: [withKnobs],
}
