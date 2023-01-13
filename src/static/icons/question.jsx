import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'

const StyledQuestionIcon = styled.div`
  width: 28px;
  height: 26px;
  position: absolute;
  bottom: 0;
  right: 100%;
  text-align: center;
  align-self: flex-end;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.general.gray1};
  border: ${({ theme }) => ` 1px solid ${theme.color.primary.lighter}`};
  margin-right: 20px;

  & span {
    line-height: 22px;
  }
`

const question = () => {
  return (
    <StyledQuestionIcon>
      <Typography type="caption1" component="span">
        ?
      </Typography>
    </StyledQuestionIcon>
  )
}
export default question
