import React from 'react'

import Checkbox from '../../../molecules/Checkbox'

const SelectionCell = ({ rowData, rowIndex, headerIndex, column, container }) => {
  const { selectedRowKeys, rowKey } = column

  const handleChange = (checked) => {
    // console.log(checked, rowData, column, rowKey)
    const { onChange } = column
    onChange({ selected: checked, rowData, rowIndex, headerIndex })
  }

  return (
    <Checkbox
      onClick={(e) => e.stopPropagation()}
      checked={
        typeof rowIndex !== 'undefined'
          ? selectedRowKeys.includes(rowData[rowKey])
          : container.props.isAllSelected
      }
      handleChange={handleChange}
      variant="primary"
    />
  )
}

export default SelectionCell
