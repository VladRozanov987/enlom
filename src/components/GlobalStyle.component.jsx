import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

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

  .d-flex-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  .d-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  ul {
    list-style-type: none;
    li {
      color: #ffffff;
      font-family: 'Rubik', serif;
      font-style: normal;
      line-height: 120%;
      padding: 8px;
    }
  }

  h1 {
    font-family: 'Rubik', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 65px;
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
    transition: all 0.4s;
    &:hover {
          color: #c9453b;
        }
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

  .mySwiper {
    min-height: calc(32vh + 120px);
}

  .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: var(--swiper-pagination-bottom, 0px);
    top: var(--swiper-pagination-top,auto);
    left: 0;
    width: 100%;
  }

  .swiper-wrapper{
  transition-timing-function : linear;
}
`;

export default GlobalStyle;
