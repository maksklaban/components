import styled from 'styled-components'

export const StyledPopupAlerts = styled.div`
  position: fixed;
  z-index: 10;
  left: 50%;
  transform: translate(-50%, 0);

  &.top {
    top: 0;
  }

  &.bottom {
    bottom: 0;
  }
`
