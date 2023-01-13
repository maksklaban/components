import styled from 'styled-components'

export const StyledConveyorWrapper = styled.div`
  display: grid;
  overflow: hidden;
  padding-top: 10px;
`

export const StyledConveyorItems = styled.div`
  position: relative;
  transform: translate3d(0, 0, 0);
  overflow: unset;

  @keyframes slideshow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  display: flex;
  scroll-behavior: smooth;
  animation: slideshow 45s linear infinite;

  & .item {
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    border-radius: ${({ theme }) => theme.size.border.radius.main};

    &:hover {
      transform: translate3d(0, -10px, 0);
    }
  }
`
