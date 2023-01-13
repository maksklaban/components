import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledGridItem } from './styled'
import { ALIGN_JUSTIFY_ITEMS_TYPES } from '../../types'

// !!! Main grid column width responsive property is base - it sets width from 0 to all the higher viewports
const GridItem = ({
  children,
  cols,
  colStart,
  rows,
  rowStart,
  justifySelf,
  alignSelf,
  theme,
  className,
  ...otherProps
}) => {
  const areColsResponsive = typeof cols === 'object'
  const areColStartResponsive = typeof colStart === 'object'
  const getResponsiveValues = (breakpoint) => {
    const start = colStart && areColStartResponsive ? colStart[breakpoint] : colStart
    const colsNum = cols && areColsResponsive ? cols[breakpoint] : cols
    return start ? [start, colsNum] : colsNum
  }
  return (
    <StyledGridItem
      cols={areColsResponsive ? undefined : cols}
      colStart={areColStartResponsive ? undefined : colStart}
      base={getResponsiveValues('base')}
      xs={getResponsiveValues('xs')}
      xxs={getResponsiveValues('xxs')}
      sm={getResponsiveValues('sm')}
      md={getResponsiveValues('md')}
      lg={getResponsiveValues('lg')}
      xl={getResponsiveValues('xl')}
      rows={rows}
      rowStart={rowStart}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      className={clsx(className, 'gridItem')}
      {...otherProps}
    >
      {children}
    </StyledGridItem>
  )
}

export default withTheme(GridItem)

// 'cols' - number of columns the item will be stretched
// 'colStart' - number of column in grid to start with, starts from 1

export const colsShape = T.oneOfType([T.oneOf(['end']), T.number]) // grid-column-end: span end; means that item will be stretched from colStart till the end

GridItem.propTypes = {
  alignSelf: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  className: T.string,
  justifySelf: T.oneOf(ALIGN_JUSTIFY_ITEMS_TYPES),
  cols: T.oneOfType([
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
  ]).isRequired,
  colStart: T.oneOfType([
    T.number,
    T.shape({
      base: T.number,
      xxs: T.number,
      xs: T.number,
      xl: T.number,
      lg: T.number,
      md: T.number,
      sm: T.number,
    }),
  ]),
}

GridItem.defaultProps = {
  rows: 1,
}
