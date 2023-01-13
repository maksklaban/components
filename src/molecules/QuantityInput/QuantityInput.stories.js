import React from 'react'
import QuantityInput from './QuantityInput'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/QuantityInput',
  component: QuantityInput,
}

export const quantityInput = () => (
  <QuantityInput
  // disabled={boolean('Disabled', false)}
  // hasError={boolean('Error', false)}
  // errorLabel={text('Error Label', '')}
  />
)

quantityInput.story = {
  decorators: [withKnobs],
}
