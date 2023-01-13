import styled from 'styled-components'

export const StyledTagsPanel = styled.div`
  padding: 5px 10px 10px 10px;
  background-color: ${({ theme: { color }, panelColorKey }) => color.general[panelColorKey]};
  border-radius: ${({ theme: { size } }) => size.border.radius.main};

  .tag {
    margin-right: 10px;
    margin-top: 10px;
  }

  button {
    margin-top: 15px;
    margin-right: 10px;
  }
`
