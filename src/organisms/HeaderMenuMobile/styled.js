import styled from 'styled-components'
import HeaderStyledWrapper from '../../molecules/HeaderStyledWrapper'

export const StyledHeaderMenuMobile = styled(HeaderStyledWrapper)`
  height: ${({ theme }) => theme.size.height.header.mobile};
  position: relative;
  width: 100%;
  padding: 0 7px 0 20px;
  z-index: 5;

  &.fixed ~ div,
  &.fixed ~ form,
  &.fixed ~ section {
    margin-top: ${({ theme }) => theme.size.height.header.mobile};
  }

  .headerLogo {
    height: 100%;
    margin-top: 2px;
    margin-right: 16px;
  }

  .basketBadge {
    margin: 0 20px;
  }

  .searchIcon {
    padding-top: 2px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    .searchIcon {
      display: none;
    }
  }
`

export const StyledMenu = styled.div`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background-color: ${({ theme, menuBackgroundColor }) => menuBackgroundColor || theme.color.general.light};
  padding-top: 4vh;
  padding-bottom: 6vh;
  box-shadow: 0 10px 16px -4px rgba(212, 214, 224, 0.2);
  z-index: 2;

  &.search {
    padding-top: 4px;
    padding-bottom: 0;

    .mobileSearchSelect {
      margin: 0 20px;
    }

    &.opened {
      display: block;
    }
  }

  &.opened {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -1px;
  }

  & > * {
    margin-top: 40px;
  }
  & > *:first-child {
    margin-top: 0;
  }
`
