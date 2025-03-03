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
        <button>
          <a href="mailto:enlombg@gmail.com">Зв'яжіться з нами</a>
        </button>
      </ul>
    </StyledLinks>
  );
};

const StyledLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    button {
      display: block;
      font-size: 24px;
      padding: 12px;
      margin: 25px 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #776355;
      backdrop-filter: blur(10px);
      li {
        margin: 25px 0;
        a {
          font-size: 32px;
        }
      }
    }
  }
`;

export default Links;
