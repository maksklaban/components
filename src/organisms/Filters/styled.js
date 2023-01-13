import styled from 'styled-components'
import Checkbox from '../../molecules/Checkbox'

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  box-sizing: content-box;

  &.notInDrawer {
    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      //margin-top: -70px;
      padding: 0;
    }
  }

  .tagsStickyWrapper {
    position: sticky;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.general.light};
    order: ${({ chosenTopPlaced }) => (chosenTopPlaced ? -1 : 10000)};
    // margin-bottom: ${({ chosenTopPlaced }) => (chosenTopPlaced ? 24 : 0)}px;
    // margin-top: ${({ chosenTopPlaced }) => (chosenTopPlaced ? 0 : 24)}px;
  }
`

export const StyledFilter = styled.div`
  margin-top: 16px;
`

export const StyledFiltersTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  order: -2;
`

export const StyledPriceWrapper = styled.div`
  padding: 5px 15px 5px 10px;

  .priceSlider {
    margin-bottom: 19px;
    margin-top: 16px;
  }
`

export const StyledLonelyCheckbox = styled(Checkbox)`
  order: ${({ order }) => order};
  span {
    font-size: 17px;
    line-height: 26px;
  }
`

export const StyledCheckboxList = styled.div`
  .checkbox {
    margin-top: 3px;
  }
`
