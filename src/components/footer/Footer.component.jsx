// Styled
import styled from "styled-components";

// Icons
import enlom from "../../assets/icons/ENLOM.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-wrapper">
        <img className="logo-img" src={enlom} alt="logo" />
        <h4 className="footer-text">© 2025 Enlom</h4>
      </div>
      <div className="links-wrapper">
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="partners">Партнери</Link>
          </li>
          <li>
            <Link to="contacts">Контакти</Link>
          </li>
          <li>
            {" "}
            <button className="footer-btn">Зв'яжіться з нами</button>{" "}
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 60px;
  background-color: #a3a3a3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-img {
    max-width: 200px;
  }

  .footer-text {
    margin-top: 12px;
  }

  .links-wrapper {
    ul {
      display: flex;
      align-items: center;
    }
    .footer-btn {
      font-size: 20px;
      padding: 12px;
    }
  }
`;

export default Footer;
