import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import { StyledTypography } from './styled'
import { TEXT_ALIGN_TYPES } from '../../types'
import Icon from '../Icon'

export const defaultTypeMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  caption1: 'h6',
  caption2: 'h6',
  caption3: 'h6',
  body1: 'span',
  body2: 'span',
}

const Typography = (props) => {
  const {
    children,
    className,
    color,
    component,
    fontFamily,
    fontSize,
    fontWeight,
    iconName,
    iconProps,
    lineHeight,
    margin,
    padding,
    textAlign,
    textDecoration,
    textTransform,
    text,
    type,
    ...otherProps
  } = props
  const Component = component || defaultTypeMapping[type] || 'span'

  return (
    <StyledTypography
      as={Component}
      type={type}
      $textAlign={textAlign}
      $textDecoration={textDecoration}
      $textTransform={textTransform}
      color={color}
      margin={margin}
      padding={padding}
      className={clsx(className, type, 'typography')}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      fontSize={fontSize}
      $lineHeight={lineHeight}
      {...otherProps}
    >
      {iconName && <Icon name={iconName} {...iconProps} />}
      {children || text}
    </StyledTypography>
  )
}

export default Typography

Typography.propTypes = {
  className: T.string,
  color: T.string,
  component: T.oneOfType([T.string, T.node, T.func]),
  fontFamily: T.string,
  fontSize: T.string,
  fontWeight: T.oneOfType([T.number, T.string]),
  lineHeight: T.string,
  margin: T.oneOfType([T.number, T.string]),
  padding: T.oneOfType([T.number, T.string]),
  textAlign: T.oneOf(TEXT_ALIGN_TYPES),
  textDecoration: T.string,
  textTransform: T.string,
  text: T.oneOfType([T.node, T.string, T.number]),
  type: T.oneOf(['h1', 'h2', 'h3', 'h4', 'caption1', 'caption2', 'caption3', 'body1', 'body2']),
}

Typography.defaultProps = {
  type: 'body1',
}
