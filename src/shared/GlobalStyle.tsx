import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    --color-black: #111111;
    --color-main: #FF9000;
    --color-gray: #7C7C7C;
    --color-dark-gray: #3E3E3E;
    --color-light-gray: #D9D9D9;
    --color-default: #F6F6F6;
    --color-likeWhite: #EBEBEB; 
    --color-c1-gray: #C1C1C1;
    --shadow-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }
body{
    margin: 0 auto;
    height: 100vh;
    font-family: 'NanumSquare';
    display: flex;
    align-items: center !important;
    justify-content: center;
    background-color: #d9d9d9;
}
input {
    text-indent: 1em;
}
input: focus{
    outline:none;
}
button {
    cursor: pointer;
    outline: none;
}
`;

export default GlobalStyle;
