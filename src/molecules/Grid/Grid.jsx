import React from 'react'
import { PropTypes as T } from 'prop-types'

import clsx from 'clsx'
import { StyledGridContainer } from './styled'
import { ALIGN_JUSTIFY_CONTENT_TYPES, ALIGN_JUSTIFY_ITEMS_TYPES } from '../../types'
import GridItem from '../../atoms/GridItem'
import { colsShape } from '../../atoms/GridItem/GridItem'

const Grid = ({
  elements,
  elementWidth,
  children,
  gridVariant,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  className,
  rowGap,
  component,
  type,
  ...otherProps
}) => (
  <StyledGridContainer
    as={component}
    justifyItems={justifyItems}
    alignItems={alignItems}
    justifyContent={justifyContent}
    alignContent={alignContent}
    rowGap={rowGap}
    className={clsx(className, 'grid')}
    isPageType={type === 'page'}
    gridVariant={type === 'item' ? gridVariant : undefined}
    {...otherProps}
  >
    {children ||
      // for equal columns
      elements.map((element, i) => (
        <GridItem key={i} cols={elementWidth}>
          {element}
        </GridItem>
      ))}
  </StyledGridContainer>
)

export default Grid

Grid.propTypes = {
  alignContent: T.oneOf(ALIGN_JUSTIFY_CONTENT_TYPES),
  alignItems: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  className: T.string,
  component: T.oneOfType([T.func, T.string]),
  gridVariant: T.oneOf(['base', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl']),
  justifyContent: T.oneOf(ALIGN_JUSTIFY_CONTENT_TYPES),
  justifyItems: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  elements: T.array,
  elementWidth: T.oneOfType([
    T.oneOf(['end']),
    T.number,
    T.shape({
      xxs: colsShape,
      xs: colsShape,
      xl: colsShape,
      lg: colsShape,
      md: colsShape,
      sm: colsShape,
      base: colsShape,
    }),
  ]),
  rowGap: T.string,
  rowHeight: T.string,
  type: T.oneOf(['page', 'item']),
}

Grid.defaultProps = {
  alignContent: 'start',
  alignItems: 'start',
  justifyContent: 'start',
  justifyItems: 'start',
  gridVariant: 'lg',
  elements: [],
  elementWidth: 1,
  type: 'page',
}
