import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`

export const StyledSelectableTile = styled.div`
  border: 1px solid ${({ theme: { color } }) => color.general.gray2};
  padding: 20px 15px;
  border-radius: ${({ theme: { size } }) => size.border.radius.main};
  margin-bottom: 5px;
  width: 100%;

  .flexRow {
    display: flex;
    align-items: center;
  }

  &.selected {
    &.withSelectedBorder {
      padding: 19px 14px;
      border: 2px solid ${({ theme: { color } }) => color.primary.main};
    }
  }

  .selectionInput {
    margin-right: 4px;
  }
`
