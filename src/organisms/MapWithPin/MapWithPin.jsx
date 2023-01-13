import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledColoredCircle, StyledIconWrapper, StyledMapWithPin, StyledWhiteCircle } from './styled'
import Image from '../../atoms/Image'

const MapWithPin = ({ className, logo, map, iconPosition, ...otherProps }) => (
  <StyledMapWithPin className={clsx(className)} {...otherProps}>
    <Image src={map} width="100%" />
    <StyledIconWrapper iconPosition={iconPosition}>
      <StyledWhiteCircle>
        <Image alt="logo" src={logo} className="logo" />
      </StyledWhiteCircle>
      <StyledColoredCircle />
    </StyledIconWrapper>
  </StyledMapWithPin>
)

export default MapWithPin

MapWithPin.propTypes = {
  className: T.string,
}

MapWithPin.defaultProps = {}
