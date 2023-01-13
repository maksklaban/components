import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import PopupAlert from './PopupAlert'

export default {
  title: 'Molecules/PopupAlert', // Molecules / Organisms
  component: PopupAlert,
}

export const main = () => (
  <PopupAlert type={select('Type', ['default', 'new', 'success', 'warning', 'error'], 'default')}>
    {text('Content', 'Content')}
  </PopupAlert>
)

main.story = {
  decorators: [withKnobs],
}
