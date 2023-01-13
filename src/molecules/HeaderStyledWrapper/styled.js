import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledHeaderWrapper = styled.header`
  ${getTokens('header-standard-regular-small')};
  padding: ${({ theme }) => `0 ${theme.gutter.container.side.base}px`}; // equals Container padding
  height: ${({ theme }) => theme.size.height.header.mobile};
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 2;

  &.fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  &.openedMenu {
    position: relative !important;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xxs}px) {
    & a {
      font-size: 11px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: ${({ theme }) => `0 ${theme.gutter.container.side.md}px`}; // equals Container padding
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${getTokens('header-standard-regular-large')};
  }
`
