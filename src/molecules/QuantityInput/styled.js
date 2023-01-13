import styled from 'styled-components'
import getTokens from '../../utils/getTokens'

export const StyledWrapper = styled.div`
  display: inline-flex;
  border: ${({ withBorder, theme: { color } }) => (withBorder ? `1px solid ${color.general.gray2}` : 'none')};
  border-radius: ${({ theme }) => theme.size.border.radius.main};

  &.fullWidth {
    display: flex;
    flex-grow: 1;

    input {
      width: 100%;
      padding: 0 16px;
      text-align: left;
    }
  }

  &.disabled {
    opacity: 0.8;
  }
`

export const StyledQuantityInput = styled.input`
  ${({ variant }) => getTokens(`input-${variant}-black-large`)};
  border: none;
  padding: 7px 8px 9px 9px;
  width: 42px;
  outline: none;
  margin-right: 1px;
  text-align: center;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  .disabled & {
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 16px !important;
  }
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    ${({ variant }) => getTokens(`input-${variant}-black-large`)};
    flex-basis: 50%;
    padding: 0 9px;
    display: flex;
    box-sizing: border-box;
    cursor: pointer;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:first-child {
      border-bottom-right-radius: 0;
    }
    &:nth-child(2) {
      border-top-right-radius: 0;
      margin-top: 1px;
    }
  }
`
