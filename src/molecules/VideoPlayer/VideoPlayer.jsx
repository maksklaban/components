import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import { StyledVideoPlayer } from './styled'

const VideoPlayer = ({
  autoplay,
  className,
  config,
  controls,
  loop,
  muted,
  previewImage,
  style,
  url,
  width,
}) => {
  const isJwPlayerVideo = url.includes('jwplayer') || url.includes('jwplatform')

  return (
    <StyledVideoPlayer width={width} className={isJwPlayerVideo ? 'withIframe' : 'withReactPlayer'}>
      {isJwPlayerVideo && (
        <video loop={loop} controls={controls} poster={previewImage}>
          <source src={url} />
        </video>
      )}
      {!isJwPlayerVideo && (
        <ReactPlayer
          config={config}
          controls={controls}
          height="100%"
          width="100%"
          loop={loop}
          muted={muted}
          // playing={autoplay}
          url={url}
          volume={null}
          className={className}
          style={style}
        />
      )}
    </StyledVideoPlayer>
  )
}

VideoPlayer.propTypes = {
  autoplay: PropTypes.bool,
  controls: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  url: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

VideoPlayer.defaultProps = {
  autoplay: false,
  controls: true,
  height: 'auto',
  loop: false,
  muted: true,
  url: '',
  width: 'auto',
}

export default VideoPlayer
