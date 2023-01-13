import React, { useEffect, useRef, useState } from 'react'
// import { Overlay } from 'react-overlays'
import styled from 'styled-components'
import ReactTexty from 'react-texty'

import Input from '../../../molecules/Input'

const CellContainer = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  overflow: hidden;
  margin: 0 -5px;
  padding: 5px;
  position: relative;

  .inputWrapper {
    margin-bottom: 0;
  }
`

const EditableCell = ({
  cellData,
  container,
  onBlur,
  onChange,
  onSubmit,
  rowData,
  rowIndex,
  rowKey,
  column,
  useRowKeyInName,
  // ...rest
}) => {
  const [valueState, setValueState] = useState(cellData)
  // const value = cellData
  const [editing, setEditing] = useState(false)
  const targetRef = useRef(null)
  const inputRef = useRef(null)

  // const  container.props.selectedRowKeys
  // console.log(editing, targetRef, cellData, value)
  useEffect(() => {
    setEditing(true)
  }, [targetRef])

  // const handleClick = e => {
  //   e.stopPropagation()
  //   setEditing(true)
  // }

  // const handleHide = () => {
  //   setEditing(false)
  // }

  const handleChange = (e) => {
    setValueState(e.target.value)
    if (onChange) {
      onChange(e, column)
    }
  }

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e, column)
    }
  }

  const handleSubmit = (value) => {
    setEditing(false)
    if (onSubmit) {
      // console.log(rowData, rowKey, rowData[rowKey], value)
      onSubmit(rowData[rowKey], value, column)
    }
  }

  return (
    <CellContainer ref={targetRef}>
      {!editing && <ReactTexty>{valueState === 0 ? '0' : valueState}</ReactTexty>}
      {editing && targetRef.current && (
        // <Overlay
        //   show
        //   flip
        //   // rootClose
        //   container={container.tableNode}
        //   target={targetRef.current}
        //   // onHide={handleHide}
        // >
        //   {({ props, placement }) => (
        //     <div
        //       {...props}
        //       style={{
        //         ...props.style,
        //         width: targetRef.current.offsetWidth,
        //         top: placement === 'top' ? targetRef.current.offsetHeight : -targetRef.current.offsetHeight,
        //       }}
        //     >
        <Input
          ref={inputRef}
          submitByEnterPressed={false}
          name={`${useRowKeyInName ? rowData[rowKey] : rowIndex}.${column.dataKey}`}
          withBorder
          value={valueState}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onBlur={handleBlur}
        />
        //     </div>
        //   )}
        // </Overlay>
      )}
    </CellContainer>
  )
}

export default EditableCell
