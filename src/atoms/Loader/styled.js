import styled from 'styled-components'
import { convertHexToRGBA } from '../../utils/convertHexToRgba'

export const StyledLoaderCircular = styled.div`
  position: absolute;
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size) || '30px'};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size) || '30px'};
  align-self: center;
  z-index: 2;
  ${({ withOverlay }) => withOverlay && `'top: 49vh;'`}
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}

  .loaderBg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid ${convertHexToRGBA('#c4c4c4', 0.5)};
    //border-color: #c4c4c4;
    box-sizing: border-box;
  }
  .spinnerHolder {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 50%;
    height: 50%;
    background: transparent;
    transform-origin: 100% 100%;
    box-sizing: border-box;
  }
  .loaderSpinner1 {
    width: 200%;
    height: 200%;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => convertHexToRGBA(theme.color.primary.main, 0.5)};
    box-sizing: border-box;
  }
  .loaderSpinner2 {
    width: 200%;
    height: 200%;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.color.primary.main};
    box-sizing: border-box;
  }

  @keyframes round-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes round-2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  .animate1 {
    animation: round-1 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .animate2 {
    animation: round-2 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => `${theme.color.general.gray3}7d`};
`

export const StyledLoaderLinear = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => `${theme.color.secondary.lightest}`};
  position: fixed;
  z-index: 10;

  .determinate {
    position: relative;
    max-width: 100%;
    height: 100%;
    width: ${({ width }) => width};
    -webkit-transition: width 500ms ease-out 1s;
    -moz-transition: width 500ms ease-out 1s;
    -o-transition: width 500ms ease-out 1s;
    transition: width 500ms ease-out 1s;
    background-color: ${({ theme }) => `${theme.color.secondary.light}`};
  }

  .indeterminate {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .indeterminate:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${({ theme }) => `${theme.color.secondary.light}`};
    animation: indeterminate_first 1.5s infinite ease-out;
  }

  .indeterminate:after {
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${({ theme }) => `${theme.color.secondary.lighter}`};
    animation: indeterminate_second 1.5s infinite ease-in;
  }

  @keyframes indeterminate_first {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }

  @keyframes indeterminate_second {
    0% {
      left: -150%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }
`
