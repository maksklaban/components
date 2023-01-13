import React from 'react'
import { withTheme } from 'styled-components'

import { StyledCard, StyledTile, StyledTiles } from './styled'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'

const Card = ({ imagekitParams, link, tiles, title, src, withFourTiles }) => {
  const getSmallTileImage = (tile) => {
    return (
      <Image height={115} width={115} src={tile.img} className="image" imagekitParams={tile.imagekitParams} />
    )
  }

  const getBigTileImage = () => (
    <Image src={src} className="singleBigImg" height={270} asBackground imagekitParams={imagekitParams} />
  )
  return (
    <StyledCard>
      <Typography type="caption1" text={title} className="cardTitle" />
      {withFourTiles ? (
        <StyledTiles>
          {tiles.map((tile, i) => (
            <StyledTile key={i} onClick={tile.onClick} className="smallTile">
              {tile.Link ? (
                <tile.Link {...(tile.linkProps || {})}>{getSmallTileImage(tile)}</tile.Link>
              ) : (
                getSmallTileImage(tile)
              )}
              <Typography type="body2" text={tile.title} textAlign="center" component="div" />
            </StyledTile>
          ))}
        </StyledTiles>
      ) : link?.Link ? (
        <link.Link {...(link.props || {})} noStyles>
          {getBigTileImage()}
        </link.Link>
      ) : (
        getBigTileImage()
      )}
      {link?.text && link?.Link && <link.Link {...(link.props || {})}>{link.text}</link.Link>}
    </StyledCard>
  )
}

export default withTheme(Card)
