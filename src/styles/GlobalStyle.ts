import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;600;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    height: 100vh;
  }
`
