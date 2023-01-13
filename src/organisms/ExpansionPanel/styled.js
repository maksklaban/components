import styled from 'styled-components'

export const StyledExpansionPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 32px;

  -webkit-tap-highlight-color: transparent;

  &.opened {
    margin-bottom: ${({ marginBottomWhenOpened }) => marginBottomWhenOpened};
  }

  .text {
    flex-grow: 1;
  }

  &.small {
    margin-bottom: 16px;
    &.opened {
      margin-bottom: 24px;
    }
    .panel.header {
      padding: 10px 20px;
    }
  }
`

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme: { size } }) => size.border.radius.main};

  .header {
    justify-content: space-between;
  }

  &:not(.opened) {
    .headerIcon {
      //margin-top: 2px;
      transform: rotate(0deg);
    }
  }

  &.opened {
    & .headerIcon {
      margin-bottom: 2px;
      transform: rotate(180deg);
    }
  }
`

export const StyledDetailsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 16px;
  flex-shrink: 0;

  & .detailsIcon {
    margin-left: 15px;
    min-width: 24px;
    border-radius: 50%;
    padding: 5px;
    flex: 0;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-left: 30px;
      min-width: 28px;
    }
  }
`
