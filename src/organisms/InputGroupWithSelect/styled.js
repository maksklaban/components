import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;

  .additionalSelect {
    min-width: 80px;
    .react-select__control {
      font-size: 14px;
      line-height: 19px;
    }
  }
  .inputWrapper {
    margin-top: 12px;
    padding: 0;
    border: none !important;
    input {
      border: 1px solid #e6e6e6;
    }
  }
  .inputWrapper:focus {
    border: none !important;
  }

  //.react-select__indicators {
  //  padding-right: 10px;
  //  padding-top: 2px;
  //
  //  .icon.search svg {
  //    width: 18px;
  //    height: 18px;
  //  }
  //}

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    .inputWrapper {
      margin-top: 0;
    }

    .searchInput.inputWrapper input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;

      .withBorder {
        border: 1px solid ${({ theme }) => theme.color.general.gray2};
      }
    }

    .additionalSelect {
      .react-select__control {
        border-right: none;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;

        &:hover {
          border-right: none;
        }
        &.react-select__control--menu-is-open {
          border-right: none !important;
        }
      }
    }
    .topAlign {
      align-items: flex-start;
    }
  }
`
