import React from 'react'
import { withTheme } from 'styled-components'

import Typography from '../../atoms/Typography'
import HtmlMapper from '../HtmlMapper'
import { StyledTextPage } from './styled'
import ErrorBoundary from '../../ErrorBoundary'

const TextPage = ({ header, pageText, typographyProps, children }) => {
  return (
    <>
      <ErrorBoundary>
        <StyledTextPage className="textPage">
          <Typography type="h1" margin="0 0 50px" textAlign="center">
            {header}
          </Typography>
          <HtmlMapper html={pageText} typographyProps={typographyProps} />
        </StyledTextPage>
      </ErrorBoundary>
      {children}
    </>
  )
}

export default withTheme(TextPage)
