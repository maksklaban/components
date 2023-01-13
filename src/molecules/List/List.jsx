import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../../atoms/ListItem'
import { StyledList } from './styled'

const List = (props) => {
  const { children, items, className, ...otherProps } = props
  return (
    <StyledList className={className} {...otherProps}>
      {children || items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
    </StyledList>
  )
}

export default List

List.propsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.array,
}

List.defaultProps = {
  items: [],
}
