// Styled
import styled from "styled-components";

// Router
import { Link } from "react-router-dom";

const Links = (props) => {
  return (
    <StyledLinks>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="/">Головна</Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="partners">Партнери</Link>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <Link to="contacts">Контакти</Link>
        </li>
      </ul>
      <button>Зв'яжіться з нами</button>
    </StyledLinks>
  );
};

const StyledLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    button {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 118px;
      left: 0;
      width: 100%;
      height: calc(100vh - 100px);
      background-color: black; /* Затемнение */
      backdrop-filter: blur(10px); /* Размытие */
      li {
        margin: 30px 0;
        a {
          font-size: 32px;
        }
      }
    }
  }
`;

export default Links;
