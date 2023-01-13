import styled from 'styled-components'

export const StyledHeaderMenuIcon = styled.div`
  cursor: pointer;
  & span {
    transform: none;
    transition: all 0.25s ease-in-out;
  }
  & .clicked {
    & span:nth-child(2) {
      opacity: 0;
    }
    & span:first-child {
      transform: translateY(calc(100% + 4px)) rotate(45deg);
    }
    & span:last-child {
      transform: translateY(calc(-100% - 4px)) rotate(-45deg);
    }
  }
`
