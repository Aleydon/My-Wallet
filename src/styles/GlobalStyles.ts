import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button, a, li {
    cursor: pointer;
  }
`;
