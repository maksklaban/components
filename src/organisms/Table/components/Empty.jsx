import React from 'react'

import { StyledEmptyTable } from '../styled'

const EmptyTable = ({ className, text }) => {
  return <StyledEmptyTable className={className}>{text}</StyledEmptyTable>
}

export default EmptyTable
