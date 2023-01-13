import styled from 'styled-components'

import getTokens from '../../utils/getTokens'
import { convertHexToRGBA } from '../../utils/convertHexToRgba'

export const StyledLink = styled.span`
  display: inline-flex;

  .icon {
    margin: 0 6px;
  }

  a {
    ${({ type }) => getTokens(`link-standard-${type === 'menu' ? 'smaller' : type}-large`)};
    color: ${({ theme, themeColor, customColor, inverted }) =>
      inverted ? theme.color.general.light : customColor || theme.color[themeColor[0]][themeColor[1]]};
    cursor: pointer;
    font-weight: ${({ fontWeight }) => fontWeight};
  }

  &:not(.noStyles):not(.menu):not(.withBorder) a {
    text-decoration: underline;
  }

  &:hover:not(.disabled):not(.selected) a {
    color: ${({ theme, inverted }) => (inverted ? theme.color.general.light : theme.color.general.dark)};
  }

  &.menu {
    & a {
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
    }
    &.hovered a {
      color: ${({ theme, inverted }) => (inverted ? theme.color.general.light : theme.color.primary.main)};
      border-bottom: ${({ theme, inverted }) =>
        `1px solid ${inverted ? theme.color.general.light : theme.color.primary.main}`};
    }
    &:hover:not(.disabled):not(.selected) a {
      color: ${({ theme, inverted }) => (inverted ? theme.color.general.light : theme.color.primary.main)};
      border-bottom: ${({ theme, inverted }) =>
        `1px solid ${inverted ? theme.color.general.light : theme.color.primary.main}`};
    }
    &.selected a {
      border-bottom: ${({ theme, inverted }) =>
        `1px solid ${inverted ? theme.color.general.light : theme.color.general.dark}`};
    }
  }

  &.withBorder:not(.noStyles):not(.menu) {
    a {
      border-bottom: ${({ theme, themeColor, customColor }) =>
        `1px solid ${convertHexToRGBA(customColor || theme.color[themeColor[0]][themeColor[1]], 0.2)}`};
    }
    &:not(.disabled):not(.selected) a:hover {
      border-bottom-color: ${({ theme, themeColor, customColor }) =>
        customColor || theme.color[themeColor[0]][themeColor[1]]};
    }
  }

  &.disabled a {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.noStyles a:-webkit-any-link,
  a {
    text-decoration: none;
  }
`
