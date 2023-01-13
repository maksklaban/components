import styled from 'styled-components'
import getGridValues from '../../utils/getGridValues'

export const StyledGridContainer = styled.div`
  display: ${({ as }) => (as ? 'grid !important' : 'grid')};
  grid-row-gap: ${({ rowGap }) => rowGap};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  grid-template-rows: ${({ rowHeight }) => rowHeight};
  ${({ theme, isPageType, gridVariant }) => getGridValues(theme, isPageType ? 'base' : gridVariant)};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xxs}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'xxs')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'xs')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'sm')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'md')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'lg')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    ${({ theme, isPageType }) => isPageType && getGridValues(theme, 'xl')};
  }
`
