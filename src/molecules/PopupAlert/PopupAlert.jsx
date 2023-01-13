import React, { useEffect } from 'react'
import { withTheme } from 'styled-components'
import { PropTypes as T } from 'prop-types'

import { StyledPopupAlert } from './styled'
import Icon from '../../atoms/Icon'

const MAP_TYPE_TO_COLOR = {
  default: 'general.dark',
  new: 'status.new',
  success: 'status.success',
  warning: 'status.warning',
  error: 'status.error',
}

const PopupAlert = ({ children, content, id, onClose, position, theme: { color }, timeout, type }) => {
  const backgroundColor = MAP_TYPE_TO_COLOR[type] || 'general.dark'
  const splitThemeColor = backgroundColor.split('.')

  useEffect(() => {
    const closeId = setTimeout(() => {
      onClose(id)
    }, timeout)

    return () => {
      clearTimeout(closeId)
    }
  }, [id, onClose, timeout])

  return (
    <StyledPopupAlert splitThemeColor={splitThemeColor} className={position}>
      {children || content}
      <Icon
        name="cross"
        wrapperColor={color[splitThemeColor[0]][splitThemeColor[1]]}
        fill={color.general.light}
        height={18}
        width={18}
        onClick={() => onClose(id)}
      />
    </StyledPopupAlert>
  )
}

export default withTheme(PopupAlert)

PopupAlert.propTypes = {
  content: T.string,
  position: T.oneOf(['top', 'bottom']),
  type: T.oneOf(['default', 'new', 'success', 'warning', 'error']),
}

PopupAlert.defaultProps = {
  position: 'top',
  type: 'default',
}
