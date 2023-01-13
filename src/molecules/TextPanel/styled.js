import styled from 'styled-components'

import { convertHexToRGBA } from '../../utils/convertHexToRgba'

export const StyledTextPanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding || '15px 24px'};
  text-align: ${({ align }) => align};
  background-color: ${({ theme, type, backgroundColor }) =>
    backgroundColor ||
    (['success', 'error', 'warning'].includes(type)
      ? convertHexToRGBA(theme.color.status[type], 0.2)
      : type.includes('gray')
      ? theme.color.general[type]
      : theme.color[type].lighter)};
  border-radius: ${({ theme: { size } }) => size.border.radius.main};

  &.bordered {
    border: 1px solid
      ${({ theme, type }) =>
        type === 'gray1'
          ? theme.color.general.gray2
          : type === 'gray2'
          ? theme.color.general.gray3
          : ['success', 'error', 'warning'].includes(type)
          ? theme.color.status[type]
          : theme.color[type].default};
  }

  &::after {
    content: '';
    height: 0;
    position: absolute;
    top: calc(100% - 15px);
  }

  &.leftArrow {
    border-bottom-left-radius: 0;
    //margin-left: 12px;
    &::after {
      right: calc(100% - 2px);
      transform: rotate(-90deg);
      border-left: 17px solid white;
      border-color: ${({ type, theme, backgroundColor }) =>
        backgroundColor ||
        (type.includes('gray')
          ? theme.color.general[type]
          : ['success', 'error', 'warning'].includes(type)
          ? convertHexToRGBA(theme.color.status[type], 0.2)
          : theme.color[type].lighter)};
      border-top: 13px solid transparent;
    }
  }

  &.rightArrow {
    border-bottom-right-radius: 0;
    //margin-right: 12px;
    &::after {
      left: calc(100% - 2px);
      transform: rotate(90deg);
      border-right: 17px solid white;
      border-color: ${({ type, theme, backgroundColor }) =>
        backgroundColor ||
        (type.includes('gray')
          ? theme.color.general[type]
          : ['success', 'error', 'warning'].includes(type)
          ? convertHexToRGBA(theme.color.status[type], 0.2)
          : theme.color[type].lighter)};
      border-top: 13px solid transparent;
    }
  }
`
