import styled from 'styled-components'

export const StyledQuote = styled.div`
  text-align: ${({ align }) => align};

  & .quotesMark {
    height: 56px;
    line-height: 84px;
    font-size: 70px;
    font-weight: 900;
    color: ${({ theme, color }) => color || theme.color.secondary.main};
    font-family: ${({ theme }) => theme.font.family.primary};
  }

  & .mainText {
    margin-bottom: 18px;
  }
`
