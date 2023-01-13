import styled from 'styled-components'
import BaseTable from 'react-base-table'

export const StyledTableWrapper = styled.div`
  .BaseTable--empty {
    .BaseTable__header {
      display: none;
    }
    .BaseTable__empty-layer {
      top: 15px !important;
      background-color: transparent;
      overflow: visible;
    }
  }
`

export const StyledBaseTable = styled(BaseTable)`
  box-shadow: none;

  .BaseTable__table-main {
    outline: none;
    border: 1px solid ${({ theme: { color } }) => color.general.gray2};
    padding: 20px;
    border-radius: ${({ theme: { size } }) => size.border.radius.bigger};
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    .BaseTable__row {
      border-bottom: 1px solid ${({ theme: { color } }) => color.general.gray2};

      &.activeRow {
        border: 1px solid ${({ theme: { color } }) => color.primary.main};
        border-radius: ${({ theme: { size } }) => size.border.radius.bigger};
        margin-top: -1px;
      }
      .BaseTable__row-cell-text {
        line-height: 1rem;
      }
    }

    .BaseTable__header-cell:first-child,
    .BaseTable__row-cell:first-child {
      padding-left: 0;
      margin-left: 15px;
    }
  }

  .BaseTable__header-row {
    background-color: ${({ theme: { color } }) => color.general.gray2};
    border-radius: ${({ theme: { size } }) => size.border.radius.main};

    .BaseTable__header-cell--sortable:hover {
      background-color: ${({ theme: { color } }) => color.general.gray2};
    }
  }

  .BaseTable--empty .BaseTable__table-main .BaseTable__header {
    display: none;
  }

  &.withSummary {
    .BaseTable__table-main {
      padding-bottom: ${({ headerHeight }) => headerHeight + 20}px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .BaseTable__table-main {
      padding: 10px;
    }
  }
`

export const StyledTableSummary = styled.div`
  position: absolute;
  bottom: ${({ headerHeight }) => -headerHeight + 2}px;
  left: 20px;
  right: 20px;
  height: ${({ headerHeight }) => headerHeight}px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.general.gray2};
  border-radius: ${({ theme: { size } }) => size.border.radius.main};

  .summaryTitle {
    margin-right: auto;
  }

  .summaryLabel {
    margin-left: 20px;
    margin-right: 5px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .expansionPanel & {
      .opened & {
        left: 10px;
        right: 10px;
      }
    }
  }
`

export const StyledEmptyTable = styled.div`
  padding: 0 20px;
`
