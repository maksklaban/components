import React from 'react'
import PropTypes from 'prop-types'

import { StyledListItem } from './styled'
import Typography from '../Typography'

const ListItem = (props) => {
  const { children, text, className, ...otherProps } = props
  return (
    <StyledListItem className={className} {...otherProps}>
      {children || <Typography type="body2">{text}</Typography>}
    </StyledListItem>
  )
}

export default ListItem

ListItem.propsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
}
