import React from 'react'
import { withTheme } from 'styled-components'
import { PropTypes as T } from 'prop-types'

import { StyledPopupAlerts } from './styled'
import PopupAlert from '../../molecules/PopupAlert'

const PopupAlerts = ({ children, closeAction, popupAlerts, position, t, ...rest }) => {
  return (
    <StyledPopupAlerts className={position}>
      {children ||
        popupAlerts.map((alert) => (
          <PopupAlert
            position={position}
            onClose={closeAction}
            key={alert.id}
            {...alert}
            content={alert.contentKey ? t(alert.contentKey) : alert.content}
            {...rest}
          />
        ))}
    </StyledPopupAlerts>
  )
}

export default withTheme(PopupAlerts)

PopupAlerts.propTypes = {
  popupAlerts: T.array,
  position: T.oneOf(['top', 'bottom']),
  t: T.func.isRequired,
}

PopupAlerts.defaultProps = {
  popupAlerts: [],
  position: 'top',
}
