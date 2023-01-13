import styled from 'styled-components'

// To choose
export const StyledAttributes = styled.div`
  .label {
    margin-bottom: 5px;
  }

  .color {
    cursor: pointer;
    margin-right: 10px;
  }

  .tag {
    padding: 0 2px;
    cursor: pointer;
    margin-right: 10px;
    font-weight: 500;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid ${({ theme }) => theme.color.primary.main};
    }
  }

  .icon {
    .image {
      margin-top: 0;
    }
  }
`

// Chosen
export const StyledCharacteristics = styled.div`
  display: flex;
  align-items: center;
  .tag {
    padding: 0 2px;
  }

  .icon {
    .image {
      margin-top: 0;
      cursor: default;
    }
  }
`
