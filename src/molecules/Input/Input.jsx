import React, { forwardRef, useEffect, useState } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import Icon from '../../atoms/Icon'
import { StyledErrorLabel, StyledInput, StyledLabel, StyledFlexRow, StyledWrapper } from './styled'
import QuantityInput from '../QuantityInput'
import RichTextEditor from '../../organisms/RichTextEditor'
import { useDebounce } from '../../index'

const Input = forwardRef((props, ref) => {
  const {
    boldLabel,
    className,
    disabled,
    error,
    fullWidth,
    initialValue,
    inverted,
    label,
    labelType,
    labelWidth,
    multiline,
    name,
    onChange,
    onLeftIconClick,
    onRightIconClick,
    onSubmit,
    value,
    placeholder,
    placeholderColor,
    primaryFocusColor,
    submitByEnterPressed = true,
    success,
    type,
    rightIconName,
    leftIconName,
    variant,
    withBorder,
    withDebounce,
    withoutValidation,
    ...otherProps
  } = props
  const [valueState, setValueState] = useState(initialValue || '')
  const debouncedValue = useDebounce(valueState, 300)

  const onChangeState = (e) => {
    setValueState(e.target.value)

    if (onChange && !withDebounce) {
      onChange(e)
    }
  }

  useEffect(() => {
    setValueState(value)
  }, [value])

  useEffect(() => {
    if (onChange && withDebounce) {
      onChange(debouncedValue)
    }
  }, [withDebounce, debouncedValue, onChange])

  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (submitByEnterPressed && e.keyCode === 13) {
      if (onRightIconClick) {
        onRightIconClick()
      }
      if (onLeftIconClick) {
        onLeftIconClick()
      }
      if (onSubmit) {
        onSubmit(e.target.value)
      }
    }
  }

  const getInputWithoutLeftLabel = () => {
    let InputField

    if (type === 'number') {
      InputField = <QuantityInput {...props} />
    } else if (type === 'richText' && typeof window !== 'undefined') {
      InputField = <RichTextEditor {...props} />
    } else {
      InputField = (
        <StyledInput
          onKeyDown={handleKeypress}
          as={multiline && 'textarea'}
          ref={ref}
          name={name}
          disabled={disabled}
          value={valueState}
          onChange={onChangeState}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          inverted={inverted}
          variant={variant}
          type={type}
          className={clsx(
            !!error && 'hasError',
            success && 'success',
            !!leftIconName && 'hasLeftIcon',
            multiline && 'multiline',
            withBorder && 'withBorder',
            primaryFocusColor && 'primaryFocusColor'
          )}
          {...otherProps}
        />
      )
    }

    return (
      <>
        {label && labelType === 'top' && (
          <StyledLabel className={clsx('label', variant, boldLabel && 'boldLabel', inverted && 'inverted')}>
            {label}
          </StyledLabel>
        )}
        <StyledWrapper
          variant={variant}
          fullWidth={fullWidth}
          className={clsx(
            'inputWrapper',
            inverted && 'inverted',
            variant,
            disabled && 'disabled',
            !!error && 'hasError',
            success && 'success',
            labelType === 'top' && className,
            withoutValidation && 'withoutValidation'
          )}
        >
          {!!leftIconName && (
            <Icon name={leftIconName} width={16} height={16} className="leftIcon" onClick={onLeftIconClick} />
          )}

          {InputField}

          {(error || rightIconName) && (
            <Icon
              name={rightIconName || 'error'}
              size={14}
              className="rightIcon"
              onClick={onRightIconClick}
            />
          )}
          {success && (
            <Icon
              name="checkRounded"
              borderRadius="50%"
              wrapperHeight={14}
              wrapperWidth={14}
              width={8}
              className="rightIcon success"
            />
          )}
          {!!error && <StyledErrorLabel className="error">{error}</StyledErrorLabel>}
        </StyledWrapper>
      </>
    )
  }

  return label && labelType === 'left' ? (
    <StyledFlexRow
      className={clsx(
        'labelLeft',
        variant,
        'leftLabelWrapper',
        className,
        withoutValidation && 'withoutValidation'
      )}
    >
      <StyledLabel className={clsx('label', boldLabel && 'boldLabel')} labelWidth={labelWidth}>
        {label}
      </StyledLabel>
      {getInputWithoutLeftLabel()}
    </StyledFlexRow>
  ) : (
    getInputWithoutLeftLabel()
  )
})

Input.propTypes = {
  boldLabel: T.bool,
  disabled: T.bool,
  error: T.string,
  fullWidth: T.bool,
  inverted: T.bool,
  label: T.string,
  labelType: T.oneOf(['top', 'left']),
  multiline: T.bool,
  name: T.string,
  onChange: T.func,
  placeholder: T.string,
  primaryFocusColor: T.bool,
  variant: T.oneOf(['primary', 'secondary', 'transparent']),
  withBorder: T.bool,
  withDebounce: T.bool,
  withoutValidation: T.bool,
}

Input.defaultProps = {
  error: '',
  labelType: 'top',
  labelWidth: '150px',
  onChange: () => {},
  variant: 'primary',
}

export default Input
