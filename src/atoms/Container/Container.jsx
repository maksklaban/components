import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledContainer } from './styled'

const Container = (props) => {
  const { as, children, centered, flexDisplay, flexDirection, fullWidth, className, disabled } = props

  if (disabled) {
    return children
  }

  return (
    <StyledContainer
      as={as}
      className={clsx(className, centered && 'centered', fullWidth && 'fullWidth', 'container')}
      flexDirection={flexDirection}
      flexDisplay={flexDisplay}
      centered={centered}
    >
      {children}
    </StyledContainer>
  )
}

export default Container

Container.propTypes = {
  flexDisplay: T.bool,
  children: T.node,
  centered: T.bool,
  className: T.string,
  disabled: T.bool,
  flexDirection: T.oneOf(['row', 'column']),
}

Container.defaultProps = {
  flexDisplay: false,
  centered: false,
}
