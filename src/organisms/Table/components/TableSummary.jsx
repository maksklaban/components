import React, { Fragment } from 'react'
import { withTheme } from 'styled-components'

import { StyledTableSummary } from '../styled'
import Typography from '../../../atoms/Typography'

const TableSummary = ({ headerHeight, summaryData, theme }) => {
  return (
    <StyledTableSummary headerHeight={headerHeight} className="summary">
      <Typography type="caption2" className="summaryTitle">
        {summaryData.title}
      </Typography>
      {summaryData.data.map((item) => (
        <Fragment key={item.label}>
          <Typography type="caption2" color={theme.color.general.gray5} className="summaryLabel">
            {item.label}:
          </Typography>
          <Typography type="caption2">{item.value}</Typography>
        </Fragment>
      ))}
    </StyledTableSummary>
  )
}

export default withTheme(TableSummary)
