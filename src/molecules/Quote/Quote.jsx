import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { StyledQuote } from './styled'
import Typography from '../../atoms/Typography'
import { TEXT_ALIGN_TYPES } from '../../types'

const Quote = (props) => {
  const {
    color,
    className,
    children,
    textAlign,
    text,
    theme,
    signaturePrimary,
    signatureSecondary,
    ...otherProps
  } = props

  return (
    <StyledQuote textAlign={textAlign} color={color} className={className} {...otherProps}>
      <div className="quotesMark" color={theme.color.secondary.main}>
        “
      </div>
      {children || (
        <>
          <Typography type="h3" component="div" className="mainText">
            {text}
          </Typography>
          <Typography type="body1" component="div">
            {signaturePrimary}
          </Typography>
          <Typography type="body1" component="div" color={theme.color.general.gray4}>
            {signatureSecondary}
          </Typography>
        </>
      )}
    </StyledQuote>
  )
}

export default withTheme(Quote)

Quote.propTypes = {
  textAlign: PropTypes.oneOf(TEXT_ALIGN_TYPES),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  signaturePrimary: PropTypes.string,
  signatureSecondary: PropTypes.string,
  text: PropTypes.string,
}
