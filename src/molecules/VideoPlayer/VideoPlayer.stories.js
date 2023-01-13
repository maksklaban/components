import React from 'react'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'

import VideoPlayer from './VideoPlayer'

export default {
  title: 'Molecules/Video Player',
  component: VideoPlayer,
}

export const videoPlayer = () => (
  <VideoPlayer
    autoplay={boolean('Autoplay', false)}
    controls={boolean('Display controls', false)}
    height={number('Height', 480)}
    loop={boolean('Loop Video', false)}
    muted={boolean('Muted', true)}
    url={text('URL', 'https://www.facebook.com/100006891847728/videos/2261381167434923/')}
    volume={1}
    width={number('Width', 640)}
  />
)

videoPlayer.story = {
  decorators: [withKnobs],
}
