import styled from 'styled-components'
import getTokens from '../../utils/getTokens'
import Typography from '../../atoms/Typography'

export const StyledLabel = styled(Typography)`
  display: block;
  margin-bottom: 10px;
  min-width: ${({ labelWidth }) => labelWidth};
  margin-right: 15px;
  font-size: ${({ theme: { components }, variant }) => components.select[variant].black.large['font-size']};
  line-height: 20px;
`

export const StyledFlexRow = styled.div`
  display: flex;
  align-items: center;

  &.labelTop {
    display: block;
  }
`

export const StyledOptionRow = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.general.light};
  &:hover {
    background-color: ${({ theme }) => theme.color.general.gray1};
  }
  .icon {
    padding-left: 16px;
    height: 100%;

    &.rightIcon {
      padding-right: 16px;
    }
  }

  .react-select__option {
    ${getTokens('typography-body2-black-large')};
    background-color: ${({ theme }) => theme.color.general.light};
    padding: 12px 16px;
    &:hover {
      background-color: ${({ theme }) => theme.color.general.gray1};
      ~ .icon {
        background-color: ${({ theme }) => theme.color.general.gray1};
      }
    }
  }

  .react-select__option--is-focused {
    background-color: transparent;
  }

  .react-select__option--is-selected {
  }
`

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ fullWidth }) => fullWidth && '100%'};

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`

export const StyledSelect = styled.div`
  flex: 1;

  .react-select__control {
    ${({ variant }) => getTokens(`select-${variant}-black-large`)};
    border: 1px solid ${({ theme, withBorder }) => (withBorder ? theme.color.general.gray2 : 'transparent')};

    &:hover {
      border: 1px solid ${({ theme, withBorder }) => (withBorder ? theme.color.general.gray2 : 'transparent')};
    }
  }

  &.hasError {
    border-radius: ${({ theme }) => theme.size.border.radius.main};
    .react-select__control {
      border: 1px solid ${({ theme }) => theme.color.status.error};
    }
  }

  .react-select__control--is-focused {
    box-shadow: none;
    border: 1px solid
      ${({ theme, primaryFocusColor }) =>
        primaryFocusColor ? theme.color.primary.main : theme.color.general.gray2};

    &:hover {
      border: 1px solid
        ${({ theme, primaryFocusColor }) =>
          primaryFocusColor ? theme.color.primary.main : theme.color.general.gray2};
    }
  }

  .react-select__control--menu-is-open {
    border: 1px solid
      ${({ theme, withBorder, primaryFocusColor }) => {
        if (primaryFocusColor) {
          return theme.color.primary.main
        }
        if (withBorder) {
          return theme.color.general.gray3
        }
        return theme.color.general.gray2
      }} !important;
  }

  .react-select__value-container {
    padding: 2px 10px 2px 13px;
    min-height: ${({ theme }) => theme.components.input.primary.black.large['line-height']};

    & > div:last-child {
      margin: 0;
      padding: 0;
      top: initial;
    }

    &.react-select__value-container--is-multi {
      & > div {
        display: flex;
        margin: 5px 2px 5px 0;

        &:last-child {
          line-height: 18px;
        }
      }
    }
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.color.general.gray4};
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicators {
    padding-right: 13px;
  }

  .react-select__menu {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    background-color: ${({ theme }) => theme.color.general.light};
    z-index: 9;
    width: 100%;
  }

  &.autosize {
    .react-select__menu {
      width: auto;
    }
  }

  .react-select__menu-list {
    border-right: 1px solid ${({ theme }) => theme.color.general.gray1};
    border-left: 1px solid ${({ theme }) => theme.color.general.gray1};
    border-radius: ${({ theme }) => theme.size.border.radius.main};
    padding: 0;
  }

  .react-select__menu-notice--no-options {
    ${getTokens('typography-body2-black-large')};
    padding: 10px 16px;
    text-align: left;
  }

  @media only screen and (max-width: 850px) {
    .react-select__control {
      font-size: 16px;
    }
  }
`
export const StyledErrorLabel = styled.div`
  ${getTokens('typography-body2-black-large')};
  color: ${({ theme }) => theme.color.status.error};
  position: absolute;
  top: 100%;
  left: 0;
`
