import styled from 'styled-components'
import ListItem from '../../atoms/ListItem'
import Icon from '../../atoms/Icon'

export const StyledMenu = styled.div`
  position: relative;
  margin-top: 9px;
  display: flex;
  flex-direction: column;

  &.combined {
    margin-top: 0;
    justify-self: flex-start;
    border: 1px solid ${({ theme }) => theme.color.general.light};
    height: fit-content;
    min-width: 170px;

    &.openToBottom {
      padding-top: 9px;
    }
    &.openToTop {
      padding-bottom: 9px;
    }

    > div {
      justify-content: unset;
      padding-left: 15px;
    }
    .icon.left {
      margin: 0;
    }
    .icon.right {
      margin: 0 10px;
    }

    .menuList {
      min-width: 170px;
      background-color: ${({ theme }) => theme.color.general.gray1};
      padding: 0 10px 0 30px;
      box-shadow: none;
      border-radius: 0;
      border: 1px solid ${({ theme }) => theme.color.general.light};
      border-bottom: none;
      bottom: 35px;
      left: -1px !important;
      width: -webkit-fill-available;
      span {
        color: ${({ theme }) => theme.color.general.gray4};
      }
      .menuItem.selected {
        span {
          color: ${({ theme }) => theme.color.general.dark};
        }
        .icon {
          display: none;
        }
      }
    }

    a {
      text-transform: none !important;
      margin-left: 16px;
    }
    .row {
      display: flex;
      align-items: center;
      width: fit-content;
      border-bottom: 1px solid transparent;
      img {
        margin-right: 7px;
      }
    }
    .row:hover {
      border-bottom: 1px solid ${({ theme }) => theme.color.general.gray4};
    }
  }

  &.openToBottom {
    .menuList {
      top: 35px;
      bottom: auto;
    }
  }
  &.openToTop {
    margin-top: -9px;
  }

  &.left {
    text-align: left;
    & .menuList {
      left: 0;
    }
  }

  &.right {
    text-align: right;
    align-items: flex-end;
    & .menuList {
      right: 0;
    }
  }

  &.center {
    text-align: center;
    align-items: center;
    //width: 100%;
    & > div {
      justify-content: center;
    }
    & .menuList {
      left: calc((100% - 160px) / 2);
      right: calc((100% - 160px) / 2);
    }
  }

  &.withGrid {
    & .menuList {
      left: 0;
      right: 0;
    }
  }
`

export const StyledLinkIcon = styled(Icon)`
  cursor: pointer;

  &.left {
    margin-right: 8px;
  }

  &.right {
    margin-left: 8px;
  }
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  .openToTop & {
    padding-top: 9px;
  }
`

export const StyledListWrapper = styled.div`
  padding-top: 9px;

  .openToTop & {
    padding: 0;

    .menuList {
      bottom: 100%;
    }
  }

  .openToRight & {
    .menuList {
      left: 100%;
    }
  }

  .menuList {
    display: none;
    z-index: 2;
    position: absolute;
    min-width: 160px;
    background-color: ${({ theme }) => theme.color.general.light};
    border: 1px solid ${({ theme }) => theme.color.general.gray2};

    &.opened {
      display: flex;
      flex-direction: column;
    }
  }
`

export const StyledMenuItem = styled(ListItem)`
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  &.clickable {
    cursor: pointer;
  }

  .checkIcon {
    margin-left: 10px;
  }
`
