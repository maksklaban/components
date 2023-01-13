import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledSwitch, StyledSwitchLabel } from './styled'
import Typography from '../../atoms/Typography'

const Switch = ({
  initialChecked,
  checked = false,
  disabled,
  label,
  margin,
  onChange,
  readOnly,
  theme,
  ...props
}) => {
  const [stateChecked, setStateChecked] = useState(initialChecked || false)

  const onClick = () => {
    setStateChecked((prev) => !prev)
    onChange && onChange(!stateChecked)
  }
  useEffect(() => {
    setStateChecked(checked)
  }, [checked])

  return (
    <StyledSwitchLabel htmlFor="switch" margin={margin} className={clsx(disabled && 'disabled')}>
      <StyledSwitch
        checked={stateChecked}
        onChange={!disabled && !readOnly && onClick}
        disabled={disabled}
        readOnly={readOnly}
        uncheckedIcon={false}
        checkedIcon={false}
        offColor={theme.color.general.gray2}
        onColor={theme.color.primary.main}
        activeBoxShadow={`0px 2px 5px ${theme.color.primary.darker}`}
        boxShadow="0px 2px 5px rgba(4, 3, 4, 0.25)"
        offHandleColor={theme.color.general.light}
        onHandleColor={theme.color.general.light}
        handleDiameter={20}
        height={24}
        width={40}
        className="switch"
        id="switch"
      />
      <Typography type="body2" text={label} />
    </StyledSwitchLabel>
  )
}

export default withTheme(Switch)
