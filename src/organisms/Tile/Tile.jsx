import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'

import Button from '../../molecules/Button'
import Image from '../../atoms/Image'
import Typography from '../../atoms/Typography'
import { StyledDescriptionWrapper, StyledTile } from './styled'
import { TEXT_ALIGN_TYPES } from '../../types'
import capitalize from '../../utils/capitalize'
import UiLink from '../../atoms/UiLink'

const Tile = ({
  actionIcons,
  children,
  className,
  description,
  height,
  imageHeight,
  imageAlt,
  imageSrc,
  imageType,
  imageWidth,
  onClick,
  textAlign,
  title,
  titleType,
  descriptionType,
  width,
  withButton,
  buttonProps: {
    variant: buttonVariant,
    content: buttonContent,
    onClick: onButtonClick,
    ...otherButtonProps
  },
  Link,
  href,
  as,
  target,
  descriptionProps,
  titleProps,
  ...otherProps
}) => {
  const imageWithTitle = (
    <>
      <Image
        alt={imageAlt || typeof title === 'string' ? title : ''}
        src={imageSrc}
        type={imageType}
        width={imageWidth}
        height={imageHeight}
        actionIcons={actionIcons}
        {...otherProps}
      />
      <Typography className="title" text={title || '|'} {...titleProps} />
    </>
  )

  const LinkComponent = Link || UiLink
  return (
    <StyledTile
      textAlign={textAlign}
      width={width}
      height={height}
      className={clsx(className, 'tile', actionIcons && 'withActions', !title && 'emptyTitle')}
    >
      {href ? (
        <LinkComponent
          as={as}
          href={href}
          target={target}
          rel={target && 'noopener noreferrer'}
          onClick={onClick}
          className={clsx(onClick && 'clickable')}
          noStyles
        >
          {imageWithTitle}
        </LinkComponent>
      ) : (
        <div>{imageWithTitle}</div>
      )}
      <StyledDescriptionWrapper className={`with${capitalize(buttonVariant)}Button`}>
        {typeof description === 'string' ? (
          <Typography className="description" {...descriptionProps}>
            {description}
          </Typography>
        ) : (
          description
        )}
        {withButton && (
          <Button
            withIcon={buttonVariant === 'icon'}
            fullWidth={buttonVariant === 'fullWidth'}
            onClick={(e) => onButtonClick(e)}
            variant="bordered"
            {...otherButtonProps}
          >
            {buttonContent}
          </Button>
        )}
      </StyledDescriptionWrapper>
      {children}
    </StyledTile>
  )
}

Tile.propTypes = {
  buttonProps: T.shape({
    content: T.oneOfType([T.string, T.element]),
    variant: T.oneOf(['icon', 'fullWidth']),
    onClick: T.func,
  }),
  descriptionProps: T.shape({ type: T.oneOf(['caption1', 'body1']) }),
  imageSrc: T.string,
  imageType: T.string,
  onClick: T.func,
  textAlign: T.oneOf(TEXT_ALIGN_TYPES),
  title: T.oneOfType([T.string, T.element]),
  titleProps: T.object,
  width: T.oneOfType([T.number, T.string]),
  withButton: T.bool,
}

Tile.defaultProps = {
  buttonProps: { variant: '' },
  descriptionProps: { type: 'body1' },
  imageSrc: '',
  textAlign: 'left',
  titleProps: { type: 'caption1' },
  withButton: false,
}

export default Tile
