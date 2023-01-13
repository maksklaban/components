import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledLogo } from './styled'

const Logo = ({ alt, onClick, logoSrc, className, ...otherProps }) => (
  <StyledLogo
    src={logoSrc}
    alt={alt}
    onClick={onClick}
    className={clsx(className, onClick && 'clickable')}
    {...otherProps}
  />
)

export default Logo

Logo.propTypes = {
  alt: T.string.isRequired,
  className: T.string,
  inverted: T.bool,
  logoSrc: T.string.isRequired,
}

Logo.defaultProps = {
  alt: '',
  logoSrc: '',
}
