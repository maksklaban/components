import React, { useCallback, useEffect, useState } from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { Icon, HeaderMenuIcon } from '@goodzyk/components'

import { StyledHeaderMenuMobile, StyledMenu } from './styled'

const HeaderMenuMobile = ({
  backgroundColor,
  className,
  children,
  onClick,
  getLogo,
  fixed,
  alignItems,
  justifyContent,
  menuContent,
  menuIconName,
  theme,
  inverted,
  isTablet,
  iconWidth,
  shouldCloseMenu,
  withSearch,
  ...otherProps
}) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [searchOpened, setSearchOpened] = useState(false)

  const onIconClick = useCallback(
    (icon) => () => {
      if (icon === 'menu') {
        setMenuOpened((prevState) => !prevState)
        if (withSearch) {
          setSearchOpened(false)
        }
      } else {
        if (withSearch) {
          setSearchOpened((prevState) => !prevState)
        }
        setMenuOpened(false)
      }
      if (onClick) {
        onClick()
      }
    },
    [onClick]
  )

  useEffect(() => {
    if (shouldCloseMenu) {
      setMenuOpened(false)
    }
  }, [shouldCloseMenu])

  return (
    <StyledHeaderMenuMobile
      backgroundColor={
        backgroundColor || (menuOpened && theme.color.general[inverted ? 'dark' : 'light']) || undefined
      }
      alignItems={alignItems}
      justifyContent={justifyContent}
      fixed={fixed}
      className={className}
      {...otherProps}
    >
      {getLogo && getLogo(!menuOpened && inverted)}
      {!isTablet && withSearch && (
        <>
          <div style={{ flexGrow: 1 }} />
          <Icon name="search" className="searchIcon" onClick={onIconClick('search')} width={20} height={20} />
        </>
      )}
      {children}
      <HeaderMenuIcon
        wrapperColor={backgroundColor}
        width={iconWidth}
        fill={theme.color.general[inverted ? 'light' : 'dark']}
        iconName={menuIconName}
        onClick={onIconClick('menu')}
        opened={shouldCloseMenu}
      />
      <StyledMenu
        menuBackgroundColor={inverted && theme.color.general.dark}
        className={clsx(
          'menu',
          (menuOpened || (searchOpened && !isTablet)) && 'opened',
          searchOpened && 'search'
        )}
      >
        {menuOpened && menuContent}
      </StyledMenu>
    </StyledHeaderMenuMobile>
  )
}

export default withTheme(HeaderMenuMobile)

HeaderMenuMobile.propTypes = {
  alignItems: T.string,
  backgroundColor: T.string,
  children: T.node,
  className: T.string,
  menuBackgroundColor: T.string,
  fixed: T.bool,
  inverted: T.bool,
  justifyContent: T.string,
  getLogo: T.func,
  onClick: T.func,
}

HeaderMenuMobile.defaultProps = {
  backgroundColors: '',
  menuBackgroundColor: '',
}
