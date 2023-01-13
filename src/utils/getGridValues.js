import { css } from 'styled-components'

const getGridValues = (theme, key) => {
  if (!theme.grid[key]) {
    return
  }
  const { count: columnsCount, columnWidth, gapWidth } = theme.grid[key].columns
  let gridColGap = gapWidth
  let gridAutoCols = '1fr'

  if (columnWidth) {
    const gapsCount = columnsCount - 1
    const gapToColumnWidth = gapWidth / columnWidth
    const gapsAsColumnsPartCount = gapsCount * gapToColumnWidth
    const columnPercentWidth = 100 / (columnsCount + gapsAsColumnsPartCount)
    gridColGap = `${columnPercentWidth * gapToColumnWidth}%`
    gridAutoCols = `${columnPercentWidth}%`
  }

  return css`
    grid-template-columns: ${`[start] 1fr repeat(${columnsCount - 2}, 1fr) 1fr [end]`};
    grid-column-gap: ${gridColGap};
    grid-auto-columns: ${gridAutoCols};
  `
}

export default getGridValues
