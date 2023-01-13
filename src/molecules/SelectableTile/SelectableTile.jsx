import React from 'react'
import { PropTypes as T } from 'prop-types'

import { StyledSelectableTile, StyledWrapper } from './styled'
import Checkbox from '../Checkbox'
import Typography from '../../atoms/Typography'
import clsx from 'clsx'

const SelectableTile = ({
  checked,
  children,
  handleChange,
  name,
  onClick,
  secondRow,
  tileName,
  type,
  value,
  variant,
  withSelectedBorder,
  ...otherProps
}) => {
  return (
    <StyledWrapper className="selectableTile" onClick={onClick}>
      <StyledSelectableTile
        className={clsx(checked && 'selected', withSelectedBorder && 'withSelectedBorder')}
      >
        <div className="flexRow">
          <Checkbox
            checked={checked}
            name={name}
            handleChange={handleChange}
            type={type}
            variant={variant}
            value={value}
            className="selectionInput"
            {...otherProps}
          />
          {children}
        </div>
        {secondRow}
      </StyledSelectableTile>
      <Typography type="caption2" text={tileName} />
    </StyledWrapper>
  )
}

export default SelectableTile

SelectableTile.propTypes = {
  type: T.string.isRequired,
  variant: T.oneOf(['primary', 'secondary']),
  withSelectedBorder: T.bool,
}

SelectableTile.defaultProps = {
  type: 'checkbox',
  variant: 'primary',
  withSelectedBorder: true,
}
