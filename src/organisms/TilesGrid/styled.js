import styled from 'styled-components'

import Grid from '../../molecules/Grid'

export const StyledTilesGrid = styled(Grid)`
  & .tilesGridItem {
    margin-bottom: 20px;
    grid-column-start: ${({ itemsInRow, theme }) =>
      `span ${Math.floor(theme.grid.base.columns.count / itemsInRow)}`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xxs}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.xxs.columns.count / itemsInRow)}`};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.xs.columns.count / itemsInRow)}`};
    }
  }

  // @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
  //   & .tilesGridItem {
  //     & img {
  //       width: 100vw;
  //     }
  //   }
  // }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.sm.columns.count / itemsInRow)}`};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.md.columns.count / itemsInRow)}`};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.lg.columns.count / itemsInRow)}`};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    & .tilesGridItem {
      grid-column-start: ${({ itemsInRow, theme }) =>
        `span ${Math.floor(theme.grid.xl.columns.count / itemsInRow)}`};
    }
  }
`
