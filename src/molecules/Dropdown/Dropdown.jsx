import React, { useState } from 'react'

import { StyledDropdown, StyledMenu } from './styled'
import { HeaderMenuIcon } from '../../index'
import clsx from 'clsx'

const DropdownMenu = ({ children, buttonProps, MenuButton: MenuButtonProp }) => {
  const [menuOpened, setMenuOpened] = useState(false)

  const MenuButton = MenuButtonProp || HeaderMenuIcon

  const onBtnClick = () => {
    setMenuOpened((prev) => !prev)
  }

  return (
    <StyledDropdown>
      <MenuButton onClick={onBtnClick} opened={menuOpened} {...buttonProps} />
      <StyledMenu className={clsx(menuOpened && 'opened')} onClick={() => setMenuOpened(false)}>
        {children}
      </StyledMenu>
    </StyledDropdown>
  )
}

export default DropdownMenu
