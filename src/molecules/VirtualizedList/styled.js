import styled from 'styled-components'
import { VariableSizeList as List } from 'react-window'

export const StyledVirtualizedList = styled(List)`
  & > div > div:last-child {
    margin-bottom: 20px;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      margin-bottom: 10px;
    }
  }
`
