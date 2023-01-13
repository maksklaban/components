import styled from 'styled-components'

export const StyledScreensContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  & .prevPage {
    top: ${({ windowHeight }) => windowHeight}px;
  }

  & .visiblePage {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`

export const StyledBlackout = styled.div`
  display: block;
  background: #000;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`

export const StyledScreen = styled.div`
  transform: translateZ(0);
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0s ease, opacity 0s ease;
  backface-visibility: hidden;
  z-index: ${({ zIndex }) => zIndex};
`
