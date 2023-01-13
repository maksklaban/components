import styled from 'styled-components'

export const StyledVideoPlayer = styled.div`
  height: 75vh;

  &.withIframe {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
  }

  &.withReactPlayer {
    & > div {
      overflow: hidden;
      max-width: 100%;
    }

    & > div > div {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      width: 300% !important;
      left: -100%;
    }
  }

  & iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .withReactPlayer & {
      height: 100%;
    }
  }
`
