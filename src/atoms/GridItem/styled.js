import styled from 'styled-components'

const getResponsiveColValues = (breakpointColValue, gridColSide) => {
  let cols = breakpointColValue
  let colStart
  if (typeof breakpointColValue !== 'number') {
    colStart = breakpointColValue[0]
    cols = breakpointColValue[1]
  }
  if (gridColSide === 'start') {
    return colStart || `span ${cols}`
  }
  if (gridColSide === 'end') {
    return colStart ? `span ${cols}` : 'auto'
  }
}

export const StyledGridItem = styled.div`
  grid-column-start: ${({ cols, colStart }) => colStart || `span ${cols}`};
  grid-column-end: ${({ cols, colStart }) => (colStart ? `span ${cols}` : 'auto')};
  grid-column-start: ${({ base }) => base && getResponsiveColValues(base, 'start')};
  grid-column-end: ${({ base }) => base && getResponsiveColValues(base, 'end')};
  grid-row-start: ${({ rows, rowStart }) => rowStart || `span ${rows}`};
  grid-row-end: ${({ rows, rowStart }) => (rowStart ? `span ${rows}` : 'auto')};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xxs}px) {
    grid-column-start: ${({ xxs }) => xxs && getResponsiveColValues(xxs, 'start')};
    grid-column-end: ${({ xxs }) => xxs && getResponsiveColValues(xxs, 'end')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    grid-column-start: ${({ xs }) => xs && getResponsiveColValues(xs, 'start')};
    grid-column-end: ${({ xs }) => xs && getResponsiveColValues(xs, 'end')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-column-start: ${({ sm }) => sm && getResponsiveColValues(sm, 'start')};
    grid-column-end: ${({ sm }) => sm && getResponsiveColValues(sm, 'end')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-column-start: ${({ md }) => md && getResponsiveColValues(md, 'start')};
    grid-column-end: ${({ md }) => md && getResponsiveColValues(md, 'end')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-column-start: ${({ lg }) => lg && getResponsiveColValues(lg, 'start')};
    grid-column-end: ${({ lg }) => lg && getResponsiveColValues(lg, 'end')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    grid-column-start: ${({ xl }) => xl && getResponsiveColValues(xl, 'start')};
    grid-column-end: ${({ xl }) => xl && getResponsiveColValues(xl, 'end')};
  }
`
