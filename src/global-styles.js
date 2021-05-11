import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ isDark }) => (isDark ? '#000' : '#fff')};
        color: #333333;
        color: ${({ isDark }) => (isDark ? '#333333' : '#000')};
        font-size: 16px;
        margin: 0;
        box-sizing: border-box;
  }
`
