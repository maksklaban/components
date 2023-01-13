import React from 'react'
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

import ExpansionPanel from './ExpansionPanel'
import { LOREM_1, LOREM_HALF } from '../../constants/propTypes'

export default {
  title: 'Organisms/ExpansionPanel',
  component: ExpansionPanel,
}

export const expansionPanel = () => (
  <ExpansionPanel
    header={text('Header text', LOREM_HALF)}
    details={text('Details text', LOREM_1)}
    align={select('Text align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit')}
    arrowPosition={select('Arrow position', [undefined, 'left', 'right'], 'left')}
    bordered={boolean('Bordered', false)}
  />
)

expansionPanel.story = {
  decorators: [withKnobs],
}
