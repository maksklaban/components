import styled from 'styled-components'
// width: ${({ theme }) => `calc(100vw - ${2 * theme.gutter.container.side.base}px)`};

export const StyledContainer = styled.div`
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 100%;
  padding-right: ${({ theme }) => `${theme.gutter.container.side.base}px`};
  padding-left: ${({ theme }) => `${theme.gutter.container.side.base}px`};
  display: ${({ flexDisplay, centered }) => (flexDisplay || centered ? 'flex' : 'block')};
  flex-direction: ${({ flexDirection, flexDisplay }) =>
    flexDisplay || flexDirection ? flexDirection || 'row' : ''};

  & * {
    box-sizing: border-box;
  }

  &.centered {
    align-items: center;
    justify-content: center;
  }

  &.fullWidth {
    //width: 100%;
    //min-height: 200px;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xxs}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.xxs}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.xxs}px`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.xs}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.xs}px`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.sm}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.sm}px`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.md}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.md}px`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.lg}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.lg}px`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      padding-right: ${({ theme }) => `${theme.gutter.container.side.xl}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.xl}px`};
    }
  }

  &:not(.fullWidth) {
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xxs}px) {
      max-width: ${({ theme }) => theme.breakpoints.xxs}px;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
      max-width: ${({ theme }) => theme.breakpoints.xs}px;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      max-width: ${({ theme }) => theme.breakpoints.sm}px;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      max-width: ${({ theme }) => theme.breakpoints.md}px;
      padding-right: ${({ theme }) => `${theme.gutter.container.side.md}px`};
      padding-left: ${({ theme }) => `${theme.gutter.container.side.md}px`};
      //width: ${({ theme }) => `calc(100vw - ${2 * theme.gutter.container.side.md}px)`};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      max-width: ${({ theme }) => theme.breakpoints.lg}px;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      max-width: ${({ theme }) => theme.breakpoints.xl}px;
    }
  }
`
