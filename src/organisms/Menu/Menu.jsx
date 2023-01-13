import React, { useCallback, useState } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledLinkWrapper, StyledListWrapper, StyledMenu, StyledMenuItem, StyledLinkIcon } from './styled'
import Icon from '../../atoms/Icon'
import Typography from '../../atoms/Typography'
import UiLink from '../../atoms/UiLink'
import Button from '../../molecules/Button'
import List from '../../molecules/List'

const Menu = (props) => {
  const {
    isMenuSelectable,
    items,
    inverted,
    link,
    linkProps,
    value,
    menuAlign,
    className,
    isCombined,
    withGrid,
    iconPosition,
    iconName,
    symbolPosition,
    symbolName,
    menuLinkType,
    onChange,
    btnProps,
    linkIsButton,
    ListHeader,
    openToTop,
    openToRight,
    openToBottom,
    theme: { color },
  } = props
  const [isOpened, setIsOpened] = useState(false)
  const [selected, setSelected] = useState(isMenuSelectable && items[0]) // will be used if no value is passed

  const isSelected = useCallback(
    (itemId) => {
      if (!isMenuSelectable) {
        return
      }
      const selectedValue = value || selected
      return itemId === (selectedValue.id || selectedValue)
    },
    [isMenuSelectable, selected, value]
  )

  const onItemClick = useCallback(
    (item) => () => {
      if (isMenuSelectable && !value) {
        setSelected(item)
        setIsOpened(false)
      }

      if (item.onChange) item.onChange()
      if (onChange) onChange(item.id)
      if (item.onClick) {
        item.onClick(item.id)
        setIsOpened(false)
      }
    },
    [value, onChange]
  )

  const toggleMenuOpened = (opened) => () => {
    setIsOpened(opened)
  }

  const getIcon = useCallback(
    (position, name) => {
      let fill = color.general.dark
      if (inverted) fill = color.general.light
      if (isOpened) fill = color.primary.main
      return <StyledLinkIcon name={name} fill={fill} className={position} />
    },
    [color.general.dark, color.general.light, color.primary.main, iconName, inverted, isOpened]
  )

  const selectedValue = value || selected

  return (
    <StyledMenu
      onMouseOver={btnProps?.disabled ? undefined : toggleMenuOpened(true)}
      onMouseOut={toggleMenuOpened(false)}
      className={clsx(
        className,
        menuAlign,
        withGrid && 'withGrid',
        openToTop && 'openToTop',
        openToRight && 'openToRight',
        openToBottom && 'openToBottom',
        isCombined && 'combined'
      )}
      inverted={inverted}
    >
      <StyledLinkWrapper>
        {linkIsButton ? (
          <Button {...btnProps}>
            {symbolPosition === 'left' && getIcon(symbolPosition, symbolName)}
            {iconPosition === 'left' && getIcon(iconPosition, iconName)}
            {link || selectedValue.name || items.find((item) => item.id === selectedValue).name}
            {iconPosition === 'right' && getIcon(iconPosition, iconName)}
            {symbolPosition === 'right' && getIcon(symbolPosition, symbolName)}
          </Button>
        ) : (
          <>
            {symbolPosition === 'left' && getIcon(symbolPosition, symbolName)}
            {iconPosition === 'left' && getIcon(iconPosition, iconName)}
            <UiLink
              isSimpleLink
              type={menuLinkType || 'menu'}
              inverted={inverted}
              hovered={isOpened}
              text={link || selectedValue?.name || items.find((item) => item.id === selectedValue)?.name}
              {...linkProps}
            />
            {iconPosition === 'right' && getIcon(iconPosition, iconName)}
            {symbolPosition === 'right' && getIcon(symbolPosition, symbolName)}
          </>
        )}
      </StyledLinkWrapper>
      <StyledListWrapper>
        {!!items?.length && (
          <List className={clsx('menuList', isOpened && 'opened')}>
            {ListHeader}
            {items.map((item, i) => (
              <StyledMenuItem
                key={item.id || i}
                onClick={onItemClick(item)}
                className={clsx(
                  isSelected(item) && 'selected',
                  'menuItem',
                  (item.onClick || item.onChange || onChange) && 'clickable'
                )}
              >
                <Typography type="body2">{item.name}</Typography>
                {isSelected(item.id) && <Icon className="checkIcon" name="check" />}
              </StyledMenuItem>
            ))}
          </List>
        )}
      </StyledListWrapper>
    </StyledMenu>
  )
}

export default withTheme(Menu)

Menu.propsTypes = {
  btnProps: T.object,
  className: T.string,
  isCombined: T.bool,
  inverted: T.bool,
  iconName: T.string,
  iconPosition: T.oneOf(['left', 'right', 'center']),
  symbolPosition: T.oneOf(['left', 'right']),
  isMenuSelectable: T.bool,
  items: T.arrayOf(T.oneOfType([T.string, T.shape({ id: T.string, name: T.string })])),
  link: T.oneOfType([T.string, T.node]),
  menuAlign: T.oneOf(['left', 'right', 'center']),
  openToTop: T.bool,
  value: T.oneOfType([
    T.string,
    T.shape({
      id: T.string,
      name: T.string,
      onChange: T.func,
    }),
  ]),
  withGrid: T.bool,
}

Menu.defaultProps = {
  btnProps: { variant: 'secondary' },
  isMenuSelectable: true,
  items: [],
  className: '',
  isCombined: false,
  inverted: false,
  openToTop: false,
  withGrid: false,
}
