import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { StyledHeaderMenuIcon } from './styled'
import Icon from '../../atoms/Icon'

const HeaderMenuIcon = ({
  fill,
  className,
  opened,
  iconName,
  onClick,
  width,
  wrapperColor,
  ...otherProps
}) => {
  const [clicked, setClicked] = useState(opened)

  const onIconClick = useCallback(
    (e) => {
      setClicked((prevState) => !prevState)
      if (onClick) {
        onClick()
      }
    },
    [onClick]
  )

  useEffect(() => {
    setClicked(opened)
  }, [opened])

  return (
    <StyledHeaderMenuIcon className={className} onClick={onIconClick} {...otherProps}>
      <Icon
        wrapperColor={wrapperColor}
        width={width}
        name={iconName || 'hamburgerMenu'}
        fill={fill}
        className={clsx(clicked && 'clicked')}
      />
    </StyledHeaderMenuIcon>
  )
}

export default HeaderMenuIcon

HeaderMenuIcon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
}

HeaderMenuIcon.defaultProps = {
  fill: '',
}
