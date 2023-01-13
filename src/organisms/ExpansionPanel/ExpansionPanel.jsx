import React, { useState } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledDetailsWrapper, StyledExpansionPanel, StyledHeaderWrapper } from './styled'
import TextPanel from '../../molecules/TextPanel'
import Icon from '../../atoms/Icon'

const ExpansionPanel = (props) => {
  const {
    className,
    children,
    disabled,
    align,
    header,
    details,
    headerBackgroundColor,
    headerRightIcon,
    headerLeftIcon,
    headerPanelRightIcon,
    detailsIcon,
    detailsBackgroundColor,
    size,
    type,
    arrowPosition,
    bordered,
    initialOpened,
    isHidden,
    marginBottomWhenOpened,
    invertedDetails,
    invertedHeader,
    withChevronInHeader,
    ...otherProps
  } = props

  const [opened, setOpened] = useState(initialOpened)

  const toggleOpened = () => {
    setOpened((prevValue) => !prevValue)
  }

  const isColored = type === 'colored'
  const isDark = type === 'dark'

  if (isHidden) {
    return children
  }

  return (
    <StyledExpansionPanel
      marginBottomWhenOpened={marginBottomWhenOpened}
      align={align}
      className={clsx(
        className,
        arrowPosition && `${arrowPosition}Arrow`,
        opened && 'opened',
        size,
        'expansionPanel'
      )}
      {...otherProps}
    >
      <StyledHeaderWrapper className={opened && 'opened'} onClick={disabled ? undefined : toggleOpened}>
        {headerLeftIcon}
        <TextPanel
          arrowPosition={arrowPosition}
          type={isColored && opened ? 'primary' : isDark ? 'gray2' : 'gray1'}
          className="header text"
          bordered={bordered}
          iconRight={
            headerPanelRightIcon ||
            (withChevronInHeader && <Icon name="chevronDown" className="headerIcon" />)
          }
          title={header}
          inverted={opened && invertedHeader}
          backgroundColor={opened ? headerBackgroundColor : undefined}
        />
        {headerRightIcon}
      </StyledHeaderWrapper>
      {opened &&
        (children || (
          <StyledDetailsWrapper className="details">
            <TextPanel
              type={isColored ? 'secondary' : isDark ? 'gray2' : 'gray1'}
              arrowPosition={arrowPosition && (arrowPosition === 'left' ? 'right' : 'left')}
              className="text"
              bordered={bordered}
              backgroundColor={detailsBackgroundColor}
              inverted={opened && invertedDetails}
            >
              {details}
            </TextPanel>
            {detailsIcon}
          </StyledDetailsWrapper>
        ))}
    </StyledExpansionPanel>
  )
}

export default ExpansionPanel

ExpansionPanel.propTypes = {
  align: T.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  arrowPosition: T.oneOf(['left', 'right']),
  children: T.node,
  className: T.string,
  disabled: T.bool,
  header: T.oneOfType([T.string, T.object]),
  headerBackgroundColor: T.string,
  detailsBackgroundColor: T.string,
  marginBottomWhenOpened: T.string,
  size: T.oneOf(['small', 'big']),
  type: T.oneOf(['light', 'dark', 'colored', 'custom']),
  withChevronInHeader: T.bool,
}

ExpansionPanel.defaultProps = {
  marginBottomWhenOpened: '88px',
  size: 'big',
  type: 'light',
  withChevronInHeader: true,
}
