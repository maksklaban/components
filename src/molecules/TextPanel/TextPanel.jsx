import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledTextPanel } from './styled'
import { TEXT_ALIGN_TYPES } from '../../types'
import Typography from '../../atoms/Typography'

const TextPanel = ({
  arrowPosition,
  backgroundColor,
  bordered,
  children,
  className,
  content,
  contentTypographyProps,
  iconLeft,
  iconRight,
  inverted,
  padding,
  textAlign,
  title,
  titleTypographyProps,
  theme,
  type,
}) => {
  const textColor = type === 'gray' ? theme.color.general.dark : theme.color.status[type]

  return (
    <StyledTextPanel
      textAlign={textAlign}
      className={clsx(className, 'panel', arrowPosition && `${arrowPosition}Arrow`, bordered && 'bordered')}
      type={type}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      {children || (
        <>
          {iconLeft}
          <div>
            {title && (
              <Typography
                className="title"
                fontWeight={theme.font.weight.bold}
                component="div"
                color={inverted ? theme.color.general.light : textColor}
                {...titleTypographyProps}
              >
                {title}
              </Typography>
            )}
            {content && (
              <Typography
                className="content"
                type="body2"
                color={inverted ? theme.color.general.light : textColor}
                {...contentTypographyProps}
              >
                {content}
              </Typography>
            )}
          </div>
          {iconRight}
        </>
      )}
    </StyledTextPanel>
  )
}

export default withTheme(TextPanel)

TextPanel.propTypes = {
  arrowPosition: T.oneOf(['left', 'right']),
  backgroundColor: T.string,
  children: T.node,
  className: T.string,
  type: T.oneOf(['success', 'error', 'warning', 'gray1', 'gray2', 'primary', 'secondary']),
  content: T.oneOfType([T.string, T.element]),
  icon: T.element,
  padding: T.string,
  textAlign: T.oneOf(TEXT_ALIGN_TYPES),
  title: T.oneOfType([T.string, T.element]),
}

TextPanel.defaultProps = {
  type: 'gray1',
}
