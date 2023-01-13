import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-bottom: 25px; // error label height + 4px

  .labelLeft &,
  &.withoutValidation {
    margin-bottom: 0;
  }

  .rightIcon {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;

    &.success {
      top: 35%;
      background-color: ${({ theme }) => theme.color.status.success};
      path {
        fill: ${({ theme }) => theme.color.general.light};
      }
    }
  }

  & > .icon.leftIcon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
  }

  width: ${({ fullWidth }) => fullWidth && '100%'};
`

export const StyledFlexRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &.withoutValidation {
    margin-bottom: 0;
  }
`

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  flex-grow: 1;

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

  &.multiline {
    line-height: 22px;
  }

  .primary &,
  .secondary & {
    padding: 0 16px;
    border: 1px solid transparent;

    &.multiline {
      line-height: 22px;
      padding: 10px 16px;
    }

    &.withBorder {
      border: 1px solid ${({ theme }) => theme.color.general.gray2};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.general.gray3};
    }

    &.primaryFocusColor:focus {
      border: 1px solid ${({ theme }) => theme.color.primary.main};
    }

    &.hasLeftIcon {
      padding: 0 16px 0 36px;
    }
    &.hasError {
      border: 1px solid ${({ theme }) => theme.color.status.error};
      padding: 0 36px 0 16px;
    }
    &.success {
      border: 1px solid ${({ theme }) => theme.color.status.success};
    }
  }

  .disabled & {
    background-color: ${({ theme }) => theme.color.general.gray1};
    cursor: not-allowed;
  }

  ::placeholder {
    opacity: 1;
    color: ${({ theme, inverted, variant, placeholderColor }) =>
      placeholderColor || theme.color.general[inverted || variant === 'transparent' ? 'gray3' : 'gray4']};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme, inverted, variant, placeholderColor }) =>
      placeholderColor || theme.color.general[inverted || variant === 'transparent' ? 'gray3' : 'gray4']};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme, inverted, variant, placeholderColor }) =>
      placeholderColor || theme.color.general[inverted || variant === 'transparent' ? 'gray3' : 'gray4']};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .transparent & {
      ${getTokens(`input-transparent-black-large`)};
    }

    .inverted & {
      ${getTokens('input-transparent-white-large')};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 16px !important;
  }
  //@media only screen and (max-width: 850px) {
  //  .transparent &,
  //  .secondary &,
  //  .primary & {
  //    font-size: 16px;
  //  }
  //}
`

export const StyledLabel = styled.div`
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.family.primary};
  min-width: ${({ labelWidth }) => labelWidth};

  .transparent &,
  &.transparent {
    ${getTokens('typography-body2-black-large')};
  }

  .primary &,
  &.primary {
    font-size: ${({ theme: { components } }) => components.input.primary.black.large['font-size']};
    line-height: 20px;
  }
  .secondary &,
  &.secondary {
    font-size: ${({ theme: { components } }) => components.input.secondary.black.large['font-size']};
    line-height: 20px;
  }

  &.boldLabel {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
  .labelLeft & {
    margin-right: 15px;
    margin-bottom: 0;
  }

  .inverted &,
  &.inverted {
    color: ${({ theme }) => theme.color.general.light};
  }
`

export const StyledErrorLabel = styled.div`
  ${getTokens('typography-body2-black-large')};
  color: ${({ theme }) => theme.color.status.error};
  top: 100%;
  position: absolute;
`
