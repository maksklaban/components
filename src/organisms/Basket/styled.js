import styled from 'styled-components'

import Icon from '../../atoms/Icon'
import { Image } from '../../index'

export const StyledFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &.name {
    align-items: center;
  }

  .icon {
    cursor: pointer;
  }

  &.itemPreview {
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: flex-start;

    .quantity {
      margin-left: auto;
      padding-left: 15px;
      white-space: nowrap;
      padding-top: 3px;
    }
  }

  .tag {
    .icon {
      cursor: default;
    }
  }

  .deleteIcon {
    margin-left: 10px;
  }

  &.priceQty {
    align-items: flex-end;
    margin-top: 5px;

    .price {
      font-weight: 600;
      line-height: 16px;
    }

    .color {
      display: block;
      margin-left: 5px;
    }

    .tag {
      display: inline-block;
    }
  }
`

export const StyledItemRow = styled.div`
  display: block;
  width: 100%;

  &:not(.isPreview) {
    .tag {
      margin-right: 10px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    &.isPreview {
      flex-direction: column;
      align-items: flex-start;

      .tag {
        margin-left: 7px;
      }

      & .name {
        width: 100%;

        .typography {
          display: flex;
        }

        & span {
          margin-right: 5px;
        }
      }
    }
  }
`

export const StyledRowWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.general.gray2};
  padding: 16px 0;

  & .removeLink {
    padding-bottom: 10px;
  }
`

export const StyledEmptyBasketIcon = styled(Icon)`
  margin-top: 200px;
  margin-bottom: 20px;
`

export const StyledItemImage = styled(Image)`
  width: 50px;
  margin-right: 16px;
`
