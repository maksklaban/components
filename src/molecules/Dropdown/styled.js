import styled from 'styled-components'

export const StyledDropdown = styled.div`
  position: relative;
`

export const StyledMenu = styled.div`
  display: none;
  position: absolute;
  //left: 0;
  right: 0;
  top: 100%;
  background-color: ${({ theme }) => theme.color.general.light};
  padding: 5px 5px;
  box-shadow: 0 10px 16px -4px rgba(212, 214, 224, 0.6);
  z-index: 2;
  border-radius: ${({ theme }) => theme.size.border.radius.main};
  border: 1px solid ${({ theme }) => theme.color.general.gray2};

  &.opened {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5px;
  }

  & > * {
    padding: 10px 10px;
    cursor: pointer;
    border-top: 1px solid ${({ theme }) => theme.color.general.gray2};
  }
  & > *:first-child {
    border-top: none;
  }
`
