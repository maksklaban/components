import React from 'react'

import { StyledLoaderLinear, StyledOverlay } from './styled'

const LoaderLinear = ({ size, top, width, withOverlay }) => {
  const Loader = (
    <StyledLoaderLinear top={top} withOverlay={withOverlay} width={width} size={size} className="loader">
      <div className={width ? 'determinate' : 'indeterminate'} />
    </StyledLoaderLinear>
  )

  return withOverlay ? <StyledOverlay>{Loader}</StyledOverlay> : Loader
}

export default LoaderLinear
