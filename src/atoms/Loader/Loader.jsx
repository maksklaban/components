import React from 'react'
import { PropTypes as T } from 'prop-types'

import LoaderCircular from './LoaderCircular'
import LoaderLinear from './LoaderLinear'

const Loader = ({ variant, ...rest }) => {
  if (variant === 'circular') {
    return <LoaderCircular {...rest} />
  }
  return <LoaderLinear {...rest} />
}

export default Loader

Loader.propTypes = {
  variant: T.oneOfType(['circular', 'linear']),
}

Loader.defaultProps = {
  variant: 'circular',
}
