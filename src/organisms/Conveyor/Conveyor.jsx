import React from 'react'
import PropTypes from 'prop-types'

import { StyledConveyorWrapper, StyledConveyorItems } from './styled'

const Conveyor = ({ items, className, ...otherProps }) => (
  <StyledConveyorWrapper className={className} {...otherProps}>
    <StyledConveyorItems>
      {items.map((item, i) => (
        <div className="item" key={i}>
          {item}
        </div>
      ))}
    </StyledConveyorItems>
  </StyledConveyorWrapper>
)

Conveyor.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
}

Conveyor.defaultProps = {
  items: [],
}

export default Conveyor
