import styled from 'styled-components'

export const StyledCheckboxWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    & input {
      cursor: not-allowed;
    }
  }

  & input {
    position: absolute;
    z-index: 1;
    opacity: 0;
    width: 20px;
    cursor: pointer;
    height: 20px;
  }

  & .typography {
    margin-left: 8px;
  }
`
