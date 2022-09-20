import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing:0;
}

html {
  min-height: 100%;
}

body {
  height: 100%;
  background: url('./images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
}
`

export default GlobalStyles