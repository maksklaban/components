import styled from 'styled-components'

export const StyledTile = styled.div`
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : 'auto')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : '100%')};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    width: 100%;
  }

  .clickable {
    cursor: pointer;
  }

  &.withActions {
    &:hover .imageActions {
      opacity: 1;
    }
  }

  &.emptyTitle {
    .title {
      opacity: ${({ text }) => (text ? 1 : 0)};
    }
  }

  .title {
    display: block;
    margin-top: 20px;
    text-align: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    .title {
      text-align: ${({ textAlign }) => textAlign};
    }
  }
`

export const StyledDescriptionWrapper = styled.div`
  margin: 6px 0;

  &.withIconButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description {
    display: block;
  }

  &.withFullWidthButton button {
    margin-top: 12px;
  }
`
