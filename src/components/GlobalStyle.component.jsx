import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --yellow: #ffff00;
    --blue: #88c3fb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    padding: 0 25px;
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
  }

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  ul {
    list-style-type: none;
    li {
      color: #ffffff;
      font-family: 'Rubik', serif;
      font-style: normal;
      line-height: 120%;
    }
  }

  h1 {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;
    color: #ffffff;
  }

  h2 {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 43px;
    line-height: 140%;
  }

  h3 {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: #ffffff;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
    position: relative;
    transition: color 0.4s;
}

  p {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #FFFFFF;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    background: #C9453B;
    border-radius: 5px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    transition: all 0.4s ease-in-out;
    &:hover {
      -webkit-box-shadow: 9px 13px 56px -8px rgba(255, 0, 0, 1);
      -moz-box-shadow: 9px 13px 56px -8px rgba(255, 0, 0, 1);
      box-shadow: 9px 13px 56px -8px rgba(255, 0, 0, 1);
    }
  }

  @media screen and (max-width: 1100px) {
    .container {
      padding: 0;
    }
  }
`;

export default GlobalStyle;
