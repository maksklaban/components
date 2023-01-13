import styled from 'styled-components'

export const StyledContactsConfirmed = styled.div`
  background-color: ${({ theme }) => theme.color.general.gray1};
  padding: 20px;
  border-radius: ${({ theme }) => theme.size.border.radius.main};
  //min-width: 350px;
  max-width: 30vw;
  margin-bottom: 20px;
`

export const StyledContactsRow = styled.div`
  display: flex;
  justify-content: space-between;

  span:first-child {
    margin-right: 20px;
  }

  &.edit {
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.general.gray2};
    margin-bottom: 10px;
  }
`
