import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../../crm/src/fonts.css'

import { useScreenContext } from '../src/hooks/useScreenContext'
import { CommonGlobalStyle } from '../src'
import theme from './theme'

export const ScreenContext = createContext(undefined)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CommonGlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

addDecorator((StoryFn) => {
  const screenContextValues = useScreenContext(theme)

  return (
    <ScreenContext.Provider value={screenContextValues}>
      <StoryFn />
    </ScreenContext.Provider>
  )
})

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    // defaultViewport: 'someDefault',
  },
}
