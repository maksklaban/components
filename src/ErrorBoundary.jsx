import React from 'react'

import { Typography } from './index'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info, 'error')
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Typography
          variant="h3" //{this.props.size === 'small' ? 'body2' : 'h3'}
          text="Something went wrong"
          // margin="15px 50px"
        />
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
