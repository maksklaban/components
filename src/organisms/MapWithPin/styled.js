import styled from 'styled-components'

import { convertHexToRGBA } from '../../utils/convertHexToRgba'

export const StyledMapWithPin = styled.div`
  position: relative;
`

export const StyledIconWrapper = styled.div`
  position: absolute;
  top: ${({ iconPosition }) => iconPosition.top || 'auto'};
  bottom: ${({ iconPosition }) => iconPosition.bottom || 'auto'};
  left: ${({ iconPosition }) => iconPosition.left || 'auto'};
  right: ${({ iconPosition }) => iconPosition.right || 'auto'};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledWhiteCircle = styled.div`
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.general.light};
  margin-bottom: 6px;
  box-sizing: border-box;
  border: ${({ theme }) => `2px solid ${theme.color.general.gray1}`};

  & img {
    width: 72%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 64px;
    height: 64px;
    & img {
      width: auto;
      max-width: 55px;
    }
  }
`

export const StyledColoredCircle = styled.div`
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary.lighter};
  /* border: ${({ theme }) => `2px solid ${convertHexToRGBA(theme.color.secondary.dark, 0.5)}`}; */
`
