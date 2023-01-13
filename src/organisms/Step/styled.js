import styled from 'styled-components'

export const StyledStepWrapper = styled.div`
  display: inline-flex;
  border-radius: ${({ theme: { size } }) => size.border.radius.main};
  width: 100%;

  header & {
    margin-top: 5px;
  }

  .panel {
    padding: 15px;
    position: relative;
    background-color: ${({ theme: { color } }) => color.general.light};

    .icon {
      flex: 0 0 auto;
      margin-right: 12px;
    }

    .content {
      color: ${({ theme: { color } }) => color.general.gray6};
    }
  }

  &.separate {
    .panel {
      flex: 1 1 0;
      margin: 0 10px 0 10px;
      border: 1px solid
        ${({ theme, color }) => (color === 'gray' ? theme.color.general.gray2 : theme.color.status[color])};

      &:last-child {
        margin-right: 0;
      }

      &:first-child {
        margin-left: 0;
      }

      &.active {
        border-width: 2px;
        border-color: ${({ theme, color }) => color === 'gray' && theme.color.primary.main};
      }
    }
  }

  &.linked {
    border: 1px solid ${({ theme }) => theme.color.general.gray2};

    .panel {
      border: none;
      border-radius: 0;
      border-right: 1px solid
        ${({ theme, color }) => (color === 'gray' ? theme.color.general.gray2 : theme.color.status[color])};

      &.active {
        background-color: ${({ theme: { color } }) => color.general.gray2};

        &:after {
          background-color: ${({ theme: { color } }) => color.general.gray2};
        }
      }

      &:first-of-type {
        border-top-left-radius: ${({ theme: { size } }) => size.border.radius.main};
        border-bottom-left-radius: ${({ theme: { size } }) => size.border.radius.main};
      }

      &:last-of-type {
        border-right: none;
        border-top-right-radius: ${({ theme: { size } }) => size.border.radius.main};
        border-bottom-right-radius: ${({ theme: { size } }) => size.border.radius.main};
        &:after {
          display: none;
        }
      }

      &:after {
        position: absolute;
        z-index: 1;
        content: '';
        top: 50%;
        right: -1px;
        background-color: ${({ theme: { color } }) => color.general.light};
        width: 12px;
        height: 12px;
        border-style: solid;
        border-color: ${({ theme, color }) =>
          color === 'gray' ? theme.color.general.gray2 : theme.color.status[color]};
        border-width: 0 1px 1px 0;
        transform: translateY(-50%) translateX(50%) rotate(-45deg);
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      justify-content: center;
      .title {
        //display: none;
      }
      .icon {
        margin-right: 0;
      }
    }
  }
`
