import styled from 'styled-components'
import getTokens from '../../utils/getTokens'

export const StyledLabel = styled.div`
  ${({ type }) => getTokens(`label-standard-${type || 'bigger'}-large`)};
  text-transform: ${({ type }) => type === 'uppercase' && 'uppercase'};
  display: inline;
  color: ${({ color }) => color};
`
