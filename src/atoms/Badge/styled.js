import styled from 'styled-components'
import getTokens from '../../utils/getTokens'

export const StyledBadgeWrapper = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
`

export const StyledBadge = styled.span`
  ${getTokens('badge-standard-primary-large')};
  position: absolute;
  min-width: ${({ theme }) =>
    parseInt(theme.components.badge.standard.primary.large['border-radius'], 10) * 2}px;
  height: ${({ theme }) =>
    parseInt(theme.components.badge.standard.primary.large['border-radius'], 10) * 2}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  box-sizing: border-box;

  &.invisible {
    transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  &.anchorTopRight {
    top: 0;
    right: 0;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
    &.invisible {
      transform: scale(0) translate(50%, -50%);
    }
  }
  &.anchorTopLeft {
    top: 0;
    left: 0;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0% 0%;
    &.invisible {
      transform: scale(0) translate(-50%, -50%);
    }
  }
  &.anchorBottomRight {
    bottom: 0;
    right: 0;
    transform: scale(1) translate(50%, 50%);
    transform-origin: 100% 100%;
    &.invisible {
      transform: scale(0) translate(50%, 50%);
    }
  }
  &.anchorBottomLeft {
    bottom: 0;
    left: 0;
    transform: scale(1) translate(-50%, 50%);
    transform-origin: 0% 100%;
    &.invisible {
      transform: scale(0) translate(-50%, 50%);
    }
  }
`
