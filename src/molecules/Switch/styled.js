import styled from 'styled-components'
import Switch from 'react-switch'

export const StyledSwitch = styled(Switch)`
  margin-right: 10px;

  &.disabled {
    cursor: not-allowed;
  }
`

export const StyledSwitchLabel = styled.label`
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  cursor: pointer;
`
