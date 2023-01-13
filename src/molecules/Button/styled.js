import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledButton = styled.button`
  ${({ variant }) => getTokens(`button-standard-${variant}-large`)};
  cursor: pointer;
  outline: none;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 17px;
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  box-sizing: border-box;
  white-space: nowrap;
  border-radius: ${({ borderRadius }) => borderRadius};

  &.uppercase {
    text-transform: uppercase;
  }
  &.withLetterSpacing {
    letter-spacing: 0.05em;
  }

  &.small {
    min-height: 32px;
  }
  &.medium {
    min-height: 40px;
  }
  &.large {
    min-height: 48px;
  }

  &.withIcon {
    padding: 8px 15px;
    min-width: inherit;
    justify-content: space-between;
    text-align: left;
  }

  &.primary {
    border: 1px solid transparent;
    &:hover:not(.disabled) {
      background-color: ${({ theme, hoverType }) => theme.color.primary[hoverType]};
    }
    &.withTextShadow {
      text-shadow: 0 2px 5px ${({ theme }) => theme.color.primary.darker};
    }
  }
  &.secondary {
    border: 1px solid transparent;
    &:hover:not(.disabled) {
      background-color: ${({ theme, hoverType }) => theme.color.secondary[hoverType]};
    }
    &.withTextShadow {
      text-shadow: 0 2px 5px ${({ theme }) => theme.color.secondary.darker};
    }
  }
  &.bordered {
    border: ${({ theme }) => `1px solid ${theme.color.general.gray2}`};
    &:hover:not(.disabled) {
      border: ${({ theme }) => `1px solid ${theme.color.general.gray3}`};
    }
  }

  &.fullWidth {
    width: 100%;
  }

  &.googleButton {
    background-color: ${({ theme }) => theme.color.general.light};
    text-shadow: none;

    &.disabled {
      svg {
        opacity: 0.4;
      }
    }
  }

  &.fbButton {
    background-color: #1877f2;
    &:hover:not(.disabled) {
      background-color: #1877f2;
      opacity: 0.8;
    }
    &.disabled {
      svg {
        opacity: 0.6;
      }
    }
  }

  &.twitterButton {
    background-color: #1da1f2;
    &:hover:not(.disabled) {
      background-color: #1da1f2;
      opacity: 0.8;
    }
    &.disabled {
      svg {
        opacity: 0.6;
      }
    }
  }

  &.disabled {
    opacity: ${({ disableType }) => (disableType === 'opacity' ? 0.5 : 1)};
    ${({ disableType }) =>
      disableType === 'color' ? getTokens(`button-standard-disabled-large`) : undefined};
    cursor: not-allowed;

    &.withTextShadow {
      text-shadow: none;
    }
  }
`
