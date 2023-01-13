import React, { useContext } from 'react'
import clsx from 'clsx'
import { withTheme } from 'styled-components'
import ReactTexty from 'react-texty'

import { StyledCell, StyledListTableRow } from './styled'
import Label from '../../atoms/Label'
import { ScreenContext } from '../..'
import Typography from '../../atoms/Typography'
import { getDescendantProp } from '../../utils'
import SelectionCell from '../../organisms/Table/components/SelectionCell'
import { getBrandLogoWithState, getImage } from '../CardTableItem/CardTableItem'

const ListTableRow = ({
  index,
  cellProps,
  columns,
  className,
  data,
  editMode,
  onItemSelect,
  selectable,
  selectedRowKeys,
  type,
}) => {
  const { screenUp } = useContext(ScreenContext) || {}

  const onCheckboxChange = (checked) => {
    onItemSelect({ selected: checked, rowData: data, rowIndex: index })
  }

  if (typeof data === 'string') {
    return (
      <StyledListTableRow screenUp={screenUp} className={clsx(className, editMode && 'editMode')}>
        <Typography text={data} />
      </StyledListTableRow>
    )
  }

  const miniLogo = data?.photos?.miniLogos?.active?.[0]
  const logo = miniLogo || data?.photos?.logos?.active?.[0]

  return (
    <StyledListTableRow screenUp={screenUp} className={clsx(className, editMode && 'editMode')}>
      <StyledCell screenUp={screenUp} width="3vw" className="checkbox">
        {selectable && (
          <SelectionCell
            rowData={data}
            rowIndex={index}
            column={{ onChange: onCheckboxChange, selectedRowKeys, rowKey: 'id' }}
            container={{ props: {} }}
          />
          // <Checkbox
          //   checked={rowIndex ? selectedRowKeys.includes(rowData[rowKey]) : container.props.isAllSelected}
          //   handleChange={onCheckboxChange}
          //   variant="primary"
          //   onClick={e => e.stopPropagation()}
          // />
        )}
      </StyledCell>
      {columns?.map((column) => {
        const value = getDescendantProp(data, column?.dataKey || '')

        const renderedValue = column.cellRenderer
          ? column.cellRenderer({ cellData: value, column, rowData: data, ...cellProps })
          : value

        if (column.key === 'state') {
          if (type === 'brands') {
            return (
              <StyledCell className="brandWithState" key="custom">
                {getBrandLogoWithState(renderedValue, data.id, miniLogo ? 'minilogos' : 'logos', logo, 45)}
              </StyledCell>
            )
          } else if (type === 'items') {
            return (
              <StyledCell className="itemImageWithState">
                {renderedValue}
                {getImage(data, 65, 60, 'itemImage')}
                {/*<Image*/}
                {/*  className="itemImage"*/}
                {/*  src={buildImagePath('items', data.id, 'general', data.photos?.general?.active?.[0])}*/}
                {/*  loading*/}
                {/*  radius={2}*/}
                {/*  height={65}*/}
                {/*  width={60}*/}
                {/*  imagekitParams={IMAGEKIT_PARAMS_CONFIG.components.cardTableItemPhoto}*/}
                {/*/>*/}
              </StyledCell>
            )
          }
        }

        return (
          <StyledCell
            key={column.dataKey}
            className="data"
            screenUp={screenUp}
            width={`${column.width}px`}
            flexGrow={column.flexGrow}
          >
            <Label text={column.headerRenderer({ column })} />
            <Typography component={ReactTexty} type="caption1" className="listViewValue">
              {renderedValue || value}
            </Typography>
          </StyledCell>
        )
      })}
    </StyledListTableRow>
  )
}

export default withTheme(ListTableRow)
