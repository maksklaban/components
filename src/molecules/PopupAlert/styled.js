import styled from 'styled-components'

import getTokens from '../../utils/getTokens'

export const StyledPopupAlert = styled.div`
  ${getTokens(`popupAlert-standard-default-large`)};
  padding: 21px 21px 21px 24px;
  background-color: ${({ splitThemeColor, theme: { color } }) =>
    color[splitThemeColor[0]][splitThemeColor[1]]};
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  transition: all 0.2s;
  white-space: pre-line;

  &.top {
    margin: 15px auto 0;
  }

  &.bottom {
    margin: 0 auto 15px;
  }

  .icon {
    cursor: pointer;
    padding-left: 25px;
  }
`
