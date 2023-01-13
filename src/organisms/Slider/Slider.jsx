/**
 *
 * Slider
 *
 */

import React, { useEffect, useState } from 'react'
import T from 'prop-types'
import cs from 'clsx'
// import isEqual from 'lodash/isEqual';
import RCSlider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { StyledSlider } from './styled'

// import s from './styles.css';

const Slider = ({ customClass, range, min, max, type, value, ...restProps }) => {
  const [stateValue, setStateValue] = useState(value || (range ? [10, 10] : 10))

  // componentWillReceiveProps(nextProps) {
  //   if (!isEqual(this.props.value, nextProps.value)) {
  //     this.setState({ value: nextProps.value })
  //   }
  // }

  useEffect(() => {
    if (range ? value && !isValueRangeEqual(value, stateValue) : stateValue !== value) {
      setStateValue(value)
    }
  }, [value])

  const isValueRangeEqual = (value1, value2) => value1[0] === value2[0] && value1[1] === value2[1]

  const updateValue = (newValue) => setStateValue(newValue)

  const valueIsDefault = range ? isValueRangeEqual([10, 10], stateValue) : stateValue === 10

  let valueMarks
  if (stateValue) {
    valueMarks = Array.isArray(stateValue)
      ? stateValue.reduce((marks, val) => ({ ...marks, [val]: val }), {})
      : { [value]: stateValue }
  }

  const marks = {
    [Math.floor(min)]: Math.floor(min),
    [Math.ceil(max)]: Math.ceil(max), // default step is 1, fractional numbers cause bugs.
    ...valueMarks,
  }

  const SliderComponent = range ? Range : RCSlider

  return (
    <StyledSlider
      as={SliderComponent}
      className={cs(
        customClass,
        'default',
        !valueIsDefault && 'activeSlider',
        type === 'distance' && 'distSlider'
      )}
      marks={marks}
      min={Math.floor(min)}
      max={Math.ceil(max)}
      type={type}
      value={stateValue}
      onChange={updateValue}
      {...restProps}
    />
  )
}

export default Slider

Slider.propTypes = {
  customClass: T.oneOfType([T.string, T.object]),
  min: T.number,
  max: T.number,
  range: T.bool,
  value: T.oneOfType([T.number, T.array]),
  type: T.string,
}

Slider.defaultProps = {
  customClass: '',
  min: 1,
  max: 100,
  range: true,
}
