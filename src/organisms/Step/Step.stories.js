import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import Step from './Step'
import { LOREM_FOURTH } from '../../constants/propTypes'

export default {
  title: 'Organisms/Step',
  component: Step,
}

const steps = [
  { title: text('Title1', 'Contact'), content: text('Content1', 'Enter your contact info') },
  { title: text('Title2', 'Delivery'), content: text('Content2', 'Choose your delivery options') },
  { title: text('Title3', 'Billing'), content: text('Content3', 'Enter billing information') },
]

export const main = () => (
  <Step
    steps={steps}
    // icon={<Icon name="error" />}
    color={select('Color', ['success', 'error', 'warning', 'gray1'], 'gray1')}
  />
)

main.story = {
  decorators: [withKnobs],
}
