import React, { useEffect, useState } from 'react'
import { PropTypes as T } from 'prop-types'
import { withTheme } from 'styled-components'
import clsx from 'clsx'

import Icon from '../../atoms/Icon'
import { StyledCheckboxWrapper } from './styled'
import Typography from '../../atoms/Typography'

const Checkbox = ({
  checked,
  className,
  disabled,
  fontWeight,
  handleChange,
  label,
  labelType,
  name,
  readOnly,
  theme: { color },
  type,
  value,
  variant,
  ...otherProps
}) => {
  const [stateChecked, setStateChecked] = useState(checked || false)

  const onChange = (e) => {
    handleChange && handleChange(e.target.checked, e)
    setStateChecked(e.target.checked)
  }

  const onLabelClick = () => {
    setStateChecked((prev) => (type === 'radio' ? true : !prev))
    handleChange && handleChange(type === 'radio' ? true : !stateChecked, { target: { name, value } })
  }

  useEffect(() => {
    setStateChecked(checked)
  }, [checked])

  return (
    <StyledCheckboxWrapper className={clsx(className, disabled && 'disabled', type)}>
      <input
        type={type}
        checked={stateChecked}
        disabled={disabled}
        name={name}
        onChange={disabled || readOnly ? undefined : onChange}
        readOnly={readOnly}
        value={value}
        {...otherProps}
      />
      {stateChecked ? (
        <Icon name={`${type}Checked`} fill={color[variant].main} />
      ) : (
        <Icon name={`${type}Unchecked`} />
      )}
      {label && (
        <Typography
          type={labelType || 'body1'}
          onClick={!disabled && !readOnly && onLabelClick}
          fontWeight={fontWeight}
        >
          {label}
        </Typography>
      )}
    </StyledCheckboxWrapper>
  )
}

export default withTheme(Checkbox)

Checkbox.propTypes = {
  type: T.string.isRequired,
  variant: T.oneOf(['primary', 'secondary']),
}

Checkbox.defaultProps = {
  type: 'checkbox',
  variant: 'secondary',
}
