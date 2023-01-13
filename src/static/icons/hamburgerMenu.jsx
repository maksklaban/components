import React from 'react'
import styled from 'styled-components'

const StyledMenuIcon = styled.div`
  background-color: ${({ wrapperColor, theme }) => wrapperColor || theme.color.general.light};
  border-radius: 50%;
  height: 44px;
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    display: block;
    width: ${({ width }) => width || 22}px;
    height: 2px;
    background-color: ${({ fill, theme }) => fill || theme.color.primary.main};
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const hamburgerMenu = ({ wrapperColor, fill, width }) => {
  return (
    <StyledMenuIcon width={width} wrapperColor={wrapperColor} fill={fill}>
      <span />
      <span />
      <span />
    </StyledMenuIcon>
  )
}

export default hamburgerMenu
