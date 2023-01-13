import React, { useCallback } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledLink } from './styled'
import Icon from '../Icon'

const UiLink = (props) => {
  const {
    as,
    className,
    children,
    customColor,
    disabled,
    href,
    hovered,
    inverted,
    isSimpleLink,
    iconName,
    iconPosition,
    Link,
    noStyles,
    onClick,
    rel,
    selected,
    target,
    text,
    theme,
    themeColor,
    type,
    to,
    withBorder,
    ...otherProps
  } = props
  const splitThemeColor = themeColor.split('.')

  const getIcon = useCallback(
    () => (
      <Icon
        name={iconName}
        className="icon"
        fill={inverted ? theme.color.general.light : theme.color.primary.main}
      />
    ),
    [inverted, hovered]
  )

  return (
    <StyledLink
      type={type}
      themeColor={splitThemeColor}
      customColor={customColor}
      inverted={inverted}
      className={clsx(
        className,
        type,
        disabled && 'disabled',
        selected && 'selected',
        hovered && 'hovered',
        noStyles && 'noStyles',
        withBorder && 'withBorder',
        'link'
      )}
      onClick={disabled ? undefined : onClick}
      {...otherProps}
    >
      {iconPosition === 'left' && getIcon()}

      {isSimpleLink || !Link ? (
        <a href={href} target={target || '_blank'} rel={rel || 'noreferrer noopener'}>
          {children || text}
        </a>
      ) : (
        <Link href={href} as={as} target={target} rel={rel} to={to}>
          {children || text}
        </Link>
      )}
      {iconPosition === 'right' && getIcon()}
    </StyledLink>
  )
}

export default withTheme(UiLink)

UiLink.propTypes = {
  children: T.node,
  className: T.string,
  customColor: T.string,
  disabled: T.bool,
  hovered: T.bool,
  href: T.string,
  inverted: T.bool,
  selected: T.bool,
  target: T.string,
  text: T.oneOfType([T.string, T.object]),
  themeColor: T.oneOf(['general.gray4', 'primary.main', 'general.dark', 'status.new']),
  type: T.oneOf(['main', 'smaller', 'menu']),
  withBorder: T.bool,
}

UiLink.defaultProps = {
  themeColor: 'general.dark',
  type: 'main',
}
