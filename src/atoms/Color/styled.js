import styled from 'styled-components'

export const StyledColor = styled.div`
  border-radius: 50%;
  border: 1px solid
    ${({ theme, color, withBorder }) =>
      withBorder ||
      color === 'white' ||
      (color && (color.toLowerCase() === '#ffffff' || color.toLowerCase() === '#fff'))
        ? theme.color.general.gray3
        : 'transparent'};
  background-color: ${({ color }) => color};
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  display: inline-block;

  .image {
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }

  &.selected:not(.readOnly) {
    border-color: ${({ theme }) => theme.color.general.dark};
    box-shadow: 0 0 0 2px #fff inset, 0 0 0 2px #000 inset;

    &.withBgImage {
      .image {
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        margin: 2px 0 0 2px;
      }
    }
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
