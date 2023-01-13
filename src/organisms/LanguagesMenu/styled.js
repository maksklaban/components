import styled from 'styled-components'
import Menu from '../Menu'

export const StyledLanguagesMenu = styled(Menu)`
  .flag {
    padding-bottom: 8px;
    flex-shrink: 0;
  }
  .row {
    display: flex;
    align-items: center;
    .flag {
      margin-right: 7px;
      padding-bottom: 0;
      padding-top: 2px;
    }
  }
`
