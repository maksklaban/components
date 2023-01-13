import styled from 'styled-components'

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.size.border.radius.main};
  box-shadow: 0 0 16px rgba(212, 214, 224, 0.2);
`
