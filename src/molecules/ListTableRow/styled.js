import styled from 'styled-components'

export const StyledCell = styled.div`
  width: ${({ width }) => width};
  flex-grow: ${({ flexGrow }) => flexGrow};
  padding: 20px 20px 20px 0;

  &.brandWithState {
    display: flex;
    padding: 10px 20px 10px 0;

    & > div {
      margin: 0;
      align-items: center;
    }

    .brandLogo {
      order: 2;
    }

    .stateIcon {
      order: 1;
      margin-left: 0;
      margin-right: 12px;
    }
  }

  &.itemImageWithState {
    display: flex;
    padding: 5px 20px 5px 0;

    .stateIcon {
      margin-left: 0;
      margin-right: 13px;
    }
  }

  &.checkbox {
    display: flex;
    border-right: 1px solid ${({ theme }) => theme.color.general.gray2};
    margin-right: 20px;
    padding-left: 20px;
    width: auto;
  }
  .editMode & {
    border-color: ${({ theme }) => theme.color.primary.main};
  }

  .listViewValue {
    height: 100%;
  }
`

export const StyledListTableRow = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.color.general.gray2};
  border-radius: ${({ theme }) => theme.size.border.radius.bigger};
  margin: 20px 20px 0;
  cursor: pointer;

  &.editMode {
    border-color: ${({ theme }) => theme.color.primary.main};
  }
  &:hover:not(.editMode) {
    border-color: ${({ theme }) => theme.color.general.gray5};
    ${StyledCell} {
      border-color: ${({ theme }) => theme.color.general.gray5};
    }
  }
`
//${({ theme: { grid }, screenUp }) => {
//     const gap = grid[screenUp].columns.gapWidth
//     return `${gap} ${gap} 0`
//   }};
