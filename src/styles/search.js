import styled from 'styled-components'

export const StyledSearchItem = styled.div`
  position: relative;
  padding: 1px 20px 0 20px;

  figure {
    padding-top: 20px;
  }

  &.touchOnly {
    border: 1px solid ${({ theme }) => theme.color.general.gray2};
    border-radius: ${({ theme }) => theme.size.border.radius.main};

    .withIconButton {
      order: 3;
      margin-bottom: 18px;
    }

    .characteristicsToChoose {
      margin-bottom: auto;
      margin-top: 14px;
    }
  }

  &:not(.touchOnly) .characteristicsToChoose {
    display: none;
    position: absolute;
    padding: 0 19px 0 19px;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.general.light};
    z-index: 2;
  }

  &:not(.touchOnly):not(.outOfStock):hover {
    padding: 0 19px 0 19px;
    border: 1px solid ${({ theme }) => theme.color.general.gray2};
    border-bottom: none;
    border-radius: ${({ theme }) => theme.size.border.radius.main};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    .characteristicsToChoose {
      display: block;
      padding: 0 18px 4px 18px;
      border: 1px solid ${({ theme }) => theme.color.general.gray2};
      border-radius: ${({ theme }) => theme.size.border.radius.main};
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      left: -1px;
      right: -1px;
    }
  }
`
