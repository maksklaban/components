import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledEditor = styled.div`
  width: 100%;
  z-index: 0;

  &,
  > div {
    .transparent & {
      ${getTokens('input-transparent-black-small')};
      padding: 0 44px 0 0;
    }

    .secondary & {
      ${getTokens('input-secondary-black-large')};
    }

    .primary & {
      ${getTokens('input-primary-black-large')};
    }

    .inverted & {
      ${getTokens('input-transparent-white-small')};
    }

    .disabled & {
      background-color: ${({ theme }) => theme.color.general.gray1};
      cursor: not-allowed;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      .transparent & {
        ${getTokens(`input-transparent-black-large`)};
      }

      .inverted & {
        ${getTokens('input-transparent-white-large')};
      }
    }
  }

  && > div {
    line-height: 22px;
  }

  & {
    padding: 10px 6px;
  }
`
