import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledButton } from './styled'

const Button = (props) => {
  const {
    variant,
    size,
    borderRadius,
    children,
    fullWidth,
    disableType,
    hoverType,
    text,
    disabled,
    onClick,
    className,
    uppercase,
    withIcon,
    withLetterSpacing,
    withTextShadow,
    ...otherProps
  } = props
  return (
    <StyledButton
      borderRadius={borderRadius}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      hoverType={hoverType}
      disableType={disableType}
      className={clsx(
        className,
        size,
        variant,
        disabled && 'disabled',
        fullWidth && 'fullWidth',
        withIcon && 'withIcon',
        withTextShadow && 'withTextShadow',
        uppercase && 'uppercase',
        withLetterSpacing && 'withLetterSpacing'
      )}
      {...otherProps}
    >
      {children || text}
    </StyledButton>
  )
}

export default Button

Button.propTypes = {
  borderRadius: T.string,
  children: T.node,
  className: T.string,
  disabled: T.bool,
  disableType: T.oneOf(['opacity', 'color']),
  fullWidth: T.bool,
  hoverType: T.oneOf(['lighter', 'dark']),
  onClick: T.func,
  size: T.oneOf(['small', 'medium', 'large']),
  text: T.string,
  uppercase: T.bool,
  variant: T.oneOf(['primary', 'secondary', 'success', 'bordered']).isRequired,
  withIcon: T.bool,
  withLetterSpacing: T.bool,
  withTextShadow: T.bool,
}

Button.defaultProps = {
  disableType: 'opacity',
  hoverType: 'dark',
  size: 'medium',
  uppercase: true,
  withLetterSpacing: true,
}
