import styled from 'styled-components'
import getTokens from '../../utils/getTokens'

export const StyledTag = styled.span`
  ${({ type }) => getTokens(`tag-standard-${type}-large`)};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 2px 7px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-right: 3px;
  border: 1px solid transparent;

  &.selected {
    background-color: ${({ theme }) => theme.color.primary.main};
    color: ${({ theme }) => theme.color.general.light};
  }

  &.isOutlined {
    background-color: ${({ theme }) => theme.color.general.light};

    &.primary {
      border: 1px solid ${({ theme }) => theme.color.primary.main};
    }
    &.gray {
      border: 1px solid ${({ theme }) => theme.color.general.gray2};
    }
  }

  &.withBackgroundOpacity {
    &.primary {
      background-color: ${({ theme }) => theme.color.primary.main}1A;
      color: ${({ theme }) => theme.color.primary.main};
    }
  }

  background-color: ${({ backgroundColor }) => backgroundColor};

  .crossIcon {
    padding-left: 5px;
    cursor: pointer;

    div {
      background-color: transparent;
    }

    span {
      height: 1px;
      margin-bottom: -1px;
    }
  }
`
