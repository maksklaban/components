import styled from 'styled-components'
import getTokens from '../../utils/getTokens'

export const StyledSlider = styled.div`
  .rc-slider-rail {
    background-color: ${({ theme: { color } }) => color.general.gray2};
    height: 4px;
  }

  .rc-slider-track {
    height: 4px;
    background-color: ${({ theme: { color } }) => color.secondary.main};
  }

  .rc-slider-handle {
    box-shadow: 0 0 6px #eceef0;
    border: 1px solid ${({ theme: { color } }) => color.general.gray1};
    background-color: ${({ theme: { color } }) => color.general.light};
    width: 20px;
    height: 20px;
    margin-top: -9px;

    &.rc-slider-handle-dragging {
      box-shadow: 0 0 6px #eceef0;
      border: 1px solid ${({ theme: { color } }) => color.general.gray1};
      background-color: ${({ theme: { color } }) => color.general.light};
    }
  }

  .rc-slider-dot {
    display: none;
  }

  .rc-slider-mark {
    ${getTokens(`typography-body2-black-large`)};
  }
`
