import React from 'react'
import { withTheme } from 'styled-components'

import { StyledWrapper } from './styled'
import { Input } from '../../index'

const InputGroupWithSelect = ({
  AdditionalSelect,
  className,
  initialValue,
  onInputChange,
  onRightIconClick,
  withBorder,
  withSearchIcon,
  InputComponent,
  ...rest
}) => {
  return (
    <StyledWrapper className={className}>
      {AdditionalSelect}
      {InputComponent || (
        <Input
          initialValue={initialValue}
          onRightIconClick={onRightIconClick}
          withDebounce
          withoutValidation
          withBorder={withBorder}
          rightIconName={withSearchIcon && 'search'}
          className="searchInput"
          onChange={onInputChange}
          {...rest}
        />
      )}
    </StyledWrapper>
  )
}

export default withTheme(InputGroupWithSelect)
