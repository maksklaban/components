import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${({ theme: { color } }) => color.general.light};
  border: 1px solid ${({ theme: { color } }) => color.general.gray2};
  border-radius: ${({ theme: { size } }) => size.border.radius.main};
  height: 405px;
  padding: 20px;
  //max-width: 320px;

  .cardTitle {
    margin-bottom: 5px;
  }

  a {
    margin-top: 15px;
  }

  .singleBigImg {
    background-size: cover;
  }

  .link.noStyles {
    display: block;
  }
`

export const StyledTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledTile = styled.div`
  cursor: pointer;
  // background-color: ${({ theme: { color } }) => color.general.gray1};
  border: 1px solid ${({ theme: { color } }) => color.general.light};
  width: 49%;
  //height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .image {
    margin: 10px auto 0;
  }
  .typography {
    margin: 10px 10px 0;
  }
  .link {
    display: block;
  }
`
