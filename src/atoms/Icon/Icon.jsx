import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import Icons from '../../static/icons'
import { IconWrapper } from './styled'
import Image from '../Image'

const Icon = ({
  backgroundImage,
  backgroundSize,
  borderRadius,
  className,
  dataTooltip,
  disabled,
  disableImagekit,
  fill,
  height,
  imagekitParams,
  name,
  onClick,
  size,
  style,
  title,
  theme,
  width,
  wrapperColor,
  wrapperComponent,
  wrapperHeight,
  wrapperWidth,
  ...otherProps
}) => {
  const iconName = typeof name === 'string' ? name : name?.id || name?.slug
  const IconComponent = Icons[iconName]

  if (!backgroundImage && !IconComponent) return null

  return (
    <IconWrapper
      data-tooltip={dataTooltip}
      title={title}
      width={wrapperWidth}
      height={wrapperHeight}
      size={size}
      className={clsx(className, 'icon', disabled && 'disabled', backgroundImage && 'withBgImage')}
      onClick={disabled ? undefined : onClick}
      wrapperColor={wrapperColor}
      borderRadius={borderRadius}
      style={style}
      as={wrapperComponent}
    >
      {backgroundImage ? (
        <Image
          width={width}
          height={height}
          asBackground
          src={backgroundImage}
          radius={borderRadius}
          backgroundSize={backgroundSize}
          imagekitParams={imagekitParams}
          disableImagekit={disableImagekit}
        />
      ) : (
        <IconComponent
          width={width}
          height={height}
          fill={fill}
          wrapperColor={wrapperColor}
          theme={theme}
          {...otherProps}
        />
      )}
    </IconWrapper>
  )
}

export default withTheme(Icon)

Icon.propTypes = {
  borderRadius: T.string,
  className: T.string,
  fill: T.string,
  height: T.number,
  name: T.oneOfType([T.object, T.string]).isRequired,
  onClick: T.func,
  title: T.string,
  width: T.number,
  wrapperColor: T.string,
  wrapperHeight: T.oneOfType([T.number, T.string]),
  wrapperWidth: T.oneOfType([T.number, T.string]),
}

Icon.defaultProps = {
  fill: '',
  name: '',
}
