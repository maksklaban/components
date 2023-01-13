import React from 'react'
import styled from 'styled-components'

const StyledMenuIcon = styled.div`
  background-color: ${({ wrapperColor, theme }) => wrapperColor || theme.color.general.light};
  border-radius: 50%;
  height: ${({ height }) => height || 16}px;
  width: ${({ width }) => width || 16}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  & span {
    display: block;
    width: ${({ width }) => width || 16}px;
    height: 2px;
    background-color: ${({ fill, theme }) => fill || theme.color.general.dark};
    margin-bottom: -2px;

    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
`

const cross = ({ wrapperColor, fill, height, width }) => {
  return (
    <StyledMenuIcon wrapperColor={wrapperColor} fill={fill} height={height} width={width}>
      <span />
      <span />
    </StyledMenuIcon>
  )
}

export default cross
