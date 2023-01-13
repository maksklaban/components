import React from 'react'
import { withKnobs, select, text, color } from '@storybook/addon-knobs'

import Quote from './Quote'
import { LOREM_1 } from '../../constants/propTypes'
import { TEXT_ALIGN_TYPES } from '../../types'

export default {
  title: 'Molecules/Quote',
  component: Quote,
}

export const quote = () => (
  <Quote
    color={color('Color', 'black')}
    textAlign={select('Text align', TEXT_ALIGN_TYPES, 'inherit')}
    signaturePrimary={text('Signature first', 'Керівник')}
    signatureSecondary={text('Signature second', 'Kерівник Elmo')}
  >
    {text('Text', LOREM_1)}
  </Quote>
)

quote.story = {
  decorators: [withKnobs],
}
