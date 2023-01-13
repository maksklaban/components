import styled from 'styled-components'

export const StyledBackground = styled.div`
  transition: background-color 0.3s ease-in;
  background-color: transparent;
  z-index: -1;

  &.shown {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease-in;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
  }
`

export const StyledDrawer = styled.div`
  display: none;
  //position: absolute;
  //top: ${({ top }) => top}px;
  width: ${({ width }) => width};
  z-index: 4;
  height: 100vh;
  background-color: ${({ theme: { color } }) => color.general.light};
  transition: transform 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  &.opened {
    overflow-y: auto;
    // position: ${({ absolutePositioned }) => (absolutePositioned ? 'absolute' : 'relative')};
    & > div {
      overflow-x: hidden;
    }
  }

  &.left {
    transform: translateX(-105%);
    .closeIcon {
      right: 0;
    }
    &.opened {
      transform: translateX(0);
    }
  }

  &.right {
    transform: translateX(100%);
    .closeIcon {
      right: 0;
    }
    &.opened {
      transform: translateX(0);
      //transform: translateX(calc(100vw - 100%));
    }
  }

  &.displayed {
    display: block;
    //will-change: transform;
  }

  .closeIcon {
    position: absolute;
    padding: ${({ closeIconPadding }) => closeIconPadding};
    cursor: pointer;
  }

  @media only screen and (max-width: ${({ width }) => width}) {
    width: 100vw;

    &.right {
      //right: -100vw;
    }
  }
`

export const StyledToggleHandle = styled.div`
  background-color: ${({ theme }) => theme.color.primary.main};
  border-radius: 0 5px 5px 0;
  height: 60px;
  width: 16px;
  position: absolute;
  top: 35vh;
  z-index: 5;
  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  cursor: pointer;

  &.opened {
    background-color: ${({ theme, handleColor }) => handleColor || theme.color.general.dark};
  }

  &:after {
    content: '';
    height: 18px;
    width: 4px;
    left: 6px;
    top: calc(50% - 8px);
    position: absolute;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.color.general.light};
  }

  &.left {
    left: 0;
    &.opened {
      left: 100%;
    }
  }

  &.right {
    right: 0;
    &.opened {
      right: 100%;
    }
  }
`
