import React from 'react'
import { Column } from 'react-base-table'
import BaseTable from 'react-base-table'

import SelectionCell from './components/SelectionCell'
import { callOrReturn, cloneArray, normalizeColumns } from './utils'

class SelectableTable extends React.PureComponent {
  constructor(props) {
    super(props)
    const { selectedRowKeys, defaultSelectedRowKeys } = props
    this.state = {
      selectedRowKeys: (selectedRowKeys !== undefined ? selectedRowKeys : defaultSelectedRowKeys) || [],
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedRowKeys?.length && !this.props.selectedRowKeys?.length) {
      this.setState({ selectedRowKeys: [] })
    }
  }
  /**
   * Set `selectedRowKeys` manually.
   * This method is available only if `selectedRowKeys` is uncontrolled.
   *
   * @param {array} selectedRowKeys
   */
  setSelectedRowKeys(selectedRowKeys) {
    // if `selectedRowKeys` is controlled
    if (this.props.selectedRowKeys !== undefined) return
    this.setState({
      selectedRowKeys: cloneArray(selectedRowKeys),
    })
  }
  /* some other custom methods and proxy methods */
  /**
   * Remove rowKeys from inner state  manually, it's useful to purge dirty state after rows removed.
   * This method is available only if `selectedRowKeys` is uncontrolled.
   *
   * @param {array} rowKeys
   */
  removeRowKeysFromState(rowKeys) {
    if (!Array.isArray(rowKeys)) return
    const state = {}
    if (this.props.selectedRowKeys === undefined && this.state.selectedRowKeys.length > 0) {
      state.selectedRowKeys = this.state.selectedRowKeys.filter((key) => !rowKeys.includes(key))
    }
    if (state.selectedRowKeys) {
      this.setState(state)
    }
  }

  _handleSelectChange = ({ selected, rowData, rowIndex, headerIndex }) => {
    let selectedRowKeys

    if (headerIndex === undefined) {
      const key = rowData[this.props.rowKey]
      selectedRowKeys = [...this.state.selectedRowKeys]
      if (selected) {
        if (!selectedRowKeys.includes(key)) selectedRowKeys.push(key)
      } else {
        const index = selectedRowKeys.indexOf(key)
        if (index > -1) {
          selectedRowKeys.splice(index, 1)
        }
      }
    } else {
      if (selected) {
        const allIds = this.props.data.map((val) => val[this.props.rowKey])
        selectedRowKeys = [...allIds]
      } else {
        selectedRowKeys = []
      }
    }

    // if `selectedRowKeys` is uncontrolled, update internal state
    // if (this.props.selectedRowKeys === undefined) {
    this.setState({ selectedRowKeys })
    // }
    if (this.props.onRowSelect) {
      this.props.onRowSelect({ selected, rowData, rowIndex })
    }
    if (this.props.onSelectedRowsChange) {
      this.props.onSelectedRowsChange(selectedRowKeys)
    }
  }

  _rowClassName = ({ rowData, rowIndex }) => {
    const { rowClassName, rowKey } = this.props
    const { selectedRowKeys } = this.state
    const rowClass = rowClassName ? callOrReturn(rowClassName, { rowData, rowIndex }) : ''
    const key = rowData[rowKey]
    return [rowClass, selectedRowKeys.includes(key) && 'row-selected'].filter(Boolean).concat(' ')
  }

  render() {
    const {
      columns,
      children,
      selectable,
      selectionColumnProps,
      onRowSelect,
      onSelectedRowsChange,
      ...rest
    } = this.props
    const { selectedRowKeys } = this.state
    // you'd better memoize this operation
    let _columns = columns || normalizeColumns(children)

    if (selectable) {
      const selectionColumn = {
        className: 'selection',
        width: 25,
        flexShrink: 0,
        resizable: false,
        frozen: Column.FrozenDirection.LEFT,
        cellRenderer: SelectionCell,
        headerRenderer: SelectionCell,
        ...selectionColumnProps,
        key: '__selection__',
        rowKey: this.props.rowKey,
        selectedRowKeys,
        onChange: this._handleSelectChange,
      }
      _columns = [selectionColumn, ..._columns]
    }
    return <BaseTable {...rest} columns={_columns} rowClassName={this._rowClassName} />
  }
}

export default SelectableTable
