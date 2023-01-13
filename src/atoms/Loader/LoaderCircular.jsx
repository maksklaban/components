import React from 'react'

import { StyledLoaderCircular, StyledOverlay } from './styled'

const LoaderCircular = ({ left, size, top, withOverlay }) => {
  const Loader = (
    <StyledLoaderCircular top={top} left={left} withOverlay={withOverlay} size={size} className="loader">
      <div className="loaderBg" />
      <div className="spinnerHolder animate1">
        <div className="loaderSpinner1" />
      </div>
      <div className="spinnerHolder animate2">
        <div className="loaderSpinner2" />
      </div>
    </StyledLoaderCircular>
  )

  return withOverlay ? <StyledOverlay>{Loader}</StyledOverlay> : Loader
}

export default LoaderCircular
