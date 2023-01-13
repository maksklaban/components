import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { StyledHeaderWrapper } from './styled'

const HeaderStyledWrapper = ({
  children,
  backgroundColor,
  inverted,
  justifyContent,
  className,
  fixed,
  alignItems,
  ...otherProps
}) => (
  <StyledHeaderWrapper
    inverted={inverted}
    backgroundColor={backgroundColor}
    justifyContent={justifyContent}
    alignItems={alignItems}
    className={clsx(className, fixed && 'fixed')}
    {...otherProps}
  >
    {children}
  </StyledHeaderWrapper>
)

export default HeaderStyledWrapper

HeaderStyledWrapper.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  fixed: PropTypes.bool,
  inverted: PropTypes.bool,
  justifyContent: PropTypes.string,
}

HeaderStyledWrapper.defaultProps = {
  alignItems: 'center',
  fixed: false,
  justifyContent: 'space-between',
}
