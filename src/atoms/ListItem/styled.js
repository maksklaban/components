import styled from 'styled-components'

export const StyledListItem = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.general.gray1}`};
  padding: 12px 16px 11px;
  display: inline-flex;

  &:last-child {
    border: none;
    padding-bottom: 12px;
  }
`
