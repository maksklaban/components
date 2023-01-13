import React from 'react'
import ReactTexty from 'react-texty'
import { withTheme } from 'styled-components'

import { StyledImage } from './styled'
import Typography from '../../atoms/Typography'

const ThumbWithText = ({ customTooltip, imageProps, src, text, textType = 'body2', theme: { size } }) => {
  return (
    <>
      {src && <StyledImage src={src} height={36} radius={size.border.radius.main} {...imageProps} />}
      <ReactTexty tooltip={customTooltip}>
        <Typography text={text} type={textType} />
      </ReactTexty>
    </>
  )
}

export default withTheme(ThumbWithText)
