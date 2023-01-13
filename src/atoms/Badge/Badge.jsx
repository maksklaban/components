import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledBadge, StyledBadgeWrapper } from './styled'
import capitalize from '../../utils/capitalize'

const Badge = ({ anchorOrigin, badgeContent, children, className, invisible, ...otherProps }) => {
  const { vertical, horizontal } = anchorOrigin
  return (
    <StyledBadgeWrapper className={className} {...otherProps}>
      {children}
      <StyledBadge
        className={clsx(`anchor${capitalize(vertical)}${capitalize(horizontal)}`, invisible && 'invisible')}
      >
        {badgeContent}
      </StyledBadge>
    </StyledBadgeWrapper>
  )
}

export default Badge

Badge.propTypes = {
  anchorOrigin: T.shape({ vertical: T.oneOf(['top', 'bottom']), horizontal: T.oneOf(['left', 'right']) }),
  badgeContent: T.any,
  className: T.string,
  invisible: T.bool,
}

Badge.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
}
