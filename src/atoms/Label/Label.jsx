import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledLabel } from './styled'

const Label = ({ as, children, className, color, onClick, text, type }) => {
  return (
    <StyledLabel as={as} color={color} type={type} onClick={onClick} className={clsx(className, 'label')}>
      {children || text}
    </StyledLabel>
  )
}

export default Label

Label.propTypes = {
  type: T.oneOf(['smaller', 'bigger', 'uppercase']),
}

Label.defaultProps = {
  type: 'bigger',
}
