import styled from 'styled-components'

export const StyledComment = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
`

export const StyledTextSection = styled.div`
  flex: 1;
  margin-left: 10px;

  &.deleted {
    .commentText {
      text-decoration: line-through;
      color: ${({ theme }) => theme.color.general.gray4};
    }

    .deletedDate {
      display: block;
      text-align: right;
    }
  }
`

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;

  .tag {
    margin-left: 7px;
  }

  .dateDot {
    margin: 0 7px;
    color: ${({ theme }) => theme.color.general.gray5};
  }
`
