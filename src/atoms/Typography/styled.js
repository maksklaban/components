import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledTypography = styled.span`
  ${({ type }) => getTokens(`typography-${type}-black-small`)};
  color: ${({ color }) => color};
  text-align: ${({ $textAlign }) => $textAlign};
  text-decoration: ${({ $textDecoration }) => $textDecoration};
  text-transform: ${({ $textTransform }) => $textTransform};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ $lineHeight }) => $lineHeight};
  margin-block-start: 0;
  margin-block-end: 0;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${({ type }) => getTokens(`typography-${type}-black-medium`)};
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ $lineHeight }) => $lineHeight};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ type }) => getTokens(`typography-${type}-black-large`)};
    color: ${({ color }) => color};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ $lineHeight }) => $lineHeight};
  }
`
