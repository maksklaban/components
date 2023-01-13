import styled from 'styled-components'

import { convertHexToRGBA } from '../../utils/convertHexToRgba'
import { getProcessedUrl } from "../../utilsDataRelated/images";

export const StyledImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin || 0};

  img {
    max-width: ${({ maxWidth = '100%' }) => `${maxWidth}${typeof maxWidth === 'number' ? 'px' : ''}`};
    max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}${typeof maxHeight === 'number' ? 'px' : ''}`};
    object-fit: cover;
    border-radius: ${({ radius }) => `${radius || 0}${typeof radius === 'number' ? 'px' : ''}`};
    height: ${({ height }) => (height ? `${height}${typeof height === 'number' ? 'px' : ''}` : 'auto')};
    width: ${({ width }) => (width ? `${width}${typeof width === 'number' ? 'px' : ''}` : 'auto')};
  }
`

export const StyledActions = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  left: 0;
  transition: 0.5s ease-out;
  border-radius: ${({ radius }) => `${radius || 0}${typeof radius === 'number' ? 'px' : ''}`};
  padding: 5px;
  justify-content: flex-end;

  &.onHover {
    background-color: ${({ theme }) => convertHexToRGBA(theme.color.general.gray4, 0.4)};
    opacity: 0;
    height: inherit;
    align-items: center;
    justify-content: center;
  }

  .icon {
    cursor: pointer;
  }
`

export const StyledImageAsBackground = styled.div`
  background: url(${({ src, imagekitParams, disableImagekit }) =>
      disableImagekit ? src : getProcessedUrl(src, imagekitParams)})
    no-repeat center;
  height: ${({ height }) => (height ? `${height}${typeof height === 'number' ? 'px' : ''}` : 'auto')};
  width: ${({ width }) => (width ? `${width}${typeof width === 'number' ? 'px' : ''}` : 'auto')};
  background-size: ${({ backgroundSize }) => backgroundSize};
  border-radius: ${({ radius }) => `${radius || 0}${typeof radius === 'number' ? 'px' : ''}`};
  max-width: ${({ maxWidth }) => `${maxWidth}${typeof maxWidth === 'number' ? 'px' : ''}`};
  max-height: ${({ maxHeight }) => `${maxHeight}${typeof maxHeight === 'number' ? 'px' : ''}`};
  margin: ${({ margin }) => margin};
`

export const StyledImageWithActionsWrapper = styled.div`
  position: relative;
  border-radius: ${({ radius }) => `${radius || 0}${typeof radius === 'number' ? 'px' : ''}`};

  &:hover ${StyledActions} {
    opacity: 1;
  }
`
