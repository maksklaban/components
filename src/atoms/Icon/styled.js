import styled from 'styled-components'

export const IconWrapper = styled.div`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || 'auto')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  background-color: ${({ wrapperColor }) => wrapperColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ onClick }) => !!onClick && 'pointer'};

  &&.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
