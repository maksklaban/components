import React from 'react'
import { withTheme } from 'styled-components'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledTag } from './styled'
import Icon from '../Icon'

const Tag = ({
  backgroundColor,
  children,
  fontSize,
  fontWeight,
  iconRight,
  isOutlined,
  onCrossClick,
  removeProps,
  selected,
  text,
  type,
  withBackgroundOpacity,
  withCrossIcon,
  ...rest
}) => (
  <StyledTag
    className={clsx(
      'tag',
      selected && 'selected',
      isOutlined && 'isOutlined',
      withBackgroundOpacity && 'withBackgroundOpacity',
      type
    )}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    type={type}
    {...rest}
  >
    {children || text}
    {iconRight}
    {withCrossIcon && (
      <Icon
        name="cross"
        height={8}
        width={8}
        // wrapperColor={
        //   colorKey ? theme.color.general[colorKey] : theme.components.tag.standard.primary.large['background-color']
        // }
        className="crossIcon"
        onClick={onCrossClick}
        {...removeProps}
      />
    )}
  </StyledTag>
)

export default withTheme(Tag)

Tag.propsTypes = {
  backgroundColor: T.string,
  isOutlined: T.bool,
  type: T.oneOf(['primary', 'gray']),
  withBackgroundOpacity: T.bool,
  withCrossIcon: T.bool,
}

Tag.defaultProps = {
  removeProps: {},
  type: 'gray',
}
