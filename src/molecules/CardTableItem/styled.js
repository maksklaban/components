import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.color.general.gray2};
  border-radius: ${({ theme }) => theme.size.border.radius.bigger};
  margin: 20px 20px 0 0;
  cursor: pointer;
  height: calc(100% - 20px);
  //width: 100%;
  .image {
    background-position: right;
    flex-grow: 1;
    //margin-bottom: 10px;
    //margin-top: -5px;
  }

  &.editMode {
    border-color: ${({ theme }) => theme.color.primary.main};
    .checkbox {
      border-color: ${({ theme }) => theme.color.primary.main};
    }
  }
  &:hover:not(.editMode) {
    border-color: ${({ theme }) => theme.color.general.gray5};
    .checkbox {
      border-color: ${({ theme }) => theme.color.general.gray5};
    }
  }

  .checkbox {
    border-right: 1px solid ${({ theme }) => theme.color.general.gray2};
    padding: 12px;
    align-items: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: 13px 8px 0 8px;

    .checkbox {
      padding: 7px;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: flex-start;

  .stateIcon {
    margin-left: 10px;
  }
`;

export const StyledCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  min-width: 0;
  width: 100%;
  height: 100%;

  .leftImage {
    margin-right: 7px;
    min-width: 50px;
  }
  .brandLogo {
    min-width: 25px;
  }
`;

export const StyledDate = styled.span`
  div,
  span {
    display: inline;
  }
`;

export const StyledCardCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  white-space: nowrap;

  .date {
    div {
      display: inline;
    }
  }

  .row {
    margin-top: 5px;

    &:first-child {
      margin-top: 0;
    }

    .cards.orders &,
    .cards.invoices &,
    .cards.shipments & {
      span {
        display: flex;
      }
    }
  }

  &.left {
    flex-grow: 1;
  }

  &.right {
    min-width: auto;
    align-items: flex-end;
  }
`;
