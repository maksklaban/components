import React from 'react'
import clsx from 'clsx'

import { StyledColor } from './styled'
import Icon from '../Icon'

const Color = ({
  color,
  dataTooltip,
  disabled,
  image,
  onClick,
  readOnly,
  selected,
  size,
  withBorder,
  ...rest
}) => {
  if (!color && !image) {
    return null
  }

  return image ? (
    <Icon
      wrapperComponent={StyledColor}
      backgroundImage={image}
      borderRadius="50%"
      className={clsx('color', readOnly && 'readOnly', selected && 'selected', disabled && 'disabled')}
      data-tooltip={dataTooltip}
      onClick={disabled ? undefined : onClick}
      size={size}
      withBorder={withBorder}
      {...rest}
    />
  ) : (
    <StyledColor
      className={clsx('color', readOnly && 'readOnly', selected && 'selected', disabled && 'disabled')}
      color={typeof color === 'string' ? color : color?.key}
      data-tooltip={dataTooltip}
      onClick={disabled ? undefined : onClick}
      size={size}
      withBorder={withBorder}
      {...rest}
    />
  )
}

export default Color
