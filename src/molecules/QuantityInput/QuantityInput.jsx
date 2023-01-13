import React, { useEffect, useState } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledQuantityInput, StyledWrapper, StyledButtonWrapper } from './styled'
import Icon from '../../atoms/Icon'

const toString = (value) => {
  return typeof value === 'number' ? value.toString(10) : value
}

const toNumber = (value) => {
  if (value && typeof value === 'string') {
    return +value
  }
  return value
}

const QuantityInput = ({
  // borderColor,
  fullWidth,
  onChange,
  className,
  disabled,
  initialValue,
  value,
  min,
  max,
  placeholder,
  step,
  // width,
  withBorder,
  hideButtons,
  variant,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(toString(initialValue) || '')

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setInputValue(toString(value) || '')
    }
  }, [value])

  useEffect(() => {
    if (typeof inputValue === 'string' && inputValue?.charAt(0) === '0' && inputValue?.length > 1) {
      setInputValue(inputValue.substring(1))
    }
  }, [inputValue])

  const checkMinMax = (inputValue) => {
    return !((min !== undefined && +inputValue < min) || (max !== undefined && +inputValue > max))
  }

  const onButtonClick = (changeDirection) => (e) => {
    e.preventDefault()
    const getNewValue = (oldValue) => {
      const numValue = +oldValue + +`${changeDirection}1` * (+step || 1)
      return numValue.toString(10)
    }
    let checkPassed = checkMinMax(getNewValue(inputValue))
    if (checkPassed) {
      setInputValue((prevState) => getNewValue(prevState))

      if (onChange) {
        onChange(toNumber(getNewValue(inputValue)))
      }
    }
  }

  const onInputChange = (e) => {
    const { value } = e.target
    let checkPassed = checkMinMax(value)

    if (!isNaN(+value) && checkPassed) {
      setInputValue(value)

      if (onChange) {
        onChange(toNumber(value))
      }
    }
  }

  return (
    <StyledWrapper
      {...otherProps}
      className={clsx(className, fullWidth && 'fullWidth', disabled && 'disabled')}
      withBorder={withBorder}
    >
      <StyledQuantityInput
        step={step}
        fullWidth={fullWidth}
        type="number"
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
        variant={variant}
        disabled={disabled}
      />
      {!hideButtons && !disabled && (
        <StyledButtonWrapper variant={variant}>
          <div onClick={onButtonClick('+')}>
            <Icon name="plus" />
          </div>
          <div onClick={onButtonClick('-')}>
            <Icon name="minus" />
          </div>
        </StyledButtonWrapper>
      )}
    </StyledWrapper>
  )
}

QuantityInput.propTypes = {
  disabled: T.bool,
  errorLabel: T.string,
  hasError: T.bool,
  onChange: T.func,
  initialValue: T.oneOfType([T.string, T.number]),
  min: T.number,
  max: T.number,
  value: T.oneOfType([T.string, T.number]),
  variant: T.oneOf(['primary', 'secondary']),
}

QuantityInput.defaultProps = {
  onChange: () => {},
  variant: 'primary',
}

export default QuantityInput
