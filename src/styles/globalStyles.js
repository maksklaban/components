import { createGlobalStyle } from 'styled-components'

const CommonGlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0; 
    text-rendering: optimizeLegibility !important;
  }
  
  a {
    text-decoration: none;
  }
  
  main {
    //overflow-x: hidden;
  }
  
  .react-multi-carousel-dot button {
    border: none;
  }

  .react-multi-carousel-dot--active button {
    background: ${({ theme }) => theme.color.primary.light};
  }
  
  .react-multiple-carousel__arrow {
    z-index: 1;
  }
`

export default CommonGlobalStyle
