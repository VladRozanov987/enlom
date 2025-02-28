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
      top: 100px;
      left: 0;
      width: 100%;
      height: calc(100vh - 100px);
      background-color: rgba(0, 0, 0, 1);
      border-top: 1px solid #c9453b;
      li {
        margin: 30px 0;
      }
    }
  }
`;

export default Links;
